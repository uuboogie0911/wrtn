import { directions, overviewSummary } from '../data/proposalData';
import { Section } from './Section';

export function Overview() {
  return (
    <Section
      eyebrow="01. Business Overview"
      title="보안 요구사항을 충족하는 사내 지식 활용 인프라 구축"
      description="A사는 내부 문서 기반의 RAG Chatbot을 On-prem 환경에서 구축하고, 빠른 시일 내 전사적으로 도입하고자 한다. 본 사업은 단순 챗봇 개발이 아니라 보안 요구사항을 충족하면서 사내 지식 검색 비용을 줄이는 AX 인프라 구축 사업으로 정의한다."
    >
      <div className="overview__definition">
        <div className="definition-copy">
          <span>사업 정의</span>
          <strong>보안 요구사항을 충족하면서 사내 지식 검색 비용을 줄이는 AX 인프라 구축 사업</strong>
          <p>
            On-prem RAG 구축은 일반 SaaS형 챗봇 도입과 달리 내부 보안 정책, 문서 접근 권한, 문서
            품질, 답변 정확도, 운영 체계까지 함께 고려해야 한다.
          </p>
        </div>
        <div className="definition-points">
          {overviewSummary.map((item) => (
            <div key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
      <div className="overview__grid">
        {directions.map((item, index) => (
          <article className="overview-card" key={item.title}>
            <span className="step-badge">{String(index + 1).padStart(2, '0')}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
