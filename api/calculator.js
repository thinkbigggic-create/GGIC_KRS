// KRS 맞춤 학습 제안 계산기 - 서버 전용 계산 로직
// 이 파일은 브라우저로 내려가지 않고 Vercel Function에서 실행됩니다.

const products = [
  {
    "id": "krs1",
    "code": "3387",
    "name": "KRS 1개월형",
    "family": "KRS 신규",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 47000,
    "isKrs": true,
    "note": "다른 계약번호 보유 시 4,000원 할인",
    "displayNote": "다른 계약번호 보유 시 4,000원 할인"
  },
  {
    "id": "krs12",
    "code": "3388",
    "name": "KRS 12개월형",
    "family": "KRS 신규",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 44000,
    "isKrs": true,
    "note": "다른 계약번호 보유 시 4,000원 할인",
    "displayNote": "다른 계약번호 보유 시 4,000원 할인"
  },
  {
    "id": "krsHome",
    "code": "3389",
    "name": "KRS 대면관리",
    "family": "KRS 관리",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 39000,
    "note": "KRS 과목 보유 시 입회 가능",
    "displayNote": "KRS 과목 보유 시 입회 가능"
  },
  {
    "id": "krsVideo",
    "code": "3390",
    "name": "KRS 화상관리",
    "family": "KRS 관리",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 39000,
    "note": "KRS 과목 및 패드 계약번호 보유 시 입회 가능",
    "displayNote": "KRS 과목 및 패드 계약번호 보유 시 입회 가능"
  },
  {
    "id": "p1481",
    "code": "1481",
    "name": "스마트올(기본14M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 129000,
    "smartVisit": false,
    "note": "2020.11.16 출시",
    "displayNote": ""
  },
  {
    "id": "p1480",
    "code": "1480",
    "name": "스마트올(기본26M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 99000,
    "smartVisit": false,
    "note": "2020.11.16 출시",
    "displayNote": ""
  },
  {
    "id": "p3182",
    "code": "3182",
    "name": "스마트올(기본38M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 79000,
    "smartVisit": false,
    "note": "2023.06.07 출시",
    "displayNote": ""
  },
  {
    "id": "p1786",
    "code": "1786",
    "name": "스마트올(콘텐츠12M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 109000,
    "smartVisit": false,
    "note": "2019.11.01 출시 / 메인멤버십으로만 가능함 / W패드,G1패드,S530패드 이상 가능",
    "displayNote": "메인멤버십으로만 가능함 / W패드,G1패드,S530패드 이상 가능"
  },
  {
    "id": "p1785",
    "code": "1785",
    "name": "스마트올(콘텐츠24M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 89000,
    "smartVisit": false,
    "note": "2019.11.01 출시 / 메인멤버십으로만 가능함 / W패드,G1패드,S530패드 이상 가능",
    "displayNote": "메인멤버십으로만 가능함 / W패드,G1패드,S530패드 이상 가능"
  },
  {
    "id": "p1880",
    "code": "1880",
    "name": "스마트올중학내신관",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 79000,
    "smartVisit": false,
    "note": "2020.12.14 출시 / 학기교재(별매) /  패드 (패드결합형 모델에 한함)",
    "displayNote": "학기교재(별매) / 패드 (패드결합형 모델에 한함)"
  },
  {
    "id": "p1883",
    "code": "1883",
    "name": "스마트올중학대치관(기본12M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 129000,
    "smartVisit": false,
    "note": "2020.12.17 출시 /  바로셈 또는 바로독해 결합 시 5,000원 할인 적용",
    "displayNote": "바로셈 또는 바로독해 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1882",
    "code": "1882",
    "name": "스마트올중학대치관(기본24M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 99000,
    "smartVisit": false,
    "note": "2020.12.17 출시 /  바로셈 또는 바로독해 결합 시 5,000원 할인 적용",
    "displayNote": "바로셈 또는 바로독해 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1885",
    "code": "1885",
    "name": "스마트올중학대치관(콘텐츠12M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 109000,
    "smartVisit": false,
    "note": "2020.12.17 출시 /  바로셈 또는 바로독해 결합 시 5,000원 할인 적용",
    "displayNote": "바로셈 또는 바로독해 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1884",
    "code": "1884",
    "name": "스마트올중학대치관(콘텐츠24M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 89000,
    "smartVisit": false,
    "note": "2020.12.17 출시 /  바로셈 또는 바로독해 결합 시 5,000원 할인 적용",
    "displayNote": "바로셈 또는 바로독해 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3034",
    "code": "3034",
    "name": "스마트올중학대치관_iPad(기본12M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 151000,
    "smartVisit": false,
    "note": "2022.08.22 출시",
    "displayNote": ""
  },
  {
    "id": "p3033",
    "code": "3033",
    "name": "스마트올중학대치관_iPad(기본24M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 110000,
    "smartVisit": false,
    "note": "2022.08.22 출시",
    "displayNote": ""
  },
  {
    "id": "p1872",
    "code": "1872",
    "name": "판)창의아트깨치기",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 222000,
    "smartVisit": false,
    "note": "2021.03.15 출시",
    "displayNote": ""
  },
  {
    "id": "p3345",
    "code": "3345",
    "name": "책다른 구독",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 49000,
    "smartVisit": false,
    "note": "2024.08.19 출시",
    "displayNote": ""
  },
  {
    "id": "p3342",
    "code": "3342",
    "name": "링고시티(1M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2024.08.19 출시",
    "displayNote": ""
  },
  {
    "id": "p3343",
    "code": "3343",
    "name": "링고시티(6M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 33000,
    "smartVisit": false,
    "note": "2024.08.19 출시",
    "displayNote": ""
  },
  {
    "id": "p3344",
    "code": "3344",
    "name": "링고시티(12M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 31500,
    "smartVisit": false,
    "note": "2024.08.19 출시",
    "displayNote": ""
  },
  {
    "id": "p3347",
    "code": "3347",
    "name": "스마트올Pick(기본26M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 79000,
    "smartVisit": false,
    "note": "2025.04.07 출시",
    "displayNote": ""
  },
  {
    "id": "p3348",
    "code": "3348",
    "name": "스마트올Pick(콘텐츠24M)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 69000,
    "smartVisit": false,
    "note": "2025.04.07 출시",
    "displayNote": ""
  },
  {
    "id": "p3353",
    "code": "3353",
    "name": "판)스마트올(프리드48)",
    "family": "공통",
    "section": "메인",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 66000,
    "smartVisit": false,
    "note": "2025.10.02 출시",
    "displayNote": ""
  },
  {
    "id": "p1112",
    "code": "1112",
    "name": "(신)한글깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 47000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1434",
    "code": "1434",
    "name": "AI바로셈",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2021.09.01 출시 /  스마트올/스마트수학/서술형수학/ 수학 결합 시  5,000원 할인 적용",
    "displayNote": "스마트올 / 스마트수학 / 서술형수학 / 수학 결합 시  5,000원 할인 적용"
  },
  {
    "id": "p1759",
    "code": "1759",
    "name": "AI수학",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 20000,
    "smartVisit": false,
    "note": "2019.02.01 출시 / 모과목이 있어야 입회 등록 가능",
    "displayNote": "모과목이 있어야 입회 등록 가능"
  },
  {
    "id": "p3106",
    "code": "3106",
    "name": "NEW리딩마스터(방문)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2023.03.02 출시",
    "displayNote": ""
  },
  {
    "id": "p1188",
    "code": "1188",
    "name": "공헌)국어",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 30000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1726",
    "code": "1726",
    "name": "공헌)놀이로호기심깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 37000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1187",
    "code": "1187",
    "name": "공헌)한글",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 37000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1001",
    "code": "1001",
    "name": "국어",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1725",
    "code": "1725",
    "name": "놀이로호기심깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 47000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1820",
    "code": "1820",
    "name": "똑똑두뇌깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2020.08.07 출시 / 스마트올쿠키(센터형 포함, 비관리 제외) 결합 시 5,000원 할인 적용",
    "displayNote": "스마트올쿠키(센터형 포함, 비관리 제외) 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1087",
    "code": "1087",
    "name": "바로독해",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "주간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "스마트올/스마트올쿠키(센터형,판매형 포함)/스마트국어(센터형 포함)/센)교과국어/국어 결합 시 5,000원 할인 적용",
    "displayNote": "스마트올 / 스마트올쿠키(센터형,판매형 포함) / 스마트국어(센터형 포함) / 센)교과국어 / 국어 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1022",
    "code": "1022",
    "name": "바로셈",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "주간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "스마트올/스마트수학/서술형수학/ 수학/스마트올쿠키/판)스마트올쿠키플러스 결합 시 5,000원 할인 적용",
    "displayNote": "스마트올 / 스마트수학 / 서술형수학 / 수학 / 스마트올쿠키 / 판)스마트올쿠키플러스 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1000",
    "code": "1000",
    "name": "수학",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1025",
    "code": "1025",
    "name": "수학깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 47000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1233",
    "code": "1233",
    "name": "스마트_수깨",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1754",
    "code": "1754",
    "name": "스마트_영어깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1234",
    "code": "1234",
    "name": "스마트_한글",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "공헌등록 1만원 할인",
    "displayNote": "공헌등록 1만원 할인"
  },
  {
    "id": "p1494",
    "code": "1494",
    "name": "스마트바로쓰기",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "2022.01.03 출시",
    "displayNote": ""
  },
  {
    "id": "p3000",
    "code": "3000",
    "name": "스마트바로쓰기(지면)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2022.01.03 출시",
    "displayNote": ""
  },
  {
    "id": "p1236",
    "code": "1236",
    "name": "스마트씽크빅_국어",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "공헌등록 1만원 할인",
    "displayNote": "공헌등록 1만원 할인"
  },
  {
    "id": "p1699",
    "code": "1699",
    "name": "스마트씽크빅_그래머(방문형)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1393",
    "code": "1393",
    "name": "스마트씽크빅_보카(방문형)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1237",
    "code": "1237",
    "name": "스마트씽크빅_수학",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1270",
    "code": "1270",
    "name": "스마트씽크빅_한자(4자)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": true,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1799",
    "code": "1799",
    "name": "스마트올_AI수학",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "2020.2.3 입회등록 / 2020.03.01 서비스추가 / 스마트올 과목없이 단독 입회 불가",
    "displayNote": "2020.2.3 입회등록 / 2020.03.01 서비스추가 / 스마트올 과목없이 단독 입회 불가"
  },
  {
    "id": "p1945",
    "code": "1945",
    "name": "스마트한국사",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": true,
    "note": "2020.10.19 출시 / 판)스마트올/사회 결합 시 5,000원 할인 적용",
    "displayNote": "판)스마트올 / 사회 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1760",
    "code": "1760",
    "name": "창의아트깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 49000,
    "smartVisit": false,
    "note": "2019.04.01 오픈 / 생각라이브러리 내 디지털콘텐츠 이용 포함",
    "displayNote": "2019.04.01 오픈 / 생각라이브러리 내 디지털콘텐츠 이용 포함"
  },
  {
    "id": "p1879",
    "code": "1879",
    "name": "척척창의코딩",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 79000,
    "smartVisit": false,
    "note": "2021.05 출시",
    "displayNote": ""
  },
  {
    "id": "p1491",
    "code": "1491",
    "name": "초단기한국사",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 65000,
    "smartVisit": false,
    "note": "2021.10.01 출시 / 스마트올/스마트올중학/사회/스마트한국사 결합 시 6,000원 할인 적용",
    "displayNote": "스마트올 / 스마트올중학 / 사회 / 스마트한국사 결합 시 6,000원 할인 적용"
  },
  {
    "id": "p1780",
    "code": "1780",
    "name": "초단기한글",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2019.10.01 출시 / 매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈",
    "displayNote": "매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈"
  },
  {
    "id": "p1839",
    "code": "1839",
    "name": "판)스마트올쿠키 플러스",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 39000,
    "smartVisit": true,
    "note": "2020.11.16 출시 /바로셈/바로독해/두뇌깨치기 결합 시 5,000원 할인 적용",
    "displayNote": "바로셈 / 바로독해 / 두뇌깨치기 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1002",
    "code": "1002",
    "name": "한자",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "주간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3131",
    "code": "3131",
    "name": "방)올백_2",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3132",
    "code": "3132",
    "name": "방)올백_4",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3917",
    "code": "3917",
    "name": "주1)올탭_과학(과외1M)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 170000,
    "smartVisit": false,
    "note": "2024.02.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3918",
    "code": "3918",
    "name": "주1)올탭_과학(과외6M)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 160000,
    "smartVisit": false,
    "note": "2024.02.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3919",
    "code": "3919",
    "name": "주1)올탭_과학(과외12M)",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 155000,
    "smartVisit": false,
    "note": "2024.02.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3301",
    "code": "3301",
    "name": "방)올백_중등수학",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3302",
    "code": "3302",
    "name": "방)올백_중등영어",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3303",
    "code": "3303",
    "name": "방)올백_중등국사과",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3451",
    "code": "3451",
    "name": "방)키즈올백_2",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3452",
    "code": "3452",
    "name": "방)키즈올백_4",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3330",
    "code": "3330",
    "name": "학습강화",
    "family": "방문",
    "section": "방문",
    "kind": "씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2024.08.05 출시",
    "displayNote": ""
  },
  {
    "id": "p3379",
    "code": "3379",
    "name": "생각톡톡깨치기",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 85000,
    "smartVisit": false,
    "note": "2026.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3331",
    "code": "3331",
    "name": "올수학",
    "family": "방문",
    "section": "방문",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 45000,
    "smartVisit": false,
    "note": "2026.07.01 출시",
    "displayNote": ""
  },
  {
    "id": "p1435",
    "code": "1435",
    "name": "클)AI바로셈",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2021.09.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3108",
    "code": "3108",
    "name": "클)NEW리딩마스터",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2023.03.02 출시",
    "displayNote": ""
  },
  {
    "id": "p1825",
    "code": "1825",
    "name": "클)똑똑두뇌깨치기",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2020.09.10 출시",
    "displayNote": ""
  },
  {
    "id": "p1582",
    "code": "1582",
    "name": "클)바로독해",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1581",
    "code": "1581",
    "name": "클)바로셈",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1496",
    "code": "1496",
    "name": "클)스마트바로쓰기",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2022.01.03 출시",
    "displayNote": ""
  },
  {
    "id": "p1821",
    "code": "1821",
    "name": "클)스마트씽크빅_국어",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2020.08.18 출시 / 스마트씽크빅 비관리 과목 수업 진행 시 17,000원 할인 (중복적용안됨)",
    "displayNote": "스마트씽크빅 비관리 과목 수업 진행 시 17,000원 할인 (중복적용안됨)"
  },
  {
    "id": "p1690",
    "code": "1690",
    "name": "클)스마트씽크빅_그래머",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1953",
    "code": "1953",
    "name": "클)스마트씽크빅_한자(4자)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2019.05.02 출시",
    "displayNote": ""
  },
  {
    "id": "p1947",
    "code": "1947",
    "name": "클)스마트한국사",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2020.10.19 출시 / 스마트올/사회 결합 시 5,000원 할인 적용",
    "displayNote": "스마트올 / 사회 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p1372",
    "code": "1372",
    "name": "클)예비초등_국어",
    "family": "클래스",
    "section": "클래스",
    "kind": "씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "지면 수업",
    "displayNote": "지면 수업"
  },
  {
    "id": "p1373",
    "code": "1373",
    "name": "클)예비초등_수학",
    "family": "클래스",
    "section": "클래스",
    "kind": "씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "지면 수업",
    "displayNote": "지면 수업"
  },
  {
    "id": "p1878",
    "code": "1878",
    "name": "클)척척창의코딩",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 79000,
    "smartVisit": false,
    "note": "2021.05 출시",
    "displayNote": ""
  },
  {
    "id": "p1493",
    "code": "1493",
    "name": "클)초단기한국사",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 65000,
    "smartVisit": false,
    "note": "2021.10.01 출시 / 스마트올/스마트올중학/사회/스마트한국사 결합 시 6,000원 할인 적용",
    "displayNote": "스마트올 / 스마트올중학 / 사회 / 스마트한국사 결합 시 6,000원 할인 적용"
  },
  {
    "id": "p1782",
    "code": "1782",
    "name": "클)초단기한글",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2019.10.01 출시 / 매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈",
    "displayNote": "매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈"
  },
  {
    "id": "p1038",
    "code": "1038",
    "name": "클)클래스_주3(14M)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 30000,
    "smartVisit": false,
    "note": "2021.03.25 출시 / 클)사회/클)과학/클)테마논술/클)한국사2 결합 시 10,000원 할인 적용",
    "displayNote": "클)사회 / 클)과학 / 클)테마논술 / 클)한국사2 결합 시 10,000원 할인 적용"
  },
  {
    "id": "p1037",
    "code": "1037",
    "name": "클)클래스_주3(26M)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2021.03.25 출시 / 클)사회/클)과학/클)테마논술/클)한국사2 결합 시 10,000원 할인 적용",
    "displayNote": "클)사회 / 클)과학 / 클)테마논술 / 클)한국사2 결합 시 10,000원 할인 적용"
  },
  {
    "id": "p1036",
    "code": "1036",
    "name": "클)클래스_주3(공용패드)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 159000,
    "smartVisit": false,
    "note": "2021.03.25 출시 / 클)사회/클)과학/클)테마논술/클)한국사2 결합 시 10,000원 할인 적용",
    "displayNote": "클)사회 / 클)과학 / 클)테마논술 / 클)한국사2 결합 시 10,000원 할인 적용"
  },
  {
    "id": "p1039",
    "code": "1039",
    "name": "클)클래스_주3(판매형)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2021.03.25 출시 / 클)사회/클)과학/클)테마논술/클)한국사2 결합 시 10,000원 할인 적용",
    "displayNote": "클)사회 / 클)과학 / 클)테마논술 / 클)한국사2 결합 시 10,000원 할인 적용"
  },
  {
    "id": "p1660",
    "code": "1660",
    "name": "클)테마논술_2",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 65000,
    "smartVisit": false,
    "note": "공부방 4회 수업 논술과목 결합 시 10,000원 할인 적용",
    "displayNote": "공부방 4회 수업 논술과목 결합 시 10,000원 할인 적용"
  },
  {
    "id": "p3137",
    "code": "3137",
    "name": "클)올백_2(공용)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "2023.06.01 출시 / 스마트바로쓰기 결합 시 5,000원 할인 적용",
    "displayNote": "스마트바로쓰기 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3138",
    "code": "3138",
    "name": "클)올백_3(공용)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.06.01 출시 / 스마트바로쓰기 결합 시 5,000원 할인 적용",
    "displayNote": "스마트바로쓰기 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3139",
    "code": "3139",
    "name": "클)올백_2",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3140",
    "code": "3140",
    "name": "클)올백_3",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 90000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3141",
    "code": "3141",
    "name": "스올클)올백_사과",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3206",
    "code": "3206",
    "name": "클)AI수학프로그램_기본",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3207",
    "code": "3207",
    "name": "클)AI수학프로그램_심화",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 135000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3216",
    "code": "3216",
    "name": "클)주3_AI수프_심화(공용)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3217",
    "code": "3217",
    "name": "클)주3_AI수프_심화(개인)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3269",
    "code": "3269",
    "name": "클)올팩_Basic",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.11.06 출시",
    "displayNote": ""
  },
  {
    "id": "p3270",
    "code": "3270",
    "name": "클)올팩_Intensive",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 135000,
    "smartVisit": false,
    "note": "2023.11.06 출시",
    "displayNote": ""
  },
  {
    "id": "p3271",
    "code": "3271",
    "name": "클)올팩_Golden",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 185000,
    "smartVisit": false,
    "note": "2023.11.06 출시",
    "displayNote": ""
  },
  {
    "id": "p3294",
    "code": "3294",
    "name": "클)AI국어프로그램",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.02.16 출시",
    "displayNote": ""
  },
  {
    "id": "p3307",
    "code": "3307",
    "name": "클)올백_중등수학",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 200000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3308",
    "code": "3308",
    "name": "클)올백_중등영어",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 200000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3309",
    "code": "3309",
    "name": "클)올백_중등국사과",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3457",
    "code": "3457",
    "name": "클)키즈올백_2(공용)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3458",
    "code": "3458",
    "name": "클)키즈올백_4(공용)",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 140000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3459",
    "code": "3459",
    "name": "클)키즈올백_2",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3460",
    "code": "3460",
    "name": "클)키즈올백_4",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p1649",
    "code": "1649",
    "name": "클)스마트씽크빅_영어_주1",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 37500,
    "smartVisit": false,
    "note": "스마트씽크빅 비관리 과목 수업 진행 시 17,000원 할인 (중복적용안됨)",
    "displayNote": "스마트씽크빅 비관리 과목 수업 진행 시 17,000원 할인 (중복적용안됨)"
  },
  {
    "id": "p3380",
    "code": "3380",
    "name": "클)생각톡톡깨치기",
    "family": "클래스",
    "section": "클래스",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 85000,
    "smartVisit": false,
    "note": "2026.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3027",
    "code": "3027",
    "name": "CP 계정연장형(1M)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2022.06.22 출시 / 기존 약정이 CP기본형(12M)일 시 80,000원",
    "displayNote": "기존 약정이 CP기본형(12M)일 시 80,000원"
  },
  {
    "id": "p3026",
    "code": "3026",
    "name": "CP 계정추가형(1M)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 80000,
    "smartVisit": false,
    "note": "2022.06.22 출시",
    "displayNote": ""
  },
  {
    "id": "p3024",
    "code": "3024",
    "name": "CP 기본형(24M)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 80000,
    "smartVisit": false,
    "note": "2022.06.22 출시 / 4대 일때는 각 1만원 할인, 5대 이상 각 2만원 할인",
    "displayNote": "4대 일때는 각 1만원 할인, 5대 이상 각 2만원 할인"
  },
  {
    "id": "p3025",
    "code": "3025",
    "name": "CP 기본형(12M)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2022.06.22 출시 / 4대 일때는 각 1만원 할인, 5대 이상 각 2만원 할인",
    "displayNote": "4대 일때는 각 1만원 할인, 5대 이상 각 2만원 할인"
  },
  {
    "id": "p3114",
    "code": "3114",
    "name": "생보사 CP(24M)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3328",
    "code": "3328",
    "name": "기업CP_렌탈형(무약정)",
    "family": "CP",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 120000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3264",
    "code": "3264",
    "name": "센)주말특강",
    "family": "센,프",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 125000,
    "smartVisit": false,
    "note": "2023.10.04 출시",
    "displayNote": ""
  },
  {
    "id": "p3266",
    "code": "3266",
    "name": "센)상시특강",
    "family": "센,프",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2023.10.04 출시",
    "displayNote": ""
  },
  {
    "id": "p1495",
    "code": "1495",
    "name": "센)스마트바로쓰기",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2022.01.03 출시",
    "displayNote": ""
  },
  {
    "id": "p1645",
    "code": "1645",
    "name": "센)스마트씽크빅_국어",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1689",
    "code": "1689",
    "name": "센)스마트씽크빅_그래머",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "주1회 - 5,000원 할인 / 주2회 - 10,000원 할인",
    "displayNote": "주1회 - 5,000원 할인 / 주2회 - 10,000원 할인"
  },
  {
    "id": "p1648",
    "code": "1648",
    "name": "센)스마트씽크빅_한자(4자)",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "북스 두 번째 과목일때 5,000원 할인적용",
    "displayNote": "북스 두 번째 과목일때 5,000원 할인적용"
  },
  {
    "id": "p1946",
    "code": "1946",
    "name": "센)스마트한국사",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 40000,
    "smartVisit": false,
    "note": "2020.10.19 출시 / 스마트올/사회 결합 시 5,000원 할인 적용",
    "displayNote": "스마트올 / 사회 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3003",
    "code": "3003",
    "name": "센)스팀교과3.0",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2021.05.01 출시",
    "displayNote": ""
  },
  {
    "id": "p1877",
    "code": "1877",
    "name": "센)창의스팀",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2021.05.01 출시",
    "displayNote": ""
  },
  {
    "id": "p1492",
    "code": "1492",
    "name": "센)초단기한국사",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 65000,
    "smartVisit": false,
    "note": "2021.10.01 출시 / 스마트올/스마트올중학/사회/스마트한국사 결합 시 6,000원 할인 적용",
    "displayNote": "스마트올 / 스마트올중학 / 사회 / 스마트한국사 결합 시 6,000원 할인 적용"
  },
  {
    "id": "p1781",
    "code": "1781",
    "name": "센)초단기한글",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2019.10.01 출시 / 매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈",
    "displayNote": "매월 교재 1권씩 순차 오픈, 20년 2월 전단계 오픈"
  },
  {
    "id": "p1951",
    "code": "1951",
    "name": "센)테마논술",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 65000,
    "smartVisit": false,
    "note": "2018.01 출시 / 센)테마논술 ↔ 클)테마논술 계약변경 시, 학습이력 연동 불가",
    "displayNote": "센)테마논술 ↔ 클)테마논술 계약변경 시, 학습이력 연동 불가"
  },
  {
    "id": "p1459",
    "code": "1459",
    "name": "센)AI바로셈",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 35000,
    "smartVisit": false,
    "note": "2021.09.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3048",
    "code": "3048",
    "name": "센)올팩_Basic",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2022.08.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3049",
    "code": "3049",
    "name": "센)올팩_Intensive",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 135000,
    "smartVisit": false,
    "note": "2022.08.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3050",
    "code": "3050",
    "name": "센)올팩_Golden",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 185000,
    "smartVisit": false,
    "note": "2022.08.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3133",
    "code": "3133",
    "name": "센)올백_2(공용)",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "2023.06.01 출시 / 스마트바로쓰기 결합 시 5,000원 할인 적용",
    "displayNote": "스마트바로쓰기 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3134",
    "code": "3134",
    "name": "센)올백_3(공용)",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.06.01 출시 / 스마트바로쓰기 결합 시 5,000원 할인 적용",
    "displayNote": "스마트바로쓰기 결합 시 5,000원 할인 적용"
  },
  {
    "id": "p3135",
    "code": "3135",
    "name": "센)올백_2",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3136",
    "code": "3136",
    "name": "센)올백_3",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 90000,
    "smartVisit": false,
    "note": "2023.06.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3204",
    "code": "3204",
    "name": "센)AI수학프로그램_기본",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3205",
    "code": "3205",
    "name": "센)AI수학프로그램_심화",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 135000,
    "smartVisit": false,
    "note": "2023.07.17 출시",
    "displayNote": ""
  },
  {
    "id": "p3293",
    "code": "3293",
    "name": "센)AI국어프로그램",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.02.16 출시",
    "displayNote": ""
  },
  {
    "id": "p3304",
    "code": "3304",
    "name": "센)올백_중등수학",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 200000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3305",
    "code": "3305",
    "name": "센)올백_중등영어",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 200000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p3306",
    "code": "3306",
    "name": "센)올백_중등국사과",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.03.18 출시",
    "displayNote": ""
  },
  {
    "id": "p1714",
    "code": "1714",
    "name": "담임영어투게더(프리미엄)",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2018년 8월 출시",
    "displayNote": ""
  },
  {
    "id": "p1931",
    "code": "1931",
    "name": "보카투게더(프리미엄)",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2019.02.01 출시",
    "displayNote": ""
  },
  {
    "id": "p1934",
    "code": "1934",
    "name": "그래머투게더(프리미엄)",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2019.07.01 출시",
    "displayNote": ""
  },
  {
    "id": "p3107",
    "code": "3107",
    "name": "리딩투게더(프리미엄)",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2023.03.02 출시",
    "displayNote": ""
  },
  {
    "id": "p3315",
    "code": "3315",
    "name": "Live)B.I.G프로그램_주1",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.05.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3316",
    "code": "3316",
    "name": "Live)B.I.G프로그램_주2",
    "family": "센터화상",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 180000,
    "smartVisit": false,
    "note": "2024.05.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3453",
    "code": "3453",
    "name": "센)키즈올백_2(공용)",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3454",
    "code": "3454",
    "name": "센)키즈올백_4(공용)",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 140000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3455",
    "code": "3455",
    "name": "센)키즈올백_2",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 60000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3456",
    "code": "3456",
    "name": "센)키즈올백_4",
    "family": "센터",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 100000,
    "smartVisit": false,
    "note": "2024.06.20 출시",
    "displayNote": ""
  },
  {
    "id": "p1631",
    "code": "1631",
    "name": "센)스마트씽크빅_영어_주1",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 37500,
    "smartVisit": false,
    "note": "2019년 12월 회비변경",
    "displayNote": "2019년 12월 회비변경"
  },
  {
    "id": "p3350",
    "code": "3350",
    "name": "센)중학올백플러스_수학",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2025.11.10 출시",
    "displayNote": ""
  },
  {
    "id": "p3351",
    "code": "3351",
    "name": "센)중학올백플러스_영어",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2025.11.10 출시",
    "displayNote": ""
  },
  {
    "id": "p3352",
    "code": "3352",
    "name": "센)중학올백플러스_국사과",
    "family": "센터전용",
    "section": "센터·프라임",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 50000,
    "smartVisit": false,
    "note": "2025.11.10 출시",
    "displayNote": ""
  },
  {
    "id": "p1693",
    "code": "1693",
    "name": "방학특강_수학",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정"
  },
  {
    "id": "p1694",
    "code": "1694",
    "name": "방학특강_영어",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정"
  },
  {
    "id": "p1695",
    "code": "1695",
    "name": "방학특강_한자",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정"
  },
  {
    "id": "p1771",
    "code": "1771",
    "name": "방학특강_영어 G-TELP",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인 / 센터 전용 과목 인정"
  },
  {
    "id": "p1696",
    "code": "1696",
    "name": "클)방학특강_수학",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인"
  },
  {
    "id": "p1697",
    "code": "1697",
    "name": "클)방학특강_영어",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인"
  },
  {
    "id": "p1698",
    "code": "1698",
    "name": "클)방학특강_한자",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인"
  },
  {
    "id": "p1770",
    "code": "1770",
    "name": "클)방학특강_영어 G-TELP",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 70000,
    "smartVisit": false,
    "note": "6월, 12월에만 등록 가능/ 기존회원 등록 시 0.5만원 할인",
    "displayNote": "6월, 12월에만 등록 가능 / 기존회원 등록 시 0.5만원 할인"
  },
  {
    "id": "p3355",
    "code": "3355",
    "name": "마스터특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2026.04.20 출시 / 센터전용과목 인정",
    "displayNote": "센터전용과목 인정"
  },
  {
    "id": "p3356",
    "code": "3356",
    "name": "클)마스터특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 75000,
    "smartVisit": false,
    "note": "2026.04.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3357",
    "code": "3357",
    "name": "중학특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 150000,
    "smartVisit": false,
    "note": "2026.04.20 출시 / 센터전용과목 인정",
    "displayNote": "센터전용과목 인정"
  },
  {
    "id": "p3358",
    "code": "3358",
    "name": "클)중학특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 150000,
    "smartVisit": false,
    "note": "2026.04.20 출시",
    "displayNote": ""
  },
  {
    "id": "p3359",
    "code": "3359",
    "name": "예비중특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 150000,
    "smartVisit": false,
    "note": "2026.04.20 출시 / 센터전용과목 인정",
    "displayNote": "센터전용과목 인정"
  },
  {
    "id": "p3360",
    "code": "3360",
    "name": "클)예비중특강",
    "family": "특강",
    "section": "기타 운영",
    "kind": "스마트씽크빅",
    "type": "월간학습",
    "fee": 150000,
    "smartVisit": false,
    "note": "2026.04.20 출시",
    "displayNote": ""
  },
  {
    "id": "p1855",
    "code": "1855",
    "name": "연장)스마트올(콘텐츠12M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 87000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1483",
    "code": "1483",
    "name": "연장)스마트올(콘텐츠1M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 99000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1854",
    "code": "1854",
    "name": "연장)스마트올(콘텐츠24M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 85000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1482",
    "code": "1482",
    "name": "연장)스마트올(콘텐츠6M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 89000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1515",
    "code": "1515",
    "name": "연장)스마트올중학대치관(콘텐츠12M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 87000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1511",
    "code": "1511",
    "name": "연장)스마트올중학대치관(콘텐츠1M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 99000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1514",
    "code": "1514",
    "name": "연장)스마트올중학대치관(콘텐츠24M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 85000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p1510",
    "code": "1510",
    "name": "연장)스마트올중학대치관(콘텐츠6M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 89000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3225",
    "code": "3225",
    "name": "연장)중학대치관_iPad(콘텐츠1M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 99000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3349",
    "code": "3349",
    "name": "연장)스마트올Pick(콘텐츠1M)",
    "family": "약정연장",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 79000,
    "smartVisit": false,
    "note": "2025.04.07 출시",
    "displayNote": ""
  },
  {
    "id": "p3314",
    "code": "3314",
    "name": "디즈니 인터렉티브리딩 풀팩",
    "family": "교재/교구",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 749000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  },
  {
    "id": "p3313",
    "code": "3313",
    "name": "디즈니 인터렉티브리딩 ARpedia팩",
    "family": "교재/교구",
    "section": "기타 운영",
    "kind": "기타",
    "type": "기타",
    "fee": 439000,
    "smartVisit": false,
    "note": "",
    "displayNote": ""
  }
];

function routeOf(p) {
  if (p.section === '메인') return '공통';
  if (p.name === 'KRS 화상관리' || p.family === '센터화상') return '재택화상';
  if (p.section === '방문') return '학습지';
  if (p.section === '클래스') return '공부방';
  if (p.section === '센터·프라임') return '센터';
  return '기타';
}

function partnerMatch(selected, target, patterns) {
  const names = selected
    .filter(p => p.id !== target.id)
    .map(p => p.name.replace(/\s+/g, ''));
  return patterns.some(pattern =>
    names.some(name => name.includes(pattern.replace(/\s+/g, '')))
  );
}

function noteDiscount(p, selected, contract) {
  const n = p.note || '';
  const rules = [];
  const otherNames = selected.filter(x => x.id !== p.id).map(x => x.name);

  if ((p.code === '1022' || p.code === '1087') &&
      otherNames.some(x => x.includes('스마트올중학대치관') || x.includes('스마트올쿠키 플러스'))) return 0;

  if (p.code === '1434') rules.push([['스마트올','스마트수학','서술형수학','수학','센)AI수학프로그램_기본','센)AI수학프로그램_심화'], 5000]);
  if (p.code === '1459') rules.push([['센)AI수학프로그램_기본','센)AI수학프로그램_심화'], 5000]);
  if (p.code === '1022') rules.push([['스마트올','스마트수학','서술형수학','수학','센)AI수학프로그램_기본','센)AI수학프로그램_심화'], 5000]);
  if (p.code === '1087') rules.push([['스마트올','스마트올쿠키','스마트국어','교과국어','국어'], 5000]);
  if (n.includes('바로셈 또는 바로독해 결합 시 5,000원')) rules.push([['바로셈','바로독해'], 5000]);
  if (n.includes('스마트올쿠키') && n.includes('결합 시 5,000원')) rules.push([['스마트올쿠키'], 5000]);
  if (n.includes('바로셈/바로독해/두뇌깨치기 결합 시 5,000원')) rules.push([['바로셈','바로독해','두뇌깨치기'], 5000]);
  if (n.includes('스마트바로쓰기 결합 시 5,000원')) rules.push([['스마트바로쓰기'], 5000]);
  if (n.includes('스마트올/사회 결합 시 5,000원') || n.includes('판)스마트올/사회 결합 시 5,000원')) rules.push([['스마트올','사회'], 5000]);
  if (n.includes('스마트올/스마트올중학/사회/스마트한국사 결합 시 6,000원')) rules.push([['스마트올','스마트올중학','사회','스마트한국사'], 6000]);
  if (n.includes('클)사회/클)과학/클)테마논술/클)한국사2 결합 시 10,000원')) rules.push([['클)사회','클)과학','클)테마논술','클)한국사2'], 10000]);
  if (n.includes('공부방 4회 수업 논술과목 결합 시 10,000원')) rules.push([['논술'], 10000]);

  for (const [patterns, amount] of rules) {
    if (partnerMatch(selected, p, patterns)) return amount;
  }

  if (n.includes('공헌등록 1만원 할인') && otherNames.some(x => x.includes('공헌)'))) return 10000;
  if (n.includes('스마트씽크빅 비관리 과목 수업 진행 시 17,000원') && otherNames.some(x => x.includes('(비)'))) return 17000;
  if (n.includes('북스 두 번째 과목일때 5,000원') && otherNames.some(x => x.includes('북스'))) return 5000;
  if (n.includes('주1회 - 5,000원 할인') && otherNames.some(x => x.includes('주2'))) return 10000;
  if (n.includes('주1회 - 5,000원 할인') && otherNames.some(x => x.includes('주1'))) return 5000;
  if (n.includes('기존회원 등록 시 0.5만원 할인') && contract) return 5000;
  return 0;
}

function calculate(payload) {
  const selectedIds = Array.isArray(payload.selected) ? payload.selected.slice(0, 50) : [];
  const tablet = ['none', 'smartall', 'smart'].includes(payload.tablet) ? payload.tablet : 'none';
  const contract = Boolean(payload.contract);
  const selected = selectedIds
    .map(id => products.find(p => p.id === String(id)))
    .filter(Boolean);

  let normal = 0;
  let total = 0;
  let smartVisitCount = 0;
  const rows = [];
  const discounts = [];
  const hasOther = selected.some(p => !p.isKrs);

  for (const p of selected) {
    let charge = p.fee;
    let reason = '';

    if (p.smartVisit) {
      smartVisitCount += 1;
      if (tablet === 'none' && smartVisitCount === 1) {
        charge = 47000;
        reason = '방문 스마트 첫 과목 · 패드 생성가';
      } else {
        reason = '기존 이용 조건 월회비';
      }
    }

    normal += charge;
    let final = charge;

    if (p.isKrs && (contract || hasOther)) {
      final -= 4000;
      reason = 'KRS 과목 결합 할인';
      discounts.push({ label: 'KRS 결합 할인', amount: 4000, target: p.name });
    }

    total += final;
    rows.push({
      id: p.id,
      name: p.name,
      family: p.family,
      code: p.code,
      charge,
      final,
      reason
    });
  }

  selected.forEach((p, index) => {
    const amount = noteDiscount(p, selected, contract);
    if (!amount) return;
    total -= amount;
    rows[index].final -= amount;
    rows[index].reason = rows[index].reason
      ? rows[index].reason + ' · 결합 할인'
      : '결합 할인 적용';
    discounts.push({ label: p.name + ' · 결합 할인', amount, target: p.name });
  });

  return {
    normal,
    total,
    discount: normal - total,
    rows,
    discounts,
    hasKrs: selected.some(p => p.isKrs)
  };
}

function publicCatalog() {
  return products.map(p => ({
    id: p.id,
    code: p.code,
    name: p.name,
    family: p.family,
    kind: p.kind,
    fee: p.fee,
    isKrs: Boolean(p.isKrs),
    displayNote: p.displayNote || '',
    route: routeOf(p),
    exclusiveGroup: p.family === 'KRS 관리' ? 'krs-management' : (p.isKrs ? 'krs-main' : '')
  }));
}

export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'GET') {
    return res.status(200).json({ products: publicCatalog() });
  }

  if (req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    let body = req.body || {};
    if (typeof body === 'string') body = JSON.parse(body);
    return res.status(200).json(calculate(body));
  } catch (error) {
    console.error('calculator error', error);
    return res.status(400).json({ error: '계산 요청을 처리할 수 없습니다.' });
  }
}
