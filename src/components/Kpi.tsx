import { kpiGroups } from '../data/proposalData';
import { Section } from './Section';

export function Kpi() {
  return (
    <Section
      id="kpi"
      eyebrow="Success Criteria"
      title="KPI 및 성공 기준"
      description="MVP 성공 기준과 전사 확산 기준을 분리해 구축 완료 이후의 평가와 확산 의사결정 기준으로 사용한다."
    >
      <div className="kpi-grid">
        {kpiGroups.map((group) => (
          <article className="kpi-card" key={group.title}>
            <div className="kpi-card__head">
              <span>{group.label}</span>
              <h3>{group.title}</h3>
            </div>
            <div className="metric-grid">
              {group.metrics.map((item) => (
                <div className="metric-card" key={item.label}>
                  <strong className="metric-value">{item.value}</strong>
                  <p>{item.label}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
