import Navbar from '@/components/Navbar/Navbar'
import UsuarioProvider from './context/UsuarioContext'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pilar Ramos',
  description: 'Pagina web oficial de Pilar Ramos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
        <body className={inter.className}>
      <UsuarioProvider>
          <Navbar />
          {children}
      </UsuarioProvider>
        </body>
    </html>
  )
}
