export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 text-center text-gray-400 px-4">
      <p className="font-semibold text-gray-200">
        Akhil Raj R<span className="text-cyan-400">Portfolio</span>
      </p>
      <p className="text-sm mt-2">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
}
