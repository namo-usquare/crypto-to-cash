"use client"

import type React from "react"

import { useState } from "react"

export default function AmountScreen() {
  const [amount, setAmount] = useState("0.05")
  const [estimatedValue, setEstimatedValue] = useState("11,274.45")

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = e.target.value
    setAmount(newAmount)

    // In a real app, you would calculate the estimated value based on the amount
    // This is just a simple example
    if (newAmount && !isNaN(Number.parseFloat(newAmount))) {
      const calculatedValue = Number.parseFloat(newAmount) * 225489
      setEstimatedValue(calculatedValue.toLocaleString(undefined, { maximumFractionDigits: 2 }))
    } else {
      setEstimatedValue("0.00")
    }
  }

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-2">Convert Crypto to cash</h2>
      <p className="text-gray-400 mb-8">Select Crypto and enter the amount to convert</p>

      <div className="space-y-6">
        <div>
          <h3 className="text-lg mb-3">Choose Crypto Currency</h3>
          <div className="relative">
            <div className="flex items-center p-4 border border-[#2a3042] rounded-lg bg-[#1a1f2e]">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-[#f7931a] rounded-full flex items-center justify-center mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="text-white"
                  >
                    <path d="M23.638 14.904c-1.602 6.425-8.113 10.342-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.415-.614.32.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.52 2.75 2.084v.006z" />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold">Bitcoin</div>
                  <div className="text-sm text-gray-400">Balance: 0.5432</div>
                </div>
              </div>
              <div className="ml-auto">
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
                  className="w-5 h-5 text-gray-400"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg mb-3">Amount to Convert</h3>
          <div className="border border-[#2a3042] rounded-lg bg-[#F5F5F526] overflow-hidden">
            <div className="p-4 border-b border-[#2a3042]">
              <div className="flex justify-between text-sm text">
                <span>You'll Convert</span>
                <span> <span className="text-green-400" >Max</span>  Available: 0.5432</span>
              </div>
              <div className="flex items-center mt-2">
                <input
                  type="text"
                  value={amount}
                  onChange={handleAmountChange}
                  className="w-full bg-transparent text-xl font-semibold focus:outline-none"
                />
                <div className="bg-[#2a3042] px-4 py-1 rounded-full text-sm">BTC</div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Estimated Value</span>
                <span className="font-semibold">{estimatedValue} AED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
