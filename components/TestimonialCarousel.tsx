import { useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { TestimonialCard } from './TestimonialCard'

interface Testimonial {
  stars: number
  text: string
  name: string
  location: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

/**
 * TestimonialCarousel component displays testimonials in a carousel with glassmorphism effect
 * Shows 1 testimonial on mobile and 3 on desktop with auto-scrolling
 * @param {TestimonialCarouselProps} props - Component props
 * @returns JSX.Element
 */
export const TestimonialCarousel = ({ testimonials }: TestimonialCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    loop: true,
    slidesToScroll: 1,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  // Auto-scroll functionality
  useEffect(() => {
    if (!emblaApi) return

    const interval = setInterval(() => {
      emblaApi.scrollNext()
    }, 5000) // Scroll every 5 seconds

    return () => clearInterval(interval)
  }, [emblaApi])

  return (
    <div className="relative">
      <div
        className="overflow-x-hidden rounded-2xl"
        ref={emblaRef}
      >
        <div className="flex">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_33.333%] min-w-0 px-4">
              <TestimonialCard
                {...testimonial}
                delay={index * 0.2}
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10"
        onClick={scrollPrev}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors z-10"
        onClick={scrollNext}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  )
} 