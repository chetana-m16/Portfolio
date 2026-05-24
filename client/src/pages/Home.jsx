import React from "react";
import Hero from "../components/hero";

function Home() {
  return (
    <section className="relative bg-zinc-900 overflow-hidden">
      {/* Background gradient */}
  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      {/* Content */}
      <div className="relative z-10">
        <Hero />
      </div>
    </section>
  );
}

export default Home;