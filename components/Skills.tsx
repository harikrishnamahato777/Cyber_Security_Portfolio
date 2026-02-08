import { Code2, Globe, Shield, Users } from 'lucide-react'

const skillsData = [
  {
    category: 'Programming',
    icon: Code2,
    skills: ['C++', 'Python', 'Java'],
    color: 'cyan',
  },
  {
    category: 'Web Development',
    icon: Globe,
    skills: ['HTML', 'CSS', 'JavaScript'],
    color: 'green',
  },
  {
    category: 'Cybersecurity & Tools',
    icon: Shield,
    skills: ['TryHackMe', 'MySQL', 'VS Code'],
    color: 'purple',
  },
  {
    category: 'Soft Skills',
    icon: Users,
    skills: ['Leadership', 'Teamwork', 'Adaptability'],
    color: 'pink',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            Technical Arsenal
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Skills & Expertise
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A comprehensive toolkit for cybersecurity analysis and development
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillsData.map((item, index) => {
            const Icon = item.icon
            return (
              <div
                key={item.category}
                className="glass rounded-xl p-8 hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300 hover:-translate-y-2 reveal"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-lg bg-cyber-${item.color}/10 border border-cyber-${item.color}/30`}>
                    <Icon className={`w-6 h-6 text-cyber-${item.color}`} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {item.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-cyber-cyan/10 border border-cyber-cyan/30 rounded-lg text-gray-200 font-medium hover:bg-cyber-cyan/20 hover:scale-105 transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
