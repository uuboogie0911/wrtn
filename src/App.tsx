import { useMemo, useState } from 'react';
import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  FileText,
  MessageSquareText,
  Send,
  ShieldCheck,
  UploadCloud,
} from 'lucide-react';

type ChatMessage = {
  id: number;
  role: 'user' | 'assistant';
  content: string;
  references?: string[];
};

type QuestionLog = {
  id: number;
  question: string;
  status: '정상' | '개선 필요';
  owner: string;
  improvement: '완료' | '대기';
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: 'user',
    content: '출장비 정산 기준이 어떻게 되나요?',
  },
  {
    id: 2,
    role: 'assistant',
    content:
      '출장비 정산 기준은 국내/해외 출장 여부에 따라 다르며, 세부 기준은 사내 경비 규정 문서에 정의되어 있습니다.',
    references: ['사내 경비 규정.pdf', '출장 운영 매뉴얼.pdf'],
  },
];

const questionLogs: QuestionLog[] = [
  {
    id: 1,
    question: '연차 사용 기준 알려줘',
    status: '정상',
    owner: 'HR팀',
    improvement: '완료',
  },
  {
    id: 2,
    question: '보안 반출 승인 절차는?',
    status: '개선 필요',
    owner: '보안팀',
    improvement: '대기',
  },
  {
    id: 3,
    question: '출장비 정산 기준은?',
    status: '정상',
    owner: '총무팀',
    improvement: '완료',
  },
];

const ragFlow = [
  '내부 문서',
  '전처리/Chunking',
  'Embedding 생성',
  'Vector DB 저장',
  '문서 검색',
  'LLM 응답 생성',
  '답변 제공',
];

const statusStyles: Record<QuestionLog['status'], string> = {
  정상: 'bg-emerald-50 text-emerald-700 ring-emerald-200',
  '개선 필요': 'bg-amber-50 text-amber-700 ring-amber-200',
};

function App() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [selectedFailedLogId, setSelectedFailedLogId] = useState<number | null>(null);

  const selectedFailedLog = useMemo(
    () => questionLogs.find((log) => log.id === selectedFailedLogId),
    [selectedFailedLogId],
  );

  const handleSend = () => {
    const question = inputValue.trim() || '출장비 정산 기준이 어떻게 되나요?';
    const nextId = messages.length + 1;

    setMessages((currentMessages) => [
      ...currentMessages,
      {
        id: nextId,
        role: 'user',
        content: question,
      },
      {
        id: nextId + 1,
        role: 'assistant',
        content:
          '출장비 정산 기준은 국내/해외 출장 여부에 따라 다르며, 세부 기준은 사내 경비 규정 문서에 정의되어 있습니다.',
        references: ['사내 경비 규정.pdf', '출장 운영 매뉴얼.pdf'],
      },
    ]);
    setInputValue('');
  };

  const handleUploadClick = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2800);
  };

  const handleLogClick = (log: QuestionLog) => {
    setSelectedFailedLogId(log.status === '개선 필요' ? log.id : null);
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
        <header className="rounded-[2rem] border border-white bg-white px-6 py-7 shadow-sm shadow-slate-200/80 sm:px-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700 ring-1 ring-blue-100">
                <ShieldCheck className="h-4 w-4" />
                On-prem Enterprise AI
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Enterprise RAG Chatbot
              </h1>
              <p className="mt-2 text-base font-medium text-slate-500">
                On-prem 기반 내부 문서 검색 및 질의응답 시스템
              </p>
            </div>
            <span className="w-fit rounded-full bg-teal-50 px-4 py-2 text-sm font-bold text-teal-700 ring-1 ring-teal-200">
              MVP Proposal
            </span>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(430px,0.98fr)]">
          <section className="flex min-h-[680px] flex-col rounded-[1.75rem] border border-slate-200 bg-white shadow-sm">
            <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
              <div>
                <h2 className="flex items-center gap-2 text-xl font-bold text-slate-950">
                  <Bot className="h-5 w-5 text-blue-600" />
                  RAG Chatbot UI
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  내부 문서 근거 기반 답변과 출처를 함께 제공합니다.
                </p>
              </div>
              <div className="hidden rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 sm:block">
                사내망 전용
              </div>
            </div>

            <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6">
              {messages.map((message) => (
                <article
                  key={message.id}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[88%] rounded-3xl px-5 py-4 ${
                      message.role === 'user'
                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                        : 'border border-slate-200 bg-slate-50 text-slate-800'
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-wide opacity-80">
                      {message.role === 'user' ? (
                        <>
                          <MessageSquareText className="h-4 w-4" />
                          사용자 질문
                        </>
                      ) : (
                        <>
                          <Bot className="h-4 w-4 text-teal-600" />
                          AI 답변
                        </>
                      )}
                    </div>
                    <p className="leading-7">{message.content}</p>
                    {message.references && (
                      <div className="mt-4 rounded-2xl bg-white p-4 text-slate-700 ring-1 ring-slate-200">
                        <p className="mb-3 text-sm font-bold text-slate-900">참조 문서</p>
                        <div className="space-y-2">
                          {message.references.map((reference) => (
                            <div
                              key={reference}
                              className="flex items-center gap-2 rounded-xl bg-blue-50 px-3 py-2 text-sm font-semibold text-blue-700"
                            >
                              <FileText className="h-4 w-4" />
                              {reference}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            <div className="border-t border-slate-100 p-5">
              <div className="flex flex-col gap-3 rounded-3xl bg-slate-100 p-2 sm:flex-row">
                <input
                  aria-label="질문 입력"
                  className="min-h-12 flex-1 rounded-2xl border border-transparent bg-white px-4 text-sm font-medium outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100"
                  placeholder="내부 규정이나 업무 절차를 질문하세요"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === 'Enter') {
                      handleSend();
                    }
                  }}
                />
                <button
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-2xl bg-blue-600 px-5 text-sm font-bold text-white shadow-sm shadow-blue-200 transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-100"
                  type="button"
                  onClick={handleSend}
                >
                  <Send className="h-4 w-4" />
                  전송
                </button>
              </div>
            </div>
          </section>

          <aside className="grid gap-5">
            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <h2 className="flex items-center gap-2 text-lg font-bold text-slate-950">
                    <Database className="h-5 w-5 text-teal-600" />
                    문서 관리
                  </h2>
                  <p className="mt-1 text-sm text-slate-500">RAG 지식 베이스 운영 현황</p>
                </div>
                <button
                  className="rounded-2xl bg-teal-600 px-4 py-2 text-sm font-bold text-white shadow-sm shadow-teal-200 transition hover:bg-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-100"
                  type="button"
                  onClick={handleUploadClick}
                >
                  <span className="inline-flex items-center gap-2">
                    <UploadCloud className="h-4 w-4" />
                    문서 업로드
                  </span>
                </button>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricCard label="업로드된 문서 수" value="128개" />
                <MetricCard label="최근 업데이트" value="2026.04.30" />
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4">
                <h2 className="text-lg font-bold text-slate-950">질문 로그</h2>
                <p className="mt-1 text-sm text-slate-500">
                  실패 질문을 운영 개선 작업으로 연결합니다.
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-slate-200">
                <div className="grid grid-cols-[1.6fr_0.9fr_0.8fr_0.8fr] bg-slate-50 px-4 py-3 text-xs font-bold text-slate-500">
                  <span>질문</span>
                  <span>상태</span>
                  <span>담당자</span>
                  <span>개선 여부</span>
                </div>
                {questionLogs.map((log) => (
                  <button
                    key={log.id}
                    className={`grid w-full grid-cols-[1.6fr_0.9fr_0.8fr_0.8fr] items-center gap-2 border-t border-slate-100 px-4 py-3 text-left text-sm transition hover:bg-blue-50/60 ${
                      selectedFailedLogId === log.id ? 'bg-amber-50 ring-2 ring-inset ring-amber-200' : 'bg-white'
                    }`}
                    type="button"
                    onClick={() => handleLogClick(log)}
                  >
                    <span className="font-semibold text-slate-800">{log.question}</span>
                    <span>
                      <span
                        className={`inline-flex rounded-full px-2.5 py-1 text-xs font-bold ring-1 ${statusStyles[log.status]}`}
                      >
                        {log.status}
                      </span>
                    </span>
                    <span className="font-medium text-slate-600">{log.owner}</span>
                    <span className="font-bold text-slate-700">{log.improvement}</span>
                  </button>
                ))}
              </div>

              {selectedFailedLog && (
                <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm font-bold text-amber-900">
                    선택 질문: {selectedFailedLog.question}
                  </p>
                  <dl className="mt-3 grid gap-2 text-sm text-amber-900">
                    <div className="flex gap-2">
                      <dt className="font-bold">실패 사유:</dt>
                      <dd>관련 문서 부족</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="font-bold">개선 액션:</dt>
                      <dd>문서 추가 및 답변 기준 보완 필요</dd>
                    </div>
                  </dl>
                </div>
              )}
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950">
                <BarChart3 className="h-5 w-5 text-blue-600" />
                품질 모니터링
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <MetricCard label="총 질문 수" value="2,430" />
                <MetricCard label="실패 질문" value="86" tone="warning" />
                <MetricCard label="평균 응답 신뢰도" value="91%" tone="success" />
                <MetricCard label="개선 대기" value="12건" tone="info" />
              </div>
            </section>

            <section className="rounded-[1.5rem] border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="mb-4 flex items-center gap-2 text-lg font-bold text-slate-950">
                <CheckCircle2 className="h-5 w-5 text-teal-600" />
                개선 루프
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                {['질문 로그 수집', '실패 응답 분석', '문서/프롬프트 개선'].map((step, index) => (
                  <div key={step} className="relative rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200">
                    <span className="mb-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-600 text-xs font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-bold text-slate-800">{step}</p>
                  </div>
                ))}
              </div>
            </section>
          </aside>
        </section>

        <section className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-950">RAG 데이터 흐름</h2>
              <p className="mt-1 text-sm text-slate-500">
                내부 문서가 답변 근거로 전환되는 전체 운영 파이프라인입니다.
              </p>
            </div>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-7">
            {ragFlow.map((step, index) => (
              <div key={step} className="flex items-center gap-3 xl:contents">
                <div className="flex min-h-24 flex-1 flex-col justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-teal-50 p-4 shadow-sm">
                  <span className="mb-2 text-xs font-bold text-blue-600">STEP {index + 1}</span>
                  <p className="text-sm font-extrabold text-slate-900">{step}</p>
                </div>
                {index < ragFlow.length - 1 && (
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-blue-500 ring-1 ring-blue-100 xl:hidden">
                    <ArrowRight className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="mt-4 hidden items-center justify-between px-10 text-blue-500 xl:flex">
            {ragFlow.slice(0, -1).map((step) => (
              <ArrowRight key={step} className="h-5 w-5" />
            ))}
          </div>
        </section>
      </div>

      {toastVisible && (
        <div className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl bg-slate-950 px-5 py-4 text-center text-sm font-bold text-white shadow-2xl shadow-slate-400/50">
          문서 업로드 기능은 MVP 단계에서 제공 예정입니다.
        </div>
      )}
    </main>
  );
}

function MetricCard({
  label,
  value,
  tone = 'default',
}: {
  label: string;
  value: string;
  tone?: 'default' | 'warning' | 'success' | 'info';
}) {
  const toneStyles = {
    default: 'bg-slate-50 text-slate-950 ring-slate-200',
    warning: 'bg-amber-50 text-amber-900 ring-amber-200',
    success: 'bg-emerald-50 text-emerald-900 ring-emerald-200',
    info: 'bg-blue-50 text-blue-900 ring-blue-200',
  };

  return (
    <div className={`rounded-2xl p-4 ring-1 ${toneStyles[tone]}`}>
      <p className="text-sm font-semibold opacity-70">{label}</p>
      <p className="mt-2 text-2xl font-black tracking-tight">{value}</p>
    </div>
  );
}

export default App;
