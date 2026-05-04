import { adminLoop, ragFlow } from '../data/proposalData';

export function RagArchitecture() {
  return (
    <div className="rag-diagram">
      <div className="panel-heading">
        <div>
          <span>On-prem Architecture</span>
          <h3>On-prem RAG 구조 다이어그램</h3>
        </div>
        <p>내부망 경계 안에서 질문 처리, 권한 기반 검색, 답변 생성, 로그/오답 신고가 이어지도록 구성한다.</p>
      </div>

      <div className="network-boundary">
        <div className="boundary-label">
          <span>On-prem 내부망</span>
          <span>외부 API 미사용</span>
        </div>
        <div className="flow-diagram" aria-label="On-prem RAG 처리 흐름">
          {ragFlow.map((step, index) => (
            <article className="flow-node" key={step.title}>
              <span className="flow-number">{String(index + 1).padStart(2, '0')}</span>
              <strong>{step.title}</strong>
              <p>{step.caption}</p>
            </article>
          ))}
        </div>
      </div>

      <aside className="admin-loop" aria-label="운영 루프">
        <div className="admin-loop__intro">
          <span className="card-label">운영 루프</span>
          <h3>관리자 영역</h3>
          <p>문서와 피드백을 운영 데이터로 관리해 재인덱싱과 품질 개선으로 연결한다.</p>
        </div>
        <div className="admin-loop__items">
          {adminLoop.map((item, index) => (
            <div className="loop-item" key={item.title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{item.title}</strong>
              <p>{item.caption}</p>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
