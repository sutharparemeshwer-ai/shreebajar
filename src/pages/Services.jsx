import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DottedCanvas from '../components/DottedCanvas';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  Camera,
  Megaphone,
  Palette,
  Video,
  Code2,
  CheckCircle2,
  ArrowRight,
  Check,
  Sparkles,
  Search,
  Globe,
  Layers,
  Scissors,
  MonitorSmartphone,
  PhoneCall
} from 'lucide-react';

/* ──────────────────────────────────────────────────────────
   DATA
────────────────────────────────────────────────────────── */
const categories = [
  { id: 'all',     label: 'All Services',          icon: Layers },
  { id: 'shoots',  label: 'Shoots & Media',         icon: Camera },
  { id: 'ads',     label: 'Meta & Google Ads',      icon: Megaphone },
  { id: 'print',   label: 'Design & Print',         icon: Palette },
  { id: 'editing', label: 'Video & Photo Editing',  icon: Scissors },
  { id: 'webtech', label: 'Web Dev, SEO & ASO',     icon: Code2 },
];

const services = [
  {
    id: 1,
    category: 'shoots',
    icon: Camera,
    badge: '4K / 8K Cinematic',
    badgeColor: 'bg-violet-50 text-violet-700 border-violet-100',
    iconColor: 'bg-violet-50 text-violet-600 border-violet-100',
    accentHover: 'hover:border-violet-300',
    title: 'Product & Commercial Photography / Videography',
    desc: 'High-converting 4K product shoots, commercial ad videos, e-commerce catalog photography, drone aerials, and studio lighting.',
    features: [
      'Product & Commercial Shoots',
      'Cinematic Teaser & Highlight Film',
      'Drone 4K Aerial Videography',
      'Studio & On-Location Shoots',
    ],
    pricing: 'Custom Package Quotes',
    pricingNote: 'Tailored to your event',
  },
  {
    id: 2,
    category: 'shoots',
    icon: Camera,
    badge: 'High Conversion',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
    iconColor: 'bg-blue-50 text-blue-600 border-blue-100',
    accentHover: 'hover:border-blue-300',
    title: 'Brand Commercial & Ad Product Shoots',
    desc: 'Professional studio & location shoots for e-commerce products, fashion apparel, luxury jewellery, and viral commercial ads.',
    features: [
      'Studio Product Photography',
      'Model & Fashion Apparel Shoots',
      'High-Converting Video Commercials',
      'Amazon & Shopify Catalog Specs',
    ],
    pricing: 'Starts at ₹9,999 / session',
    pricingNote: 'Studio + Location options',
  },
  {
    id: 3,
    category: 'ads',
    icon: Megaphone,
    badge: 'High ROAS',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    iconColor: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    accentHover: 'hover:border-indigo-300',
    title: 'Meta Ads Management (Facebook & Instagram)',
    desc: 'Targeted lead generation, retargeting funnels, dynamic catalogue ads, and creative copy designed to maximise ROAS.',
    features: [
      'Custom Audience & Retargeting Setup',
      'A/B Creative Split Testing',
      'Weekly Performance Analytics Report',
      'Pixel & Conversion API Integration',
    ],
    pricing: '15% of Ad Spend or Flat Monthly',
    pricingNote: 'No lock-in contracts',
  },
  {
    id: 4,
    category: 'ads',
    icon: Globe,
    badge: 'Intent Driven',
    badgeColor: 'bg-sky-50 text-sky-700 border-sky-100',
    iconColor: 'bg-sky-50 text-sky-600 border-sky-100',
    accentHover: 'hover:border-sky-300',
    title: 'Google Ads & YouTube PPC Campaigns',
    desc: 'Capture high-intent buyers on Google Search, Shopping Ads, Performance Max campaigns, and YouTube video ads.',
    features: [
      'High-Intent Search Keyword Bidding',
      'Google Shopping & Performance Max',
      'YouTube In-Stream Video Ads',
      'Conversion Tracking & Negative Keywords',
    ],
    pricing: 'Flat Monthly Management Fee',
    pricingNote: 'Transparent reporting',
  },
  {
    id: 5,
    category: 'print',
    icon: Palette,
    badge: 'Graphic & Print',
    badgeColor: 'bg-rose-50 text-rose-700 border-rose-100',
    iconColor: 'bg-rose-50 text-rose-600 border-rose-100',
    accentHover: 'hover:border-rose-300',
    title: 'Restaurant Menus, Posters & Banners',
    desc: 'Custom restaurant menu design (dine-in & QR digital menus), promotional event posters, outdoor banners, and social media kits.',
    features: [
      'Luxury Leather / Laminated Menu Cards',
      'Digital QR Menu Integration',
      'High-Resolution Poster Prints',
      'Social Media Promo Bundles',
    ],
    pricing: 'Starts at ₹1,499',
    pricingNote: 'Print-ready files included',
  },
  {
    id: 6,
    category: 'print',
    icon: Sparkles,
    badge: 'Premium Branding',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-100',
    iconColor: 'bg-amber-50 text-amber-600 border-amber-100',
    accentHover: 'hover:border-amber-300',
    title: 'Luxury Business Cards & Brand Identity',
    desc: 'Minimalist luxury business cards (embossed, gold foil, matte finish), corporate identity, logo design, and brand style guides.',
    features: [
      'Minimalist Premium Business Cards',
      'Embossed & Gold Foil Print Options',
      'Complete Logo Design System',
      'Brand Guidelines & Typography Kit',
    ],
    pricing: 'Starts at ₹999 / pack',
    pricingNote: 'Multiple finish options',
  },
  {
    id: 7,
    category: 'editing',
    icon: Video,
    badge: '24hr Dispatch',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    iconColor: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    accentHover: 'hover:border-emerald-300',
    title: 'Reels, Shorts & Commercial Video Editing',
    desc: 'Engaging Instagram Reels, YouTube Shorts, podcast video editing, sound effects, motion titles, and cinematic colour grading.',
    features: [
      'Viral Hook Captions & Subtitles',
      'Sound Design & Royalty-Free Music',
      'Cinematic Colour Grading (LUT)',
      'Express 24-Hour Turnaround Option',
    ],
    pricing: 'Packages from ₹499 / reel',
    pricingNote: 'Bulk discounts available',
  },
  {
    id: 8,
    category: 'webtech',
    icon: MonitorSmartphone,
    badge: 'Custom Engineering',
    badgeColor: 'bg-teal-50 text-teal-700 border-teal-100',
    iconColor: 'bg-teal-50 text-teal-600 border-teal-100',
    accentHover: 'hover:border-teal-300',
    title: 'Custom Web Development',
    desc: 'Lightning-fast corporate websites, Shopify e-commerce portals, startup landing pages, and full-stack web applications.',
    features: [
      'React & Next.js Custom Code',
      'Shopify & WooCommerce E-Commerce',
      '100% Mobile & Desktop Responsive',
      'Ultra-Fast Page Load Optimisation',
    ],
    pricing: 'Starts at ₹14,999',
    pricingNote: 'Includes 3 months support',
  },
  {
    id: 9,
    category: 'webtech',
    icon: Search,
    badge: '#1 Ranking',
    badgeColor: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    iconColor: 'bg-cyan-50 text-cyan-600 border-cyan-100',
    accentHover: 'hover:border-cyan-300',
    title: 'SEO & ASO Optimization',
    desc: 'Rank #1 on Google for high-intent keywords and boost organic mobile app downloads on Google Play & Apple App Store.',
    features: [
      'Technical & On-Page SEO Audits',
      'High-Domain Backlink Building',
      'App Store Title & Keyword Optimisation',
      'Monthly Keyword Ranking Reports',
    ],
    pricing: 'Monthly Retainer',
    pricingNote: 'Guaranteed Page 1 targets',
  },
];

const process = [
  { step: '01', title: 'Discovery Call',    desc: 'We understand your brand, goals, budget, and timeline in a free 30-minute consultation.' },
  { step: '02', title: 'Strategy & Quote',  desc: 'We craft a custom proposal with clear deliverables, pricing, and a realistic timeline.' },
  { step: '03', title: 'Execution',         desc: 'Our team gets to work — shoots, ads, design, or code — with daily/weekly progress updates.' },
  { step: '04', title: 'Deliver & Scale',   desc: 'You receive the final deliverables and we continue optimising results month over month.' },
];

/* ──────────────────────────────────────────────────────────
   SERVICE CARD
────────────────────────────────────────────────────────── */
const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className={`bg-white rounded-2xl border border-slate-200 ${service.accentHover} hover:shadow-xl transition-all duration-300 flex flex-col text-left group cursor-pointer`}>
      {/* Top section */}
      <div className="p-7 flex-1">
        <div className="flex items-start justify-between mb-5">
          <div className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${service.iconColor}`}>
            <Icon className="w-5 h-5" />
          </div>
          <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full border ${service.badgeColor}`}>
            {service.badge}
          </span>
        </div>

        <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors leading-snug">
          {service.title}
        </h3>
        <p className="text-xs text-slate-500 leading-relaxed mb-5">
          {service.desc}
        </p>

        <ul className="space-y-2 pt-4 border-t border-slate-100">
          {service.features.map((feat, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
              {feat}
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom pricing + CTA */}
      <div className="px-7 pb-7 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <div>
          <div className="text-xs font-extrabold text-slate-900">{service.pricing}</div>
          <div className="text-[10px] text-slate-400 mt-0.5">{service.pricingNote}</div>
        </div>
        <Link
          to="/contact"
          className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold hover:bg-indigo-600 transition-all group/btn"
        >
          Book Now
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

/* ──────────────────────────────────────────────────────────
   MAIN PAGE
────────────────────────────────────────────────────────── */
const Services = () => {
  const [active, setActive] = useState('all');

  const filtered = active === 'all'
    ? services
    : services.filter(s => s.category === active);

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden pt-28">

      <DottedCanvas />

      {/* ══ HERO ═══════════════════════════════════════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              Full Agency Services Catalog
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Shoots, Ads,<br />
              Design <span className="text-indigo-600">&</span><br />
              Web Dev.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Everything your brand needs under one roof — 4K/8K shoots, Meta & Google ad campaigns, print design, video editing, custom web development, SEO & ASO.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-700 font-semibold">
              {['9 Core Services', 'Custom Packages Available', 'No Lock-in Contracts'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-indigo-600" /> {t}
                </span>
              ))}
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-indigo-600 transition-all group"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* RIGHT — quick stat pills */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {[
              { target: 9,    suffix: '+',   label: 'Services Offered',    sub: 'All under one roof',  color: 'text-indigo-600' },
              { target: 10,   prefix: '₹', suffix: 'Cr+', label: 'Ad Revenue Managed',  sub: 'Meta & Google',        color: 'text-emerald-600' },
              { target: 350,  suffix: '+',   label: 'Shoots Delivered',    sub: 'Products & Brands',    color: 'text-violet-600' },
              { target: 4.9,  suffix: '★', decimals: 1, label: 'Client Satisfaction', sub: 'Verified reviews', color: 'text-amber-600' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                <div className={`text-2xl font-extrabold ${s.color}`}>
                  <AnimatedCounter target={s.target} prefix={s.prefix || ''} suffix={s.suffix || ''} decimals={s.decimals || 0} />
                </div>
                <div className="text-xs font-bold text-slate-800 mt-0.5">{s.label}</div>
                <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CATEGORY FILTER TABS ════════════════════════════════════ */}
      <section className="relative z-10 border-t border-slate-100 bg-white sticky top-[64px] z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = active === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActive(cat.id)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-sm'
                      : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ SERVICE CARDS GRID ══════════════════════════════════════ */}
      <section className="relative z-10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">

          {/* Count label */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs text-slate-500 font-medium">
              Showing <span className="font-bold text-slate-800">{filtered.length}</span> service{filtered.length !== 1 ? 's' : ''}
              {active !== 'all' && (
                <button onClick={() => setActive('all')} className="ml-2 text-indigo-600 hover:underline">
                  Clear filter ×
                </button>
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(s => <ServiceCard key={s.id} service={s} />)}
          </div>
        </div>
      </section>

      {/* ══ HOW IT WORKS ════════════════════════════════════════════ */}
      <section className="relative z-10 bg-slate-50 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">How It Works</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Simple. Transparent. Fast.</h2>
            <p className="text-slate-500 text-sm max-w-lg">Our 4-step process ensures every project is delivered on time, on brand, and beyond expectations.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p, i) => (
              <div key={i} className="relative bg-white rounded-2xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-md transition-all group text-left">
                {/* Step number badge */}
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-extrabold flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                  {p.step}
                </div>
                {/* Connector line */}
                {i < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2.5 w-5 h-px bg-slate-300 z-10" />
                )}
                <h4 className="text-sm font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{p.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ BOTTOM CTA ══════════════════════════════════════════════ */}
      <section className="relative z-10 bg-white border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-900 rounded-3xl p-10 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 overflow-hidden relative">
            {/* bg glow */}
            <div className="absolute top-0 right-0 w-96 h-64 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-48 bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 text-left max-w-xl">
              <p className="text-indigo-400 text-xs font-bold uppercase tracking-widest mb-2">Custom Agency Combo</p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
                Need a Tailored Package?<br />
                <span className="text-indigo-400">We'll Build It for You.</span>
              </h2>
              <p className="text-slate-400 text-sm leading-relaxed">
                Combine product shoots + Meta ads + restaurant menus + video editing + web development into one bespoke agency package built around your budget and goals.
              </p>
              <div className="mt-5 flex flex-wrap gap-3 text-xs text-slate-400 font-semibold">
                {['No Lock-in', 'Dedicated Manager', 'Weekly Reports', 'Transparent Pricing'].map((t, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-indigo-400" /> {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-indigo-600 text-white font-bold text-sm hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-900/40 group"
              >
                <PhoneCall className="w-4 h-4" />
                Book Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <p className="text-slate-500 text-[11px]">30-min call · No obligation · Free</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
