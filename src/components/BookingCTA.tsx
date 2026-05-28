import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AGENCY } from "../data/siteData";

export default function BookingCTA() {
  const navigate = useNavigate();

  return (
    <section className="relative py-28 bg-[#080e1a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      {/* Fine dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-1.5 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
          <span className="text-blue-300 text-[11px] font-bold uppercase tracking-[0.14em]">
            Ready to grow your business in Hyderabad?
          </span>
        </div>

        <h2 className="text-[44px] lg:text-[64px] font-black text-white leading-[1.02] tracking-tight mb-6">
          Your site should be
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-300">
            working harder for you
          </span>
        </h2>

        <p className="text-gray-400 text-[17px] leading-relaxed max-w-xl mx-auto mb-12">
          Submit your project details through our intake form and we'll have your SEO-ready site built and delivered in days — not weeks.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => navigate("/intake")}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-black px-9 py-4.5 py-[18px] rounded-2xl text-[16px] transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
          >
            Start project intake
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>

          <a
            href={`https://wa.me/${AGENCY.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-[18px] rounded-2xl text-[15px] transition-all duration-200"
          >
            <MessageCircle className="w-5 h-5 text-green-400" />
            WhatsApp us
          </a>

          <a
            href={`tel:${AGENCY.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 border border-white/12 bg-white/5 hover:bg-white/10 text-white font-semibold px-8 py-[18px] rounded-2xl text-[15px] transition-all duration-200"
          >
            <Phone className="w-5 h-5 text-blue-400" />
            Call now
          </a>
        </div>

        <p className="text-gray-600 text-[12px] mt-8">
          No commitment required. We'll confirm scope before any work begins.
        </p>
      </div>
    </section>
  );
}
