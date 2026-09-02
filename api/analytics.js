const COUNTER_BASE = "https://countapi.mileshilliard.com/api/v1";
const COUNTER_PREFIX = "thinkbig-ggic-krs-20260902";
const VISIT_OFFSET = 9;

const counterKeys = {
  visit: `${COUNTER_PREFIX}-visits`,
  calculator: `${COUNTER_PREFIX}-calculator`,
  consulting: `${COUNTER_PREFIX}-consulting`,
  book: `${COUNTER_PREFIX}-book`,
};

async function readCounter(key) {
  const response = await fetch(`${COUNTER_BASE}/get/${encodeURIComponent(key)}`);
  if (response.status === 404) return 0;
  if (!response.ok) throw new Error(`counter read failed: ${response.status}`);
  const data = await response.json();
  return Number(data.value || 0);
}

async function increaseCounter(key) {
  const response = await fetch(`${COUNTER_BASE}/hit/${encodeURIComponent(key)}`);
  if (!response.ok) throw new Error(`counter update failed: ${response.status}`);
  const data = await response.json();
  return Number(data.value || 0);
}

export default async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  try {
    if (req.method === "POST") {
      const event = req.body?.event;
      const key = counterKeys[event];
      if (!key) return res.status(400).json({ error: "invalid event" });

      const value = await increaseCounter(key);
      return res.status(200).json({ ok: true, value });
    }

    if (req.method === "GET") {
      const [visits, calculator, consulting, book] = await Promise.all([
        readCounter(counterKeys.visit),
        readCounter(counterKeys.calculator),
        readCounter(counterKeys.consulting),
        readCounter(counterKeys.book),
      ]);

      return res.status(200).json({
        today: { visits: 0 },
        total: {
          visits: visits + VISIT_OFFSET,
          calculator_clicks: calculator,
          consulting_clicks: consulting,
          book_clicks: book,
        },
      });
    }

    res.setHeader("Allow", "GET, POST");
    return res.status(405).json({ error: "method not allowed" });
  } catch (error) {
    return res.status(503).json({ error: "counter temporarily unavailable" });
  }
}
