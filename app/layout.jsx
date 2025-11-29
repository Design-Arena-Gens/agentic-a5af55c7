import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'OWH STUDIO ? Film, produc?ie, emisiuni, rental',
  description: 'Studio de film modern din Rom?nia: filme, produc?ie video, emisiuni TV, rental camer? ?i bilete la proiec?ii.',
  metadataBase: new URL('https://agentic-a5af55c7.vercel.app'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className={inter.variable}>
      <body className="min-h-screen antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
