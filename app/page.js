import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import About from '@/components/About'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   {/* <About></About> */}
   <Hero></Hero>
   </>
  )
}
