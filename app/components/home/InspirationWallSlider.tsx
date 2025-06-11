import { useEffect, useRef } from "react"

import { cn } from "~/lib/utils"

export default function InspirationWallSlider() {
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    let animationFrameId: number
    let scroll = 0

    const animate = () => {
      scroll += 0.5
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0
        scroll = 0
      } else {
        track.scrollLeft = scroll
      }
      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => cancelAnimationFrame(animationFrameId)
  }, [])

  return (
    <div className="overflow-hidden py-8">
      <h2 className="text-center text-2xl font-semibold mb-4">
        Share your setup with <span className="text-primary">#Meble4UFurniture</span>
      </h2>

      <div
        className="flex gap-4 animate-marquee whitespace-nowrap w-full overflow-hidden"
        ref={trackRef}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <img
            key={i}
            src={`/image${++i}.svg`}
            alt={`wall slider - image${++i}`}
            className={cn(
              "rounded-lg object-cover",
              i % 4 === 0 && "h-60 w-60",
              i % 4 === 1 && "h-48 w-64",
              i % 4 === 2 && "h-72 w-52",
              i % 4 === 3 && "h-56 w-56"
            )}
          />
        ))}
      </div>
    </div>
  )
}
