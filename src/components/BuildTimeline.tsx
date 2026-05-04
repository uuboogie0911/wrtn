import { buildTimeline, staffing } from '../data/proposalData';
import { Section } from './Section';

export function BuildTimeline() {
  return (
    <Section
      eyebrow="06. Build Timeline & Team"
      title="구축 타임라인 및 필요 인력"
      description="사전 컨설팅 2주 이후, 실제 구축은 10주 내 MVP 구축 및 전사 베타 오픈을 목표로 한다."
    >
      <div className="build-team__summary">
        <div className="timeline-summary-card">
          <span>Consulting</span>
          <strong>2주</strong>
          <p>데이터/보안 진단, Use Case, 품질 기준, 실행 계획 확정</p>
        </div>
        <div className="timeline-summary-card">
          <span>MVP Build</span>
          <strong>10주</strong>
          <p>On-prem 구축부터 전사 베타 오픈 및 초기 안정화까지 진행</p>
        </div>
      </div>

      <div className="timeline-shell">
        <div className="weeks-grid week-header">
          {Array.from({ length: 10 }, (_, index) => (
            <span key={index}>W{index + 1}</span>
          ))}
        </div>
        <div className="gantt-list">
          {buildTimeline.map((item) => {
            const span = item.end - item.start + 1;
            return (
              <article className="gantt-row" key={item.stage}>
                <div className="gantt-label">
                  <strong>{item.stage}</strong>
                  <span>{item.period}</span>
                  <p>{item.detail}</p>
                </div>
                <div className="weeks-grid gantt-track">
                  <div className="gantt-bar" style={{ gridColumn: `${item.start} / span ${span}` }}>
                    {item.period}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      <div className="staff-block">
        <h3>필요 인력</h3>
        <div className="staff-grid">
          {staffing.map((member) => (
            <article className="staff-card" key={member.role}>
              <div className="staff-card__head">
                <span>{member.role}</span>
                <strong>{member.count}</strong>
              </div>
              <p>{member.responsibility}</p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
