import { estimateItems, maintenanceItems, totalEstimate } from '../data/proposalData';
import { Section } from './Section';

const formatWon = (value: number) => `${value.toLocaleString('ko-KR')}원`;

export function Estimate() {
  return (
    <Section
      eyebrow="07. Estimate"
      title="고객사 전달 견적서"
      description="본 견적은 A사 내부 인프라 및 HW/GPU 구매 비용을 제외하고, AX CIC의 컨설팅, 구축, 품질 검증, 교육 및 안정화 비용을 기준으로 산정한다."
    >
      <div className="estimate__summary">
        <div className="estimate-total">
          <span>최종 견적</span>
          <strong>{formatWon(totalEstimate)}</strong>
          <span>VAT 별도</span>
        </div>
        <div className="maintenance-box">
          <span>유지보수 제안</span>
          <strong>월 8,000,000원</strong>
          <p>VAT 별도</p>
        </div>
      </div>
      <div className="estimate-condition">내부 인프라 및 HW/GPU 구매 비용 제외</div>

      <div className="estimate__layout">
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
                const percent = Math.round((item.amount / totalEstimate) * 100);
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
                <td className="amount-cell">{formatWon(totalEstimate)}</td>
                <td className="ratio-cell">100%</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="chart-card" aria-label="항목별 금액 비중 막대 차트">
          <h3>항목별 금액 비중</h3>
          <p className="chart-note">항목별 금액 비중</p>
          <div className="chart-list">
          {estimateItems.map((item) => {
            const percent = Math.round((item.amount / totalEstimate) * 100);
            return (
              <div className="chart-row" key={item.item}>
                <div className="chart-meta">
                  <span>{item.item}</span>
                  <strong>{percent}%</strong>
                </div>
                <div className="chart-track">
                  <span style={{ width: `${percent}%` }} />
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </div>

      <div className="maintenance-detail">
        <strong>유지보수 포함 항목</strong>
        <div className="pill-list">
          {maintenanceItems.map((item) => (
            <span className="pill" key={item}>{item}</span>
          ))}
        </div>
      </div>
    </Section>
  );
}
