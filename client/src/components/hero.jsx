function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen w-full bg-zinc-900 text-white flex items-center pt-24"
    >
      <div className="w-full flex flex-col md:flex-row justify-around items-center px-12">
        
        {/* Left Side Image */}
        <div className="flex justify-center mb-10 md:mb-0">
          <img
            src="https://via.placeholder.com/300"
            alt="profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-cyan-400 shadow-xl"
          />
        </div>

        {/* Right Side Content */}
        <div className="space-y-6 text-center md:text-left max-w-xl">
          <h2 className="text-5xl font-bold leading-tight">
            Hi, My name is <span className="text-cyan-400">Chetana</span>
          </h2>

          <p className="text-xl text-gray-300">
            I'm an Information Technology Student & MERN Stack Developer
          </p>

          <p className="text-gray-400 leading-relaxed">
            Passionate about web development, problem solving, and building
            real-world projects with React, Node.js, MongoDB and Express.
          </p>

          <button className="bg-cyan-500 px-6 py-3 rounded-lg hover:bg-cyan-600 transition">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;