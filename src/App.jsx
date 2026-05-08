import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Education from "./components/Education";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internships from "./components/internship";   // ✅ Added
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-gray-950 text-white">
      
      <Navbar />
      <Hero />

      {/* Main Sections */}
      <About />
       <Education />
      <Skills />
      <Projects />
      <Internships />   {/* ✅ Now Visible */}
      <Certificates />
      <Contact />
      <Footer />

    </div>
  );
}
