import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "Agricultural Info App Interface",
      description: "Designed an intuitive interface for accessing crop plantation information, market price fluctuations, and quick product selling features using Figma.",
      tech: ["Figma", "UI/UX", "Prototyping"],
      duration: "Oct 2023 - Nov 2023",
      team: "3 members",
      live: "https://www.figma.com/design/TMF53wcVUPPZXL9U7j3A4s/AgriGrow?t=6yZ9KvcRCNJpA0mi-0"
    },
    {
      title: "RISC32I Assembler-Simulator",
      description: "Developed a three-pass assembler and simulator for RISC-V 32-bit integer ISA in Python, managing register operations and memory states.",
      tech: ["Python", "GitHub", "Terminal"],
      duration: "Mar 2024 - Apr 2024",
      team: "3 members",
      github: "https://github.com/sarabjeetsingh1708/co-project"
    },
    {
      title: "Angry Birds Game Clone",
      description: "Created a physics-based game using OOP principles and LibGDX, featuring various bird abilities, power-ups, and a competitive leaderboard.",
      tech: ["Java", "LibGDX", "Gradle"],
      duration: "Nov 2024 - Dec 2024",
      team: "2 members",
      github: "https://github.com/sarabjeetsingh1708/game"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-emerald-400"
        >
          Featured Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all group"
            >
              <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="text-sm text-gray-400 mb-4">
                <p>{project.duration}</p>
                <p>Team Size: {project.team}</p>
              </div>
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                {project.github?.trim() && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>Live</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
