import type { ReactNode } from 'react';

type SectionProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
  id?: string;
  className?: string;
};

export function Section({ eyebrow, title, description, children, id, className }: SectionProps) {
  return (
    <section className={className ? `section ${className}` : 'section'} id={id}>
      <div className="section__header">
        <div>
          {eyebrow ? <span className="section__eyebrow">{eyebrow}</span> : null}
          <h2>{title}</h2>
        </div>
        {description ? <p>{description}</p> : <span aria-hidden="true" />}
      </div>
      {children}
    </section>
  );
}
