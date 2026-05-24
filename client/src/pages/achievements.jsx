import React from "react";
import { motion } from "framer-motion";
import {
  Trophy,
  Award,
  BadgeCheck,
  Star,
  Brain,
  Code2,
} from "lucide-react";

const achievements = [
  {
    icon: <Award size={28} />,
    title: "Research Paper Presentation",
    description:
      "Presented the research paper “A Voice-Driven AI Assistant for Enhancing Elderly Well-Being (TI-33)” at NCISET 2025.",
  },

  {
    icon: <Trophy size={28} />,
    title: "Smart India Hackathon 2024",
    description:
      "Participated in Smart India Hackathon 2024 and contributed innovative ideas and problem-solving approaches in a collaborative environment.",
  },

  {
    icon: <BadgeCheck size={28} />,
    title: "C Programming Quiz Competition",
    description:
      "Secured participation in the C Programming Quiz Competition, demonstrating analytical thinking and programming fundamentals.",
  },

  {
    icon: <Star size={28} />,
    title: "WebSpark Web Development Competition",
    description:
      "Achieved Runner-Up position in the WebSpark Web Development Competition, showcasing web development and teamwork skills.",
  },

  {
    icon: <Code2 size={28} />,
    title: "Technical Projects",
    description:
      "Developed multiple technical projects including ML-based systems, Flutter applications, and MERN stack applications.",
  },

  {
    icon: <Brain size={28} />,
    title: "Continuous Technical Learning",
    description:
      "Continuously improving skills in Java, DSA, backend development, Flutter, Machine Learning, and modern web technologies.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

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
            My <span className="text-cyan-400">Achievements</span>
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Certifications, projects, internship experience & technical growth
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 shadow-lg hover:border-cyan-400 hover:shadow-cyan-500/10 transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400 mb-5">
                {item.icon}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-semibold leading-snug">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-zinc-400 mt-4 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Achievements;