
import { Inter } from 'next/font/google'
import { Providers } from './store/provider'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A M E C O ',
  description: 'Software de Gestion',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>  
      </body>
    </html>
  )
}