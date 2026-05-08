import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  
    const links = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Internships", id: "internships" }, // ✅ added correctly
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-4">
        <h1 className="text-xl font-bold tracking-wide">
          Akhil<span className="text-cyan-400">Raj R</span>
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-7 text-sm text-gray-200">
          {links.map((link) => (
            <li key={link.id}>
              <a className="hover:text-cyan-400 transition" href={`#${link.id}`}>
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <ul className="md:hidden bg-black/90 px-6 pb-6 space-y-4">
          {links.map((link) => (
            <li key={link.id}>
              <a
                className="block text-gray-200 hover:text-cyan-400 transition"
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
