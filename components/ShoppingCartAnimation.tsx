import { motion } from "framer-motion"

/**
 * ShoppingCartAnimation component displays an animated shopping cart SVG
 * @returns JSX.Element
 */
export const ShoppingCartAnimation = () => {
  return (
    <motion.div
      className="relative w-64 h-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Cart Base */}
      <motion.svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M20 100 L200 100 L180 180 L40 180 Z"
          stroke="#6366f1"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
        <motion.path
          d="M140 100 C140 60, 180 60, 180 100"
          stroke="#6366f1"
          strokeWidth="2"
          fill="transparent"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        />
        <motion.circle
          cx="70"
          cy="190"
          r="10"
          fill="#a78bfa"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
        />
        <motion.circle
          cx="150"
          cy="190"
          r="10"
          fill="#a78bfa"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 2.2 }}
        />
      </motion.svg>

      {/* Cart Animation */}
      <motion.div
        animate={{
          y: [0, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      />
    </motion.div>
  )
} 