import { consultingChecklist, consultingSteps } from '../data/proposalData';
import { Section } from './Section';

export function ConsultingTimeline() {
  return (
    <Section
      eyebrow="05. Pre-consulting"
      title="개발 전 AX 컨설팅 방향 및 타임라인"
      description="개발 착수 전 컨설팅의 목적은 단순 요구사항 수집이 아니라, 개발 실패 가능성을 낮추기 위한 범위·권한·품질 기준 확정이다."
    >
      <div className="consulting-summary">
        <article className="timeline-summary-card">
          <span>Consulting</span>
          <strong>2주</strong>
          <p>범위·권한·품질 기준을 개발 착수 전에 확정</p>
        </article>
      </div>

      <div className="consulting-grid">
        <div className="consulting-process">
          {consultingSteps.map((item, index) => (
            <article className="consulting-card" key={item.stage}>
              <div className="consulting-card__top">
                <span className="step-badge">{String(index + 1).padStart(2, '0')}</span>
                <span className="period-badge">{item.period}</span>
              </div>
              <h3>{item.stage}</h3>
              <p>{item.task}</p>
              <span className="output-badge">산출물: {item.output}</span>
            </article>
          ))}
        </div>
        <div className="consulting-checks">
          <span className="card-label">핵심 확인 항목</span>
          <h3>개발 실패 가능성을 낮추는 사전 질문</h3>
          <ul>
            {consultingChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
