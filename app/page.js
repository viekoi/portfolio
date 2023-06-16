
import { Inter } from 'next/font/google'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import About from '@/components/About'


export default function Home() {
  return (
   <>
   <Hero/>
   <About/>
   <Skills/>
   <Projects/>
   </>
  )
}
