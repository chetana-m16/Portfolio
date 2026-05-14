import React from "react";
import { Code2, Briefcase, Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 py-8 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            Chetana <span className="text-cyan-400">Mahajan</span>
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Java Developer | MERN Learner | ML Enthusiast
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="#home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Right Social */}
        <div className="flex gap-4">
          <a
            href="https://github.com/yourusername"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <Code2 size={18} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <Briefcase size={18} />
          </a>

          <a
            href="mailto:yourmail@gmail.com"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-zinc-500 text-sm mt-8 border-t border-zinc-800 pt-6">
        © 2026 Chetana Mahajan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;