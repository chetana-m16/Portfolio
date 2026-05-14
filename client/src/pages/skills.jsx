import React from "react";
import { motion } from "framer-motion";

const skillData = {
  Languages: [
    { name: "Java", icon: "☕", level: "90%" },
    { name: "Python", icon: "🐍", level: "85%" },
    { name: "JavaScript", icon: "🟨", level: "80%" },
    { name: "C", icon: "🔵", level: "75%" },
    { name: "C++", icon: "⚡", level: "75%" },
    { name: "SQL", icon: "🗄️", level: "85%" },
  ],

  Databases: [
    { name: "MySQL", icon: "💾", level: "85%" },
    { name: "MongoDB", icon: "🍃", level: "75%" },
    { name: "Oracle", icon: "🔴", level: "70%" },
  ],

  Frameworks: [
    { name: "React", icon: "⚛️", level: "80%" },
    { name: "Node.js", icon: "🟢", level: "70%" },
    { name: "Tailwind CSS", icon: "🎨", level: "85%" },
    { name: "Bootstrap", icon: "🅱️", level: "80%" },
  ],

  Tools: [
    { name: "Git", icon: "🔧", level: "80%" },
    { name: "GitHub", icon: "🐙", level: "85%" },
    { name: "VS Code", icon: "💻", level: "90%" },
    { name: "Postman", icon: "📮", level: "75%" },
  ],
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.05 }}
      className="bg-white/5 backdrop-blur-lg border border-white/10 
      rounded-2xl p-5 shadow-lg hover:shadow-cyan-500/20 transition-all"
    >
      <div className="text-5xl text-center mb-3">{skill.icon}</div>
      <h3 className="text-lg font-semibold text-center">{skill.name}</h3>

      <div className="w-full bg-zinc-700 rounded-full h-2 mt-4">
        <div
          className="bg-cyan-400 h-2 rounded-full"
          style={{ width: skill.level }}
        />
      </div>

      <p className="text-center text-sm text-zinc-400 mt-2">{skill.level}</p>

      <button className="mt-4 w-full py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-medium">
        Certificate
      </button>
    </motion.div>
  );
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Technologies & tools I use to build projects
          </p>
        </motion.div>

        {/* Categories */}
        {Object.entries(skillData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-semibold mb-8 border-l-4 border-cyan-400 pl-4">
              {category}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {skills.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;