# Template 4 Complete Code Snapshot

Template ID: `AG-SEO-04`

Generated from the live local repo:

```text
C:\Users\reddy\Documents\New project\template-4-for-agency
```

Use this snapshot when an agent or team member needs to understand or recreate Template 4 quickly.

For fast client customization, edit `src/data/siteData.ts` first. Only edit component files or intake behavior when layout, behavior, or field changes are required.

## Fast Edit Priority

1. `src/data/siteData.ts` - brand, services, demos, packages, process, case studies, testimonials, proof stats, template IDs.
2. `src/pages/IntakePage.tsx` - intake fields, template IDs, validation rules.
3. `src/components/Hero.tsx` - hero layout/copy if needed.
4. `src/components/Results.tsx` - case study/result cards if needed.
5. `src/components/DemoShowcase.tsx` - demo card presentation if needed.

## Build Verification

```text
npm.cmd run typecheck
npm.cmd run build
```

## File Tree Snapshot

```text
package.json
vercel.json
src/main.tsx
src/App.tsx
src/data/siteData.ts
src/pages/HomePage.tsx
src/pages/IntakePage.tsx
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/ProofBand.tsx
src/components/Services.tsx
src/components/DemoShowcase.tsx
src/components/Packages.tsx
src/components/Process.tsx
src/components/Results.tsx
src/components/BookingCTA.tsx
src/components/Contact.tsx
src/components/Footer.tsx
src/index.css
tailwind.config.js
vite.config.ts
```

## package.json

Dependencies and scripts.

`$(System.Collections.Hashtable.Lang)
{
  "name": "vite-react-typescript-starter",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit -p tsconfig.app.json"
  },
  "dependencies": {
    "@supabase/supabase-js": "^2.57.4",
    "lucide-react": "^0.344.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^6.30.3"
  },
  "devDependencies": {
    "@eslint/js": "^9.9.1",
    "@types/react": "^18.3.5",
    "@types/react-dom": "^18.3.0",
    "@vitejs/plugin-react": "^4.3.1",
    "autoprefixer": "^10.4.18",
    "eslint": "^9.9.1",
    "eslint-plugin-react-hooks": "^5.1.0-rc.0",
    "eslint-plugin-react-refresh": "^0.4.11",
    "globals": "^15.9.0",
    "postcss": "^8.4.35",
    "tailwindcss": "^3.4.1",
    "typescript": "^5.5.3",
    "typescript-eslint": "^8.3.0",
    "vite": "^5.4.2"
  }
}

```

## vercel.json

Vercel rewrite so /intake works on deployment.

`$(System.Collections.Hashtable.Lang)
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}

```

## src/main.tsx

React entry file.

`$(System.Collections.Hashtable.Lang)
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);

```

## src/App.tsx

React Router route handling for / and /intake.

`$(System.Collections.Hashtable.Lang)
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import IntakePage from "./pages/IntakePage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intake" element={<IntakePage />} />
      </Routes>
    </BrowserRouter>
  );
}

```

## src/data/siteData.ts

Main editable content/data file for fast customization.

`$(System.Collections.Hashtable.Lang)
// Agency configuration â€” replace these values with your own
export const AGENCY = {
  name: "RankForge",
  tagline: "Websites built to be found",
  subtagline:
    "SEO-ready websites and local visibility systems for businesses in Hyderabad that want stronger search presence and better enquiries.",
  location: "Hyderabad, Telangana",
  email: "hello@rankforge.in",
  phone: "+91 98491 00000",
  whatsapp: "919849100000",
  bookingUrl: "/intake",
};

export const SERVICES = [
  {
    icon: "Search",
    title: "SEO-Ready Websites",
    description:
      "Every site we build follows clean technical SEO structure â€” proper heading hierarchy, semantic markup, fast load times and schema-ready code from day one.",
  },
  {
    icon: "MapPin",
    title: "Local SEO Setup",
    description:
      "Optimised for Google Maps and local search across Hyderabad. We configure on-page signals, NAP consistency and location pages that help nearby customers find you first.",
  },
  {
    icon: "FileText",
    title: "Content Page Architecture",
    description:
      "Service pages, location pages and blog structures that target real search queries in your niche â€” built into the site from day one, not bolted on later.",
  },
  {
    icon: "Zap",
    title: "Technical Site Cleanup",
    description:
      "We handle redirects, canonical tags, Core Web Vitals, structured data and mobile performance so your site has a strong technical foundation for ranking.",
  },
  {
    icon: "BarChart2",
    title: "Visibility Reporting",
    description:
      "Monthly visibility snapshots showing keyword positions, organic traffic and page performance â€” so you can see exactly where the site is gaining ground.",
  },
  {
    icon: "LinkIcon",
    title: "Off-Page Signals",
    description:
      "Citation building, directory listings and profile consistency across the web to strengthen your domain authority in local Hyderabad and niche searches.",
  },
];

export const DEMOS = [
  {
    id: "AG-LOCAL-02",
    niche: "Local Plumber",
    seoAngle: "Suburb + service keyword targeting",
    pages: 6,
    description:
      "Emergency callout service site structured for 'plumber near me' and area-level queries in Hyderabad.",
    badge: "Local SEO",
    color: "from-blue-700 to-cyan-500",
    tags: ["Local", "Services", "Mobile-first"],
  },
  {
    id: "AG-LEAD-03",
    niche: "Law Firm",
    seoAngle: "Practice area + location targeting",
    pages: 8,
    description:
      "Professional law firm site with separate practice area pages, each targeting distinct search intent.",
    badge: "Lead Gen",
    color: "from-slate-700 to-slate-500",
    tags: ["Professional", "Multi-page", "Trust signals"],
  },
  {
    id: "AG-SEO-04",
    niche: "Dental Clinic",
    seoAngle: "Procedure pages + local map pack",
    pages: 10,
    description:
      "Clinic website with individual treatment pages, local schema and a review integration section.",
    badge: "SEO Focus",
    color: "from-teal-600 to-emerald-500",
    tags: ["Health", "Schema", "Reviews"],
  },
  {
    id: "AG-MOD-01",
    niche: "Home Renovation",
    seoAngle: "Project portfolio + service area pages",
    pages: 7,
    description:
      "Contractor portfolio site with gallery, service area targeting and project case studies for Hyderabad.",
    badge: "Portfolio",
    color: "from-amber-600 to-orange-500",
    tags: ["Portfolio", "Local", "Gallery"],
  },
  {
    id: "AG-CREATIVE-05",
    niche: "Restaurant / Cafe",
    seoAngle: "Menu pages + event search visibility",
    pages: 5,
    description:
      "Menu-forward restaurant site with structured data for cuisine, hours and event search integration.",
    badge: "Hospitality",
    color: "from-rose-600 to-pink-500",
    tags: ["Food", "Events", "Schema"],
  },
  {
    id: "AG-SOCIAL-06",
    niche: "Fitness Studio",
    seoAngle: "Class pages + location + review signals",
    pages: 6,
    description:
      "Fitness studio with class schedule pages, instructor profiles and a Google Reviews integration.",
    badge: "Fitness",
    color: "from-green-600 to-lime-500",
    tags: ["Health", "Schedule", "Reviews"],
  },
];

export const PACKAGES = [
  {
    id: "starter",
    name: "Starter Website",
    price: "â‚¹6,000",
    delivery: "1 business day",
    pages: 3,
    revisions: 1,
    badge: null,
    features: [
      "3-page SEO-ready website",
      "Mobile responsive design",
      "Google-friendly URL structure",
      "Basic on-page SEO setup",
      "Contact form integration",
      "1 round of revisions",
      "Delivery in 1 business day",
    ],
    cta: "Start Starter Project",
  },
  {
    id: "business",
    name: "Business Website",
    price: "â‚¹8,000",
    delivery: "2 business days",
    pages: 6,
    revisions: 2,
    badge: "Most Popular",
    features: [
      "6-page SEO-structured website",
      "Optimised meta titles and descriptions",
      "Local SEO page setup",
      "Schema markup integration",
      "Google Maps embed",
      "2 rounds of revisions",
      "Delivery in 2 business days",
    ],
    cta: "Start Business Project",
  },
  {
    id: "premium",
    name: "Premium Growth Website",
    price: "â‚¹12,000",
    delivery: "3 business days",
    pages: 10,
    revisions: 3,
    badge: "Best Value",
    features: [
      "Up to 10 pages with full SEO architecture",
      "Service and location page targeting",
      "Full technical SEO audit and fixes",
      "Core Web Vitals optimisation",
      "Content structure roadmap",
      "3 rounds of revisions",
      "Delivery in 3 business days",
    ],
    cta: "Start Premium Project",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Submit your project intake",
    description:
      "Complete our detailed intake form â€” business information, goals, target audience, preferred template and SEO priorities.",
  },
  {
    step: "02",
    title: "We review and brief",
    description:
      "Our team reviews your submission, asks any clarifying questions and confirms scope before production starts.",
  },
  {
    step: "03",
    title: "Design and build",
    description:
      "We build your site on the agreed template with your branding, content and SEO structure applied throughout.",
  },
  {
    step: "04",
    title: "Review and refine",
    description:
      "You review the delivered site. We apply your revision notes and return the updated version within 24 hours.",
  },
  {
    step: "05",
    title: "Launch and hand off",
    description:
      "Final files, access credentials and a short visibility checklist are handed to you. Your site goes live.",
  },
];

export const CASE_STUDIES = [
  {
    client: "VoltLine Electricals",
    location: "Hyderabad, Telangana",
    niche: "Electrical contractor",
    result:
      "Moved from invisible in local search to appearing in the map pack for primary suburb queries within 6 weeks of launch.",
    pages: 7,
    package: "Business",
    stat: "+4",
    statLabel: "Map Pack positions",
  },
  {
    client: "Apex Legal Associates",
    location: "Banjara Hills, Hyderabad",
    niche: "Law firm",
    result:
      "Practice area pages now rank for specific case-type queries. Organic enquiry rate improved significantly after launch.",
    pages: 9,
    package: "Premium",
    stat: "3x",
    statLabel: "organic enquiries",
  },
  {
    client: "BrightSmile Dental",
    location: "Jubilee Hills, Hyderabad",
    niche: "Dental clinic",
    result:
      "Treatment pages and schema integration helped the clinic appear in 'dentist near me' results for two adjacent localities.",
    pages: 10,
    package: "Premium",
    stat: "2 areas",
    statLabel: "new local coverage",
  },
];

export const TESTIMONIALS = [
  {
    name: "Ravi Kumar",
    role: "Owner, VoltLine Electricals",
    quote:
      "Before this site we had nothing online. Now customers mention finding us on Google every week. The structure of the pages is completely different from what we had before.",
  },
  {
    name: "Priya Reddy",
    role: "Partner, Apex Legal Associates",
    quote:
      "We asked for a professional site that could rank for our practice areas. What we got was much better than expected â€” clearly built by people who understand both design and SEO.",
  },
  {
    name: "Dr. Suresh Naidu",
    role: "Principal Dentist, BrightSmile Dental",
    quote:
      "The intake process was thorough and the turnaround was fast. We had exactly what we wanted within three days and organic enquiries followed within weeks.",
  },
];

export const PROOF_STATS = [
  { value: "120+", label: "Websites Delivered" },
  { value: "98%", label: "On-Time Delivery" },
  { value: "3x", label: "Avg. Visibility Lift" },
  { value: "2 Days", label: "Avg. Turnaround" },
];

export const TEMPLATE_IDS = [
  { id: "AG-MOD-01", name: "Modern Agency", category: "Portfolio / Agency" },
  { id: "AG-LOCAL-02", name: "Local Business", category: "Local SEO" },
  { id: "AG-LEAD-03", name: "Lead Generator", category: "Lead Gen" },
  { id: "AG-SEO-04", name: "SEO Focus", category: "Content / SEO" },
  { id: "AG-CREATIVE-05", name: "Creative Studio", category: "Creative / Brand" },
  { id: "AG-SOCIAL-06", name: "Social Proof", category: "Review / Social" },
  { id: "AG-REAL-07", name: "Real Estate", category: "Property" },
  { id: "AG-HEALTH-08", name: "Health and Wellness", category: "Health" },
  { id: "AG-ECOM-09", name: "E-Commerce Ready", category: "Online Store" },
  { id: "AG-PREMIUM-10", name: "Premium Corporate", category: "Enterprise" },
];

```

## src/pages/HomePage.tsx

Main website composition.

`$(System.Collections.Hashtable.Lang)
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProofBand from "../components/ProofBand";
import Services from "../components/Services";
import DemoShowcase from "../components/DemoShowcase";
import Packages from "../components/Packages";
import Process from "../components/Process";
import Results from "../components/Results";
import BookingCTA from "../components/BookingCTA";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ProofBand />
      <Services />
      <DemoShowcase />
      <Packages />
      <Process />
      <Results />
      <BookingCTA />
      <Contact />
      <Footer />
    </div>
  );
}

```

## src/pages/IntakePage.tsx

Information retrieval page and validation.

`$(System.Collections.Hashtable.Lang)
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
    if (!form.selectedTemplateId) m.push("Template ID â€” select a template card above");
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

// â”€â”€â”€ Sub-components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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

// â”€â”€â”€ Step renderers â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
              <FInput value={form.targetAudience} onChange={(v) => set("targetAudience", v)} placeholder="e.g. Local homeowners aged 30â€“55 in Hyderabad" />
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
                  ["Partial â€” I will fill the gaps", "partial", "Some pages ready, others need work"],
                  ["Use placeholder content", "placeholder", "Write placeholder text, I will update later"],
                  ["I need copywriting help", "help", "Please include basic SEO copywriting"],
                ].map(([label, val, desc]) => (
                  <FCard key={val} label={label} description={desc} selected={form.contentStatus === val} onClick={() => set("contentStatus", val)} />
                ))}
              </div>
            </div>
            <div>
              <FLabel>Homepage headline text (optional)</FLabel>
              <FInput value={form.headlineText} onChange={(v) => set("headlineText", v)} placeholder="e.g. Trusted plumbers in Hyderabad â€” fast, reliable, affordable" />
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
                  ["No images â€” use stock photos only", "no-images"],
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
                  ["No logo â€” use text only", "text-only"],
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
            subtitle="Domain and hosting information. Only share what is needed â€” never share full passwords here."
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
              <FInput value={form.seoLocation} onChange={(v) => set("seoLocation", v)} placeholder="e.g. Hyderabad, Banjara Hills, Jubilee Hills â€” or all of Telangana" />
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
                  <div className="text-xs text-gray-500 mb-4">{pkg.pages} pages Â· {pkg.delivery}</div>
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
            Demo pricing only. All prices in Indian Rupees (â‚¹). Final pricing confirmed in writing after scope review.
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
        { label: "Phone", value: form.phone || "â€”" },
        { label: "Business Type", value: form.businessType },
        { label: "Location", value: form.location || "â€”" },
        { label: "Website Goal", value: form.websiteGoal },
        { label: "Target Audience", value: form.targetAudience },
        { label: "Selected Template", value: form.selectedTemplate || "â€”" },
        { label: "Template ID", value: form.selectedTemplateId || "â€”" },
        { label: "Logo Status", value: form.logoStatus || "â€”" },
        { label: "Content Status", value: form.contentStatus || "â€”" },
        { label: "Primary Keyword", value: form.primaryKeyword || "â€”" },
        { label: "SEO Location", value: form.seoLocation || "â€”" },
        { label: "Selected Package", value: pkg?.name || "â€”" },
        { label: "Package Price", value: pkg?.price || "â€”" },
        { label: "Delivery Time", value: pkg?.delivery || "â€”" },
        { label: "Payment Method", value: form.paymentMethod || "â€”" },
        { label: "Payment Confirmed", value: form.paymentConfirmed || "â€”" },
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

// â”€â”€â”€ Main page â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

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
    if (step === 11) { setSubmitted(true); } else { setStep((s) => s + 1); }
  };

  const goBack = () => {
    setShowWarning(false);
    setStep((s) => s - 1);
  };

  // â”€â”€ Submitted state â”€â”€
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
            {step === 11 ? "Submit Project" : "Save and Continue"}
            {step !== 11 && (
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

```

## src/components/Navbar.tsx

Navbar and CTA routing.

`$(System.Collections.Hashtable.Lang)
import { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { AGENCY } from "../data/siteData";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Templates", href: "#demos" },
  { label: "Packages", href: "#packages" },
  { label: "Process", href: "#process" },
  { label: "Results", href: "#results" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md shadow-blue-600/20 group-hover:shadow-blue-600/40 transition-shadow">
              <TrendingUp className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span
              className={`text-[17px] font-bold tracking-tight transition-colors duration-300 ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {AGENCY.name}
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  scrolled
                    ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                    : "text-white/75 hover:text-white hover:bg-white/10"
                }`}
              >
                {l.label}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollTo("#contact")}
              className={`text-sm font-medium px-3.5 py-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  : "text-white/75 hover:text-white hover:bg-white/10"
              }`}
            >
              Contact
            </button>
            <button
              onClick={() => navigate("/intake")}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-px"
            >
              Start Project â†’
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`lg:hidden p-2 rounded-xl transition-colors ${
              scrolled
                ? "text-gray-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-gray-100`}
      >
        <div className="px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map((l) => (
            <button
              key={l.href}
              onClick={() => scrollTo(l.href)}
              className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => scrollTo("#contact")}
            className="text-left px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors"
          >
            Contact
          </button>
          <div className="pt-3 mt-2 border-t border-gray-100">
            <button
              onClick={() => { navigate("/intake"); setOpen(false); }}
              className="w-full bg-blue-600 text-white text-sm font-bold py-3.5 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-600/25"
            >
              Start Your Project â†’
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

```

## src/components/Hero.tsx

Hero section.

`$(System.Collections.Hashtable.Lang)
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

      {/* Blue atmospheric glow â€” top left */}
      <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      {/* Cyan glow â€” bottom right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-24 w-full">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-14 xl:gap-20 items-center">

          {/* â”€â”€ Left column â”€â”€ */}
          <div>
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse-slow" />
              <span className="text-blue-300 text-[11px] font-bold uppercase tracking-[0.14em]">
                SEO-Focused Web Agency Â· Hyderabad
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
                { val: "3Ã—", lbl: "Visibility Lift" },
                { val: "1â€“3 Days", lbl: "Turnaround" },
              ].map((s) => (
                <div key={s.lbl}>
                  <div className="text-[26px] font-black text-white leading-none">{s.val}</div>
                  <div className="text-[11px] text-gray-500 font-medium mt-1 uppercase tracking-wide">{s.lbl}</div>
                </div>
              ))}
            </div>
          </div>

          {/* â”€â”€ Right column â€” visual â”€â”€ */}
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
                          {r.stars} Â· {r.reviews} reviews
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

```

## src/components/ProofBand.tsx

Proof stats band.

`$(System.Collections.Hashtable.Lang)
import { PROOF_STATS } from "../data/siteData";

export default function ProofBand() {
  return (
    <section className="relative bg-blue-600 overflow-hidden py-12">
      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #ffffff 0px, #ffffff 1px, transparent 1px, transparent 10px)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x divide-blue-500/50">
          {PROOF_STATS.map((s, i) => (
            <div
              key={s.label}
              className={`text-center lg:text-left ${i !== 0 ? "lg:pl-10" : ""}`}
            >
              <div className="text-4xl lg:text-5xl font-black text-white tracking-tight leading-none">
                {s.value}
              </div>
              <div className="text-blue-200 text-sm font-medium mt-2 leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

```

## src/components/Services.tsx

SEO service grid.

`$(System.Collections.Hashtable.Lang)
import {
  Search,
  MapPin,
  FileText,
  Zap,
  BarChart2,
  Link as LinkIcon,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "../data/siteData";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
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

        {/* Grid â€” first card spans 2 columns */}
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

```

## src/components/DemoShowcase.tsx

SEO demo showcase.

`$(System.Collections.Hashtable.Lang)
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
            Each template is structured around real search behaviour for its niche â€” not just aesthetics.
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

```

## src/components/Packages.tsx

Package pricing cards.

`$(System.Collections.Hashtable.Lang)
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
            Demo pricing â€” your final scope and price is confirmed in writing during intake.
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
                      {pkg.pages} pages Â· Delivered in {pkg.delivery}
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

```

## src/components/Process.tsx

Production process section.

`$(System.Collections.Hashtable.Lang)
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { PROCESS_STEPS } from "../data/siteData";

export default function Process() {
  const navigate = useNavigate();

  return (
    <section id="process" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-16 xl:gap-24 items-start">

          {/* Left â€” sticky header */}
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

          {/* Right â€” timeline */}
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

```

## src/components/Results.tsx

Case studies/results section.

`$(System.Collections.Hashtable.Lang)
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
                    {c.location} Â· {c.package} Package Â· {c.pages} pages
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

```

## src/components/BookingCTA.tsx

Final booking CTA.

`$(System.Collections.Hashtable.Lang)
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
          Submit your project details through our intake form and we'll have your SEO-ready site built and delivered in days â€” not weeks.
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

```

## src/components/Contact.tsx

Contact form frontend state.

`$(System.Collections.Hashtable.Lang)
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
              Use the intake form instead â†’
            </button>
          </p>
        </div>

        <div className="grid lg:grid-cols-[380px_1fr] gap-12 items-start">

          {/* Left â€” contact details */}
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

          {/* Right â€” form */}
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

```

## src/components/Footer.tsx

Footer.

`$(System.Collections.Hashtable.Lang)
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
              Get an SEO-ready website delivered in 1â€“3 business days.
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
                ["Starter Website â€” â‚¹6,000", "starter"],
                ["Business Website â€” â‚¹8,000", "business"],
                ["Premium Website â€” â‚¹12,000", "premium"],
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
            Â© {year} {AGENCY.name}. All rights reserved.
          </p>
          <p className="text-gray-700 text-[12px] font-mono">
            Template ID: agency-seo-performance-01
          </p>
        </div>
      </div>
    </footer>
  );
}

```

## src/index.css

Global styles and Tailwind imports.

`$(System.Collections.Hashtable.Lang)
@import url('https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,300;0,14..32,400;0,14..32,500;0,14..32,600;0,14..32,700;0,14..32,800;0,14..32,900;1,14..32,400&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #ffffff;
    color: #111827;
  }

  * {
    box-sizing: border-box;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }

  .gradient-text {
    @apply text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500;
  }

  .glass {
    @apply bg-white/5 backdrop-blur-md border border-white/10;
  }

  .section-label {
    @apply inline-flex items-center gap-2 text-blue-600 text-xs font-bold uppercase tracking-[0.15em];
  }
}

```

## tailwind.config.js

Tailwind config.

`$(System.Collections.Hashtable.Lang)
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

```

## vite.config.ts

Vite config.

`$(System.Collections.Hashtable.Lang)
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

```

