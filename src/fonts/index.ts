import localFont from 'next/font/local'

export const IRANSansX = localFont({
  src: [
    { path: './IRANSansX-Regular.woff', weight: '400' },
    { path: './IRANSansX-Medium.woff', weight: '500' },
    { path: './IRANSansX-DemiBold.woff', weight: '600' },
    { path: './IRANSansX-Bold.woff', weight: '700' },
  ],
  variable: '--font-iransansx',
})
