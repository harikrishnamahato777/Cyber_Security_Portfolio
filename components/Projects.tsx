import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Browser History Manager',
    description: 'Simulates real browser navigation using Stack and Doubly Linked List. Integrates logical operations with GUI components. Tracks visited URLs clearly.',
    tech: ['Java', 'Java Swing', 'JDK'],
    github: 'https://github.com/harikrishnamahato777/Browser_History_Manager',
    demo: 'https://github.com/harikrishnamahato777/Browser_History_Manager',
    date: 'Jun–Jul 2025',
  },
  {
    number: '02',
    title: 'Yoga_Tracker',
    description: 'Fitness tracking + workout planner website. Tracks daily workouts, calorie intake, health statistics. Clean UI with focus on usability.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/harikrishnamahato777/Yoga_Tracker_Main',
    demo: 'https://harikrishnamahato777.github.io/Yoga_Tracker_Main/',
    date: 'Sep–Nov 2025',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Practical applications demonstrating technical capabilities
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.number}
              className="glass rounded-2xl p-8 hover:border-cyber-cyan hover:shadow-xl hover:shadow-cyber-cyan/10 transition-all duration-300 hover:-translate-y-2 group reveal relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Bar on Hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-cyan to-cyber-green scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              
              {/* Project Number */}
              <div className="font-mono text-cyber-purple font-bold mb-4">
                PROJECT {project.number}
              </div>

              {/* Date */}
              <div className="text-sm text-gray-500 mb-2">{project.date}</div>

              {/* Title */}
              <h3 className="font-display text-2xl font-bold text-white mb-4 group-hover:text-cyber-cyan transition-colors">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/30 rounded-md text-cyber-purple text-sm font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 glass rounded-lg text-gray-200 font-medium hover:border-cyber-cyan hover:text-cyber-cyan transition-all duration-200"
                >
                  <Github size={18} />
                  GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyber-cyan to-cyber-green text-cyber-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyber-cyan/50 transition-all duration-200"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note about demo links */}
        <div className="mt-8 text-center reveal">
          
        </div>
      </div>
    </section>
  )
}
