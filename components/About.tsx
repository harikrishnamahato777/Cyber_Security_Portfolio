export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 reveal">
          <span className="inline-block px-4 py-2 glass rounded-full text-cyber-purple text-sm font-semibold uppercase tracking-wider mb-4">
            About Me
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Building Defense Through Practice
          </h2>
        </div>

        {/* Content */}
        <div className="glass rounded-2xl p-8 md:p-12 reveal">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              I am a{" "}
              <span className="text-cyber-green font-semibold">
                Cyber Security student
              </span>{" "}
              with a strong foundation in computer networks, system
              configuration, and problem-solving. My approach to learning
              centers on practical application—understanding not just what
              security measures exist, but why they work and how they can be
              bypassed.
            </p>

            <p>
              I actively practice hands-on learning through platforms like{" "}
              <span className="text-cyber-cyan font-semibold">
                TryHackMe
              </span>{" "}
              and work on projects that strengthen my understanding of
              real-world security concepts. From network packet analysis to
              understanding system vulnerabilities, I&apos;m building the
              technical foundation needed for defensive security operations.
            </p>

            <p>
              My goal is to start my career as a{" "}
              <span className="text-cyber-green font-semibold">
                SOC Analyst
              </span>{" "}
              or{" "}
              <span className="text-cyber-green font-semibold">
                Ethical Hacker
              </span>{" "}
              and grow through continuous learning and real incident exposure.
              I believe that effective security comes from understanding both
              the attacker&apos;s methodology and the defender&apos;s
              toolkit—and I&apos;m committed to mastering both perspectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
