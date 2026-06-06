'use client'
import React from 'react'
import FirebaseAuthProvider from '@/components/FirebaseAuthProvider';
import { SessionProvider } from "next-auth/react"
import { ToastProvider } from "@/components/ui/Toast";

const Providers = ({children}:{children:React.ReactNode}) => {
  return (//add gluetscak provider here
    
    <FirebaseAuthProvider>
    
      <SessionProvider >
      
        <ToastProvider>

          {children}
          </ToastProvider>
      
        </SessionProvider>
    
      </FirebaseAuthProvider>
  )
}

export default Providers