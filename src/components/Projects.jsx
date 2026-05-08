import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import qa from "../assets/qa.png";
import uav from "../assets/uav.png";
import movie from "../assets/movie.png";
import voting from "../assets/voting.png";
import email from "../assets/email.png";
import lecture from "../assets/lecture.png";

const projects = [
  {
    title: "AI-Powered Q&A Platform",
    desc: "Real-time AI question answering platform using generative AI APIs with responsive UI and optimized response rendering.",
    tech: ["React", "FastAPI", "Gemini API", "Firebase"],
    image: qa,
    code: "https://github.com/A-kh-il/AI-Multimedia-Q-A-System",
    demo: "",
    featured: true,
  },

  {
    title: "UAV for Victim Detection",
    desc: "AI-powered UAV monitoring system for victim detection using computer vision and real-time object tracking.",
    tech: ["Python", "YOLO", "OpenCV"],
    image: uav,
    code: "https://github.com/A-khi-l/UAV-for-Victim-Detection",
    demo: "",
    featured: true,
  },

  {
    title: "Lecture Summarizer",
    desc: "AI-powered lecture summarization system using NLP techniques for smart academic content compression.",
    tech: ["Python", "NLP"],
    image: lecture,
    code: "https://github.com/A-khi-l/LECTURE-SUMMARIZER",
    demo: "",
    featured: true,
  },

  {
    title: "Voting Management System",
    desc: "Secure online voting platform with authentication, admin dashboard, and real-time vote management.",
    tech: ["PHP", "MySQL", "XAMPP"],
    image: voting,
    code: "https://github.com/A-khi-l/VOTING-MANAGEMENT-SYSTEM",
    demo: "",
  },

  {
    title: "Movie Recommender System",
    desc: "Machine learning-based recommendation engine that suggests movies based on user preferences and similarity analysis.",
    tech: ["Python", "Machine Learning"],
    image: movie,
    code: "https://github.com/A-khi-l/MOVIE-RECOMENDER-SYSTEM",
    demo: "",
  },

  {
    title: "Email Classifier",
    desc: "ML-powered email classification system for spam filtering and intelligent category prediction.",
    tech: ["Python", "NLP"],
    image: email,
    code: "https://github.com/A-khi-l/EMAIL-CLASSIFIER",
    demo: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">

        <SectionTitle
          title="Projects"
          subtitle="A collection of AI, full-stack, and data-driven applications built across web, mobile, and intelligent systems."
        />

        <div className="grid lg:grid-cols-2 gap-8 mt-14">

          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group p-6 rounded-3xl bg-white/[0.03] border border-white/5 backdrop-blur-md hover:border-cyan-400/20 hover:shadow-[0_0_40px_rgba(34,211,238,0.08)] transition duration-300"
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden rounded-2xl mb-6 bg-black/30 h-64">

                {p.featured && (
                  <span className="absolute top-4 left-4 z-20 text-xs text-cyan-300 border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 rounded-full backdrop-blur-sm">
                    Featured
                  </span>
                )}

                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-semibold text-white group-hover:text-cyan-300 transition duration-300">
                {p.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 mt-3 leading-relaxed">
                {p.desc}
              </p>

              {/* TECH STACK */}
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="mt-7 flex gap-4 flex-wrap">

                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-400/30 text-white hover:text-cyan-300 transition duration-300"
                >
                  <FaGithub />
                  Code
                </a>

                {p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-400 text-black font-semibold hover:bg-cyan-300 transition duration-300"
                  >
                    <FaExternalLinkAlt />
                    Demo
                  </a>
                )}

              </div>
            </motion.div>
          ))}

        </div>

        <p className="mt-10 text-sm text-gray-500 text-center">
          All projects are linked directly to my GitHub repositories.
        </p>

      </div>
    </section>
  );
}