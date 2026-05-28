import {
  Search,
  MapPin,
  FileText,
  Zap,
  BarChart2,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { SERVICES } from "../data/siteData";

const ICON_MAP: Record<string, LucideIcon> = {
  Search,
  MapPin,
  FileText,
  Zap,
  BarChart2,
  LinkIcon,
};

export default function Services() {
  return (
    <section id="services" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Split header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-xl">
            <div className="section-label mb-4">
              <span className="w-5 h-px bg-blue-600 inline-block" />
              What we do
            </div>
            <h2 className="text-[42px] lg:text-[52px] font-black text-gray-900 leading-[1.05] tracking-tight">
              SEO is built in,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                not added later
              </span>
            </h2>
          </div>
          <p className="text-gray-500 text-[15px] leading-relaxed max-w-sm lg:text-right">
            Every service we offer starts from a search-visibility mindset. Good design without discoverability is a missed opportunity.
          </p>
        </div>

        {/* Grid — first card spans 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.icon] || Search;
            const dark = i === 0;
            return (
              <div
                key={s.title}
                className={`group relative rounded-3xl p-8 border transition-all duration-300 cursor-default overflow-hidden ${
                  dark
                    ? "bg-[#080e1a] border-blue-900/50 hover:border-blue-700/60 col-span-1 md:col-span-2 lg:col-span-1"
                    : "bg-gray-50 border-gray-100 hover:border-blue-100 hover:bg-blue-50/40"
                }`}
              >
                {dark && (
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent pointer-events-none" />
                )}

                <div
                  className={`relative w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${
                    dark ? "bg-blue-600/20" : "bg-blue-100"
                  }`}
                >
                  <Icon
                    className={`w-5 h-5 ${dark ? "text-blue-400" : "text-blue-600"}`}
                    strokeWidth={2}
                  />
                </div>

                <h3
                  className={`relative text-[17px] font-bold mb-3 ${
                    dark ? "text-white" : "text-gray-900"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`relative text-sm leading-relaxed ${
                    dark ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {s.description}
                </p>

                {dark && (
                  <div className="relative mt-6 flex items-center gap-1.5 text-blue-400 text-sm font-semibold group-hover:gap-2.5 transition-all">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
