import { useState } from "react";
import { Send, Mail, Phone, MapPin, CheckCircle, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { AGENCY } from "../data/siteData";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section intro */}
        <div className="max-w-xl mb-16">
          <div className="section-label mb-4">
            <span className="w-5 h-px bg-blue-600 inline-block" />
            Get in touch
          </div>
          <h2 className="text-[42px] lg:text-[50px] font-black text-gray-900 leading-[1.06] tracking-tight mb-4">
            Have a question?<br />Reach out.
          </h2>
          <p className="text-gray-500 text-[15px] leading-relaxed">
            This form is for general enquiries. Ready to start a website project?{" "}
            <button
              onClick={() => navigate("/intake")}
              className="text-blue-600 font-semibold hover:underline"
            >
              Use the intake form instead →
            </button>
          </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

          {/* Left — contact details */}
          <div className="space-y-5">
            {[
              { Icon: Mail, label: "Email us", value: AGENCY.email, href: `mailto:${AGENCY.email}` },
              { Icon: Phone, label: "Phone / WhatsApp", value: AGENCY.phone, href: `tel:${AGENCY.phone}` },
              { Icon: MapPin, label: "Location", value: AGENCY.location, href: null },
            ].map(({ Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-2xl border border-gray-100 bg-gray-50 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-200"
              >
                <div className="w-11 h-11 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <div className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">
                    {label}
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="text-gray-900 font-semibold text-sm hover:text-blue-600 transition-colors"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-gray-900 font-semibold text-sm">{value}</span>
                  )}
                </div>
              </div>
            ))}

            {/* Intake nudge */}
            <div className="mt-6 rounded-2xl bg-[#080e1a] p-6 border border-blue-900/30">
              <div className="text-white font-bold text-[15px] mb-2">
                Ready to start a project?
              </div>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-4">
                The intake form collects everything we need to get started right away.
              </p>
              <button
                onClick={() => navigate("/intake")}
                className="group w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold py-3 rounded-xl text-sm transition-all duration-200"
              >
                Open intake form
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-14 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-5">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-2">Message received</h3>
                <p className="text-gray-500 text-sm max-w-xs">
                  We'll get back to you within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                      Your name
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                      placeholder="Full name"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                      placeholder="you@business.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Business name
                  </label>
                  <input
                    type="text"
                    value={form.business}
                    onChange={(e) => setForm({ ...form, business: e.target.value })}
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all placeholder:text-gray-400"
                    placeholder="Your business"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border border-gray-200 rounded-2xl px-4 py-3 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none placeholder:text-gray-400"
                    placeholder="What would you like to discuss?"
                  />
                </div>
                <button
                  type="submit"
                  className="group w-full flex items-center justify-center gap-2.5 bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-2xl transition-all duration-200 text-[14px]"
                >
                  Send message
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
