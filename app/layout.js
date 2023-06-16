import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Be_Vietnam_Pro } from 'next/font/google'

export const metadata = {
  title: 'Khôi Nguyễn',
  description: "Khôi Nguyễn's personal portfolio",
}



const BVP = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: '400'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${BVP.className} dark:bg-[#121212]`}>
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
