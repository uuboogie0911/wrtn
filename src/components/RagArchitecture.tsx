import { Section } from './Section';
import { architectureAdmin, architectureFlow } from '../data/proposalData';

export function RagArchitecture() {
  return (
    <Section
      eyebrow="Architecture"
      title="On-prem RAG 구조 다이어그램"
      description="사용자 질문부터 권한 확인, 문서 검색, 답변 생성, 로그 및 운영 관리까지의 흐름을 On-prem 환경 기준으로 시각화했다."
    >
      <div className="architecture">
        <div className="flow-strip">
          {architectureFlow.map((step, index) => (
            <div className="flow-step" key={step}>
              <span className="flow-number">{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="architecture-panel">
          <div className="user-node">
            <span>사용자</span>
            <strong>자연어 질문</strong>
          </div>
          <svg className="architecture-svg" viewBox="0 0 980 360" role="img" aria-label="On-prem RAG 흐름도">
            <defs>
              <marker id="arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
                <path d="M0,0 L8,4 L0,8 Z" fill="#2563eb" />
              </marker>
            </defs>
            <rect x="35" y="95" width="150" height="68" rx="14" />
            <text x="110" y="123" textAnchor="middle">사용자 질문</text>
            <text x="110" y="146" textAnchor="middle">챗봇 UI</text>

            <rect x="245" y="95" width="150" height="68" rx="14" />
            <text x="320" y="123" textAnchor="middle">인증/권한</text>
            <text x="320" y="146" textAnchor="middle">확인</text>

            <rect x="455" y="40" width="165" height="68" rx="14" />
            <text x="537" y="68" textAnchor="middle">문서 검색</text>
            <text x="537" y="91" textAnchor="middle">Vector DB</text>

            <rect x="455" y="150" width="165" height="68" rx="14" />
            <text x="537" y="178" textAnchor="middle">관련 문서</text>
            <text x="537" y="201" textAnchor="middle">추출</text>

            <rect x="690" y="95" width="150" height="68" rx="14" />
            <text x="765" y="123" textAnchor="middle">답변 생성</text>
            <text x="765" y="146" textAnchor="middle">출처 포함</text>

            <rect x="690" y="238" width="150" height="68" rx="14" />
            <text x="765" y="266" textAnchor="middle">로그 저장</text>
            <text x="765" y="289" textAnchor="middle">오답 신고</text>

            <path d="M185 129 H245" markerEnd="url(#arrow)" />
            <path d="M395 129 C425 129 425 74 455 74" markerEnd="url(#arrow)" />
            <path d="M537 108 V150" markerEnd="url(#arrow)" />
            <path d="M620 184 C655 184 655 129 690 129" markerEnd="url(#arrow)" />
            <path d="M765 163 V238" markerEnd="url(#arrow)" />
            <path d="M840 129 H925" markerEnd="url(#arrow)" />

            <text x="927" y="123">출처 포함 응답</text>
            <text x="927" y="146">사용자 제공</text>
          </svg>
          <div className="admin-box">
            <span className="badge">관리자 기능</span>
            {architectureAdmin.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
