import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaFilePdf, FaDownload, FaExternalLinkAlt } from "react-icons/fa";

export default function Internships() {
  const internships = [
    {
      title: "Artificial Intelligence Intern",
      company: "Reccsar Pvt Ltd",
      period: "Jan 2025 – Feb 2025",
      description:
        "Worked on Artificial Intelligence concepts and practical implementation of ML models.",
      tags: ["Artificial Intelligence", "Python"],
      file: "/internship/recsar.pdf",
    },
    {
      title: "Data Science Intern",
      company: "Eduphoenix Private Limited",
      period: "Jan 2024 – Feb 2024",
      description:
        "Worked on Data Science projects involving data preprocessing and Python-based implementation.",
      tags: ["Python", "Data Science"],
      file: "/internship/eduphoenix.pdf",
    },
    {
      title: "Python & Machine Learning Trainee",
      company: "ICS India",
      period: "Dec 2021 – May 2022",
      description:
        "Completed certified training in Python programming and Machine Learning fundamentals.",
      tags: ["Python", "Machine Learning"],
      file: "/internship/ics.pdf",
    },
  ];

  return (
    <section id="internships" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Internships"
          subtitle="Hands-on industry experience and professional training."
        />

        <div className="mt-14 space-y-10">
          {internships.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md shadow-lg"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-cyan-300">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-2">
                {item.company} • {item.period}
              </p>

              <p className="mt-4 text-gray-400">{item.description}</p>

              {/* Tags */}
              <div className="mt-5 flex flex-wrap gap-3">
                {item.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/20 text-cyan-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Certificate Section */}
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {/* Certificate Label */}
                <div className="flex items-center gap-3 text-gray-300">
                  <span className="p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 text-cyan-300">
                    <FaFilePdf />
                  </span>
                  <span className="text-sm font-medium">
                    Certificate Available
                  </span>
                </div>

                {/* View Button */}
                <a
                  href={item.file}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-xl border border-white/20 hover:border-cyan-400 hover:text-cyan-300 transition"
                >
                  <FaExternalLinkAlt size={14} />
                  View
                </a>

                {/* Download Button */}
                <a
                  href={item.file}
                  download
                  className="flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
                >
                  <FaDownload size={14} />
                  Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
