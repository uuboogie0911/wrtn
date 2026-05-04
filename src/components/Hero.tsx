import { heroHighlights, heroMessages } from '../data/proposalData';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__topline">
        <div>
          <span className="document-label">Executive Proposal</span>
          <h1>A사 On-prem RAG Chatbot 구축 사업 기획안</h1>
        </div>
        <div className="hero__subtitle">
          AX CIC
          <span>내부 검토용</span>
        </div>
      </div>

      <p className="hero__lead">
        보안 요구사항을 충족하면서 사내 지식 검색 비용을 줄이는 AX 인프라 구축 사업 제안서입니다.
        초기 MVP 범위를 통제해 빠른 전사 베타 오픈과 이후 확산을 함께 고려합니다.
      </p>

      <div className="hero__question-grid" aria-label="핵심 제안 메시지">
        {heroMessages.map((message) => (
          <article className="question-card" key={message.title}>
            <span>{message.label}</span>
            <strong>{message.title}</strong>
            <p>{message.description}</p>
          </article>
        ))}
      </div>

      <div className="hero__facts" aria-label="핵심 요약">
        {heroHighlights.map((item) => (
          <article className="fact-card" key={item.value}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </header>
  );
}
