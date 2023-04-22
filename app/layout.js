import './globals.css'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: 'Khôi Nguyễn',
  description: "Khôi Nguyễn's personal portfolio",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='dark:bg-[#121212]'>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  )
}
