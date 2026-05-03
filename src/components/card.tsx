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
  const hasHeader = Boolean(eyebrow || title);

  return (
    <article className={`card ${className}`.trim()} {...props}>
      {hasHeader ? (
        <header className="card-header">
          {eyebrow ? <p className="card-eyebrow">{eyebrow}</p> : null}
          {title ? <h3 className="card-title">{title}</h3> : null}
        </header>
      ) : null}
      <div
        className={`card-content ${hasHeader ? "card-content-with-header" : ""} ${contentClassName}`.trim()}
      >
        {children}
      </div>
    </article>
  );
}
