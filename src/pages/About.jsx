import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DottedCanvas from '../components/DottedCanvas';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  ArrowRight,
  Check,
  Camera,
  Megaphone,
  Palette,
  Code2,
  Target,
  Globe,
  Zap,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  TrendingUp
} from 'lucide-react';

/* ────────────────────────────────────────────────────────────
   2-CARD EXECUTIVE TEAM SECTION
──────────────────────────────────────────────────────────── */
const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'Founder & Creative Director',
    subtitle: 'Cinematography · 4K/8K Shoots · Brand Storytelling',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
    tag: 'Creative Leadership',
    stats: [
      { label: 'Experience', value: '8+ Years' },
      { label: 'Shoots Delivered', value: '200+' },
      { label: 'Speciality', value: '4K/8K Cinema' },
      { label: 'Rating', value: '4.9★ Verified' },
    ],
    badges: ['Director', 'Drone Pilot', 'Commercial Ads', 'Brand Films'],
    color: 'from-indigo-600 to-violet-600',
    badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  },
  {
    name: 'Priya Kapoor',
    role: 'Head of Growth & Performance Marketing',
    subtitle: 'Meta & Google Ads · High ROAS · Full Stack Web',
    photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    tag: 'Performance & Growth',
    stats: [
      { label: 'Ad Revenue Managed', value: '₹10Cr+' },
      { label: 'Average ROAS', value: '4.8x' },
      { label: 'Web Apps Built', value: '150+' },
      { label: 'Live Campaigns', value: '300+' },
    ],
    badges: ['Meta Certified', 'Google Partner', 'ROAS Expert', 'SEO/ASO Lead'],
    color: 'from-blue-600 to-indigo-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
  },
];

const TeamCardsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {teamMembers.map((member, i) => (
        <div
          key={i}
          className="group bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm hover:shadow-2xl hover:border-indigo-400 transition-all duration-300 flex flex-col justify-between text-left"
        >
          <div>
            {/* Header: Photo + Badge */}
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shrink-0 border-2 border-slate-100 shadow-md">
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${member.color}`} />
                </div>
                <div>
                  <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider mb-1.5 border ${member.badgeBg}`}>
                    <Sparkles className="w-3 h-3" />
                    {member.tag}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs sm:text-sm font-bold text-slate-600 mt-0.5">
                    {member.role}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6 font-medium">
              {member.subtitle}
            </p>

            {/* Metrics 2x2 Grid */}
            <div className="grid grid-cols-2 gap-2.5 mb-6">
              {member.stats.map((st, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 p-3 rounded-xl">
                  <div className="text-[10px] text-slate-400 font-semibold uppercase tracking-wider mb-0.5">
                    {st.label}
                  </div>
                  <div className="text-sm sm:text-base font-extrabold text-slate-900">
                    {st.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              {member.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-200/80"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Quick CTA */}
          <Link
            to="/contact"
            className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-2xl bg-slate-900 text-white font-bold text-xs sm:text-sm hover:bg-indigo-600 transition-all shadow-sm group/btn"
          >
            <span>Work With {member.name.split(' ')[0]}</span>
            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      ))}
    </div>
  );
};

/* ────────────────────────────────────────────────────────────
   MAIN ABOUT PAGE
──────────────────────────────────────────────────────────── */
const About = () => {
  const pillars = [
    { icon: Camera,    title: 'Cinematic Shoots',  desc: '4K/8K cameras, prime lenses & drone videography for product shoots, brand ads, and corporate films.', accent: 'bg-violet-50 text-violet-600 border border-violet-100' },
    { icon: Megaphone, title: 'Performance Ads',   desc: 'ROAS-obsessed Meta & Google campaigns. Every rupee tracked and optimised for maximum profit.',  accent: 'bg-indigo-50 text-indigo-600 border border-indigo-100' },
    { icon: Palette,   title: 'Print & Branding',  desc: 'Luxury menus, posters, business cards, and brand identities that command instant attention.',      accent: 'bg-rose-50 text-rose-600 border border-rose-100' },
    { icon: Code2,     title: 'Web Dev & SEO',     desc: 'Ultra-fast custom web apps ranked #1 on Google Search and top of the App Store charts.',          accent: 'bg-emerald-50 text-emerald-600 border border-emerald-100' },
  ];

  const milestones = [
    {
      year: '2024',
      icon: Sparkles,
      title: 'Agency Founded',
      desc: 'Started with a bold mission — bring high-end 4K shoots and data-driven Meta ads to Indian businesses of all sizes.',
      color: 'bg-violet-600',
      ring: 'ring-violet-100',
      lineColor: 'bg-violet-200',
      tag: 'The Beginning',
    },
    {
      year: '2025',
      icon: TrendingUp,
      title: 'Full-Service Expansion',
      desc: 'Expanded into custom web development, restaurant menu printing, business card design, SEO and ASO services. Crossed 100 clients.',
      color: 'bg-indigo-600',
      ring: 'ring-indigo-100',
      lineColor: 'bg-indigo-200',
      tag: 'Rapid Growth',
    },
    {
      year: '2026',
      icon: Award,
      title: '350+ Projects & Rs10Cr+ Ad Revenue',
      desc: 'Delivered 350+ shoots, managed Rs10Cr+ in client ad budgets, built 150+ web projects, and earned a 4.9-star rating across 200+ clients.',
      color: 'bg-emerald-600',
      ring: 'ring-emerald-100',
      lineColor: 'bg-emerald-200',
      tag: 'Industry Leader',
    },
  ];

  const goals = [
    { icon: Globe,   title: 'Pan-India by 2027',            desc: 'Regional studios in Mumbai, Delhi, Bangalore, Hyderabad, and 6 more cities.',      accent: 'bg-blue-50 text-blue-600' },
    { icon: Zap,     title: 'Rs100Cr+ in Managed Ad Spend', desc: 'Scale Meta & Google ad operations with consistent 4x+ ROAS for every client.',    accent: 'bg-amber-50 text-amber-600' },
    { icon: Award,   title: "India's Most Trusted Agency",  desc: 'The go-to full-service media & digital marketing agency for Indian businesses.',     accent: 'bg-emerald-50 text-emerald-600' },
    { icon: Heart,   title: 'Community Mentorship',         desc: 'Train 500+ aspiring creators & marketers through our free mentorship program.',     accent: 'bg-rose-50 text-rose-600' },
  ];

  const stats = [
    { target: 350, suffix: '+', label: 'Shoots Delivered', sub: 'Products & Brands' },
    { target: 10, prefix: '₹', suffix: 'Cr+', label: 'Ad Revenue Managed', sub: 'Meta & Google Ads' },
    { target: 150, suffix: '+', label: 'Web Dev Projects', sub: 'Custom Engineering' },
    { target: 4.9, suffix: '★', decimals: 1, label: 'Client Rating', sub: 'Verified Reviews' },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden pt-28">

      <DottedCanvas />

      {/* ══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              About SK Marketing
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              We Create.<br />
              <span className="text-indigo-600">We Grow.</span><br />
              We Deliver.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              India's all-in-one media production and performance marketing agency. From 4K product shoots to Rs10Cr+ Meta ad campaigns — we make your brand unmissable.
            </p>

            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-700 font-semibold">
              {['100% On-Time Delivery', 'Dedicated Account Manager', 'No Lock-in Contracts'].map((t, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-indigo-600" /> {t}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-indigo-600 transition-all group">
                Work With Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-sm font-semibold hover:border-slate-400 hover:text-slate-900 transition-all">
                Our Services
              </Link>
            </div>
          </div>

          {/* Right: stat grid */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md space-y-3">
              <div className="grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div key={i} className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md hover:border-slate-300 transition-all">
                    <div className="text-2xl font-extrabold text-slate-900">
                      <AnimatedCounter target={s.target} prefix={s.prefix || ''} suffix={s.suffix || ''} decimals={s.decimals || 0} />
                    </div>
                    <div className="text-xs font-bold text-slate-800 mt-0.5">{s.label}</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 text-white rounded-2xl p-5 flex items-center justify-between gap-4">
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">Ready to scale?</div>
                  <div className="text-sm font-extrabold">Book a free strategy call</div>
                </div>
                <Link to="/contact" className="shrink-0 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold transition-all">
                  Let's Talk →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT US — PILLARS ════════════════════════════════════════ */}
      <section className="relative z-10 bg-white border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-start">
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Who We Are</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-[1.15]">
                Bridging Stunning Content<br />
                <span className="text-indigo-600">& Performance ROI</span>
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Most agencies pick a lane — photography or digital marketing. At SK Marketing, we do both. We produce breathtaking 4K/8K shoots while engineering high-ROI Meta & Google campaigns, print graphics, custom web apps, SEO & ASO.
              </p>
              <p className="text-slate-500 text-sm leading-relaxed">
                Our multidisciplinary team of cinematographers, ad strategists, graphic designers, and full-stack developers turn your vision into an industry-leading brand.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all text-left space-y-3 group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${p.accent}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-indigo-700 transition-colors">{p.title}</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══ OUR JOURNEY ═══════════════════════════════════════════════ */}
      <section className="relative z-10 bg-slate-50 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">Our Journey</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">From Idea to Industry Leader</h2>
            <p className="text-slate-500 text-sm max-w-lg">From a boutique shoot studio to a full-service marketing powerhouse.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {milestones.map((ms, i) => {
              const Icon = ms.icon;
              return (
                <div key={i} className="relative bg-white rounded-2xl border border-slate-200 p-7 hover:border-slate-300 hover:shadow-md transition-all group overflow-hidden text-left">
                  {/* top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-0.5 ${ms.lineColor}`} />

                  {/* Year + tag */}
                  <div className="flex items-center gap-2 mb-5 mt-1">
                    <span className="text-xs font-extrabold text-indigo-600 bg-indigo-50 border border-indigo-100 px-3 py-1 rounded-full">
                      {ms.year}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{ms.tag}</span>
                  </div>

                  {/* Icon dot */}
                  <div className={`w-10 h-10 rounded-xl ${ms.color} ring-4 ${ms.ring} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>

                  <h4 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{ms.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{ms.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ OUR GOALS ════════════════════════════════════════════════ */}
      <section className="relative z-10 bg-white border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">Our Goals</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Where We're Headed</h2>
            <p className="text-slate-500 text-sm max-w-lg">Ambitious targets, clear roadmap, and an unstoppable team driving every milestone.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Goal cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {goals.map((g, i) => {
                const Icon = g.icon;
                return (
                  <div key={i} className="flex items-start gap-4 p-6 rounded-2xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-md transition-all group text-left">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${g.accent} group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 mb-1 group-hover:text-indigo-700 transition-colors">{g.title}</h4>
                      <p className="text-xs text-slate-500 leading-relaxed">{g.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* goals.svg illustration (Desktop only) */}
            <div className="hidden lg:flex lg:col-span-5 items-center justify-center">
              <div className="w-full max-w-md bg-slate-50/70 p-6 rounded-3xl border border-slate-100">
                <img
                  src="/goals.svg"
                  alt="SK Marketing Goals Illustration"
                  className="w-full h-auto object-contain drop-shadow-sm"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EXECUTIVE TEAM ══════════════════════════════════════════ */}
      <section className="relative z-10 bg-slate-50 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12 text-left">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">The Leadership</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-2">Meet the People Behind the Work</h2>
            <p className="text-slate-500 text-sm max-w-lg">Meet our core leadership — an elite team driving creative direction, 4K shoots, performance ad growth, and custom web dev.</p>
          </div>

          <TeamCardsGrid />

          {/* Bottom CTA strip */}
          <div className="mt-8 bg-slate-900 text-white rounded-3xl p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left">
              <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1">Join our team</div>
              <h3 className="text-2xl font-extrabold text-white">Want to work at SK Marketing?</h3>
              <p className="text-slate-400 text-sm mt-1">We're always looking for passionate creators, marketers, and developers.</p>
            </div>
            <Link to="/contact" className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition-all group">
              Say Hello
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
