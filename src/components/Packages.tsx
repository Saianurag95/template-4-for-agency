import { Check, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PACKAGES } from "../data/siteData";

export default function Packages() {
  const navigate = useNavigate();

  return (
    <section id="packages" className="py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="section-label justify-center mb-4">
            <span className="w-5 h-px bg-blue-600 inline-block" />
            Pricing
            <span className="w-5 h-px bg-blue-600 inline-block" />
          </div>
          <h2 className="text-[42px] lg:text-[52px] font-black text-gray-900 leading-[1.05] tracking-tight mb-4">
            Fixed packages,<br />zero surprises
          </h2>
          <p className="text-gray-500 text-[15px]">
            Demo pricing — your final scope and price is confirmed in writing during intake.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const featured = pkg.id === "business";
            return (
              <div
                key={pkg.id}
                className={`relative rounded-3xl flex flex-col transition-all duration-300 ${
                  featured
                    ? "bg-[#080e1a] shadow-2xl shadow-blue-600/15 ring-1 ring-blue-600/40 scale-[1.025]"
                    : "bg-white border border-gray-150 shadow-sm hover:shadow-md"
                }`}
              >
                {/* Featured top accent line */}
                {featured && (
                  <div className="absolute top-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full" />
                )}

                {pkg.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1.5 bg-blue-600 text-white text-[11px] font-bold px-4 py-1.5 rounded-full shadow-lg shadow-blue-600/30">
                      <Zap className="w-3 h-3 fill-white" />
                      {pkg.badge}
                    </span>
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="mb-7">
                    <h3 className={`text-[17px] font-bold mb-1 ${featured ? "text-white" : "text-gray-900"}`}>
                      {pkg.name}
                    </h3>
                    <div className="flex items-end gap-1.5 mt-4">
                      <span className={`text-[44px] font-black leading-none tracking-tight ${featured ? "text-white" : "text-gray-900"}`}>
                        {pkg.price}
                      </span>
                    </div>
                    <div className={`text-[13px] mt-2 font-medium ${featured ? "text-blue-400" : "text-gray-400"}`}>
                      {pkg.pages} pages · Delivered in {pkg.delivery}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <span
                          className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            featured ? "bg-blue-600" : "bg-blue-100"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${featured ? "text-white" : "text-blue-600"}`} strokeWidth={2.5} />
                        </span>
                        <span className={`text-[13px] leading-snug ${featured ? "text-gray-300" : "text-gray-600"}`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => navigate("/intake")}
                    className={`group w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-[14px] transition-all duration-200 ${
                      featured
                        ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-px"
                        : "bg-gray-900 hover:bg-gray-800 text-white"
                    }`}
                  >
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <p className="text-center text-gray-400 text-[12px] mt-8">
          Demo pricing shown. All prices in Indian Rupees. Confirmed in writing after scope review.
        </p>
      </div>
    </section>
  );
}
