export const heroHighlights = [
  { label: 'Security', title: 'On-prem / 외부 API 미사용' },
  { label: 'Schedule', title: '2주 컨설팅 + 10주 MVP 구축' },
  { label: 'Governance', title: '보안/권한/출처/운영체계 포함' },
  { label: 'Expansion', title: 'MVP 후 전사 확산' },
];

export const directionCards = [
  {
    title: '내부망 기반 On-prem RAG',
    text: '외부 API 호출 없이 내부망에서 동작하는 On-prem RAG 구조를 구축한다.',
  },
  {
    title: 'MVP 대상 범위 통제',
    text: '전사 전체 문서를 한 번에 대상으로 하지 않고 활용성과 문서 품질이 높은 영역부터 적용한다.',
  },
  {
    title: '실사용 가능한 운영 구조',
    text: '답변 출처, 권한 제어, 오답 신고, 운영 로그를 포함한 구조를 설계한다.',
  },
  {
    title: '성과 기반 전사 확산',
    text: 'MVP 성과를 기반으로 전사 확산 범위를 단계적으로 확대한다.',
  },
];

export const directions = directionCards.map((item) => ({
  title: item.title,
  description: item.text,
}));

export const salesRows = [
  {
    target: '경영진',
    interest: '전사 생산성, 도입 효과',
    message: '문서 검색 시간과 반복 문의를 줄이는 AX 기반 생산성 개선',
  },
  {
    target: '보안/IT 조직',
    interest: '데이터 반출, 권한 통제',
    message: 'On-prem, 외부 API 미사용, 사용자 권한 기반 문서 접근 제어',
  },
  {
    target: '현업 부서',
    interest: '실제 사용성',
    message: '자연어 질의, 출처 기반 답변, 담당자 문의 감소',
  },
  {
    target: '운영 조직',
    interest: '유지관리 부담',
    message: '관리자 기능, 로그 분석, 오답 개선 프로세스 제공',
  },
];

export const salesMessages = salesRows;

export const salesStrategies = [
  '2주 사전 진단 + 10주 MVP 구축 구조로 제안',
  'HR/IT/정책 등 반복 질문이 많고 문서 기준이 명확한 영역 우선 적용',
  'PoC 수준의 일회성 검증이 아니라 전사 베타 오픈 가능한 MVP로 포지셔닝',
  'MVP 성과 지표를 기반으로 2차 확산 사업 연결',
];

export const salesStrategy = salesStrategies;

export const differentiators = [
  {
    title: 'Security-first On-prem 구축',
    description:
      '보안 운영까지 고려한 RAG 구조를 제공해 A사의 핵심 요구사항인 보안성을 설계 단계부터 반영한다.',
    points: [
      '외부 LLM API 미사용',
      '내부망 내 데이터 처리',
      '사용자 권한 기반 문서 검색 제한',
      '질문/답변/문서 조회 로그 기록',
      '민감 문서 별도 인덱싱 정책 적용',
      '권한 외 문서가 답변에 포함되지 않도록 검색 단계에서 제어',
    ],
  },
  {
    title: '빠른 도입을 위한 MVP 범위 통제',
    description:
      '초기 범위를 통제해 문서 품질, 권한, 최신성 이슈로 인한 일정과 품질 리스크를 관리한다.',
    points: [
      '반복 질문이 많은 문서',
      '최신성이 관리되고 있는 문서',
      '문서 소유 부서가 명확한 문서',
      '답변 기준이 문서 안에 명확히 존재하는 문서',
      '사용자 권한 구조가 비교적 단순한 문서',
      '우선 적용 예시: HR, IT, 총무/정책',
    ],
  },
  {
    title: 'RAG 품질 운영 체계',
    description:
      '답변 생성 기능에 그치지 않고 운영 중 품질을 개선할 수 있는 구조를 함께 제안한다.',
    points: [
      '답변 출처 문서 제공',
      '신뢰도 낮은 답변 제한',
      '검색 결과가 불충분한 경우 fallback 처리',
      '사용자 오답 신고 기능',
      '관리자 검토 후 문서 수정/제외/재인덱싱 처리',
      '주요 질문 로그 기반 문서 개선',
    ],
  },
  {
    title: '전사 확산 플레이북 제공',
    description:
      'MVP 이후 고객사가 내부 조직 단위로 RAG 활용 범위를 확장할 수 있도록 확산 기준과 운영 가이드를 제공한다.',
    points: [
      '부서별 문서 온보딩 체크리스트',
      '사용자 교육 가이드',
      '운영자 매뉴얼',
      'KPI 리포트 템플릿',
      '확산 우선순위 기준',
    ],
  },
];

export const consultingTimeline = [
  {
    stage: '데이터/보안 진단',
    period: '1주',
    work: '문서 위치, 유형, 권한, 보안 등급 파악',
    output: '데이터 맵, 보안 체크리스트',
    span: 5,
    offset: 0,
  },
  {
    stage: 'Use Case 정의',
    period: '3일',
    work: '반복 질문, 우선 적용 부서, MVP 범위 정의',
    output: 'MVP 범위 정의서',
    span: 3,
    offset: 5,
  },
  {
    stage: '품질 기준 설계',
    period: '2일',
    work: '테스트 질문셋, 답변 기준, 실패 처리 방식 정의',
    output: 'RAG 평가 기준, 테스트셋',
    span: 2,
    offset: 8,
  },
  {
    stage: '실행 계획 확정',
    period: '2일',
    work: '일정, 인력, 리스크, 오픈 기준 확정',
    output: '구축 WBS, 리스크 관리표',
    span: 2,
    offset: 10,
  },
];

export const consultingChecklist = [
  '어떤 문서를 MVP 대상으로 우선 적용할 것인가',
  '문서별 소유 부서와 최신성 관리 책임자는 누구인가',
  '사용자별 문서 접근 권한은 어떤 기준으로 나뉘는가',
  '답변에 반드시 출처 표시가 필요한가',
  '답변하지 않아야 하는 질문 유형은 무엇인가',
  '전사 베타 오픈 기준은 무엇인가',
  '오답/미응답 발생 시 운영 담당자는 누구인가',
];

export const consultingChecks = consultingChecklist;

export const consultingSteps = consultingTimeline.map((item) => ({
  ...item,
  tasks: item.work,
}));

export const buildTimeline = [
  {
    period: 'W1~W2',
    stage: '인프라/보안 설계',
    detail: 'On-prem 서버 환경 구성, 네트워크/권한 정책 반영',
    start: 1,
    end: 2,
    length: 2,
  },
  {
    period: 'W3~W4',
    stage: '문서 파이프라인 구축',
    detail: '문서 수집, 정제, Chunking, Embedding, Vector DB 구성',
    start: 3,
    end: 4,
    length: 2,
  },
  {
    period: 'W5~W6',
    stage: 'RAG API/챗봇 MVP',
    detail: '질문 입력, 문서 검색, 답변 생성, 출처 표시 구현',
    start: 5,
    end: 6,
    length: 2,
  },
  {
    period: 'W7~W8',
    stage: '관리자/운영 기능',
    detail: '문서 상태, 질문 로그, 오답 신고, 피드백 관리',
    start: 7,
    end: 8,
    length: 2,
  },
  {
    period: 'W9',
    stage: '품질 검증',
    detail: '테스트 질문셋 기반 답변 품질, 권한, 미응답 검증',
    start: 9,
    end: 9,
    length: 1,
  },
  {
    period: 'W10',
    stage: '전사 베타 오픈',
    detail: '사용자 교육, 운영자 매뉴얼 제공, 초기 안정화',
    start: 10,
    end: 10,
    length: 1,
  },
];

export const architectureFlow = [
  '사용자 질문',
  '인증/권한 확인',
  '문서 검색(Vector DB)',
  '관련 문서 추출',
  '답변 생성',
  '출처 포함 응답',
  '로그 저장 / 오답 신고',
];

export const architectureAdmin = ['문서 관리', '재인덱싱', '피드백 관리'];

export const architectureGroups = [
  {
    label: 'User Layer',
    title: '사용자 접점',
    items: ['사용자 질문', '출처 포함 응답'],
  },
  {
    label: 'Security Layer',
    title: '보안/권한',
    items: ['인증/권한 확인', '권한 기반 문서 검색 제한'],
  },
  {
    label: 'Retrieval Layer',
    title: '검색/문서 처리',
    items: ['문서 검색(Vector DB)', '관련 문서 추출'],
  },
  {
    label: 'Generation Layer',
    title: '답변/운영',
    items: ['답변 생성', '로그 저장 / 오답 신고'],
  },
];

export const staffing = [
  { role: 'Project Manager', count: '1', responsibility: '범위, 일정, 고객 커뮤니케이션, 리스크 관리' },
  { role: 'AI/RAG Engineer', count: '2', responsibility: 'RAG 파이프라인, Embedding, 검색 품질 개선' },
  { role: 'Backend Engineer', count: '1', responsibility: 'API, 인증/권한, 사내 시스템 연동' },
  { role: 'Frontend Engineer', count: '1', responsibility: '챗봇 UI, 관리자 UI 구현' },
  { role: 'Infra/Security Engineer', count: '1', responsibility: 'On-prem 배포, 네트워크, 보안 설정' },
  { role: 'QA/Tester', count: '0.5', responsibility: '테스트셋 검증, 권한/응답 품질 테스트' },
];

export const estimateItems = [
  {
    item: '사전 AX 컨설팅',
    content: '데이터/보안 진단, Use Case 정의, MVP 범위 확정',
    amount: 30000000,
  },
  {
    item: 'RAG 시스템 구축',
    content: '문서 파이프라인, Vector DB, RAG API, 챗봇 UI 구축',
    amount: 150000000,
  },
  {
    item: 'On-prem/보안 연동',
    content: '내부망 배포, 인증/권한, 로그, 보안 정책 반영',
    amount: 55000000,
  },
  {
    item: '관리자/운영 기능',
    content: '문서 관리, 질문 로그, 오답 신고, 피드백 관리',
    amount: 35000000,
  },
  {
    item: '품질 검증/안정화',
    content: '테스트셋 검증, 권한 테스트, 전사 베타 안정화',
    amount: 35000000,
  },
  {
    item: '교육/운영 문서',
    content: '사용자 가이드, 운영자 매뉴얼, 부서 확산 가이드',
    amount: 25000000,
  },
];

export const maintenanceItems = [
  '운영 로그 분석',
  '문서 인덱싱 이슈 대응',
  '답변 품질 개선',
  '월간 리포트 제공',
  '경미한 기능 개선 포함',
];

export const kpiItems = [
  {
    title: 'MVP 성공 기준',
    metrics: [
      { label: '테스트 질문셋 기준 유효 답변률', value: '70% 이상' },
      { label: '답변 출처 표시율', value: '95% 이상' },
      { label: '권한 외 문서 노출', value: '0건' },
      { label: 'Low confidence 질문 fallback 처리율', value: '95% 이상' },
    ],
  },
  {
    title: '전사 확산 기준',
    metrics: [
      { label: '주요 부서 사용자 만족도', value: '4.0/5.0 이상' },
      { label: '반복 문의 감소', value: '30% 이상' },
      { label: '문서 검색 소요 시간 감소', value: '30% 이상' },
      { label: '월간 활성 사용자 및 재사용률', value: '증가' },
    ],
  },
];

export const kpis = {
  mvp: kpiItems[0].metrics.map((item) => ({
    label: item.label,
    target: item.value,
  })),
  expansion: kpiItems[1].metrics.map((item) => ({
    label: item.label,
    target: item.value,
  })),
};
