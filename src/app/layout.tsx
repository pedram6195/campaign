import { IRANSansX } from '@/fonts'
import { Providers } from './providers'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl" className={IRANSansX.variable}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
