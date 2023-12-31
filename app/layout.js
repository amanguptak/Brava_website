
import './globals.css'
import { Ubuntu } from 'next/font/google';

const poppins = Ubuntu({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-ubuntu',
  weight: ['300', '400', '500', '700']
});

// const ubuntu = Ubuntu({weight: '400', subsets: ['cyrillic'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
  
      <body>{children}</body>
    </html>
  )
}
