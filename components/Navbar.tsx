'use client'

import { useState, useEffect } from 'react'
import { Download, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Training', href: '#training' },
  { name: 'Certificates', href: '#certificates' },
  { name: 'Contact', href: '#contact' },
]

const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1Q8UZFa068UKYufFBQvXAPmLchto41V7c'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a
            href="#"
            className="font-display text-2xl font-bold text-cyber-cyan hover:text-cyber-green transition-colors"
          >
            &lt;HKM Portfolio/&gt;
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-cyber-cyan transition-colors font-medium relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyber-cyan group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            {/* Resume (Desktop) */}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-cyber-cyan to-cyber-green text-cyber-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-gray-300 hover:text-cyber-cyan transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-white/10"
          >
            <div className="px-6 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-gray-300 hover:text-cyber-cyan transition-colors font-medium py-2"
                >
                  {link.name}
                </a>
              ))}

              {/* Resume (Mobile) */}
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyber-cyan to-cyber-green text-cyber-black font-semibold rounded-lg mt-4"
              >
                <Download size={18} />
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
