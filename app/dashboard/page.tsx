"use client"

import { useState } from "react"
import {
  ArrowDown,
  ArrowUp,
  ChevronDown,
  Clock,
  CreditCard,
  LogOut,
  MessageCircle,
  Package,
  Search,
  Settings,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ConnectWallet } from "@/components/ConnectWallet"

export default function CryptoDashboard() {
  const [fromAmount, setFromAmount] = useState("10")
  const [toAmount, setToAmount] = useState("1028.9")

  return (
    <div className="min-h-screen text-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-green-900/20">
        <div className="flex items-center gap-2">
          <div className="text-[#00ff96] flex items-center gap-1">
            <div className="flex items-center gap-0.5">
              <div className="w-1.5 h-3 bg-[#00ff96] rounded-sm"></div>
              <div className="w-1.5 h-4 bg-[#00ff96] rounded-sm"></div>
              <div className="w-1.5 h-5 bg-[#00ff96] rounded-sm"></div>
            </div>
            <span className="font-bold text-xl">Ultron</span>
          </div>
        </div>

        <div className="relative flex-1 max-w-xl mx-4">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search"
            className="w-full bg-[#1a1d2d] border-0 pl-10 rounded-full text-gray-300 focus-visible:ring-1 focus-visible:ring-[#00ff96]"
          />
        </div>

        <div className="flex items-center gap-4">
          <span className="text-gray-200">Hi, Prime</span>
          <ConnectWallet/>
          {/* <Button className="bg-[#00ff96] hover:bg-[#00cc78] text-black font-medium rounded-full">Wallet</Button> */}
        </div>
      </header>

      <div className="flex justify-around">
        {/* Sidebar */}
        <aside className="w-20 bg-[#0c0e18]/80 h-[calc(100vh-73px)] flex flex-col items-center">
          <div className="flex flex-col items-center w-full pt-4">
            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="bg-[#00ff96] w-14 h-14 rounded-full flex items-center justify-center">
                <CreditCard className="h-6 w-6 text-black" />
              </div>
              <span className="text-xs text-[#00ff96] mt-1">Dashboard</span>
            </div>

            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff96]">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                >
                  <path
                    d="M7 10L12 15L17 10"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 3V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xs text-gray-400 mt-1">Exchange</span>
            </div>

            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff96]">
                <Package className="h-6 w-6" />
              </div>
              <span className="text-xs text-gray-400 mt-1">Delivery</span>
            </div>

            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff96]">
                <Clock className="h-6 w-6" />
              </div>
              <span className="text-xs text-gray-400 mt-1">History</span>
            </div>

            <div className="w-10 border-t border-green-900/20 my-2"></div>

            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff96]">
                <User className="h-6 w-6" />
              </div>
              <span className="text-xs text-gray-400 mt-1">Profile</span>
            </div>

            <div className="relative w-full flex flex-col items-center mb-6">
              <div className="w-14 h-14 rounded-full flex items-center justify-center text-gray-400 hover:text-[#00ff96]">
                <Settings className="h-6 w-6" />
              </div>
              <span className="text-xs text-gray-400 mt-1">Settings</span>
            </div>
          </div>

          <div className="mt-auto mb-8">
            <div className="relative w-full flex flex-col items-center">
              <div className="bg-red-500/20 w-14 h-14 rounded-full flex items-center justify-center text-red-500">
                <LogOut className="h-6 w-6" />
              </div>
              <span className="text-xs text-red-500 mt-1">Logout</span>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className=" p-6">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"
         
          >
            {/* Balance Card */}
            <div className="lg:col-span-2 bg-[#0c0e18] border border-green-900/20 rounded-xl p-6"
             style={{
                background: `radial-gradient(83.14% 124.87% at 61.81% -22.77%, rgba(62, 255, 139, 0.3) 0%, rgba(62, 255, 139, 0) 100%),
                linear-gradient(0deg, #13181F, #13181F),
                radial-gradient(81.84% 81.84% at 30.7% 18.16%, rgba(62, 255, 139, 0.2) 0%, rgba(62, 255, 139, 0) 74.43%)`
              }}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-xl font-medium text-gray-300">My Balance</h2>
                <div className="flex items-center text-[#00ff96]">
                  <ArrowUp className="h-4 w-4 mr-1" />
                  <span>4,8%</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <div className="text-3xl font-bold">2.54 BTC</div>
                <div className="text-3xl font-bold">AED 365,500</div>
              </div>

              <div className="flex justify-between">
                <div className="flex-1">
                  <div className="flex items-center text-[#00ff96] mb-2">
                    <ArrowUp className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Income</span>
                  </div>
                  <div className="text-lg">AED 21.548,44</div>
                </div>

                <div className="w-px h-16 bg-green-900/20"></div>

                <div className="flex-1 pl-8">
                  <div className="flex items-center text-red-500 mb-2">
                    <ArrowDown className="h-4 w-4 mr-2" />
                    <span className="text-gray-300">Expenses</span>
                  </div>
                  <div className="text-lg">AED 8.769,04</div>
                </div>
              </div>
            </div>

            {/* Convert Widget */}
            <div className="bg-[#0c1a14] border border-green-900/20 rounded-xl p-6"
              style={{
                background: `radial-gradient(76.89% 99.91% at 18.02% 17.56%, rgba(62, 255, 139, 0.2) 0%, rgba(62, 255, 139, 0) 100%)`
              }}
            >
              <h2 className="text-xl font-medium text-gray-300 mb-6">Convert Crypto</h2>

              <div className="flex items-center justify-between mb-4">
                <span>1 NTC</span>
                <div className="flex items-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#00ff96]"
                  >
                    <path
                      d="M5 12h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="m12 5 7 7-7 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="ml-2">$ 102.89 USD</span>
                </div>
              </div>

              <div className="relative mb-4">
                <Input
                  type="text"
                  value={fromAmount}
                  onChange={(e) => setFromAmount(e.target.value)}
                  className="w-full bg-[#1a1d2d] border-0 pr-16 rounded-full text-gray-300 focus-visible:ring-1 focus-visible:ring-[#00ff96]"
                />
                <div className="absolute right-2 top-0 h-full flex items-center">
                  <Button variant="ghost" className="h-8 gap-1 text-gray-300">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#00ff96]"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="relative mb-6">
                <Input
                  type="text"
                  value={toAmount}
                  onChange={(e) => setToAmount(e.target.value)}
                  className="w-full bg-[#1a1d2d] border-0 pr-16 rounded-full text-gray-300 focus-visible:ring-1 focus-visible:ring-[#00ff96]"
                />
                <div className="absolute right-2 top-0 h-full flex items-center">
                  <Button variant="ghost" className="h-8 gap-1 text-gray-300">
                    <span className="text-[#00ff96]">$</span>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <Button className="w-full bg-[#00ff96] hover:bg-[#00cc78] text-black font-medium rounded-full">
                Confirm
              </Button>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="mt-6 border rounded-xl p-6"
          style={{
            background: 'linear-gradient(0deg, #111E2F, #111E2F), radial-gradient(109.84% 120.13% at 28.67% -12.12%, rgba(62, 255, 139, 0.3) 0%, rgba(62, 255, 139, 0) 100%)',
            border: '1px solid',
            borderImageSource: 'linear-gradient(167.36deg, #3EFF8B 43.35%, rgba(62, 255, 139, 0.3) 92.7%)',
            borderImageSlice: 1
          }}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-medium text-gray-300">Recent Orders</h2>
              <Button variant="link" className="text-gray-400 hover:text-[#00ff96]">
                View all
              </Button>
            </div>

            <div className="space-y-4">
              {/* Bitcoin Transaction */}
              <div className="flex justify-between items-center p-4 bg-[#1a1d2d]/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#0c1a14] rounded-full flex items-center justify-center">
                    <ArrowDown className="h-5 w-5 text-[#00ff96]" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#f7931a] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M9.5 2v20M14.5 2v20M4.5 9h15M4.5 15h15"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Bitcoin</div>
                      <div className="text-xs text-gray-400">From: 24676v*8888</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">0.15 BTC</div>
                  <div className="text-xs text-gray-400">21 April 2025 14:23</div>
                </div>
              </div>

              {/* Ethereum Transaction */}
              <div className="flex justify-between items-center p-4 bg-[#1a1d2d]/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1a0c14] rounded-full flex items-center justify-center">
                    <ArrowUp className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#627eea] rounded-full flex items-center justify-center">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium">Ethereum</div>
                      <div className="text-xs text-gray-400">To: 78676v*88872</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">0.205 ETC</div>
                  <div className="text-xs text-gray-400">27 March 2025 17:25</div>
                </div>
              </div>

              {/* Litecoin Transaction */}
              <div className="flex justify-between items-center p-4 bg-[#1a1d2d]/30 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#1a0c14] rounded-full flex items-center justify-center">
                    <ArrowUp className="h-5 w-5 text-red-500" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#b8b8b8] rounded-full flex items-center justify-center">
                      <span className="text-white font-bold">Ł</span>
                    </div>
                    <div>
                      <div className="font-medium">Litecoin</div>
                      <div className="text-xs text-gray-400">To: 78676v*45889</div>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-medium">1.76 LTC</div>
                  <div className="text-xs text-gray-400">27 March 2025 17:38</div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Support Button */}
      <div className="fixed bottom-6 right-6">
        <Button className="w-14 h-14 rounded-full bg-[#00ff96] hover:bg-[#00cc78] flex items-center justify-center">
          <MessageCircle className="h-6 w-6 text-black" />
        </Button>
        <span className="absolute -bottom-1 right-3 text-xs text-[#00ff96]">Support</span>
      </div>
    </div>
  )
}
