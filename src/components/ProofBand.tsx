import { PROOF_STATS } from "../data/siteData";

export default function ProofBand() {
  return (
    <section className="relative bg-blue-600 overflow-hidden py-12">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-blue-500/50">
          {PROOF_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center lg:text-left ${i !== 0 ? "lg:pl-10" : ""}`}
            >
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                {s.value}
              </div>
              <div className="text-blue-200 text-sm font-medium mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
