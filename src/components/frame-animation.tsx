import { useEffect, useState } from 'react'

interface FrameAnimationProps {
  frames: string[]
  alt: string
  className?: string
  frameDurationMs?: number
}

export function FrameAnimation({
  frames,
  alt,
  className,
  frameDurationMs = 140,
}: FrameAnimationProps) {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    if (frames.length <= 1) {
      return
    }

    const interval = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % frames.length)
    }, frameDurationMs)

    return () => window.clearInterval(interval)
  }, [frameDurationMs, frames.length])

  if (frames.length === 0) {
    return null
  }

  return (
    <img
      src={frames[frameIndex]}
      alt={alt}
      className={className}
      style={{ imageRendering: 'pixelated' }}
    />
  )
}
