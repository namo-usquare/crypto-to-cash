"use client"

import { useState } from "react"

export default function AddressScreen() {
  const [address, setAddress] = useState("")
  const [saveAsDefault, setSaveAsDefault] = useState(false)

  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Select Delivery Address</h2>

      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center p-4 border border-[#2a3042] rounded-lg bg-[#1a1f2e]">
            <input
              type="text"
              placeholder="Enter Delivery Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full bg-transparent focus:outline-none"
            />
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

        <div className="flex items-center gap-2">
          <div
            className={`w-5 h-5 border border-[#2a3042] rounded flex items-center justify-center cursor-pointer ${saveAsDefault ? "bg-[#22c55e]" : ""}`}
            onClick={() => setSaveAsDefault(!saveAsDefault)}
          >
            {saveAsDefault && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-black"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            )}
          </div>
          <span>Save as Default Delivery Address</span>
        </div>

        <div className="border border-[#2a3042] rounded-lg overflow-hidden h-64 relative">
          <div
            className="absolute inset-0 bg-cover bg-center"
            // style={{
            //   backgroundImage:
            //     "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%205-PmZdNrkHo48kh6yW4jiSDwfarx0qph.png')",
            // }}
          ></div>

          <div className="absolute bottom-4 right-4 flex gap-2">
            <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
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
                className="w-5 h-5 text-black"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5 5 4 4 0 0 1-5-5 4 4 0 0 1 5-5 4 4 0 0 1 5 5 10 10 0 0 0-10-10Z" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 17v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 14v.01" />
              </svg>
            </button>
            <button className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
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
                className="w-5 h-5 text-black"
              >
                <path d="M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0" />
                <circle cx="12" cy="8" r="2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
