import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'phstartup.org',
  description: 'Startup Directory of the Philippines',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">


      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>


    </html>
  )
}
