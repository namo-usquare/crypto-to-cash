interface ReviewScreenProps {
  handleNext: () => void;
}

export default function ReviewScreen({ handleNext }: ReviewScreenProps) {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Review Exchange Rate</h2>

      <div className="space-y-6">
        <div className="border border-[#2a3042] rounded-lg bg-[#F5F5F526] overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <span className="text-gray-400">Converting</span>
            <span className="text-xl font-semibold">0.05</span>
          </div>
          <div className="p-4 flex justify-between items-center border-t border-[#2a3042]">
            <span className="text-gray-400">You'll Receive</span>
            <span className="text-xl font-semibold">11,274.45 AED</span>
          </div>
        </div>

        <div className="border border-[#2a3042] rounded-lg bg-[#F5F5F526] p-6">
          <h3 className="text-lg font-semibold mb-4">Exchange Details</h3>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Exchange Rate</span>
              <span>1 BTC = 22548.9 AED</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Service fee (1%)</span>
              <span>225.489 AED</span>
            </div>

            <div className="border-t border-[#2a3042] pt-4 mt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>22774.389 AED</span>
              </div>
            </div>
          </div>
        </div>
    <div className="flex justify-center ">

        <button
                onClick={handleNext}
                className=" flex items-center gap-2 bg-[#22c55e] text-black px-8 py-3 rounded-full hover:bg-[#16a34a] transition-colors"
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
      </div>
      </div>
    </div>
  )
}
