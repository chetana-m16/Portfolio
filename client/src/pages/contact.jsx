import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  // Add state for form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("http://localhost:5000/api/contact",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: "success", message: data.message || "Message sent successfully" });
        // Reset form on success
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus({ type: "error", message: data.message || "Failed to send message. Please try again." });
      }
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus({ type: "error", message: "Network error. Please check your connection." });
    } finally {
      setIsSubmitting(false);
      // Clear status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

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
            Let's connect and build something amazing together
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
                <span>chetnamahajan2@gmail.com</span>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-cyan-400" />
                <span>+91-9860933780</span>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="text-cyan-400" />
                <span>Maharashtra, India</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex gap-5 mt-10">
              <a
                href="https://github.com/chetana-m16"
                className="p-3 rounded-full bg-zinc-800 hover:bg-cyan-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/chetana-mahajan-b78333221/"
                className="p-3 rounded-full bg-zinc-800 hover:bg-cyan-500 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 shadow-lg space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-cyan-400 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-cyan-400 transition"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full p-4 rounded-xl bg-zinc-800 outline-none border border-zinc-700 focus:border-cyan-400 transition resize-none"
            />

          
            {submitStatus && (
              <div className={`p-4 rounded-xl flex items-center gap-3 ${
                submitStatus.type === "success" 
                  ? "bg-green-500/20 border border-green-500 text-green-400" 
                  : "bg-red-500/20 border border-red-500 text-red-400"
              }`}>
                {submitStatus.type === "success" ? (
                  <CheckCircle size={20} />
                ) : (
                  <AlertCircle size={20} />
                )}
                <span>{submitStatus.message}</span>
              </div>
            )} 

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 py-4 rounded-xl font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default Contact;