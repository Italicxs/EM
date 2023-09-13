import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import { Provider } from './components/Provider'
import Head from 'next/head'
  
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio Emiliano Machado.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
    <Head>
      <link rel="icon" href='./favicon.ico'/>
      
      </Head>
    <body className={`${inter.className} bg-white text-black dark:bg-[#090908] dark:text-white h-full selection:bg-gray-50 dark:selection:bg-gray-800`}>
      <Provider>
      <Navbar></Navbar>
      <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
      {children}
      </main>
      </Provider>
      </body>
  </html>
  )
}
