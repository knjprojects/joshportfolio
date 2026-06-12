import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Transition from '@/components/Transition'
import Providers from './provider'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:'JoshTheDev',
  description: 'This is my portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className='min-h-dvh overflow-y-auto'> 
        <Providers>
          {/*<Navbar />*/}
          <main className="pt-16 flex-1">
            {/*To add scroll to a content container in Tailwind
             CSS, you must combine a maximum height or width utility with an overflow utility */}
            {children}
          </main>
        </Providers>
        </body>
    </html>
  )
}
