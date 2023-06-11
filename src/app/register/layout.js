import '@/app/globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/blackwhite'
import Footer from '@/components/footer'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'phstartup.org',
  description: 'Startup Directory of the Philippines',
}

export default function RootLayout({ children }) {
  return (
    <div className='float-left w-full'>
      <Header />
      {children}
    </div>
  )
}
