export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="text-3xl md:text-4xl font-bold">
        {title} <span className="text-cyan-400">.</span>
      </h2>
      {subtitle && <p className="text-gray-300 mt-2">{subtitle}</p>}
      <div className="mt-4 h-[2px] w-16 bg-cyan-400 rounded"></div>
    </div>
  );
}
