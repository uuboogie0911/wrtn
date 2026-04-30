type ReferenceDocument = {
  title: string;
  source: string;
  excerpt: string;
  confidence: number;
};

type ChatMessage = {
  id: number;
  role: "user" | "assistant";
  content: string;
  createdAt: string;
  references?: ReferenceDocument[];
};

const messages: ChatMessage[] = [
  {
    id: 1,
    role: "user",
    content: "신규 고객 온보딩 프로세스를 요약해 주세요.",
    createdAt: "09:40",
  },
  {
    id: 2,
    role: "assistant",
    content:
      "신규 고객 온보딩은 계약 확인, 담당자 배정, 보안 검토, 초기 워크숍, 30일 성과 리뷰 순서로 진행됩니다. 핵심 KPI는 첫 응답 시간, 자료 제출 완료율, 초기 사용 활성화율입니다.",
    createdAt: "09:41",
    references: [
      {
        title: "Customer Success Playbook",
        source: "Notion / CS 운영 가이드",
        excerpt:
          "계약 체결 후 2영업일 내 담당 CSM을 배정하고 킥오프 일정을 확정합니다.",
        confidence: 96,
      },
      {
        title: "Enterprise Onboarding Checklist",
        source: "Drive / Operations",
        excerpt:
          "보안 요구사항, 데이터 처리 부록, 관리자 계정 설정은 킥오프 전 완료되어야 합니다.",
        confidence: 91,
      },
    ],
  },
  {
    id: 3,
    role: "user",
    content: "보안 검토 단계에서 고객에게 요청해야 할 문서는 무엇인가요?",
    createdAt: "09:43",
  },
  {
    id: 4,
    role: "assistant",
    content:
      "보안 검토에서는 데이터 처리 계약서, 접근 권한 매트릭스, SSO 설정 정보, 감사 로그 보존 정책을 우선 요청합니다. 금융권 고객이라면 침투 테스트 요약본과 하위 처리자 목록도 함께 확인하는 것이 좋습니다.",
    createdAt: "09:44",
    references: [
      {
        title: "Security Review SOP",
        source: "Confluence / Trust Center",
        excerpt:
          "엔터프라이즈 고객은 SSO 메타데이터, DPA, 접근 통제 정책을 필수 제출 항목으로 관리합니다.",
        confidence: 94,
      },
      {
        title: "Regulated Industry Addendum",
        source: "Legal Knowledge Base",
        excerpt:
          "금융 및 의료 고객은 하위 처리자 고지와 최근 보안 평가 결과를 별도 검토합니다.",
        confidence: 88,
      },
    ],
  },
];

const suggestedPrompts = [
  "계약 갱신 리스크를 알려줘",
  "고객 미팅 요약 템플릿 작성",
  "FAQ 문서에서 결제 정책 찾아줘",
];

function App() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl shadow-slate-950/30 backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-3 py-1 text-sm font-medium text-cyan-100">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              RAG Knowledge Assistant
            </div>
            <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              기업 지식 검색 챗봇
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
              사내 문서를 기반으로 답변하고, 각 AI 응답 아래에 참조 문서를
              함께 표시하는 모의 RAG 인터페이스입니다.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            {[
              ["문서", "1.2k"],
              ["정확도", "94%"],
              ["언어", "KO/EN"],
            ].map(([label, value]) => (
              <div
                className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3"
                key={label}
              >
                <div className="text-lg font-semibold text-white">{value}</div>
                <div className="text-xs text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </header>

        <section className="grid flex-1 gap-6 lg:grid-cols-[280px_1fr]">
          <aside className="rounded-3xl border border-white/10 bg-white/[0.08] p-5 backdrop-blur">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">
              빠른 질문
            </h2>
            <div className="mt-4 space-y-3">
              {suggestedPrompts.map((prompt) => (
                <button
                  className="w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-left text-sm text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10"
                  key={prompt}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
              <p className="text-sm font-semibold text-emerald-100">
                검색 인덱스 상태
              </p>
              <p className="mt-2 text-sm leading-6 text-emerald-50/80">
                모든 문서가 최신 상태입니다. 최근 동기화: 오늘 08:30
              </p>
            </div>
          </aside>

          <section className="flex min-h-[680px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-100 shadow-2xl shadow-slate-950/30">
            <div className="flex items-center justify-between border-b border-slate-200 bg-white px-5 py-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-950">
                  Knowledge Chat
                </h2>
                <p className="text-sm text-slate-500">
                  한국어 질문과 답변을 자연스럽게 지원합니다.
                </p>
              </div>
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-700">
                Online
              </span>
            </div>

            <div className="flex-1 space-y-6 overflow-y-auto px-5 py-6">
              {messages.map((message) => (
                <article
                  className={`flex ${
                    message.role === "user" ? "justify-end" : "justify-start"
                  }`}
                  key={message.id}
                >
                  <div
                    className={`max-w-3xl ${
                      message.role === "user" ? "items-end" : "items-start"
                    } flex flex-col gap-3`}
                  >
                    <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                      <span>
                        {message.role === "user" ? "사용자" : "AI 어시스턴트"}
                      </span>
                      <span>{message.createdAt}</span>
                    </div>
                    <div
                      className={`rounded-3xl px-5 py-4 text-sm leading-7 shadow-sm sm:text-base ${
                        message.role === "user"
                          ? "rounded-br-sm bg-blue-600 text-white"
                          : "rounded-bl-sm border border-slate-200 bg-white text-slate-800"
                      }`}
                    >
                      {message.content}
                    </div>

                    {message.references ? (
                      <div className="w-full rounded-2xl border border-slate-200 bg-white p-4">
                        <div className="mb-3 flex items-center justify-between">
                          <h3 className="text-sm font-semibold text-slate-900">
                            참조 문서
                          </h3>
                          <span className="text-xs text-slate-500">
                            {message.references.length}개 문서
                          </span>
                        </div>
                        <div className="grid gap-3 md:grid-cols-2">
                          {message.references.map((reference) => (
                            <div
                              className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                              key={reference.title}
                            >
                              <div className="flex items-start justify-between gap-3">
                                <div>
                                  <p className="font-semibold text-slate-900">
                                    {reference.title}
                                  </p>
                                  <p className="mt-1 text-xs text-slate-500">
                                    {reference.source}
                                  </p>
                                </div>
                                <span className="rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700">
                                  {reference.confidence}%
                                </span>
                              </div>
                              <p className="mt-3 text-sm leading-6 text-slate-600">
                                {reference.excerpt}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>

            <form className="border-t border-slate-200 bg-white p-4">
              <div className="flex items-end gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-3 focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
                <textarea
                  aria-label="채팅 메시지 입력"
                  className="min-h-12 flex-1 resize-none bg-transparent px-2 py-2 text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                  placeholder="문서 기반으로 질문해 보세요. 예: 갱신 계약의 주요 리스크는?"
                  rows={1}
                />
                <button
                  className="rounded-2xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/20 transition hover:bg-blue-700"
                  type="button"
                >
                  보내기
                </button>
              </div>
              <p className="mt-3 text-xs text-slate-500">
                Mock UI only - 백엔드 연결 없이 샘플 데이터로 동작합니다.
              </p>
            </form>
          </section>
        </section>
      </div>
    </main>
  );
}

export default App;
