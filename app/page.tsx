'use client'

import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Education from '@/components/Education'
import Training from '@/components/Training'
import Certificates from '@/components/Certificates'
import CyberLearning from '@/components/CyberLearning'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Home() {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal')
    
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight
      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const revealPoint = 100
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('active')
        }
      })
    }

    window.addEventListener('scroll', revealOnScroll)
    revealOnScroll() // Initial check
    
    return () => window.removeEventListener('scroll', revealOnScroll)
  }, [])

  return (
    <main className="relative min-h-screen">
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <Training />
      <Certificates />
      <CyberLearning />
      <Contact />
      <Footer />
    </main>
  )
}
