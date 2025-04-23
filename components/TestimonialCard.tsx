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
    <motion.div
      className="bg-white p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -5 }}
    >
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
    </motion.div>
  )
} 