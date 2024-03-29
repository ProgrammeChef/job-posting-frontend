import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GoogleOAuthProvider } from "@react-oauth/google";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}><GoogleOAuthProvider clientId="167169154007-8p8kg3rcs7klqb2div8d0l9c8bjnj4k3.apps.googleusercontent.com">{children}</GoogleOAuthProvider></body>
    </html>
  )
}
