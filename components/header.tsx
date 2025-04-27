export default function Header() {
  return (
    <header className="p-4 border-b border-[#2a3042]">
      <div className="flex items-center m-6 justify-between">
        <div className="flex items-center gap-4 w-3/4">
          <div className="flex items-center">
            <div className="text-[#22c55e] mr-2">
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
                className="w-8 h-8"
              >
                <path d="M6 15a7 7 0 1 0 14 0 7 7 0 1 0-14 0Z" />
                <path d="M5.63 12.32A9 9 0 0 0 12 21.39" />
                <path d="M17.34 14.84 12 21.39" />
                <path d="M5.62 12.32 12 21.39" />
                <path d="M17.34 14.84a9 9 0 0 0-4.68-2.84" />
              </svg>
            </div>
            <span className="text-2xl font-bold">Ultron</span>
          </div>

          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
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
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </div>
            <input
              type="search"
              className="block w-full p-3 pl-10 text-sm text-white border rounded-full bg-[#1e2330] border-[#2a3042] focus:ring-[#22c55e] focus:border-[#22c55e] focus:outline-none"
              placeholder="Search"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <span>Hi, Prime</span>
          <button className="bg-[#22c55e] text-black px-6 py-2 rounded-full font-medium">Wallet</button>
        </div>
      </div>
    </header>
  )
}
