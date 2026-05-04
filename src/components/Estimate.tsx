import { estimateItems, maintenanceItems } from '../data/proposalData';
import { Section } from './Section';

const total = estimateItems.reduce((sum, item) => sum + item.amount, 0);

const formatWon = (value: number) => `${value.toLocaleString('ko-KR')}원`;

export function Estimate() {
  return (
    <Section
      eyebrow="Estimate"
      title="고객사 전달 견적서"
      description="본 견적은 A사 내부 인프라 및 HW/GPU 구매 비용을 제외하고, AX CIC의 컨설팅, 구축, 품질 검증, 교육 및 안정화 비용을 기준으로 산정한다."
    >
      <div className="estimate-summary executive-summary">
        <div className="summary-tile primary">
          <span className="label">최종 견적</span>
          <strong>{formatWon(total)}</strong>
          <span>VAT 별도</span>
        </div>
        <div className="summary-tile">
          <span className="label">유지보수 제안</span>
          <strong>월 8,000,000원</strong>
          <span>VAT 별도</span>
        </div>
      </div>

      <div className="estimate-layout">
        <div className="table-card">
          <table className="estimate-table">
            <thead>
              <tr>
                <th>항목</th>
                <th>내용</th>
                <th className="amount-cell">금액</th>
                <th className="ratio-cell">비중</th>
              </tr>
            </thead>
            <tbody>
              {estimateItems.map((item) => {
                const percent = Math.round((item.amount / total) * 100);
                return (
                  <tr key={item.item}>
                    <td>
                      <strong>{item.item}</strong>
                    </td>
                    <td>{item.content}</td>
                    <td className="amount-cell">{formatWon(item.amount)}</td>
                    <td className="ratio-cell">
                      <span className="ratio-badge">{percent}%</span>
                    </td>
                  </tr>
                );
              })}
              <tr className="total-row">
                <td>합계</td>
                <td>컨설팅, 구축, 검증, 교육 및 안정화 비용</td>
                <td className="amount-cell">{formatWon(total)}</td>
                <td className="ratio-cell">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="chart-card" aria-label="항목별 금액 비중 막대 차트">
          <h3>항목별 금액 비중</h3>
          {estimateItems.map((item) => {
            const percent = Math.round((item.amount / total) * 100);
            return (
              <div className="bar-row" key={item.item}>
                <div className="bar-label">
                  <span>{item.item}</span>
                  <strong>{percent}%</strong>
                </div>
                <div className="bar-track">
                  <span className="bar-fill" style={{ width: `${percent}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="maintenance-card">
        <h3>유지보수 포함 항목</h3>
        <div className="pill-list">
          {maintenanceItems.map((item) => (
            <span className="pill" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}
