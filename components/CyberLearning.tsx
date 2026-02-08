import { Shield, Terminal, Network, Eye } from 'lucide-react'

const learningPoints = [
  {
    icon: Terminal,
    text: 'Practicing labs on TryHackMe to develop practical penetration testing and defensive security skills',
  },
  {
    icon: Network,
    text: 'Learning networking protocols, system security architecture, and configuration management',
  },
  {
    icon: Shield,
    text: 'Understanding attack surfaces, vulnerability exploitation, and defense mechanisms',
  },
  {
    icon: Eye,
    text: 'Building a foundation for SOC operations, incident analysis, and threat detection workflows',
  },
]

export default function CyberLearning() {
  return (
    <section id="learning" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            Continuous Development
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Hands-on Cybersecurity Learning
          </h2>
        </div>

        {/* Learning Content */}
        <div className="glass rounded-2xl p-8 md:p-12 reveal">
          <h3 className="font-display text-2xl font-bold text-cyber-cyan mb-8">
            Active Learning Path
          </h3>
          
          <div className="space-y-6">
            {learningPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-cyber-green/10 border border-cyber-green/30 mt-1 group-hover:bg-cyber-green/20 transition-colors">
                    <Icon className="w-5 h-5 text-cyber-green" />
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed flex-1">
                    {point.text}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
