import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const certs = [
  {
    title: "CIT Workshop",
    platform: "Workshop",
    year: "2024",
    link: "https://drive.google.com/file/d/19bAVBuwf-j1WqS9874zjoB1l5bRD_Yk0/view?usp=drive_link",
  },
  {
    title: "Data Visualization with Python",
    platform: "Coursera",
    year: "2023",
    link: "https://drive.google.com/file/d/1aoPrrKSUROqE-o6IRVOkobZ_ZTgLxMKd/view?usp=drive_link",
  },
  {
    title: "Engineering Graphics",
    platform: "L&T",
    year: "2023",
    link: "https://drive.google.com/file/d/1pNm9aQR9f0IV2yQbmd8AnaVhCTRauAxi/view?usp=drive_link",
  },
  {
    title: "Gen AI for All",
    platform: "Infosys",
    year: "2025",
    link: "https://drive.google.com/file/d/182NWjD3xxiMGWozl2CFiHh8OqZhLPqGs/view?usp=drive_link",
  },
  {
    title: "Getting Started with Python Programming",
    platform: "Coursera",
    year: "2023",
    link: "https://drive.google.com/file/d/1iGqJPk-vX-vx_uCvZPehTV2ALF8xa9A4/view?usp=drive_link",
  },
  {
    title: "Introduction to NoSQL",
    platform: "Coursera",
    year: "2023",
    link: "https://drive.google.com/file/d/1GyGSIw1pdIra7vxZkuIflLWU5FHE7u-s/view?usp=drive_link",
  },
  {
    title: "IT Primer",
    platform: "L&T",
    year: "2023",
    link: "https://drive.google.com/file/d/1_HD4ex2PdVuSoqMPQ9xZBFuIRA7JRDB4/view?usp=drive_link",
  },
  {
    title: "Visualization Whole",
    platform: "Coursera",
    year: "2023",
    link: "https://drive.google.com/file/d/1aoPrrKSUROqE-o6IRVOkobZ_ZTgLxMKd/view?usp=drive_link",
  },
  {
    title: "What is Data",
    platform: "Coursera",
    year: "2023",
    link: "https://drive.google.com/file/d/1ERvpO3vMP-2zNCkryydy2T9ZR7Rtovyd/view?usp=drive_link",
  },
];

export default function Certificates() {
  return (
    <section id="certificates" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Certificates"
          subtitle="Courses and workshops I completed for improving my skills."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((c, i) => (
            <motion.a
              key={c.title}
              href={c.link}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-200 text-lg">
                  <FaCertificate />
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-gray-100">
                    {c.title}
                  </h3>
                  <p className="text-sm text-gray-300 mt-1">
                    {c.platform} • {c.year}
                  </p>

                  <p className="mt-4 text-xs text-gray-400 flex items-center gap-2">
                    <FaExternalLinkAlt className="text-[11px]" />
                    Click to open certificate
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
