import { salesMessages, salesStrategy } from '../data/proposalData';
import { Section } from './Section';

export function SalesStrategy() {
  return (
    <Section
      eyebrow="02. Sales Strategy"
      title="세일즈 전략"
      description="본 사업의 세일즈 메시지는 최신 AI 모델 도입이 아니라, 보안 정책을 준수하면서 전사 지식 활용 효율을 높이는 업무 생산성 개선 프로젝트로 가져간다."
    >
      <div className="table-card sales-table">
        <table>
          <thead>
            <tr>
              <th>대상</th>
              <th>주요 관심사</th>
              <th>제안 메시지</th>
            </tr>
          </thead>
          <tbody>
            {salesMessages.map((item) => (
              <tr key={item.target}>
                <td>{item.target}</td>
                <td>{item.interest}</td>
                <td>{item.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="strategy-panel">
        <h3>수주 전략</h3>
        <div className="strategy-grid">
          {salesStrategy.map((item, index) => (
            <div className="strategy-step" key={item}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
