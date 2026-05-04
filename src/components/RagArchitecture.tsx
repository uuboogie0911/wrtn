import { architectureAdmin, architectureFlow, architectureGroups } from '../data/proposalData';
import { Section } from './Section';

export function RagArchitecture() {
  return (
    <Section
      eyebrow="Architecture"
      title="On-prem RAG 구조 다이어그램"
      description="사용자 질문부터 권한 확인, 문서 검색, 답변 생성, 로그 및 운영 관리까지의 흐름을 On-prem 환경 기준으로 시각화했다."
    >
      <div className="architecture">
        <div className="flow-strip" aria-label="RAG 처리 흐름 요약">
          {architectureFlow.map((step, index) => (
            <div className="flow-step" key={step}>
              <span className="flow-number">{String(index + 1).padStart(2, '0')}</span>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
        <div className="architecture-panel">
          <div className="architecture-lanes" aria-label="On-prem RAG 구조도">
            {architectureGroups.map((group) => (
              <section className="architecture-lane" key={group.title}>
                <span className="lane-label">{group.label}</span>
                <h3>{group.title}</h3>
                {group.items.map((item) => (
                  <div className="architecture-node" key={item}>
                    <strong>{item}</strong>
                  </div>
                ))}
              </section>
            ))}
          </div>
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
