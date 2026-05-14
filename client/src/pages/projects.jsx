import React from "react";
import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Face Shape Jewelry Recommender",
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
    desc: "ML based system that detects face shape and recommends suitable jewelry.",
    tech: ["Python", "TensorFlow", "OpenCV"],
    github: "#",
    demo: "#",
  },
  {
    title: "Medicinal Plant Detection",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78",
    desc: "Plant identification and classification using machine learning.",
    tech: ["Python", "CNN", "Flask"],
    github: "#",
    demo: "#",
  },
  {
    title: "NGO Food Donation System",
    image:
      "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
    desc: "Food donation platform connecting restaurants and NGOs.",
    tech: ["React", "Node.js", "MongoDB"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    desc: "Personal animated portfolio built using React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS"],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen  pt-20 bg-gradient-to-br from-slate-950 via-zinc-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Projects</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Some projects I have built during my learning journey
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-cyan-500/20"
            >
              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              {/* Content */}
              <div className="p-6">
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p className="text-zinc-400 mt-3 text-sm leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full text-xs bg-cyan-500/20 text-cyan-300"
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 transition"
                  >
                    <Code2 size={18} />
                    Code
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
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