import type { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  title?: string;
  className?: string;
  contentClassName?: string;
  children: ReactNode;
}

export function Card({
  eyebrow,
  title,
  className = "",
  contentClassName = "",
  children,
  ...props
}: CardProps) {
  return (
    <article className={`card ${className}`.trim()} {...props}>
      {eyebrow || title ? (
        <header className="card-header">
          {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
          {title ? <h3 className="card-title">{title}</h3> : null}
        </header>
      ) : null}
      <div className={`card-content ${contentClassName}`.trim()}>{children}</div>
    </article>
  );
}
