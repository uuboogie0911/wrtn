import { kpis } from '../data/proposalData';
import { Section } from './Section';

export function Kpi() {
  return (
    <Section
      id="kpi"
      eyebrow="Success Criteria"
      title="KPI 및 성공 기준"
      description="MVP 성공 기준과 전사 확산 판단 기준을 분리해, 구축 완료 이후의 평가와 확산 의사결정에 활용합니다."
    >
      <div className="kpi-grid">
        <div className="kpi-card">
          <h3>MVP 성공 기준</h3>
          <div className="metric-list">
            {kpis.mvp.map((item) => (
              <div className="metric-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.target}</strong>
              </div>
            ))}
          </div>
        </div>
        <div className="kpi-card">
          <h3>전사 확산 기준</h3>
          <div className="metric-list">
            {kpis.expansion.map((item) => (
              <div className="metric-row" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.target}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
