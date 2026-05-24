import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Download } from "lucide-react";
import profile from "../assets/ChetanaMahajan.png";

function Hero() {

  // Typing Animation
  const [displayText, setDisplayText] = useState("");

  const fullText = "Chetana Sandip Mahajan";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setDisplayText(fullText.slice(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen w-full bg-zinc-900 text-white flex items-center relative overflow-hidden pt-24 px-6"
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="max-w-7xl mx-auto w-full relative z-10">

        <div className="flex flex-col md:flex-row items-center justify-center gap-14">

          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative">

              <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full" />

              <img
                src={profile}
                alt="Chetana Mahajan"
                className="relative w-72 h-72 md:w-80 md:h-80 rounded-full object-cover border-4 border-cyan-400 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={itemVariants}
            className="max-w-2xl text-center md:text-left"
          >

            {/* Tag */}
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 text-sm text-cyan-400 backdrop-blur-sm mb-6">
              <Sparkles size={16} className="animate-pulse" />
              <span>Myself in a Nutshell..</span>
            </div>

            {/* Heading */}
            <h1 className="logo-font text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm{" "}
              <span className="text-cyan-400">
                {displayText}
                <span className="animate-pulse">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <h2 className="text-xl md:text-2xl text-zinc-300 mt-4 font-medium">
              Computer Science & Engineering Student
            </h2>

            {/* Description */}
            <p className="text-zinc-400 leading-relaxed mt-6 text-base md:text-lg">
              I'm from Jalgaon, Maharashtra and currently pursuing my Bachelor's
              Degree in Computer Science and Engineering from{" "}

              <a
                href="https://csmssengg.org/AboutCollege.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                CSMSS Chhatrapati Shahu College of Engineering,
                Chhatrapati Sambhajinagar
              </a>.
            </p>

            <p className="text-zinc-400 leading-relaxed mt-4 text-base md:text-lg">
              Passionate about Full Stack Development, MERN Stack,
              Machine Learning, and Backend Development.
              I enjoy building real-world projects, solving coding problems,
              and continuously learning new technologies.
            </p>

            <p className="text-zinc-400 leading-relaxed mt-4 text-base md:text-lg">
              I have developed projects including a Face Shape-Based Jewellery
              Recommendation System and Medicinal Plant Detection System.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center mb-8 md:justify-start">

              <a
                href="/ChetanaMahajan_Resume.pdf"
                download="ChetanaMahajan_Resume.pdf"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-zinc-700 hover:border-cyan-300 hover:text-cyan-300 transition font-medium"
              >
                <Download size={18} />
                Download Resume
              </a>

            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;