import { TrendingUp, ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AGENCY } from "../data/siteData";

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#060b15] border-t border-white/5">
      {/* Top CTA band */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <div className="text-white font-black text-[20px] leading-snug">
              Ready to grow your online presence?
            </div>
            <div className="text-gray-500 text-sm mt-1">
              Get an SEO-ready website delivered in 1–3 business days.
            </div>
          </div>
          <button
            onClick={() => navigate("/intake")}
            className="group shrink-0 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-7 py-3.5 rounded-2xl text-[14px] transition-all duration-200 shadow-md shadow-blue-600/25 hover:shadow-blue-600/40"
          >
            Start your project
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-white text-[17px] font-bold">{AGENCY.name}</span>
            </Link>
            <p className="text-gray-500 text-[14px] leading-relaxed max-w-xs mb-6">
              SEO-ready websites for Hyderabad businesses that want stronger search presence and more qualified enquiries.
            </p>
            <div className="space-y-2.5">
              {[
                { Icon: Mail, val: AGENCY.email, href: `mailto:${AGENCY.email}` },
                { Icon: Phone, val: AGENCY.phone, href: `tel:${AGENCY.phone}` },
                { Icon: MapPin, val: AGENCY.location, href: null },
              ].map(({ Icon, val, href }) => (
                <div key={val} className="flex items-center gap-2.5">
                  <Icon className="w-3.5 h-3.5 text-gray-600 shrink-0" />
                  {href ? (
                    <a href={href} className="text-gray-500 hover:text-white text-[13px] transition-colors">
                      {val}
                    </a>
                  ) : (
                    <span className="text-gray-500 text-[13px]">{val}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
              Navigation
            </div>
            <ul className="space-y-3">
              {[
                ["Services", "#services"],
                ["Templates", "#demos"],
                ["Packages", "#packages"],
                ["Process", "#process"],
                ["Results", "#results"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-gray-500 hover:text-white text-[13px] transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Start */}
          <div>
            <div className="text-gray-300 text-[11px] font-bold uppercase tracking-[0.12em] mb-5">
              Start a project
            </div>
            <ul className="space-y-3 mb-6">
              {[
                ["Starter Website — ₹6,000", "starter"],
                ["Business Website — ₹8,000", "business"],
                ["Premium Website — ₹12,000", "premium"],
              ].map(([label]) => (
                <li key={label}>
                  <button
                    onClick={() => navigate("/intake")}
                    className="text-gray-500 hover:text-white text-[13px] transition-colors text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-4">
              <div className="text-blue-300 text-[12px] font-semibold mb-0.5">Hyderabad based</div>
              <div className="text-gray-500 text-[11px]">
                Serving businesses across Hyderabad, Telangana and remotely across India.
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 mt-14 pt-7 flex flex-col sm:flex-row justify-between gap-3 items-center">
          <p className="text-gray-700 text-[12px]">
            © {year} {AGENCY.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-[12px] font-mono">
            Template ID: agency-seo-performance-01
          </p>
        </div>
      </div>
    </footer>
  );
}
