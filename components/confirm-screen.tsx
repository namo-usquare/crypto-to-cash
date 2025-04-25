export default function ConfirmScreen() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Order confirmation</h2>

      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold mb-2">Order Successfully Placed</h3>
        <p className="text-gray-400 mb-8">Your Cash will be delivered to your address</p>

        <div className="border border-[#2a3042] rounded-lg bg-[#1a1f2e] p-6 w-full max-w-md">
          <h4 className="text-lg font-semibold mb-4">Transaction Details</h4>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Transaction ID</span>
              <span>0005267389065</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Estimated Delivery</span>
              <span>15 mins</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
