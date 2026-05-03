import type { HTMLAttributes, ReactNode } from 'react'

interface SwapCardProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string
  title?: string
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function SwapCard({
  eyebrow,
  title,
  className = '',
  contentClassName = '',
  children,
  ...props
}: SwapCardProps) {
  return (
    <article className={`swap-card ${className}`.trim()} {...props}>
      {eyebrow || title ? (
        <header className="swap-card-header">
          {eyebrow ? <p className="swap-card-eyebrow">{eyebrow}</p> : null}
          {title ? <h3 className="swap-card-title">{title}</h3> : null}
        </header>
      ) : null}
      <div className={`swap-card-content ${contentClassName}`.trim()}>{children}</div>
    </article>
  )
}
