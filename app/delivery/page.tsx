"use client"

import Layout from "@/components/layout"
import { Check, Receipt } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function OrderTracking() {
  const [confirmed, setConfirmed] = useState(false)

  return (
    <Layout>
    <div className="max-w-5xl mx-auto overflow-hidden rounded-lg bg-gray-900 text-white">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <div>
            <h1 className="text-xl font-semibold">Order Tracking</h1>
            <p className="text-gray-400">
              Transaction amount: <span className="text-white">22774.389 AED</span>
            </p>
          </div>
          <div className="mt-2 md:mt-0">
            <div className="px-4 py-2 bg-transparent border border-green-500 rounded-full text-green-500">
              Order ID: 000526738965
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Map Section */}
          <div className="relative w-full md:w-3/5 h-[400px] md:h-[500px]">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Frame%2048097620-SNMvZmxbbmQSQUBBdGKyA6TsCuMl4L.png"
              alt="Delivery location map"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Delivery Status Section */}
          <div className="w-full md:w-2/5 bg-gray-800/80 p-6">
            <h2 className="text-2xl font-semibold mb-6">Delivery Status</h2>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-gray-700"></div>

              {/* Status Items */}
              <div className="space-y-10">
                <StatusItem title="Processing" description="Your crypto has been received" completed={true} />
                <StatusItem title="Courier Assigned" description="Cash will be delivered in a while" completed={true} />
                <StatusItem title="En Route" description="Cash successfully processed" completed={true} />
                <StatusItem title="Delivered" description="Cash successfully Delivered" completed={true} />
              </div>
            </div>

            <div className="mt-10">
              <button
                onClick={() => setConfirmed(true)}
                className="w-full py-3 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center gap-2 transition-colors"
              >
                <span>Confirm Receipt</span>
                <Receipt className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}

interface StatusItemProps {
  title: string
  description: string
  completed: boolean
}

function StatusItem({ title, description, completed }: StatusItemProps) {
  return (
    <div className="flex items-start">
      <div className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-green-500 mr-4">
        {completed && <Check className="w-5 h-5 text-white" />}
      </div>
      <div>
        <h3 className="text-lg font-medium text-green-500">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  )
}
