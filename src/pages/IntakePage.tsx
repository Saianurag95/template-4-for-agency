import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  TrendingUp,
  Building,
  Globe,
  Layers,
  Palette,
  FileText,
  Image,
  Lock,
  Search,
  CreditCard,
  ClipboardCheck,
} from "lucide-react";
import { PACKAGES, TEMPLATE_IDS } from "../data/siteData";
import { submitIntakeWithRazorpay } from "../payments/razorpay";

const STEPS = [
  { id: 1, label: "Business", icon: Building },
  { id: 2, label: "Goals", icon: Globe },
  { id: 3, label: "Template", icon: Layers },
  { id: 4, label: "Brand", icon: Palette },
  { id: 5, label: "Content", icon: FileText },
  { id: 6, label: "Media", icon: Image },
  { id: 7, label: "Credentials", icon: Lock },
  { id: 8, label: "SEO", icon: Search },
  { id: 9, label: "Package", icon: CreditCard },
  { id: 10, label: "Payment", icon: CreditCard },
  { id: 11, label: "Review", icon: ClipboardCheck },
];

interface FormData {
  businessName: string;
  ownerName: string;
  businessType: string;
  location: string;
  phone: string;
  email: string;
  websiteGoal: string;
  targetAudience: string;
  currentWebsite: string;
  competitors: string;
  selectedTemplate: string;
  selectedTemplateId: string;
  templateNotes: string;
  primaryColor: string;
  secondaryColor: string;
  fontStyle: string;
  logoStatus: string;
  brandNotes: string;
  contentStatus: string;
  headlineText: string;
  aboutText: string;
  servicesText: string;
  contentNotes: string;
  imagesConfirm: string;
  logoConfirm: string;
  mediaNotes: string;
  domainNotes: string;
  hostingNotes: string;
  credentialsNotes: string;
  primaryKeyword: string;
  secondaryKeywords: string;
  seoLocation: string;
  googleBusinessStatus: string;
  selectedPackage: string;
  paymentMethod: string;
  paymentConfirmed: string;
}

const INITIAL_FORM: FormData = {
  businessName: "", ownerName: "", businessType: "", location: "", phone: "", email: "",
  websiteGoal: "", targetAudience: "", currentWebsite: "", competitors: "",
  selectedTemplate: "", selectedTemplateId: "", templateNotes: "",
  primaryColor: "#2563eb", secondaryColor: "#0ea5e9", fontStyle: "", logoStatus: "", brandNotes: "",
  contentStatus: "", headlineText: "", aboutText: "", servicesText: "", contentNotes: "",
  imagesConfirm: "", logoConfirm: "", mediaNotes: "",
  domainNotes: "", hostingNotes: "", credentialsNotes: "",
  primaryKeyword: "", secondaryKeywords: "", seoLocation: "", googleBusinessStatus: "",
  selectedPackage: "",
  paymentMethod: "", paymentConfirmed: "",
};

function getMissingFields(step: number, form: FormData): string[] {
  const m: string[] = [];
  if (step === 1) {
    if (!form.businessName) m.push("Business name");
    if (!form.ownerName) m.push("Owner / contact name");
    if (!form.businessType) m.push("Business type");
    if (!form.email) m.push("Email address");
  }
  if (step === 2) {
    if (!form.websiteGoal) m.push("Website goal");
    if (!form.targetAudience) m.push("Target audience");
  }
  if (step === 3) {
    if (!form.selectedTemplate) m.push("Selected template name");
    if (!form.selectedTemplateId) m.push("Template ID — select a template card above");
  }
  if (step === 4) {
    if (!form.logoStatus) m.push("Logo status");
  }
  if (step === 5) {
    if (!form.contentStatus) m.push("Content readiness status");
  }
  if (step === 6) {
    if (!form.imagesConfirm) m.push("Image confirmation");
    if (!form.logoConfirm) m.push("Logo file confirmation");
  }
  if (step === 8) {
    if (!form.primaryKeyword) m.push("Primary keyword / search phrase");
    if (!form.seoLocation) m.push("Target location for SEO");
  }
  if (step === 9) {
    if (!form.selectedPackage) m.push("Package selection");
  }
  if (step === 10) {
    if (!form.paymentMethod) m.push("Payment method");
    if (!form.paymentConfirmed) m.push("Payment / milestone confirmation");
  }
  return m;
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function FLabel({ children, required }: { children: React.ReactNode; required?: boolean }) {
  return (
    <label className="block text-[11px] font-bold text-gray-500 uppercase tracking-wide mb-1.5">
      {children}
      {required && <span className="text-red-400 ml-0.5">*</span>}
    </label>
  );
}

function FInput({
  value, onChange, placeholder, type = "text",
}: {
  value: string; onChange: (v: string) => void; placeholder?: string; type?: string;
}) {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
    />
  );
}

function FTextarea({
  value, onChange, placeholder, rows = 4,
}: {
  value: string; onChange: (v: string) => void; placeholder?: string; rows?: number;
}) {
  return (
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
    />
  );
}

function FCard({
  label, description, selected, onClick,
}: {
  label: string; description?: string; selected: boolean; onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
        selected
          ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-600/10"
          : "border-gray-100 bg-white hover:border-gray-200"
      }`}
    >
      <div className="flex items-start justify-between gap-2">
        <div className={`font-semibold text-sm ${selected ? "text-blue-700" : "text-gray-800"}`}>
          {label}
        </div>
        {selected && <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />}
      </div>
      {description && (
        <div className="text-xs text-gray-500 mt-0.5 leading-snug">{description}</div>
      )}
    </button>
  );
}

function SectionHead({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-black text-gray-900 tracking-tight">{title}</h2>
      {subtitle && <p className="text-gray-500 text-sm mt-1.5 leading-relaxed">{subtitle}</p>}
    </div>
  );
}

// ─── Step renderers ───────────────────────────────────────────────────────────

function StepContent({
  step, form, set,
}: {
  step: number; form: FormData; set: (k: keyof FormData, v: string) => void;
}) {
  switch (step) {
    case 1:
      return (
        <div>
          <SectionHead
            title="Business Information"
            subtitle="Tell us about your business so we can tailor your website correctly."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <FLabel required>Business name</FLabel>
              <FInput value={form.businessName} onChange={(v) => set("businessName", v)} placeholder="Your business name" />
            </div>
            <div>
              <FLabel required>Owner / contact name</FLabel>
              <FInput value={form.ownerName} onChange={(v) => set("ownerName", v)} placeholder="Full name" />
            </div>
            <div>
              <FLabel required>Business type</FLabel>
              <FInput value={form.businessType} onChange={(v) => set("businessType", v)} placeholder="e.g. Plumber, Law Firm, Dental Clinic" />
            </div>
            <div>
              <FLabel>Location / area</FLabel>
              <FInput value={form.location} onChange={(v) => set("location", v)} placeholder="e.g. Banjara Hills, Hyderabad" />
            </div>
            <div>
              <FLabel>Phone / WhatsApp</FLabel>
              <FInput value={form.phone} onChange={(v) => set("phone", v)} placeholder="+91 98491 00000" type="tel" />
            </div>
            <div>
              <FLabel required>Email address</FLabel>
              <FInput value={form.email} onChange={(v) => set("email", v)} placeholder="you@business.com" type="email" />
            </div>
          </div>
        </div>
      );

    case 2:
      return (
        <div>
          <SectionHead
            title="Website Requirements"
            subtitle="Help us understand what you want this website to do for your business."
          />
          <div className="space-y-6">
            <div>
              <FLabel required>Primary website goal</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1">
                {[
                  ["Get more enquiries / leads", "leads"],
                  ["Show up in local Hyderabad search", "local"],
                  ["Rank for specific keywords", "seo"],
                  ["Replace an outdated site", "refresh"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.websiteGoal === val} onClick={() => set("websiteGoal", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel required>Target audience</FLabel>
              <FInput value={form.targetAudience} onChange={(v) => set("targetAudience", v)} placeholder="e.g. Local homeowners aged 30–55 in Hyderabad" />
            </div>
            <div>
              <FLabel>Current website URL (if any)</FLabel>
              <FInput value={form.currentWebsite} onChange={(v) => set("currentWebsite", v)} placeholder="https://..." />
            </div>
            <div>
              <FLabel>Competitor websites (optional)</FLabel>
              <FTextarea value={form.competitors} onChange={(v) => set("competitors", v)} placeholder="List URLs or business names of competitors you admire" rows={3} />
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div>
          <SectionHead
            title="Template Selection"
            subtitle="Choose the template style that best fits your business. You can add customisation notes below."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {TEMPLATE_IDS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => { set("selectedTemplate", t.name); set("selectedTemplateId", t.id); }}
                className={`text-left p-4 rounded-xl border-2 transition-all duration-150 ${
                  form.selectedTemplateId === t.id
                    ? "border-blue-600 bg-blue-50 shadow-sm shadow-blue-600/10"
                    : "border-gray-100 bg-white hover:border-gray-200"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2.5">
                  <span className={`font-bold text-sm ${form.selectedTemplateId === t.id ? "text-blue-700" : "text-gray-800"}`}>
                    {t.name}
                  </span>
                  {form.selectedTemplateId === t.id && <CheckCircle className="w-4 h-4 text-blue-600 shrink-0" />}
                </div>
                <span className={`text-[11px] rounded-lg px-2 py-0.5 font-medium ${
                  form.selectedTemplateId === t.id ? "bg-blue-600/10 text-blue-700" : "bg-gray-100 text-gray-500"
                }`}>
                  {t.category}
                </span>
                <div className="mt-2 text-[10px] font-mono text-gray-400">{t.id}</div>
              </button>
            ))}
          </div>

          {form.selectedTemplateId && (
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6 flex gap-3 items-start">
              <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-blue-800 font-bold text-sm">
                  Selected: {form.selectedTemplate}
                </div>
                <div className="text-blue-600 text-xs font-mono mt-0.5">ID: {form.selectedTemplateId}</div>
              </div>
            </div>
          )}

          <div>
            <FLabel>Template notes / customisation requests</FLabel>
            <FTextarea
              value={form.templateNotes}
              onChange={(v) => set("templateNotes", v)}
              placeholder="e.g. I like the dark header from AG-MOD-01 but want the layout from AG-LEAD-03"
              rows={3}
            />
          </div>
        </div>
      );

    case 4:
      return (
        <div>
          <SectionHead
            title="Brand Information"
            subtitle="Share your brand colours, typography preferences and logo status."
          />
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-5">
              <div>
                <FLabel>Primary colour</FLabel>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={form.primaryColor}
                    onChange={(e) => set("primaryColor", e.target.value)}
                    className="w-12 h-10 border border-gray-200 rounded-xl cursor-pointer p-0.5"
                  />
                  <FInput value={form.primaryColor} onChange={(v) => set("primaryColor", v)} placeholder="#2563eb" />
                </div>
              </div>
              <div>
                <FLabel>Secondary colour</FLabel>
                <div className="flex items-center gap-3">
                  <input
                    type="color"
                    value={form.secondaryColor}
                    onChange={(e) => set("secondaryColor", e.target.value)}
                    className="w-12 h-10 border border-gray-200 rounded-xl cursor-pointer p-0.5"
                  />
                  <FInput value={form.secondaryColor} onChange={(v) => set("secondaryColor", v)} placeholder="#0ea5e9" />
                </div>
              </div>
            </div>
            <div>
              <FLabel>Font / typography preference</FLabel>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Modern and clean", "Bold and strong", "Classic and formal", "Friendly and rounded"].map((f) => (
                  <FCard key={f} label={f} selected={form.fontStyle === f} onClick={() => set("fontStyle", f)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel required>Logo status</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["I have a logo file ready", "have-logo"],
                  ["I need a logo designed", "need-logo"],
                  ["Use text / wordmark only", "text-only"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.logoStatus === val} onClick={() => set("logoStatus", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel>Additional brand notes</FLabel>
              <FTextarea value={form.brandNotes} onChange={(v) => set("brandNotes", v)} placeholder="Any other brand guidelines, styles to avoid, or inspiration sites" rows={3} />
            </div>
          </div>
        </div>
      );

    case 5:
      return (
        <div>
          <SectionHead
            title="Content Submission"
            subtitle="Tell us about your content readiness. The more detail you provide, the faster we can build."
          />
          <div className="space-y-6">
            <div>
              <FLabel required>Content readiness</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["I have written content ready", "ready", "Text for all pages is prepared"],
                  ["Partial — I will fill the gaps", "partial", "Some pages ready, others need work"],
                  ["Use placeholder content", "placeholder", "Write placeholder text, I will update later"],
                  ["I need copywriting help", "help", "Please include basic SEO copywriting"],
                ].map(([label, val, desc]) => (
                  <FCard key={val} label={label} description={desc} selected={form.contentStatus === val} onClick={() => set("contentStatus", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel>Homepage headline text (optional)</FLabel>
              <FInput value={form.headlineText} onChange={(v) => set("headlineText", v)} placeholder="e.g. Trusted plumbers in Hyderabad — fast, reliable, affordable" />
            </div>
            <div>
              <FLabel>About / business story (optional)</FLabel>
              <FTextarea value={form.aboutText} onChange={(v) => set("aboutText", v)} placeholder="Describe your business, experience, and what makes you different" rows={4} />
            </div>
            <div>
              <FLabel>Services to list (optional)</FLabel>
              <FTextarea value={form.servicesText} onChange={(v) => set("servicesText", v)} placeholder="List your main services or products, one per line" rows={3} />
            </div>
            <div>
              <FLabel>Additional content notes</FLabel>
              <FTextarea value={form.contentNotes} onChange={(v) => set("contentNotes", v)} placeholder="Anything else about your content or pages" rows={2} />
            </div>
          </div>
        </div>
      );

    case 6:
      return (
        <div>
          <SectionHead
            title="Media Uploads"
            subtitle="Confirm what files you are sending. We will follow up if anything is missing."
          />
          <div className="space-y-6">
            <div>
              <FLabel required>Image files</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  ["Sending images via email or WhatsApp", "will-send"],
                  ["Sharing via Google Drive or Dropbox link", "file-link"],
                  ["No images — use stock photos only", "no-images"],
                  ["Please source stock images for me", "source-stock"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.imagesConfirm === val} onClick={() => set("imagesConfirm", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel required>Logo file</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["Sending logo via email or WhatsApp", "sending"],
                  ["Logo not ready yet", "not-ready"],
                  ["No logo — use text only", "text-only"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.logoConfirm === val} onClick={() => set("logoConfirm", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel>File sharing link (if applicable)</FLabel>
              <FInput value={form.mediaNotes} onChange={(v) => set("mediaNotes", v)} placeholder="Google Drive, Dropbox or WeTransfer link" />
            </div>
          </div>
        </div>
      );

    case 7:
      return (
        <div>
          <SectionHead
            title="Credentials"
            subtitle="Domain and hosting information. Only share what is needed — never share full passwords here."
          />
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-7 flex gap-3">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div className="text-amber-800 text-sm leading-relaxed">
              Do not enter full account passwords in this form. We will arrange secure credential transfer separately after project confirmation.
            </div>
          </div>
          <div className="space-y-5">
            <div>
              <FLabel>Domain registrar (if known)</FLabel>
              <FInput value={form.domainNotes} onChange={(v) => set("domainNotes", v)} placeholder="e.g. GoDaddy, Namecheap, or I need a domain registered" />
            </div>
            <div>
              <FLabel>Hosting provider (if known)</FLabel>
              <FInput value={form.hostingNotes} onChange={(v) => set("hostingNotes", v)} placeholder="e.g. Hostinger, SiteGround, or I need hosting arranged" />
            </div>
            <div>
              <FLabel>Other access notes</FLabel>
              <FTextarea value={form.credentialsNotes} onChange={(v) => set("credentialsNotes", v)} placeholder="Any notes about existing accounts, email addresses, or access arrangements" rows={4} />
            </div>
          </div>
        </div>
      );

    case 8:
      return (
        <div>
          <SectionHead
            title="SEO Information"
            subtitle="Help us structure the site around the keywords and locations that matter most to your business."
          />
          <div className="space-y-6">
            <div>
              <FLabel required>Primary keyword / search phrase</FLabel>
              <FInput value={form.primaryKeyword} onChange={(v) => set("primaryKeyword", v)} placeholder="e.g. plumber in Hyderabad, dentist near me, family law firm Banjara Hills" />
            </div>
            <div>
              <FLabel>Secondary keywords (optional)</FLabel>
              <FTextarea value={form.secondaryKeywords} onChange={(v) => set("secondaryKeywords", v)} placeholder="List additional keywords or phrases, one per line" rows={3} />
            </div>
            <div>
              <FLabel required>Target location / service area</FLabel>
              <FInput value={form.seoLocation} onChange={(v) => set("seoLocation", v)} placeholder="e.g. Hyderabad, Banjara Hills, Jubilee Hills — or all of Telangana" />
            </div>
            <div>
              <FLabel>Google Business Profile status</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["Active and verified", "active"],
                  ["Set up but not verified", "unverified"],
                  ["Not set up yet", "none"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.googleBusinessStatus === val} onClick={() => set("googleBusinessStatus", val)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      );

    case 9:
      return (
        <div>
          <SectionHead
            title="Package Selection"
            subtitle="Choose the package that fits your project scope. All prices are demo pricing in Indian Rupees."
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            {PACKAGES.map((pkg) => {
              const sel = form.selectedPackage === pkg.id;
              return (
                <button
                  key={pkg.id}
                  type="button"
                  onClick={() => set("selectedPackage", pkg.id)}
                  className={`text-left rounded-2xl border-2 p-6 transition-all duration-200 ${
                    sel
                      ? "border-blue-600 bg-blue-50 shadow-md shadow-blue-600/10"
                      : "border-gray-100 bg-white hover:border-gray-200"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div>
                      <div className={`font-black text-[16px] ${sel ? "text-blue-700" : "text-gray-900"}`}>{pkg.name}</div>
                      {pkg.badge && (
                        <span className="text-[10px] bg-blue-600 text-white px-2 py-0.5 rounded-full font-bold mt-1.5 inline-block">
                          {pkg.badge}
                        </span>
                      )}
                    </div>
                    {sel && <CheckCircle className="w-5 h-5 text-blue-600 shrink-0" />}
                  </div>
                  <div className={`text-[28px] font-black mb-1 ${sel ? "text-blue-700" : "text-gray-900"}`}>{pkg.price}</div>
                  <div className="text-xs text-gray-500 mb-4">{pkg.pages} pages · {pkg.delivery}</div>
                  <ul className="space-y-1.5">
                    {pkg.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${sel ? "text-blue-500" : "text-gray-300"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </button>
              );
            })}
          </div>
          <p className="text-gray-400 text-xs mt-4">
            Demo pricing only. All prices in Indian Rupees (₹). Final pricing confirmed in writing after scope review.
          </p>
        </div>
      );

    case 10:
      return (
        <div>
          <SectionHead
            title="Payment"
            subtitle="Select your preferred payment method and confirm the milestone arrangement."
          />
          <div className="space-y-6">
            <div>
              <FLabel required>Payment method</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  ["Bank Transfer (NEFT / IMPS / UPI)", "bank"],
                  ["UPI / PhonePe / Google Pay", "upi"],
                  ["Cash (in-person, Hyderabad)", "cash"],
                ].map(([label, val]) => (
                  <FCard key={val} label={label} selected={form.paymentMethod === val} onClick={() => set("paymentMethod", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel required>Payment confirmation</FLabel>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <FCard
                  label="I agree to the demo pricing and milestone structure"
                  description="50% advance, 50% on delivery"
                  selected={form.paymentConfirmed === "agreed"}
                  onClick={() => set("paymentConfirmed", "agreed")}
                />
                <FCard
                  label="I want to discuss payment terms first"
                  description="We will confirm terms before starting"
                  selected={form.paymentConfirmed === "discuss"}
                  onClick={() => set("paymentConfirmed", "discuss")}
                />
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
              <div className="text-blue-900 font-bold text-sm mb-2">Payment milestone structure</div>
              <div className="text-blue-700 text-[14px]">
                <strong>50%</strong> advance before production starts.
                <br />
                <strong>50%</strong> on delivery before final files are transferred.
              </div>
            </div>
          </div>
        </div>
      );

    case 11: {
      const pkg = PACKAGES.find((p) => p.id === form.selectedPackage);
      const reviewRows = [
        { label: "Business Name", value: form.businessName },
        { label: "Owner Name", value: form.ownerName },
        { label: "Email", value: form.email },
        { label: "Phone", value: form.phone || "—" },
        { label: "Business Type", value: form.businessType },
        { label: "Location", value: form.location || "—" },
        { label: "Website Goal", value: form.websiteGoal },
        { label: "Target Audience", value: form.targetAudience },
        { label: "Selected Template", value: form.selectedTemplate || "—" },
        { label: "Template ID", value: form.selectedTemplateId || "—" },
        { label: "Logo Status", value: form.logoStatus || "—" },
        { label: "Content Status", value: form.contentStatus || "—" },
        { label: "Primary Keyword", value: form.primaryKeyword || "—" },
        { label: "SEO Location", value: form.seoLocation || "—" },
        { label: "Selected Package", value: pkg?.name || "—" },
        { label: "Package Price", value: pkg?.price || "—" },
        { label: "Delivery Time", value: pkg?.delivery || "—" },
        { label: "Payment Method", value: form.paymentMethod || "—" },
        { label: "Payment Confirmed", value: form.paymentConfirmed || "—" },
      ];

      return (
        <div>
          <SectionHead
            title="Final Review"
            subtitle="Check all information is correct before submitting your project."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {reviewRows.map((r) => (
              <div key={r.label} className="bg-gray-50 rounded-xl border border-gray-100 p-4">
                <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mb-1">{r.label}</div>
                <div className="text-gray-900 text-sm font-semibold">{r.value}</div>
              </div>
            ))}
          </div>
          {form.templateNotes && (
            <div className="mb-4 bg-gray-50 rounded-xl border border-gray-100 p-4">
              <div className="text-[10px] text-gray-400 font-bold uppercase tracking-wide mb-1">Template Notes</div>
              <div className="text-gray-700 text-sm">{form.templateNotes}</div>
            </div>
          )}
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5">
            <div className="text-blue-800 text-[14px] leading-relaxed">
              By submitting, you confirm this information is accurate and agree to the demo milestone payment structure. A team member will contact you within one business day to confirm scope and begin your project.
            </div>
          </div>
        </div>
      );
    }

    default:
      return null;
  }
}

// ─── Main page ────────────────────────────────────────────────────────────────

export default function IntakePage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [showWarning, setShowWarning] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setShowWarning(false);
  };

  const missing = getMissingFields(step, form);
  const canContinue = missing.length === 0;

  const tryNext = () => {
    if (!canContinue) { setShowWarning(true); return; }
    setShowWarning(false);
    if (step === 11) {
      const selectedPkg = PACKAGES.find((pkg) => pkg.id === form.selectedPackage);
      submitIntakeWithRazorpay({
        templateId: form.selectedTemplateId || "AG-SEO-04",
        formData: form as unknown as Record<string, unknown>,
        packageName: selectedPkg?.name || form.selectedPackage || "Starter",
        packagePrice: selectedPkg?.price,
        customerName: form.ownerName,
        customerEmail: form.email,
        customerPhone: form.phone,
        businessName: form.businessName,
      }).catch(() => setSubmitted(true));
    } else { setStep((s) => s + 1); }
  };

  const goBack = () => {
    setShowWarning(false);
    setStep((s) => s - 1);
  };

  // ── Submitted state ──
  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-3">Project submitted</h1>
          <p className="text-gray-500 text-[15px] leading-relaxed mb-8">
            We have received your intake form for{" "}
            <strong className="text-gray-900">{form.businessName}</strong>. Our team will review your submission and be in touch within one business day.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-2xl transition-colors text-sm"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-gray-900 text-[15px]">RankForge</span>
          </button>
          <div className="text-gray-500 text-sm">
            Step{" "}
            <span className="font-black text-gray-900">{step}</span>
            {" "}of{" "}
            <span className="font-black text-gray-900">11</span>
          </div>
        </div>
        {/* Progress */}
        <div className="h-0.5 bg-gray-100">
          <div
            className="h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-500"
            style={{ width: `${(step / 11) * 100}%` }}
          />
        </div>
      </header>

      <div className="flex-1 max-w-5xl w-full mx-auto px-6 py-10">

        {/* Step tabs */}
        <div className="overflow-x-auto pb-3 mb-10 -mx-6 px-6">
          <div className="flex gap-1.5 min-w-max">
            {STEPS.map((s) => {
              const Icon = s.icon;
              const done = step > s.id;
              const active = step === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => { if (s.id < step) { setStep(s.id); setShowWarning(false); } }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-[11px] font-bold transition-all whitespace-nowrap uppercase tracking-wide ${
                    active
                      ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                      : done
                      ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 cursor-pointer border border-emerald-100"
                      : "bg-white text-gray-400 border border-gray-100 cursor-default"
                  }`}
                >
                  {done ? <CheckCircle className="w-3.5 h-3.5" /> : <Icon className="w-3.5 h-3.5" />}
                  {s.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Warning banner */}
        {showWarning && missing.length > 0 && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 mb-6 flex gap-3 items-start">
            <AlertCircle className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <div className="text-amber-800 font-bold text-sm mb-1.5">
                Please complete the following before continuing:
              </div>
              <ul className="space-y-0.5">
                {missing.map((f) => (
                  <li key={f} className="flex items-center gap-1.5 text-amber-700 text-sm">
                    <span className="w-1 h-1 rounded-full bg-amber-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Step content */}
        <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 mb-8">
          <StepContent step={step} form={form} set={set} />
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between">
          <button
            onClick={goBack}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gray-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors px-4 py-2.5 rounded-xl hover:bg-gray-100"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={tryNext}
            className={`group flex items-center gap-2.5 px-8 py-3.5 rounded-2xl text-sm font-black transition-all duration-200 ${
              canContinue
                ? "bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-600/20 hover:shadow-blue-600/35 hover:-translate-y-px"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            {step === 11 ? "Pay with Razorpay" : "Save and Continue"}
            {step !== 11 && (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
