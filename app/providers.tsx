'use client'

import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import '@rainbow-me/rainbowkit/styles.css'
import { useState } from 'react'

// Configure chains and client
const config = getDefaultConfig({
  appName: 'crypto-to-cash',
  projectId: '9c77b641594233d257e2c8092ddceba9', // Replace with your WalletConnect project ID
  chains: [mainnet],
})

/**
 * Providers component that wraps the application with necessary providers
 * @param children - React children to be wrapped by providers
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // Create a new QueryClient instance for each render to ensure proper cleanup
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000, // 1 minute
        retry: 1,
      },
    },
  }))

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </WagmiProvider>
  )
} 