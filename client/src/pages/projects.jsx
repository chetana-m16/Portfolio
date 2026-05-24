import React from "react";
import { motion } from "framer-motion";
import {
  Leaf,
  Sparkles,
  Droplets,
  Briefcase,
  ExternalLink,
} from "lucide-react";

const projects = [
  {
    title: "Farmer Labour Management System",
    description:
      "Developed a Flutter-based platform connecting farmers with labourers for agricultural work management, hiring, and communication using Supabase backend services.",
    tech: ["Flutter", "Supabase", "Dart"],
    icon: <Briefcase size={28} />,
    color: "from-orange-500 to-yellow-700",
    github: "https://github.com/chetana-m16/Farmer_Labour_Connect",
  },

  {
    title: "Medicinal Plant Detection System",
    description:
      "Developed a CNN-based machine learning model to detect and classify medicinal plants with detailed medicinal information display.",
    tech: ["Python", "TensorFlow", "Flask", "CNN"],
    icon: <Leaf size={28} />,
    color: "from-green-500 to-emerald-700",
    github: "https://github.com/chetana-m16/Medicinal_Plant_Detection",
  },

  {
    title: "Face Shape-Based Jewellery Recommendation System",
    description:
      "Built a deep learning based face shape detection system that recommends suitable jewellery using OpenCV and TensorFlow.",
    tech: ["Python", "TensorFlow", "OpenCV", "Flask", "Keras"],
    icon: <Sparkles size={28} />,
    color: "from-cyan-500 to-blue-700",
    github:
      "https://github.com/chetana-m16/jewelry-recommendation-system.git",
  },
  
  {
    title: "IoT-Based Smart Irrigation System",
    description:
      "Created an automated irrigation system using soil moisture sensors and Arduino for efficient real-time water management.",
    tech: ["Arduino", "IoT", "Sensors"],
    icon: <Droplets size={28} />,
    color: "from-purple-500 to-pink-700",
    github:
      "https://www.linkedin.com/in/chetana-mahajan-b78333221/details/projects/",
  },
  {
    title: "TODOLIST",
    description:
      "A simple yet effective to-do list application built with React and Node.js.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <Briefcase size={28} />,
    color: "from-blue-500 to-indigo-700",
    github: "https://github.com/chetana-m16/TODOLIST.git",
  },
  {
    title: "4DotGame",
    description:
      "A simple yet engaging 4 Dot Game built with React and Node.js.",
    tech: ["HTML", "CSS", "JavaScript"],
    icon: <Briefcase size={28} />,
    color: "from-green-500 to-emerald-700",
    github: "https://github.com/chetana-m16/4DotGame.git",
  }
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.08),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.08),transparent_30%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h1>

          <p className="text-zinc-400 mt-4 text-lg">
            Some projects I built using web development, machine learning, IoT,
            and mobile application development.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="w-full max-w-sm bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all shadow-lg hover:shadow-cyan-500/10"
            >
              {/* Top Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.color}`} />

              <div className="p-6 space-y-5">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-zinc-800 flex items-center justify-center text-cyan-400">
                  {project.icon}
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold leading-snug">
                  {project.title}
                </h2>

                {/* Description */}
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs rounded-full bg-zinc-800 text-cyan-300 border border-zinc-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* GitHub Button */}
                <div className="pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-cyan-400 hover:text-cyan-400 transition text-sm"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;