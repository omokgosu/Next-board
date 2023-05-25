import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link';
import LoginBtn from './LoginBtn'
import { getServerSession} from 'next-auth'
import { authOptions } from '../../pages/api/auth/[...nextauth]'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
      <html lang="en">
        <body className={inter.className}>
          <div className="navbar">
            <Link href="/" className="logo">AppleForum</Link>
            <Link href="/list">List</Link>
            <LoginBtn></LoginBtn>
          </div>
          {children}
        </body>
      </html>
  )
}
