import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 80,
      damping: 18,
    },
  }),
};

export default function Education() {
  return (
    <section id="education" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <SectionTitle
          title="Education"
          subtitle="My academic journey and foundation in Computer Science."
        />

        <div className="mt-16 space-y-12">

          {/* B.E */}
          <motion.div
            custom={0}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-8 rounded-3xl bg-white/5 border border-cyan-400/20 backdrop-blur-md shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-cyan-300">
              B.E Computer Science and Engineering
            </h3>

            <p className="text-gray-300 mt-2">
              KPR Institute of Engineering and Technology
            </p>

            <span className="mt-4 inline-block text-sm font-semibold text-cyan-300 bg-cyan-400/10 px-4 py-2 rounded-full border border-cyan-400/30">
              CGPA: 8.0 / 10
            </span>

            <p className="mt-5 text-gray-400 text-sm">
              Relevant Areas: Artificial Intelligence, Machine Learning,
              Web Development, Database Systems.
            </p>
          </motion.div>

          {/* 12th */}
          <motion.div
            custom={1}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-8 rounded-3xl bg-white/5 border border-purple-400/20 backdrop-blur-md shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-purple-300">
              Higher Secondary Education (12th)
            </h3>

            <p className="text-gray-300 mt-2">
              Pandit Mohtilal Higher Secondary School
            </p>

            <span className="mt-4 inline-block text-sm font-semibold text-purple-300 bg-purple-400/10 px-4 py-2 rounded-full border border-purple-400/30">
              Percentage: 95.66%
            </span>
          </motion.div>

          {/* 10th */}
          <motion.div
            custom={2}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="p-8 rounded-3xl bg-white/5 border border-pink-400/20 backdrop-blur-md shadow-xl transition"
          >
            <h3 className="text-2xl font-bold text-pink-300">
              Secondary Education (10th)
            </h3>

            <p className="text-gray-300 mt-2">
              Bharathamatha Higher Secondary School
            </p>

            <span className="mt-4 inline-block text-sm font-semibold text-pink-300 bg-pink-400/10 px-4 py-2 rounded-full border border-pink-400/30">
              Percentage: 100%
            </span>
          </motion.div>

        </div>
      </div>

      {/* Background Glow Effects */}
      <div className="absolute top-10 right-20 w-72 h-72 bg-cyan-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 left-20 w-72 h-72 bg-purple-500/20 blur-3xl rounded-full"></div>
    </section>
  );
}
