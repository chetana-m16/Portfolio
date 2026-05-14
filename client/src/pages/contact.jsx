import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Code2,
 Briefcase,
  Send,
} from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br pt-20 from-slate-950 via-zinc-900 to-black text-white px-6 py-20"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            Contact <span className="text-cyan-400">Me</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Let’s connect and build something amazing together
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail className="text-cyan-400" />
                <span>yourmail@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Maharashtra, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://Code2.com/chetana-m16?tab=repositories"
                className="p-3 rounded-full bg-zinc-800 hover:bg-cyan-500 transition"
              >
                <Code2 />
              </a>

              <a
                href="https://www.linkedin.com/in/chetana-mahajan-b78333221/"
                className="p-3 rounded-full bg-zinc-800 hover:bg-cyan-500 transition"
              >
                <Briefcase/>
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg space-y-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700"
            />

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition"
            >
              <Send size={18} />
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;