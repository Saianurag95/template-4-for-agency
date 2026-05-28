import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROCESS_STEPS } from "../data/siteData";

export default function Process() {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 xl:gap-24 items-start">

          {/* Left — sticky header */}
          <div className="lg:sticky lg:top-28">
            <div className="section-label mb-4">
              <span className="w-5 h-px bg-blue-600 inline-block" />
              How it works
            </div>
            <h2 className="text-[42px] lg:text-[50px] font-black text-gray-900 leading-[1.06] tracking-tight mb-5">
              From intake<br />to live in days
            </h2>
            <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
              A streamlined process that moves fast without cutting corners. You know exactly what happens at every stage.
            </p>
            <button
              onClick={() => navigate("/intake")}
              className="group inline-flex items-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3.5 rounded-2xl text-[14px] transition-all duration-200"
            >
              Begin the intake
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            {/* Delivery callout */}
            <div className="mt-10 rounded-2xl border border-blue-100 bg-blue-50 p-5">
              <div className="text-blue-900 font-bold text-sm mb-1">Delivery timeline</div>
              <div className="space-y-1.5 text-[13px] text-blue-700">
                <div className="flex justify-between">
                  <span>Starter</span><span className="font-semibold">1 business day</span>
                </div>
                <div className="flex justify-between">
                  <span>Business</span><span className="font-semibold">2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span>Premium</span><span className="font-semibold">3 business days</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right — timeline */}
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-5 top-5 bottom-5 w-px bg-gradient-to-b from-blue-600 via-blue-200 to-transparent" />

            <div className="space-y-0">
              {PROCESS_STEPS.map((s, i) => (
                <div key={s.step} className="relative flex gap-8 pb-10 last:pb-0">
                  {/* Step circle */}
                  <div className="relative z-10 shrink-0">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-black border-2 shadow-sm transition-all ${
                        i === 0
                          ? "bg-blue-600 border-blue-600 text-white shadow-blue-600/30"
                          : "bg-white border-blue-200 text-blue-600"
                      }`}
                    >
                      {s.step}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-1.5 flex-1">
                    <h3 className="text-gray-900 font-bold text-[17px] mb-2">{s.title}</h3>
                    <p className="text-gray-500 text-[14px] leading-relaxed">{s.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
