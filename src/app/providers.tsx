'use client'

import theme from '@/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { variant: 'top-accent', position: 'top', duration: 3000 } }}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}
