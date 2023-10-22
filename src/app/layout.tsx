import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RecoilContextProvider from './recoilContextProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LeetClone',
  description: 'Web application that contains leetcode problems and video solutions',
  viewport: 'width=device-width, initial-scale=1'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        < RecoilContextProvider >{children}</RecoilContextProvider>
      </body>
    </html>
  )
}
