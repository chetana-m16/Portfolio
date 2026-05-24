import { useState } from "react";
import { ChevronDown, ChevronUp, User, Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";

function About() {
  const [openSection, setOpenSection] = useState("about");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const sections = [
    {
      id: "about",
      title: "About Me",
      icon: <User size={22} className="text-cyan-400" />,
      content: (
        <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
          I'm <span className="text-cyan-400 font-semibold">Chetana Sandip Mahajan</span>,
          a Computer Science & Engineering student passionate about
          Full Stack Development, MERN Stack, Machine Learning,
          and Backend Development.
          <br /><br />
          I enjoy building responsive and real-world applications,
          solving coding problems, and continuously learning modern technologies.
          I have worked on projects like
          Face Shape-Based Jewellery Recommendation System,
          Medicinal Plant Detection System,
          and Farmer Labour Management System.
        </p>
      ),
    },

    {
      id: "personal",
      title: "Personal Details",
      icon: <GraduationCap size={22} className="text-cyan-400" />,
      content: (
        <div className="grid sm:grid-cols-2 gap-4 text-zinc-300">
          <p>
            <span className="text-white font-semibold">Full Name:</span>{" "}
            Chetana Sandip Mahajan
          </p>

          <p>
            <span className="text-white font-semibold">Location:</span>{" "}
            Jalgaon, Maharashtra
          </p>

          <p>
            <span className="text-white font-semibold">Degree:</span>{" "}
            B.Tech in Computer Science & Engineering
          </p>

          <p>
            <span className="text-white font-semibold">College:</span>{" "}
            CSMSS Chhatrapati Shahu College of Engineering
          </p>

          <p>
            <span className="text-white font-semibold">Languages:</span>{" "}
            English, Hindi, Marathi
          </p>

          <p>
            <span className="text-white font-semibold">Interests:</span>{" "}
            Coding, Web Development, Problem Solving
          </p>
        </div>
      ),
    },

    {
      id: "career",
      title: "Career & Skills",
      icon: <Briefcase size={22} className="text-cyan-400" />,
      content: (
        <div className="space-y-3 text-zinc-300">
          <p>• MERN Stack Development</p>
          <p>• Java Programming & DSA</p>
          <p>• Backend Development</p>
          <p>• Machine Learning Fundamentals</p>
          <p>• Problem Solving & Logical Thinking</p>
          <p>• REST APIs & MongoDB</p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="about"
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
          className="text-center mb-14"
        >
          <h2 className="text-4xl md:text-6xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Know more about my journey, skills and career goals
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-6">

          {sections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden hover:border-cyan-400 transition-all duration-300 shadow-lg"
            >

              {/* Button */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-5 flex justify-between items-center"
              >

                <div className="flex items-center gap-4">
                  {section.icon}

                  <h3 className="text-xl md:text-2xl font-semibold">
                    {section.title}
                  </h3>
                </div>

                {openSection === section.id ? (
                  <ChevronUp className="text-cyan-400" />
                ) : (
                  <ChevronDown className="text-cyan-400" />
                )}
              </button>

              {/* Content */}
              {openSection === section.id && (
                <div className="px-6 pb-6 border-t border-zinc-800 pt-5">
                  {section.content}
                </div>
              )}
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default About;