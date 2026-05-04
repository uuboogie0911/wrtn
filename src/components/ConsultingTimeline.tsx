import { consultingSteps, consultingChecks } from '../data/proposalData';
import { Section } from './Section';

export function ConsultingTimeline() {
  return (
    <Section
      eyebrow="04. Pre-consulting"
      title="개발 전 AX 컨설팅 방향 및 타임라인"
      description="개발 착수 전 컨설팅의 목적은 단순 요구사항 수집이 아니라, 개발 실패 가능성을 낮추기 위한 범위·권한·품질 기준 확정이다."
    >
      <div className="two-column">
        <div className="timeline-card">
          <h3>컨설팅 타임라인</h3>
          <div className="step-timeline">
            {consultingSteps.map((item, index) => (
              <article className="step-card" key={item.stage}>
                <span className="step-number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <div className="step-header">
                    <h4>{item.stage}</h4>
                    <span>{item.period}</span>
                  </div>
                  <p>{item.tasks}</p>
                  <strong>산출물: {item.output}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="check-card">
          <h3>컨설팅 핵심 확인 항목</h3>
          <ul className="check-list">
            {consultingChecks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
