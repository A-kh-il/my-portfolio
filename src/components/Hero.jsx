import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

import heroImage from "../assets/hero.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050816]"
    >
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Akhil Raj R"
          className="w-full h-full object-cover object-[75%_center] scale-[1.02] opacity-80"
        />
      </div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/95 via-[#050816]/70 to-transparent z-10"></div>

      {/* SUBTLE GLOW */}
      <div className="absolute left-[-120px] top-[10%] w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full z-10"></div>

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-20 min-h-screen flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 text-sm mb-8 backdrop-blur-sm"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            AI/ML Intern • Full Stack Developer
          </motion.div>

          {/* SMALL INTRO */}
          <p className="uppercase tracking-[6px] text-sm text-cyan-400 font-semibold mb-5">
            Hello, My Name Is
          </p>

          {/* NAME */}
          <h1 className="text-5xl md:text-7xl font-black leading-[0.95] text-white">
            Akhil Raj R
          </h1>

          {/* ROLE */}
          <h2 className="mt-6 text-2xl md:text-3xl font-light text-gray-300 leading-relaxed">
            Software Developer Building
            <span className="text-cyan-400"> AI-Powered </span>
            Web & Mobile Applications
          </h2>

          {/* DESCRIPTION */}
          <p className="mt-8 text-gray-400 text-lg leading-relaxed max-w-2xl">
            Final year Computer Science student focused on building scalable
            full-stack applications, AI-powered systems, and modern mobile
            experiences using React, Flutter, Firebase, and Python.
          </p>

          {/* TECH STACK */}
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "React",
              "Flutter",
              "Firebase",
              "Python",
              "Java",
              "MySQL",
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-gray-300 text-sm backdrop-blur-sm hover:border-cyan-400/30 hover:text-cyan-300 transition duration-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap items-center gap-5">
            <a
              href="#projects"
              className="group px-8 py-4 rounded-full bg-cyan-400 text-black font-semibold flex items-center gap-3 hover:bg-cyan-300 transition duration-300 shadow-[0_0_30px_rgba(34,211,238,0.15)]"
            >
              View Projects
              <FaArrowRight className="group-hover:translate-x-1 transition duration-300" />
            </a>

            <a
              href="https://drive.google.com/file/d/10bQVgSiG2---GS7yuMx8Ej-t3SZotvbU/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full border border-white/15 text-white hover:border-cyan-400 hover:text-cyan-400 transition duration-300 backdrop-blur-sm"
            >
              Download Resume
            </a>
          </div>

          {/* SOCIALS */}
          <div className="mt-12 flex items-center gap-7 text-2xl text-white">
            <a
              href="https://github.com/A-kh-il"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/YOUR_LINKEDIN"
              target="_blank"
              rel="noreferrer"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:akhilraj5672@gmail.com"
              className="hover:text-cyan-400 transition duration-300"
            >
              <FaEnvelope />
            </a>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#050816] to-transparent z-10"></div>
    </section>
  );
}