// Agency configuration — replace these values with your own
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
      "Every site we build follows clean technical SEO structure — proper heading hierarchy, semantic markup, fast load times and schema-ready code from day one.",
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
      "Service pages, location pages and blog structures that target real search queries in your niche — built into the site from day one, not bolted on later.",
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
      "Monthly visibility snapshots showing keyword positions, organic traffic and page performance — so you can see exactly where the site is gaining ground.",
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
    price: "₹6,000",
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
    price: "₹8,000",
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
    price: "₹12,000",
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
      "Complete our detailed intake form — business information, goals, target audience, preferred template and SEO priorities.",
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
      "We asked for a professional site that could rank for our practice areas. What we got was much better than expected — clearly built by people who understand both design and SEO.",
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
