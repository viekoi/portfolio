
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
   <Hero></Hero>
   <About></About>
   <Skills></Skills>
   <Projects></Projects>
   </>
  )
}
