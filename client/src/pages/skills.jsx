import React from "react";
import { motion } from "framer-motion";

const skillData = {
  Languages: [
    {
      name: "Java",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    },
    {
      name: "Python",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "JavaScript",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "C",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    },
    {
      name: "C++",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    },
    {
      name: "SQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
  ],

  Databases: [
    {
      name: "MySQL",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "MongoDB",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Oracle",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
  ],

  Frameworks: [
    {
      name: "React",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Node.js",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Tailwind CSS",
      image:
        "https://in.images.search.yahoo.com/images/view;_ylt=Awr1QjPx6RFqLcQ27iu9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzlhNjQ2OGZjZmU2YTgxZmIxYTA5ZDc2Nzk5YjA3MzlkBGdwb3MDMTA0BGl0A2Jpbmc-?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dtailwind%2Bcss%26type%3DE210IN885G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D104&w=2000&h=1000&imgurl=morganfeeney.com%2Fcontent%2Fguides%2Fhow-to-use-the-tailwind-css-grid-system%2Ffeatured.jpg&rurl=https%3A%2F%2Fstorage.googleapis.com%2Fdesvhfycefwwle%2Fcenter-column-tailwind.html&size=115KB&p=tailwind+css&oid=9a6468fcfe6a81fb1a09d76799b0739d&fr2=piv-web&fr=mcafee&tt=Center+Column+Tailwind+at+Sofia+Gellatly+blog&b=61&ni=21&no=104&ts=&tab=organic&sigr=N_bwc2C2a6gw&sigb=T13P9d.e9Xms&sigi=RHxn6Z_56PsL&sigt=NoDAJQlzDTkk&.crumb=S1L0VtvMnsw&fr=mcafee&fr2=piv-web&type=E210IN885G0",
    },
    {
      name: "Bootstrap",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    },
  ],

  Tools: [
    {
      name: "Git",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "VS Code",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      image:
        "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
  ],
};

const SkillCard = ({ skill }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.04 }}
      transition={{ duration: 0.25 }}
      className="bg-zinc-900/80 border border-zinc-700 rounded-xl 
      p-4 flex flex-col items-center justify-center
      hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/10 transition-all"
    >
      <div className="bg-white rounded-lg p-2 mb-3">
        <img
          src={skill.image}
          alt={skill.name

          }
          className="w-10 h-10 object-contain"
        />
      </div>

      <h3 className="text-sm font-medium text-center">
        {skill.name}
      </h3>
    </motion.div>
  );
};

function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-slate-950 via-zinc-900 to-black text-white px-6 py-20 relative overflow-hidden"
    >
      {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h1>
          <p className="text-zinc-400 mt-4 text-lg">
            Technologies & tools I use to build projects
          </p>
        </motion.div>

        {/* Categories */}
        {Object.entries(skillData).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-semibold mb-8  ">
              {category}
            </h2>

                  <div className="flex flex-wrap justify-center gap-3">
  {skills.map((skill) => (
    <SkillCard key={skill.name} skill={skill} />
  ))}
</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Skills;