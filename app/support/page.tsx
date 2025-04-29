import Image from "next/image"
import { Search, Camera, MessageCircle } from "lucide-react"
import Layout from "@/components/layout"


export default function Home() {
  return (
    <Layout>
    <div className=" p-6 max-w-5xl mx-auto  bg-[#0d0d10] bg-grid-pattern text-white">
      {/* Top Navigation */}

      <div className="border-t border-[#333] mt-2"></div>

      {/* Main Content */}
      <div className="flex">

        <main className="flex-1 p-6">
          <h1 className="text-2xl font-bold mb-6">Help and Support</h1>

          <div className="bg-[#3a3a3a] rounded-xl p-6 max-w-4xl mx-auto">
            <div className="space-y-6">
              {/* Support message */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/friendly-support-avatar.png"
                    alt="Support Agent"
                    width={40}
                    height={40}
                    className="bg-[#00c2ff]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="bg-[#4a4a4a] rounded-lg p-3 max-w-md">
                    <p>Hi Kitsbase, Let me know you need help and you can ask us any questions.</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">08:20 AM</span>
                </div>
              </div>

              {/* User message */}
              <div className="flex gap-3 justify-end">
                <div className="flex flex-col items-end">
                  <div className="bg-[#2d3748] rounded-lg p-3 max-w-md">
                    <p>How to create a Ultron Wallet account?</p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">08:21 AM</span>
                </div>
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image src="/abstract-user-icon.png" alt="User" width={40} height={40} className="bg-[#f97316]" />
                </div>
              </div>

              {/* Support response */}
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="/friendly-support-avatar.png"
                    alt="Support Agent"
                    width={40}
                    height={40}
                    className="bg-[#00c2ff]"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="bg-[#4a4a4a] rounded-lg p-3 max-w-md">
                    <p>
                      Open the Ultron Wallet app to get started and follow the steps. Ultron Wallet doesn't charge a fee
                      to create or maintain your Ultron Wallet account.
                    </p>
                  </div>
                  <span className="text-xs text-gray-400 mt-1">08:22 AM</span>
                </div>
              </div>
            </div>

            {/* Message input */}
            <div className="mt-8 flex items-center gap-3">
              <button className="w-10 h-10 rounded-full bg-[#2d2d2d] flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </button>
              <div className="relative flex-1">
                <input
                  type="text"
                  className="w-full bg-[#2d2d2d] rounded-full py-3 px-4 pr-10 focus:outline-none"
                  placeholder="Write a comment"
                />
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Support Button */}
      <div className="fixed bottom-6 right-6">
        <button className="bg-[#00d26a] text-black w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>
    </Layout>
  )
}
