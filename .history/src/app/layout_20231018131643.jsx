import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-black text-white">
        <nav>
          <ul className="flex space-x-10 m-10">
            <li className="m-2">경제</li>
            <li className="m-2">정치</li>
            <li className="m-2">스포츠</li>
            <li className="m-2">IT</li>
            <li className="m-2">기타</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
