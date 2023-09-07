import './globals.css'
import type { Metadata } from 'next'
import { ClerkProvider } from '@clerk/nextjs'
import { Roboto_Mono } from 'next/font/google'

const font = Roboto_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mood Tracker',
  description: 'Helpful Mood Tracker powered by AI.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={font.className}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
