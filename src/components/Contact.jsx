import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_m4eybuf",
        "template_watbr3a",
        form.current,
        "rSR3NqlJUXhytNPky"
      )
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();

          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        },
        (error) => {
          setLoading(false);
          alert("Failed to send message ❌");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          title="Contact"
          subtitle="Let’s connect! Feel free to message me anytime."
        />

        <div className="grid lg:grid-cols-2 gap-8">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-5">Reach me on</h3>

            <div className="space-y-4 text-gray-200">

              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                  <FaEnvelope />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-semibold">akhilraj5672@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                  <FaPhoneAlt />
                </span>
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="font-semibold">+91 8848538660</p>
                </div>
              </div>

              <a
                href="https://github.com/A-kh-il"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-300 transition"
              >
                <span className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                  <FaGithub />
                </span>
                <div>
                  <p className="text-sm text-gray-400">GitHub</p>
                  <p className="font-semibold">github.com/A-kh-il</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/akhil-raj-r-988485258"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 hover:text-cyan-300 transition"
              >
                <span className="p-3 rounded-xl bg-cyan-400/10 border border-cyan-400/20 text-cyan-200">
                  <FaLinkedin />
                </span>
                <div>
                  <p className="text-sm text-gray-400">LinkedIn</p>
                  <p className="font-semibold">akhil-raj-r</p>
                </div>
              </a>

            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="p-7 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <h3 className="text-xl font-semibold mb-4">Send a message</h3>

            <div className="space-y-4">

              <input
                name="user_name"
                required
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
                placeholder="Your Name"
              />

              <input
                name="user_email"
                required
                type="email"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
                placeholder="Your Email"
              />

              <textarea
                name="message"
                required
                rows="5"
                className="w-full p-3 rounded-xl bg-black/40 border border-white/10 outline-none focus:border-cyan-400"
                placeholder="Your Message"
              />

              <button
                disabled={loading}
                className="w-full py-3 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              {success && (
                <p className="text-green-400 text-sm text-center">
                  Message sent successfully 🚀
                </p>
              )}

            </div>
          </motion.form>

        </div>
      </div>
    </section>
  );
}
