import { differentiators } from '../data/proposalData';
import { Section } from './Section';

export function Differentiators() {
  return (
    <Section
      eyebrow="03"
      title="Differentiator Factor"
      description="AX CIC의 차별화는 On-prem 설치 가능성보다 보안 운영, MVP 범위 통제, 품질 개선 구조, 확산 가이드까지 포함한 실행 체계를 제공하는 데 있다."
    >
      <div className="differentiator-grid">
        {differentiators.map((item, index) => (
          <article className="differentiator-card" key={item.title}>
            <div className="card-heading">
              <span className="number-badge">{String(index + 1).padStart(2, '0')}</span>
              <h3>{item.title}</h3>
            </div>
            <p className="card-summary">{item.description}</p>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}
