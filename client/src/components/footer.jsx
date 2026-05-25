import React from "react";
import { Code2, Briefcase, Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white border-t border-zinc-800 py-4 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left */}
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">
            Chetana Mahajan
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
             MERN developer| problem solver| Java Developer |Open Source Enthusiast
          </p>
        </div>

        {/* Center Navigation */}
        <div className="flex gap-6 text-sm text-zinc-400">
          <a href="/home" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="/about" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="/skills" className="hover:text-cyan-400 transition">
            Skills
          </a>
          <a href="/projects" className="hover:text-cyan-400 transition">
            Projects
          </a>
          <a href="/contact" className="hover:text-cyan-400 transition">
            Contact
          </a>
        </div>

        {/* Right Social */}
        <div className="flex gap-4">
          <a
            href="https://github.com/chetana-m16"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <FaGithub size={18} />
          </a>

          <a
            href="https://www.linkedin.com/in/chetana-mahajan-b78333221"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="mailto:chetnamahajan2@gmail.com"
            className="p-3 rounded-full bg-zinc-900 hover:bg-cyan-500 transition"
          >
            <FaEnvelope size={18} />
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-zinc-500 text-sm  border-t border-zinc-800 pt-6">
        © 2026 Chetana Mahajan. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;