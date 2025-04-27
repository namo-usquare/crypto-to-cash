import { useRouter } from 'next/navigation';

export default function ConfirmScreen() {
  const router = useRouter();
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Order confirmation</h2>

      <div className="flex flex-col items-center justify-center text-center">
        <h3 className="text-2xl font-bold mb-2">Order Successfully Placed</h3>
        <p className="text-gray-400 mb-8">Your Cash will be delivered to your address</p>

        <div className="border border-[#2a3042] rounded-lg bg-[#F5F5F526] p-6 w-full ">
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

      <div>
      <button onClick={()=>{router.push('/track-delivery')}} className="mx-auto mt-4 flex items-center gap-2 bg-[#22c55e] text-black px-8 py-3 rounded-full hover:bg-[#16a34a] transition-colors">
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
      </div>
    </div>
  )
}
