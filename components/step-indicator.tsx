interface StepIndicatorProps {
  currentStep: number
}

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  const steps = [
    { number: 1, label: "Amount" },
    { number: 2, label: "Address" },
    { number: 3, label: "Review" },
    { number: 4, label: "Send" },
    { number: 5, label: "Confirm" },
  ]

  return (
    <div className="flex justify-between mb-12">
      {steps.map((step) => (
        <div key={step.number} className="flex flex-col items-center">
          <div
            className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
              currentStep === step.number
                ? "bg-[#22c55e] border-[#22c55e] text-black"
                : currentStep > step.number
                  ? "bg-transparent border-[#22c55e] text-white"
                  : "bg-transparent border-[#2a3042] text-white"
            }`}
          >
            {step.number}
          </div>
          <span className={`mt-2 text-sm ${currentStep === step.number ? "text-[#22c55e]" : "text-white"}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  )
}
