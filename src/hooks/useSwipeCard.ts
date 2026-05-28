import { useEffect, useRef, useState } from 'preact/hooks'
import { drag } from '@use-gesture/vanilla'

export type SwipeDirection = 'left' | 'right' | 'up'

type UseSwipeCardOptions = {
  onSwipe?: (direction: SwipeDirection) => void
  threshold?: number
}

export function useSwipeCard<T extends HTMLElement>({ onSwipe, threshold = 88 }: UseSwipeCardOptions = {}) {
  const ref = useRef<T>(null)
  const [style, setStyle] = useState({
    transform: 'translate3d(0px, 0px, 0px) rotate(0deg)',
    transition: 'transform 180ms ease'
  })

  useEffect(() => {
    if (!ref.current) return

    const cleanup = drag(
      ({ down, movement: [mx, my], velocity: [vx], direction: [dx], last }) => {
        if (down) {
          const rotate = mx / 22
          setStyle({
            transform: `translate3d(${mx}px, ${my}px, 0px) rotate(${rotate}deg)`,
            transition: 'none'
          })
          return
        }

        if (last) {
          const strongHorizontal = Math.abs(mx) > threshold || Math.abs(vx) > 0.5
          const strongUp = my < -threshold

          if (strongHorizontal && onSwipe) {
            onSwipe(dx > 0 ? 'right' : 'left')
          } else if (strongUp && onSwipe) {
            onSwipe('up')
          }

          setStyle({
            transform: 'translate3d(0px, 0px, 0px) rotate(0deg)',
            transition: 'transform 220ms cubic-bezier(.2,.8,.2,1)'
          })
        }
      },
      {
        target: ref.current,
        eventOptions: { passive: false }
      }
    )

    return () => cleanup()
  }, [onSwipe, threshold])

  return { ref, style }
}
