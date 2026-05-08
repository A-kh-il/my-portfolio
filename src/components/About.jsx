import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { useState, useEffect } from "react";

export default function About() {
  const roles = [
    "Full Stack Developer",
    "Frontend Developer",
    "Android Developer",
    "Flutter Developer",
    "Firebase Developer",
    "AI / ML Enthusiast",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="A deeper look into who I am and what I build."
        />

        <div className="grid lg:grid-cols-2 gap-10 mt-14">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-2xl font-bold text-cyan-300 mb-4">
              I’m Akhil Raj R
            </h3>

            <p className="text-gray-300 leading-relaxed mb-4">
              I am passionate about building modern, responsive web and mobile
              applications that deliver clean user experiences and smooth
              performance. I enjoy transforming ideas into real-world digital
              solutions using technologies like React, Firebase, Flutter,
              and Java.
            </p>

            <p className="text-gray-400 leading-relaxed">
              My goal is to continuously improve my development skills while
              working on innovative projects in AI, Machine Learning,
              and Full Stack Development.
            </p>

            {/* INFO BOXES */}
            <div className="grid sm:grid-cols-2 gap-4 mt-6">
              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <p className="text-sm text-gray-400">Role</p>
                <p className="font-semibold text-cyan-300 transition-all duration-300">
                  {roles[roleIndex]}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/10">
                <p className="text-sm text-gray-400">Location</p>
                <p className="font-semibold text-gray-200">
                  Kerala, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-cyan-900/30 to-purple-900/20 border border-cyan-400/20 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-6 text-white">
              What I Focus On
            </h3>

            <ul className="space-y-4 text-gray-200">
              <li>✅ Responsive Websites (React + Tailwind)</li>
              <li>✅ Android & Flutter App Development</li>
              <li>✅ Firebase Authentication & Cloud Database</li>
              <li>✅ Clean UI + Smooth Animations</li>
              <li>✅ REST APIs & Backend Integration</li>
              <li>✅ AI / ML Based Projects</li>
              <li>✅ Database Design (MySQL / Firebase)</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
