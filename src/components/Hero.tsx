import { heroHighlights } from '../data/proposalData';

export function Hero() {
  return (
    <header className="hero">
      <div className="hero__meta">
        <span>AX CIC 내부 검토용</span>
        <span>On-prem RAG Chatbot 구축 제안</span>
      </div>
      <div className="hero__content">
        <p className="eyebrow">Executive Proposal</p>
        <h1>A사 On-prem RAG Chatbot 구축 사업 기획안</h1>
        <p className="hero__lead">
          보안 요구사항을 충족하면서 사내 지식 검색 비용을 줄이는 AX 인프라 구축 사업 제안서입니다.
          초기 MVP 범위를 통제해 빠른 전사 베타 오픈과 이후 확산을 함께 고려합니다.
        </p>
      </div>
      <div className="hero__grid" aria-label="핵심 요약">
        {heroHighlights.map((item) => (
          <article className="summary-card" key={item.title}>
            <span className="summary-card__label">{item.label}</span>
            <strong>{item.title}</strong>
          </article>
        ))}
      </div>
    </header>
  );
}
