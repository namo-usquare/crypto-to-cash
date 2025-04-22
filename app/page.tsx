"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Check, Instagram, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <div className="min-h-screen bg-[#0c0c10] text-white overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-grid-pattern" />
        <motion.div
          className="absolute h-40 w-40 rounded-full bg-green-500/20 blur-3xl"
          animate={{
            x: [0, 100, 50, 200, 0],
            y: [0, 50, 100, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "20%", left: "10%" }}
        />
        <motion.div
          className="absolute h-60 w-60 rounded-full bg-blue-500/20 blur-3xl"
          animate={{
            x: [200, 100, 300, 100, 200],
            y: [300, 200, 100, 200, 300],
          }}
          transition={{
            duration: 25,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
          style={{ top: "40%", right: "10%" }}
        />
      </div>

      {/* Navigation */}
      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-4 py-4 flex justify-end items-center">
          <div className="flex items-center gap-8">
            <Link href="#how-it-works" className="hover:text-green-400 transition-colors">
              How it works
            </Link>
            <Link href="#testimonials" className="hover:text-green-400 transition-colors">
              Testimonials
            </Link>
            <Link href="#faqs" className="hover:text-green-400 transition-colors">
              FAQs
            </Link>
          </div>
          <Button className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-full ml-8">Sign In</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-16 pb-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-3xl"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
            >
              Cash Delivered for Your Crypto
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl mb-8"
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.1 }}
            >
              Anytime, Anywhere in Dubai
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial="hidden"
              animate="visible"
              variants={fadeIn}
              transition={{ delay: 0.2 }}
            >
              <Button className="bg-green-400 hover:bg-green-500 text-black font-bold px-8 py-6 rounded-full text-lg">
                CONVERT CRYPTO NOW
              </Button>
            </motion.div>

            <motion.div
              className="flex justify-center gap-8 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <div className="bg-green-400/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <span>Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-400/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <span>Fast</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="bg-green-400/20 p-1 rounded-full">
                  <Check className="h-5 w-5 text-green-400" />
                </div>
                <span>Private</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ShoppingCartAnimation />
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-20 bg-gray-50 text-black">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            How it works
          </motion.h2>

          <div className="flex justify-center gap-16">
            <StepCard number={1} title="Send Crypto" delay={0} />
            <StepCard number={2} title="Track Delivery" delay={0.2} />
            <StepCard number={3} title="Receive Cash" delay={0.4} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-[#0c0c10]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="bg-[#1a1a24] rounded-2xl p-8 md:p-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              className="text-3xl font-bold text-center mb-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              What our clients{" "}
              <span className="text-green-400 relative">
                say
                <span className="absolute bottom-0 left-0 w-full h-1 bg-green-400"></span>
              </span>
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TestimonialCard
                stars={5}
                text="From BTC to cash in under 2 hours. The courier was professional and discreet. Will definitely use again."
                name="Justin Morris"
                location="Business Bay, Dubai"
                delay={0}
              />
              <TestimonialCard
                stars={5}
                text="When my card stopped working abroad, they saved my trip. Converted ETH to cash while I was having lunch."
                name="Thomas K."
                location="Downtown Dubai"
                delay={0.2}
              />
              <TestimonialCard
                stars={5}
                text="Excellent rates and incredible tracking feature gave me lot of mind."
                name="Sarah L."
                location="Business Bay"
                delay={0.4}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section id="faqs" className="py-20 bg-[#0c0c10]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Frequently Asked Questions
            <span className="block w-40 h-1 bg-green-400 mx-auto mt-4"></span>
          </motion.h2>

          <motion.div
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              <FaqItem
                value="item-1"
                question="Which cryptocurrencies do you accept?"
                answer="We accept Bitcoin (BTC), Ethereum (ETH), Tether (USDT), USD Coin (USDC), Binance Coin (BNB), and several other major cryptocurrencies. Contact us for a full list of supported currencies."
              />
              <FaqItem
                value="item-2"
                question="How long does delivery take?"
                answer="After confirming your transaction, cash delivery typically takes 1-3 hours depending on your location in Dubai. Express delivery is available for urgent needs."
              />
              <FaqItem
                value="item-3"
                question="Is the service available 24/7?"
                answer="Yes, our crypto-to-cash service operates 24 hours a day, 7 days a week, including holidays."
              />
              <FaqItem
                value="item-4"
                question="What are your fees?"
                answer="Our fees range from 1-3% depending on the cryptocurrency, amount, and delivery timeframe. We offer competitive exchange rates that include our service fee."
              />
              <FaqItem
                value="item-5"
                question="How is my privacy protected?"
                answer="We use end-to-end encryption for all communications. Our couriers are trained for discretion and don't carry any information about the source of funds or transaction details."
              />
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-[#0c0c10] border-t border-gray-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-4 gap-12">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-green-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#how-it-works" className="text-gray-400 hover:text-green-400 transition-colors">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link href="#testimonials" className="text-gray-400 hover:text-green-400 transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="#faqs" className="text-gray-400 hover:text-green-400 transition-colors">
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Contact us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    Terms of Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <Instagram size={16} />
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <MessageSquare size={16} />
                    <span>WhatsApp</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-green-400 transition-colors flex items-center gap-2"
                  >
                    <Mail size={16} />
                    <span>Email</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Mobile App"
                  width={200}
                  height={300}
                  className="mx-auto md:ml-0"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ShoppingCartAnimation() {
  return (
    <motion.div
      className="relative w-64 h-64"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Cart Base */}
      <motion.svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
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

function StepCard({ number, title, delay }: { number: number; title: string; delay: number }) {
  return (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
    >
      <motion.div
        className="flex items-center justify-center w-16 h-16 rounded-full bg-[#1a2e4c] text-white text-xl font-bold mb-6"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        {number}
      </motion.div>
      <h3 className="text-xl font-semibold">{title}</h3>
    </motion.div>
  )
}

function TestimonialCard({
  stars,
  text,
  name,
  location,
  delay,
}: {
  stars: number
  text: string
  name: string
  location: string
  delay: number
}) {
  return (
    <motion.div
      className="bg-[#0c0c10] p-6 rounded-xl"
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
      <p className="text-gray-300 mb-4">{text}</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gray-700 rounded-full overflow-hidden">
          <Image src="/placeholder.svg?height=32&width=32" alt={name} width={32} height={32} />
        </div>
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-sm text-gray-400">{location}</p>
        </div>
      </div>
    </motion.div>
  )
}

function FaqItem({ value, question, answer }: { value: string; question: string; answer: string }) {
  return (
    <AccordionItem value={value} className="border border-gray-800 rounded-lg overflow-hidden bg-[#1a1a24]">
      <AccordionTrigger className="px-6 py-4 hover:bg-gray-800/50 transition-colors font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 text-gray-300">{answer}</AccordionContent>
    </AccordionItem>
  )
}
