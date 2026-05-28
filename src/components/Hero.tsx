import { ArrowRight, Search, TrendingUp, MapPin, Star, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AGENCY } from "../data/siteData";

const SEARCH_RESULTS = [
  {
    rank: 1,
    title: "Best Plumber in Hyderabad | FastFlow Plumbing",
    url: "fastflowplumbing.in",
    stars: 4.9,
    reviews: 128,
    sponsored: false,
  },
  {
    rank: 2,
    title: "Emergency Plumbing Services Hyderabad | 24/7",
    url: "hyd-plumbing.in",
    stars: 4.7,
    reviews: 96,
    sponsored: false,
  },
  {
    rank: 3,
    title: "Licensed Plumbers Near You | ClearPipe Co.",
    url: "clearpipe.in",
    stars: 4.6,
    reviews: 74,
    sponsored: false,
  },
];

const KEYWORD_CARDS = [
  { kw: "dentist near me", pos: "#3", change: "+5", trend: "up" },
  { kw: "plumber hyderabad", pos: "#1", change: "+8", trend: "up" },
  { kw: "law firm banjara", pos: "#2", change: "+4", trend: "up" },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen bg-[#080e1a] flex items-center overflow-hidden">
      {/* Fine dot grid background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Blue atmospheric glow — top left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Cyan glow — bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 xl:gap-20 items-center">

          {/* ── Left column ── */}
          <div>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
              <span className="text-blue-300 text-[11px] font-bold uppercase tracking-[0.14em]">
                SEO-Focused Web Agency · Hyderabad
              </span>
            </div>

            <h1 className="text-[52px] lg:text-[60px] xl:text-[68px] font-black text-white leading-[1.03] tracking-[-0.03em] mb-6 text-balance">
              Websites{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
                built to
              </span>
              <br />
              be found
            </h1>

            <p className="text-[17px] text-gray-400 leading-[1.65] mb-10 max-w-[440px]">
              {AGENCY.subtagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 mb-14">
              <button
                onClick={() => navigate("/intake")}
                className="group inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-4 rounded-2xl text-[15px] transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                Start your project
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() =>
                  document.querySelector("#demos")?.scrollIntoView({ behavior: "smooth" })
                }
                className="inline-flex items-center justify-center gap-2.5 border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold px-7 py-4 rounded-2xl text-[15px] transition-all duration-200"
              >
                <Search className="w-4 h-4 text-blue-400" />
                View demo sites
              </button>
            </div>

            {/* Stat row */}
            <div className="flex gap-7 pt-7 border-t border-white/8">
              {[
                { val: "120+", lbl: "Sites Delivered" },
                { val: "3×", lbl: "Visibility Lift" },
                { val: "1–3 Days", lbl: "Turnaround" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-[26px] font-black text-white leading-none">{s.val}</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — visual ── */}
          <div className="hidden lg:flex flex-col gap-4">

            {/* Google-style search result card */}
            <div className="bg-white rounded-3xl shadow-2xl shadow-black/50 p-5 border border-gray-100">
              {/* Search bar mockup */}
              <div className="flex items-center gap-3 bg-gray-50 border border-gray-200 rounded-2xl px-4 py-3 mb-5">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt="Google"
                  className="w-4 h-4"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                />
                <span className="text-sm text-gray-700 font-medium flex-1">
                  plumber near me hyderabad
                </span>
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  <span className="text-[11px] text-blue-600 font-semibold">Hyderabad</span>
                </div>
              </div>

              {/* Results */}
              <div className="space-y-2.5">
                {SEARCH_RESULTS.map((r) => (
                  <div
                    key={r.rank}
                    className={`flex items-start gap-3 p-3.5 rounded-2xl transition-colors ${
                      r.rank === 1
                        ? "bg-blue-50 ring-1 ring-blue-100"
                        : "hover:bg-gray-50"
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-lg flex items-center justify-center text-[11px] font-black shrink-0 mt-0.5 ${
                        r.rank === 1
                          ? "bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {r.rank}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className={`text-sm font-semibold truncate ${
                          r.rank === 1 ? "text-blue-700" : "text-gray-800"
                        }`}
                      >
                        {r.title}
                      </div>
                      <div className="text-xs text-green-700 mt-0.5">{r.url}</div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-2.5 h-2.5"
                              fill={i < Math.floor(r.stars) ? "#f59e0b" : "none"}
                              stroke={i < Math.floor(r.stars) ? "#f59e0b" : "#d1d5db"}
                              strokeWidth={1.5}
                            />
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-500">
                          {r.stars} · {r.reviews} reviews
                        </span>
                      </div>
                    </div>
                    {r.rank === 1 && (
                      <span className="text-[10px] font-semibold bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full shrink-0">
                        Your site
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Keyword ranking cards */}
            <div className="grid grid-cols-3 gap-3">
              {KEYWORD_CARDS.map((k) => (
                <div
                  key={k.kw}
                  className="bg-gray-900/80 border border-white/8 rounded-2xl p-4 backdrop-blur-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <TrendingUp className="w-4 h-4 text-emerald-400" />
                    <span className="text-[11px] text-emerald-400 font-bold bg-emerald-400/10 px-2 py-0.5 rounded-full">
                      {k.change}
                    </span>
                  </div>
                  <div className="text-2xl font-black text-white">{k.pos}</div>
                  <div className="text-[11px] text-gray-500 mt-0.5 truncate">{k.kw}</div>
                </div>
              ))}
            </div>

            {/* Trust strip */}
            <div className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-2xl px-5 py-3.5">
              <div className="flex -space-x-2 shrink-0">
                {["RK", "PR", "SN"].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-[10px] font-bold text-white border-2 border-gray-900"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>
                <div className="text-[11px] text-gray-400 mt-0.5">
                  Trusted by 120+ Hyderabad businesses
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-gray-600 ml-auto shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
