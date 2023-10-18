import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <ul>
            <li>경제</li>
            <li>정치</li>
            <li>스포츠</li>
            <li>IT</li>
            <li>기타</li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  )
}
