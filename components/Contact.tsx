'use client'

import { useState } from 'react'
import { Mail, Linkedin, Github, Phone, Send, Loader2 } from 'lucide-react'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'harikrishnamahato777@gmail.com',
    href: 'mailto:harikrishnamahato777@gmail.com',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect with me',
    href: 'https://www.linkedin.com/in/harikrishnamahato777',
  },
  {
    icon: Github,
    label: 'GitHub',

    href: 'https://github.com/harikrishnamahato777',
  },
  {
    icon: Phone,
    label: 'Mobile',
    value: '+91-9877718263',
    href: 'tel:+919877718263',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    _gotcha: '',
  })

  const [status, setStatus] =
    useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Honeypot (anti-bot)
    if (formData._gotcha) return

    setStatus('sending')

    try {
      const response = await fetch('https://formspree.io/f/mjgekbwr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
          _gotcha: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }

    setTimeout(() => setStatus('idle'), 5000)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold mb-4">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-400">
            Open to opportunities and collaborations
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-4">
            {contactInfo.map((item, i) => {
              const Icon = item.icon
              return (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="glass rounded-xl p-6 flex gap-4 hover:border-cyber-cyan transition"
                >
                  <div className="p-3 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg">
                    <Icon className="w-5 h-5 text-cyber-cyan" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{item.label}</h4>
                    <p className="text-gray-400 text-sm">{item.value}</p>
                  </div>
                </a>
              )
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass rounded-2xl p-8 md:p-10">
              <h3 className="text-2xl font-bold text-cyber-cyan mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="text"
                  name="_gotcha"
                  value={formData._gotcha}
                  onChange={handleChange}
                  style={{ display: 'none' }}
                />

                <input
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-cyber-black/50 border border-white/10 text-white"
                />

                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-cyber-black/50 border border-white/10 text-white"
                />

                <input
                  name="subject"
                  placeholder="Subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-cyber-black/50 border border-white/10 text-white"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-cyber-black/50 border border-white/10 text-white"
                />

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex justify-center items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyber-cyan to-cyber-green text-black font-bold rounded-lg"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 className="animate-spin" /> Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <p className="text-cyber-green text-center">
                    Message sent successfully! ✅
                  </p>
                )}

                {status === 'error' && (
                  <p className="text-red-400 text-center">
                    Failed to send message ❌
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
