export default function SendScreen() {
  return (
    <div className="text-white">
      <h2 className="text-2xl font-bold mb-8">Send to Escrow Address</h2>

      <div className="flex flex-col items-center justify-center">
        <div className="border-4 border-white p-2 rounded-lg bg-white mb-8">
          <div className="w-64 h-64">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Desktop%20-%207-GBBOKEZu62KvZJQZpZMceqCReS2o2z.png"
              alt="QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-xl mb-6">Or</p>

          <div className="flex items-center">
            <div className="bg-[#2a3042] rounded-lg p-4 flex-1 text-gray-300 truncate">
              dftguuxknbsh*********4264849
            </div>
            <button className="ml-2 p-4 bg-[#2a3042] rounded-lg">
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
                <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
