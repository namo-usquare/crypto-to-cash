"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import AmountScreen from "@/components/amount-screen"
import AddressScreen from "@/components/address-screen"
import ReviewScreen from "@/components/review-screen"
import SendScreen from "@/components/send-screen"
import ConfirmScreen from "@/components/confirm-screen"
import StepIndicator from "@/components/step-indicator"

export default function ExchangePage() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <Layout>
      <div className="w-full max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-6">Exchange</h1>

        <div className="bg-[#1e2330] rounded-lg p-8">
          <StepIndicator currentStep={currentStep} />

          {currentStep === 1 && <AmountScreen />}
          {currentStep === 2 && <AddressScreen />}
          {currentStep === 3 && <ReviewScreen />}
          {currentStep === 4 && <SendScreen />}
          {currentStep === 5 && <ConfirmScreen />}

          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                onClick={handleBack}
                className="flex items-center gap-2 bg-transparent border border-[#2a3042] text-white px-6 py-3 rounded-full hover:bg-[#2a3042] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m15 18-6-6 6-6" />
                </svg>
                Back
              </button>
            )}

            {currentStep < 5 ? (
              <button
                onClick={handleNext}
                className={`ml-auto flex items-center gap-2 bg-[#22c55e] text-black px-8 py-3 rounded-full hover:bg-[#16a34a] transition-colors ${currentStep === 4 ? "hidden" : ""}`}
              >
                Continue
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            ) : null}

            {currentStep === 3 && (
              <button
                onClick={handleNext}
                className="ml-auto flex items-center gap-2 bg-[#22c55e] text-black px-8 py-3 rounded-full hover:bg-[#16a34a] transition-colors"
              >
                Process to Payment
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M21 8v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
                  <path d="M21 12H5" />
                  <path d="M9 16v-4" />
                </svg>
              </button>
            )}

            {currentStep === 5 && (
              <button className="mx-auto flex items-center gap-2 bg-[#22c55e] text-black px-8 py-3 rounded-full hover:bg-[#16a34a] transition-colors">
                Track Delivery
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M10 13a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
                  <path d="M13.41 10.59 16 8l-4-4-4 4 2.59 2.59" />
                  <path d="M9.5 15.5 7 18l4 4 4-4-2.5-2.5" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
