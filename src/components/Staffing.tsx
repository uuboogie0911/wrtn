import { staffing } from '../data/proposalData';
import { Section } from './Section';

export function Staffing() {
  return (
    <Section
      eyebrow="08. Team"
      title="필요 인력"
      description="10주 MVP 구축 및 전사 베타 오픈을 목표로 역할별 책임을 명확히 분리한다."
    >
      <div className="staff-grid">
        {staffing.map((member) => (
          <article className="staff-card" key={member.role}>
            <div>
              <span className="staff-role">{member.role}</span>
              <strong>{member.count}</strong>
            </div>
            <p>{member.responsibility}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
