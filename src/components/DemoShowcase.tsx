import { ArrowRight, ExternalLink, BadgeCheck } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { DEMOS } from "../data/siteData";

export default function DemoShowcase() {
  const navigate = useNavigate();

  return (
    <section id="demos" className="py-28 bg-[#080e1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="section-label text-blue-400 mb-4">
              <span className="w-5 h-px bg-blue-500 inline-block" />
              Template library
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-black text-white leading-[1.05] tracking-tight">
              Built for your industry,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                ready to rank
              </span>
            </h2>
          </div>
          <p className="text-gray-400 max-w-[320px] text-[15px] leading-relaxed lg:text-right">
            Each template is structured around real search behaviour for its niche — not just aesthetics.
          </p>
        </div>

        {/* Demo grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {DEMOS.map((d) => (
            <div
              key={d.id}
              className="group flex flex-col bg-white/[0.035] border border-white/8 rounded-3xl overflow-hidden hover:border-white/16 hover:bg-white/[0.055] transition-all duration-300"
            >
              {/* Visual preview */}
              <div className={`relative h-48 bg-gradient-to-br ${d.color} overflow-hidden`}>
                {/* Browser chrome sim */}
                <div className="absolute top-4 left-4 right-4 bg-black/25 rounded-xl p-3 backdrop-blur-sm border border-white/15">
                  <div className="flex items-center gap-1.5 mb-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                    <div className="ml-2 flex-1 h-4 bg-white/15 rounded-md flex items-center px-2">
                      <span className="text-[9px] text-white/60 truncate">{d.id.toLowerCase()}.rankforge.in</span>
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2 bg-white/25 rounded-full w-4/5" />
                    <div className="h-1.5 bg-white/15 rounded-full w-3/5" />
                    <div className="h-1.5 bg-white/15 rounded-full w-2/3" />
                  </div>
                </div>

                {/* SEO tag */}
                <div className="absolute bottom-3.5 left-4 flex items-center gap-1.5 bg-black/40 backdrop-blur-md rounded-lg px-2.5 py-1 border border-white/10">
                  <BadgeCheck className="w-3 h-3 text-emerald-400" />
                  <span className="text-white text-[10px] font-semibold">SEO-Structured</span>
                </div>

                {/* ID badge */}
                <div className="absolute bottom-3.5 right-4 bg-black/50 backdrop-blur-md rounded-lg px-2.5 py-1 border border-white/10">
                  <span className="text-white/60 text-[10px] font-mono">{d.id}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <span className="inline-block text-[11px] font-bold text-blue-400 bg-blue-400/12 rounded-full px-2.5 py-0.5 mb-2">
                      {d.badge}
                    </span>
                    <h3 className="text-white font-bold text-[17px] leading-snug">{d.niche}</h3>
                    <p className="text-blue-400/70 text-[11px] font-medium mt-0.5">{d.seoAngle}</p>
                  </div>
                  <div className="shrink-0 text-right">
                    <div className="text-gray-500 text-xs">{d.pages} pages</div>
                  </div>
                </div>

                <p className="text-gray-400 text-[13px] leading-relaxed mb-5 flex-1">
                  {d.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-5">
                  {d.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-gray-500 bg-white/5 border border-white/8 rounded-md px-2 py-0.5"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => navigate("/intake")}
                    className="group/btn flex-1 flex items-center justify-center gap-1.5 bg-blue-600/15 hover:bg-blue-600 border border-blue-600/30 hover:border-blue-600 text-blue-400 hover:text-white text-[13px] font-bold py-2.5 rounded-xl transition-all duration-200"
                  >
                    Choose This Style
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5" />
                  </button>
                  <button className="px-3 py-2.5 bg-white/5 hover:bg-white/10 border border-white/8 rounded-xl transition-colors">
                    <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-5">
            Select your preferred template inside the project intake form
          </p>
          <button
            onClick={() => navigate("/intake")}
            className="group inline-flex items-center gap-2.5 bg-white text-gray-900 font-bold px-8 py-4 rounded-2xl text-[15px] transition-all duration-200 hover:bg-gray-100 shadow-xl shadow-black/30"
          >
            Start project intake
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
