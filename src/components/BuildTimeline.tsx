import { buildTimeline } from '../data/proposalData';
import { Section } from './Section';

export function BuildTimeline() {
  return (
    <Section
      eyebrow="05. Build Timeline"
      title="구축 타임라인"
      description="사전 컨설팅 2주 이후, 실제 구축은 10주 내 MVP 구축 및 전사 베타 오픈을 목표로 한다."
    >
      <div className="timeline-summary">
        <div>
          <span>Pre-consulting</span>
          <strong>2주</strong>
          <p>범위·권한·품질 기준 확정</p>
        </div>
        <div>
          <span>MVP Build</span>
          <strong>10주</strong>
          <p>구축 및 전사 베타 오픈</p>
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
                  <div
                    className="gantt-bar"
                    style={{
                      gridColumn: `${item.start} / span ${span}`,
                    }}
                  >
                    {item.period}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
