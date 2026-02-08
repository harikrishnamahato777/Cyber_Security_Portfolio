import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hari Krishna Mahato | Cybersecurity Portfolio',
  description: 'Cyber Security Student | SOC Analyst Fresher | Networking & Security Fundamentals',
  keywords: ['cybersecurity', 'SOC analyst', 'ethical hacker', 'portfolio', 'security'],
  authors: [{ name: 'Hari Krishna Mahato' }],
  openGraph: {
    title: 'Hari Krishna Mahato | Cybersecurity Portfolio',
    description: 'Cyber Security Student | SOC Analyst Fresher',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
