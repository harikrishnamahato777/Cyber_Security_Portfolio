import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center space-y-4">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-cyber-pink fill-cyber-pink" /> for{' '}
            <span className="text-cyber-green font-semibold">cybersecurity</span> and continuous learning
          </p>
          <p className="text-gray-500 text-sm">
            © 2026 Hari Krishna Mahato. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a
              href="https://github.com/harikrishnamahato777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/harikrishnamahato777"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:harikrishnamahato777@gmail.com"
              className="text-gray-400 hover:text-cyber-cyan transition-colors"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
