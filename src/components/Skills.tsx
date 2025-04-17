import React from 'react';
import { motion } from 'framer-motion';

function Skills() {
  const skillCategories = [
    {
      title: "Expertise Areas",
      skills: [
        "Data Structures and Algorithms",
        "Object-Oriented Programming",
        "UI/UX Design",
        "Photography",
        "Videography",
        "Operating Systems",
        "Database Management"
      ]
    },
    {
      title: "Programming Languages",
      skills: ["C/C++", "Java", "Python", "SQL", "Assembly"]
    },
    {
      title: "Tools & Technologies",
      skills: [
        "MySQL",
        "Adobe Creative Cloud",
        "Blender",
        "VS Code",
        "IntelliJ",
        "Git/GitHub",
        "Linux/Unix",
        "Gradle"
      ]
    },
    {
      title: "Technical Electives",
      skills: [
        "Operating Systems",
        "Database Management Systems",
        "Computer Organisation",
        "Digital Circuits",
        "Interactive System Design",
        "Human-Computer Interaction"
      ]
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
          Skills & Expertise
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-lg backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;