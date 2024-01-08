import { IRANSansX } from '@/fonts'
import { Providers } from './providers'
import { Viewport } from 'next'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={IRANSansX.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
