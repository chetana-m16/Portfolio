import React from "react";
import { motion } from "framer-motion";
import { Trophy, Award, BadgeCheck, Star } from "lucide-react";

const achievements = [
  {
    icon: <Award size={28} />,
    title: "Generative AI Certification",
    description:
      "Completed Generative AI course certification from GUVI SAWiT.",
  },
  {
    icon: <BadgeCheck size={28} />,
    title: "Internship Experience",
    description:
      "Worked on NGO Food Donation platform and contributed to UI design, documentation, and authentication modules.",
  },
  {
    icon: <Trophy size={28} />,
    title: "Academic Projects",
    description:
      "Built ML-based systems including Face Shape Jewelry Recommender and Medicinal Plant Detection.",
  },
  {
    icon: <Star size={28} />,
    title: "Problem Solving Journey",
    description:
      "Actively learning Java, DSA, backend development, and improving coding problem-solving skills.",
  },
];

function Achievements() {
  return (
    <section
      id="achievements"
      className="min-h-screen bg-gradient-to-br pt-20 from-slate-950 via-zinc-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
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
            Certifications, milestones & accomplishments
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg hover:shadow-cyan-500/20"
            >
              <div className="text-cyan-400 mb-4">{item.icon}</div>
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="text-zinc-400 mt-3 leading-relaxed">
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