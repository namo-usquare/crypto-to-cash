export default function ReviewScreen() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Review Exchange Rate</h2>

      <div className="space-y-6">
        <div className="border border-[#2a3042] rounded-lg bg-[#1a1f2e] overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <span className="text-gray-400">Converting</span>
            <span className="text-xl font-semibold">0.05</span>
          </div>
          <div className="p-4 flex justify-between items-center border-t border-[#2a3042]">
            <span className="text-gray-400">You'll Receive</span>
            <span className="text-xl font-semibold">11,274.45 AED</span>
          </div>
        </div>

        <div className="border border-[#2a3042] rounded-lg bg-[#1a1f2e] p-6">
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
      </div>
    </div>
  )
}
