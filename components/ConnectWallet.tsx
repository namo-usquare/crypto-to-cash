'use client'

import { ConnectButton } from '@rainbow-me/rainbowkit'
import { Button } from '@/components/ui/button'

export function ConnectWallet() {
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
                <div style={{ display: 'flex', gap: 12 }}>
                  <Button
                    onClick={openChainModal}
                    className="bg-gray-800 hover:bg-gray-700 text-white font-medium rounded-full"
                  >
                    {chain.name}
                  </Button>

                  <Button
                    onClick={openAccountModal}
                    className="bg-green-400 hover:bg-green-500 text-black font-medium rounded-full"
                  >
                    {account.displayName}
                  </Button>
                </div>
              )
            })()}
          </div>
        )
      }}
    </ConnectButton.Custom>
  )
} 