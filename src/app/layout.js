'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import React from 'react'
import { SessionProvider } from "next-auth/react"
import HomepageLayout from '@/components/layouts/Homepage'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

  return (
    <html
    >
      <head>
          <title>Fitin</title>
      </head>
      <body className={inter.className}>
        <SessionProvider>
          <HomepageLayout children={children}/>
        </SessionProvider>
      </body>
    </html>
  )
}