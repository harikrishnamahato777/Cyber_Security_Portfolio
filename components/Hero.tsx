'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Download, ArrowRight } from 'lucide-react'

const RESUME_URL =
  'https://drive.google.com/uc?export=download&id=1Q8UZFa068UKYufFBQvXAPmLchto41V7c'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <div className="glass px-4 py-2 rounded-full mb-6">
                <span className="text-cyber-green text-sm font-medium">
                  I, am
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl font-bold mb-6 text-gradient-cyber"
            >
              Hari Krishna Mahato
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-medium mb-6"
            >
              Cyber Security Student | SOC Analyst Fresher | Networking & Security Fundamentals
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-lg text-gray-400 max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed"
            >
              Focused on defensive security fundamentals, networking concepts, and hands-on practice using TryHackMe.
              Interested in SOC operations, monitoring, and incident awareness. Actively building skills through
              projects and continuous learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-green text-cyber-black font-bold rounded-lg hover:shadow-xl hover:shadow-cyber-cyan/50 transition-all duration-300 hover:scale-105"
              >
                View Projects
                <ArrowRight size={20} />
              </a>

              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-purple to-cyber-cyan text-cyber-black font-bold rounded-lg hover:shadow-xl hover:shadow-cyber-purple/40 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download Resume
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-cyber-cyan/25 blur-3xl" />
              <div className="absolute inset-6 rounded-full bg-cyber-purple/20 blur-2xl" />

              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-cyber-cyan shadow-2xl bg-cyber-dark">
                <Image
                  src="/images/profile.jpg"
                  alt="Hari Krishna Mahato"
                  fill
                  priority
                  className="object-cover scale-[1.15] object-[50%_35%]"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
