import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Java", "Python", "C"],
  },
  {
    title: "AI / ML",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "YOLO",
      "OpenCV",
    ],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Tailwind CSS", "React", "Node.js"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "NoSQL"],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Firebase", "XAMPP", "Tableau"],
  },
  {
    title: "Competitive Programming",
    skills: ["HackerRank", "LeetCode"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Skills"
          subtitle="Technical expertise across AI, Web, Mobile and Data systems."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white/5 border border-cyan-400/20 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.15)]"
            >
              <h3 className="text-lg font-bold text-cyan-300 mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-10 left-1/4 w-80 h-80 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-purple-500/20 blur-3xl rounded-full"></div>
    </section>
  );
}
