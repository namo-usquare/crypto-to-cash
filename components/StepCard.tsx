import { motion } from "framer-motion"

interface StepCardProps {
  number: number
  title: string
  delay: number
}

/**
 * StepCard component displays a numbered step in the how-it-works section
 * @param {StepCardProps} props - Component props
 * @returns JSX.Element
 */
export const StepCard = ({ number, title, delay }: StepCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a2e4c] text-green-400 text-xl font-bold mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {number}
      </motion.div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  )
} 