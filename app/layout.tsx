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
      <body className='min-h-dvh'> 
        <Providers>
          <div className="flex flex-col">
            <Navbar />
          <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
            {/*To add scroll to a content container in TailwindCSS, you must combine a maximum height or width utility with an overflow utility , make sure verfw nt hidden in gbas,css*/}

            {children}
            </main>
          </div>
        </Providers>
        </body>
    </html>
  )
}
