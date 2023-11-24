import { ReactNode } from 'react'

import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'

type PropTypes = {
    children: ReactNode
}

export default function RootLayout({ children }: PropTypes) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}
