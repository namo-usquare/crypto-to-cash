'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from '@/components/ui/button'
import { useDisconnect } from 'wagmi'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function ConnectWallet() {
  const { disconnect } = useDisconnect()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        const ready = mounted
        const connected = ready && account && chain

        return (
          <div
            {...(!ready && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    onClick={openConnectModal}
                    className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-full"
                  >
                    Connect Wallet
                  </Button>
                )
              }

              if (chain.unsupported) {
                return (
                  <Button
                    onClick={openChainModal}
                    className="bg-red-500 hover:bg-red-600 text-white font-medium rounded-full"
                  >
                    Wrong network
                  </Button>
                )
              }

              return (
                <div className="relative">
                  <Button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-full flex items-center gap-2 max-w-[200px] sm:max-w-none"
                  >
                    <span className="truncate">{account.displayName}</span>
                    <ChevronDown size={16} />
                  </Button>

                  {isOpen && (
                    <div className="absolute right-0 mt-2 w-48 sm:w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      <div className="px-4 py-2 text-sm text-gray-700 border-b">
                        {chain.name}
                      </div>
                      <button
                        onClick={() => {
                          disconnect()
                          setIsOpen(false)
                        }}
                        className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                      >
                        Disconnect
                      </button>
                    </div>
                  )}
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
} 