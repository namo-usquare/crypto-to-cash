'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

/**
 * NotFound component that displays a 404 error page
 * @returns JSX.Element
 */
export default function NotFound() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
      <p className="text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>
      <Button
        onClick={() => router.push('/')}
        variant="default"
        className="mt-4"
      >
        Return Home
      </Button>
    </div>
  )
} 