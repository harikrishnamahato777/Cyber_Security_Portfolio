import { GraduationCap, Calendar } from 'lucide-react'

const education = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Aug 2023 – Present',
    details: 'CGPA: 5.1',
  },
  {
    degree: 'Intermediate',
    institution: 'Lovely Professional University',
    location: 'Punjab, India',
    period: 'Jul 2020 – Jul 2023',
    details: 'Percentage: 77%',
  },
  {
    degree: 'Matriculation',
    institution: 'Everest Academy',
    location: 'Lalbandi, Sarlahi, Nepal',
    period: 'May 2019 – May 2020',
    details: 'Percentage: 93%',
  },
]

export default function Education() {
  return (
    <section id="education" className="py-20 px-6 bg-cyber-dark/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            Education
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Academic Background
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="space-y-6">
          {education.map((item, index) => (
            <div
              key={index}
              className="glass rounded-xl p-6 md:p-8 border-l-4 border-cyber-green hover:border-cyber-cyan hover:shadow-lg hover:shadow-cyber-cyan/10 transition-all duration-300 hover:translate-x-2 reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-cyber-cyan/10 border border-cyber-cyan/30 mt-1">
                      <GraduationCap className="w-5 h-5 text-cyber-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white mb-1">
                        {item.degree}
                      </h3>
                      <p className="text-cyber-green font-medium">{item.institution}</p>
                      <p className="text-gray-400 text-sm">{item.location}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 ml-14">{item.details}</p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 ml-14 md:ml-0">
                  <Calendar size={16} />
                  <span className="text-sm">{item.period}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
