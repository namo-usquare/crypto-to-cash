import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"

interface FaqItemProps {
  value: string
  question: string
  answer: string
}

/**
 * FaqItem component displays a single FAQ question and answer in an accordion
 * @param {FaqItemProps} props - Component props
 * @returns JSX.Element
 */
export const FaqItem = ({ value, question, answer }: FaqItemProps) => {
  return (
    <AccordionItem
      value={value}
      className="border border-gray-800 rounded-lg overflow-hidden bg-[#f5f5f5]"
    >
      <AccordionTrigger className="px-6 py-4 hover:bg-[#f5f5f5] text-black transition-colors font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent className="px-6 py-4 text-black">
        {answer}
      </AccordionContent>
    </AccordionItem>
  )
} 