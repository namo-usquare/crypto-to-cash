import { motion } from "framer-motion"
import Image from "next/image"

interface TestimonialCardProps {
  stars: number
  text: string
  name: string
  location: string
  delay: number
}

/**
 * TestimonialCard component displays a customer testimonial with rating and details
 * @param {TestimonialCardProps} props - Component props
 * @returns JSX.Element
 */
export const TestimonialCard = ({
  stars,
  text,
  name,
  location,
  delay,
}: TestimonialCardProps) => {
  return (
    <div
      className="bg-white pt-8 px-6 pb-6 rounded-xl relative mt-6"
      // initial={{ opacity: 0, y: 20 }}
      // whileInView={{ opacity: 1, y: 0 }}
      // viewport={{ once: true }}
      // transition={{ duration: 0.5, delay }}
      // whileHover={{ y: -5 }}
    >
      {/* Quote Symbol */}
      <div className="absolute -top-6 left-6 w-10 h-10 bg-[#1a1a24] rounded-full flex items-center justify-center shadow-lg">
        <svg 
          width="18" 
          height="18" 
          viewBox="0 0 18 18" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M17.425 0.151229L17.015 3.14423C15.949 3.06223 15.17 3.2809 14.678 3.80023C14.186 4.31956 13.8853 5.01656 13.776 5.89123C13.6667 6.7659 13.6393 7.7089 13.694 8.72023H17.425V17.3712H10.414V7.08023C10.414 4.56556 11.0427 2.67956 12.3 1.42223C13.5847 0.164897 15.293 -0.25877 17.425 0.151229ZM7.011 0.151229L6.601 3.14423C5.535 3.06223 4.756 3.2809 4.264 3.80023C3.772 4.31956 3.47133 5.01656 3.362 5.89123C3.25267 6.7659 3.22533 7.7089 3.28 8.72023H7.011V17.3712H0V7.08023C0 4.56556 0.628667 2.67956 1.886 1.42223C3.17067 0.164897 4.879 -0.25877 7.011 0.151229Z" 
            fill="white"
          />
        </svg>
      </div>
      
      <div className="flex text-green-400 mb-3">
        {Array.from({ length: stars }).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="text-black mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden">
          <Image
            src="/placeholder.svg?height=32&width=32"
            alt={name}
            width={32}
            height={32}
          />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-black">{location}</p>
        </div>
      </div>
    </div>
  )
} 