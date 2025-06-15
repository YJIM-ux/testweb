import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'YJIM时尚潮流基地',
  description: '引领时尚潮流，展现独特魅力',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  )
} 