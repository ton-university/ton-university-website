import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'TON University - 学习TON区块链开发',
    template: '%s | TON University'
  },
  description: 'TON University是学习TON区块链开发的权威平台。从基础概念到高级开发，提供完整的TON学习路径。',
  keywords: ['TON', '区块链', '开发', '学习', '教程', '智能合约', 'Telegram'],
  authors: [{ name: 'TON University' }],
  creator: 'TON University',
  publisher: 'TON University',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ton-university.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    url: 'https://ton-university.com',
    title: 'TON University - 学习TON区块链开发',
    description: 'TON University是学习TON区块链开发的权威平台。从基础概念到高级开发，提供完整的TON学习路径。',
    siteName: 'TON University',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TON University',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TON University - 学习TON区块链开发',
    description: 'TON University是学习TON区块链开发的权威平台。从基础概念到高级开发，提供完整的TON学习路径。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <GoogleAnalytics />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
