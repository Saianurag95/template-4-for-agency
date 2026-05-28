import { TrendingUp, Quote, Star } from "lucide-react";
import { CASE_STUDIES, TESTIMONIALS } from "../data/siteData";

export default function Results() {
  return (
    <section id="results" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <div className="section-label mb-4">
            <span className="w-5 h-px bg-blue-600 inline-block" />
            Client results
          </div>
          <h2 className="text-[42px] lg:text-[52px] font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
            Visibility that<br />actually moves
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            Results vary by niche, competition and existing presence. These are representative outcomes from real Hyderabad client projects.
          </p>
        </div>

        {/* Case study cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-16">
          {CASE_STUDIES.map((c, i) => {
            const dark = i === 1;
            return (
              <div
                key={c.client}
                className={`rounded-3xl p-8 border transition-all duration-300 ${
                  dark
                    ? "bg-[#080e1a] border-blue-900/50"
                    : "bg-white border-gray-100 shadow-sm"
                }`}
              >
                {/* Stat callout */}
                <div
                  className={`inline-flex flex-col items-start border rounded-2xl px-4 py-3 mb-6 ${
                    dark
                      ? "border-blue-600/30 bg-blue-600/10"
                      : "border-blue-100 bg-blue-50"
                  }`}
                >
                  <div className="text-blue-600 font-black text-[28px] leading-none">{c.stat}</div>
                  <div className="text-blue-500 text-[11px] font-semibold mt-0.5">{c.statLabel}</div>
                </div>

                <div className="mb-4">
                  <div className={`text-[11px] font-bold uppercase tracking-wider mb-1 ${dark ? "text-blue-400" : "text-blue-600"}`}>
                    {c.niche}
                  </div>
                  <h3 className={`text-[18px] font-bold ${dark ? "text-white" : "text-gray-900"}`}>
                    {c.client}
                  </h3>
                  <div className={`text-[12px] mt-0.5 ${dark ? "text-gray-500" : "text-gray-400"}`}>
                    {c.location} · {c.package} Package · {c.pages} pages
                  </div>
                </div>

                <div className={`flex items-center gap-1.5 mb-3 ${dark ? "text-emerald-400" : "text-emerald-600"}`}>
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span className="text-[12px] font-semibold">Organic visibility improved</span>
                </div>

                <p className={`text-[13px] leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>
                  {c.result}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="border-t border-gray-200 pt-16">
          <h3 className="text-[22px] font-black text-gray-900 mb-10">What clients say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.name}
                className="bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                <Quote className="w-7 h-7 text-blue-100 mb-3" />
                <p className="text-gray-700 text-[14px] leading-relaxed mb-7 italic">
                  "{t.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[11px] font-bold text-white shrink-0">
                    {t.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                    <div className="text-gray-400 text-[11px] mt-0.5">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
