import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Code2,
  FileText,
  Users,
} from "lucide-react";

const experiences = [
  {
    role: "Web Developer Intern",
    company: "NGO Food Donation Platform",
    duration: "Jan 2026 - June 2026",
    description:
      "Worked on UI design and development, authentication modules, and project documentation for a food donation platform aimed at reducing food waste and hunger.",
    skills: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "UI Design",
      "Authentication",
      "Documentation",
      "Team Collaboration",
      "Problem Solving",
      "Project Management",
    ],
    icon: <Code2 size={20} />,
    color: "from-cyan-500 to-blue-700",
  },

  {
    role: "Research Paper Presentation",
    company: "NCISET 2025",
    duration: "Dec 2025",
    description:
      "Presented research paper titled 'A Voice-Driven AI Assistant for Enhancing Elderly Well-Being (TI-33)' at NCISET 2025.",
    skills: [
      "Research",
      "Presentation",
      "AI Concepts",
      "Communication",
    ],
    icon: <FileText size={20} />,
    color: "from-purple-500 to-pink-700",
  },

  {
    role: "Web Developer Intern",
    company: "Softanic Solutions Pvt. Ltd., Jalgaon",
    duration: "July 2022 - Aug 2022",
    description:
      "Industrial training experience in web development, contributing to frontend and backend tasks, and gaining practical insights into software development processes.",
    skills: [
      "Web Development",
      "Software Development",
      "Problem Solving",
      "Teamwork",
      "Innovation",
      "Development",
    ],
    icon: <Users size={20} />,
    color: "from-blue-500 to-purple-700",
  },

  {
    role: "Smart India Hackathon Participant",
    company: "Smart India Hackathon 2024",
    duration: "July 2024 - Dec 2024",
    description:
      "Contributed innovative ideas and collaborated with team members to build problem-solving solutions during SIH 2024.",
    skills: [
      "Problem Solving",
      "Teamwork",
      "Innovation",
      "Development",
    ],
    icon: <Users size={20} />,
    color: "from-orange-500 to-yellow-700",
  },
];

function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-cyan-500">Experience</span>
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Internship, research, hackathons & practical learning journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-800 ml-3 md:ml-6 space-y-10">

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative pl-10"
            >
              
              {/* Timeline Icon */}
              <div className="absolute -left-[18px] top-6 w-9 h-9 rounded-full bg-zinc-900 border-4 border-cyan-500 flex items-center justify-center shadow-lg">
                {exp.icon}
              </div>

              {/* Card */}
              <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-7 hover:border-cyan-400 transition-all duration-300 shadow-lg hover:shadow-cyan-500/10">

  {/* Gradient Line */}
  <div
    className={`h-1 w-full rounded-full bg-gradient-to-r ${exp.color} mb-6`}
  />

  {/* Header */}
  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

    {/* Left */}
    <div className="flex-col">
      <h2 className="text-2xl font-semibold leading-tight">
        {exp.role}
      </h2>

      <p className="text-cyan-400 mt-2 text-base">
        {exp.company}
      </p>
    </div>

    {/* Right */}
<div className="flex items-center justify-end gap-2 text-zinc-400 min-w-[170px] md:min-w-[220px] shrink-0">      <Calendar size={17} />
      <span className="whitespace-nowrap text-sm md:text-base">
        {exp.duration}
      </span>
    </div>
  </div>

  {/* Description */}
  <p className="text-zinc-400 leading-7 mt-6 text-sm md:text-[15px] text-left">
    {exp.description}
  </p>

  {/* Skills */}
  <div className="flex flex-wrap gap-2 mt-6">
    {exp.skills.map((skill, i) => (
      <span
        key={i}
        className="px-4 py-2 rounded-full text-sm bg-zinc-800 border border-zinc-700 text-cyan-300 hover:border-cyan-400 transition"
      >
        {skill}
      </span>
    ))}
  </div>

</div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Experience;