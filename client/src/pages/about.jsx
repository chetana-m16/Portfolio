import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

function About() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white pt-20 flex items-center justify-center px-6"
    >
      <div className="w-full max-w-screen-xl mx-auto space-y-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          About <span className="text-cyan-400">Me</span>
        </h2>

        {/* About Me */}
        <div className="bg-zinc-900 rounded-xl shadow-lg">
          <button
            onClick={() => toggleSection("about")}
            className="w-full p-6 flex justify-between items-center"
          >
            <h3 className="text-2xl font-semibold">About Me</h3>
            {openSection === "about" ? (
              <ChevronUp className="text-cyan-400" />
            ) : (
              <ChevronDown className="text-cyan-400" />
            )}
          </button>

          {openSection === "about" && (
            <div className="px-6 pb-6 text-gray-300 leading-relaxed">
              I’m Chetana, an Information Technology student and aspiring Full
              Stack Developer passionate about building responsive web
              applications and solving real-world problems using technology.
            </div>
          )}
        </div>

        {/* Personal Details */}
        <div className="bg-zinc-900 rounded-xl shadow-lg">
          <button
            onClick={() => toggleSection("personal")}
            className="w-full p-6 flex justify-between items-center"
          >
            <h3 className="text-2xl font-semibold">Personal Details</h3>
            {openSection === "personal" ? (
              <ChevronUp className="text-cyan-400" />
            ) : (
              <ChevronDown className="text-cyan-400" />
            )}
          </button>

          {openSection === "personal" && (
            <div className="px-6 pb-6 grid md:grid-cols-2 gap-4 text-gray-300">
              <p><span className="font-semibold text-white">Name:</span> Chetana Mahajan</p>
              <p><span className="font-semibold text-white">Location:</span> Maharashtra, India</p>
              <p><span className="font-semibold text-white">Education:</span> B.Tech IT</p>
              <p><span className="font-semibold text-white">Languages:</span> English, Marathi, Hindi</p>
            </div>
          )}
        </div>

        {/* Career Info */}
        <div className="bg-zinc-900 rounded-xl shadow-lg">
          <button
            onClick={() => toggleSection("career")}
            className="w-full p-6 flex justify-between items-center"
          >
            <h3 className="text-2xl font-semibold">Career & Skills</h3>
            {openSection === "career" ? (
              <ChevronUp className="text-cyan-400" />
            ) : (
              <ChevronDown className="text-cyan-400" />
            )}
          </button>

          {openSection === "career" && (
            <div className="px-6 pb-6 text-gray-300 space-y-3">
              <p>• MERN Stack Development</p>
              <p>• Java & DSA</p>
              <p>• Backend Development</p>
              <p>• Problem Solving</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default About;