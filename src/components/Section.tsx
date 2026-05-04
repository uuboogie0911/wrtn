import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
};

export function Section({ eyebrow, title, description, children, id }: SectionProps) {
  return (
    <section className="section" id={id}>
      <div className="section-heading">
        <div>
          {eyebrow ? <span className="eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
        </div>
        {description ? <p>{description}</p> : <span aria-hidden="true" />}
      </div>
      {children}
    </section>
  );
}
