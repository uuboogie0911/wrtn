import { Section } from './Section';

export function Conclusion() {
  return (
    <Section eyebrow="Conclusion" title="결론">
      <div className="conclusion-card">
        <p>
          본 사업은 A사의 보안 요구사항을 전제로 하되, 빠른 도입을 위해 MVP 범위를 명확히 통제하는
          방식으로 추진한다.
        </p>
        <p>
          AX CIC는 단순 RAG Chatbot 구축사가 아니라, A사의 내부 지식 활용 구조를 재설계하고 전사 AX
          확산까지 연결하는 실행 파트너로 포지셔닝한다.
        </p>
      </div>
    </Section>
  );
}
