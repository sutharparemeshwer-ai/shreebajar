import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DottedCanvas from '../components/DottedCanvas';
import TrustedBrands from '../components/TrustedBrands';
import ServicesPreview from '../components/ServicesPreview';
import AboutPreview from '../components/AboutPreview';
import TestimonialsPreview from '../components/TestimonialsPreview';
import ContactPreview from '../components/ContactPreview';
import AnimatedCounter from '../components/AnimatedCounter';
import {
  ArrowRight,
  Trophy,
  CheckCircle2,
  Check,
  Sparkle,
  Activity
} from 'lucide-react';

const Home = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleAuditRequest = (e) => {
    e.preventDefault();
    if (emailOrPhone) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
    }
  };

  const agencyStats = [
    { label: 'Shoots Delivered', target: 350, suffix: '+', sub: 'Weddings & Brands' },
    { label: 'Ad Sales Generated', target: 10, prefix: '₹', suffix: 'Cr+', sub: 'Meta & Google Ads' },
    { label: 'Web & App Projects', target: 150, suffix: '+', sub: 'Custom Engineering' },
    { label: 'Client Satisfaction', target: 99.7, decimals: 1, suffix: '%', sub: 'Verified Rating' }
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden pt-28">

      {/* Interactive Dancing Dot Canvas Background */}
      <DottedCanvas />

      {/* ============================= HERO ============================= */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-6 space-y-6 text-left">

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
              <span>Shree Bazaar Media & Marketing Agency</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              High-Impact Shoots. <br />
              <span className="text-indigo-600">Performance Ads</span> & <br />
              Custom Web Dev.
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              We help brands scale with professional wedding & commercial ad shoots, Meta & Google ads, print design (posters, menus, business cards), video editing, custom web development, SEO & ASO.
            </p>

            <form onSubmit={handleAuditRequest} className="max-w-md bg-white p-1.5 rounded-2xl border border-slate-300 shadow-sm flex items-center gap-2">
              <input
                type="text"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
                placeholder="Enter email or WhatsApp phone..."
                className="w-full px-4 py-3 bg-transparent text-slate-900 text-sm focus:outline-none placeholder:text-slate-400 font-medium"
                required
              />
              <button
                type="submit"
                className="shrink-0 px-6 py-3 rounded-xl bg-slate-900 text-white text-sm font-semibold hover:bg-indigo-600 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <span>Book Shoot / Audit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {submitted && (
              <p className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" /> Thank you! Our agency team will contact you within 30 minutes.
              </p>
            )}

            <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium border-t border-slate-100">
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-slate-900" /> 350+ Shoots Delivered</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-slate-900" /> Verified Meta Ad Partners</span>
              <span className="flex items-center gap-1.5"><Check className="w-4 h-4 text-slate-900" /> 100+ Custom Web Apps</span>
            </div>
          </div>

          {/* RIGHT COLUMN: Smartphone Mockup + Floating Cards */}
          <div className="lg:col-span-6 relative flex justify-center lg:justify-end py-6">
            <div className="relative w-full max-w-md flex justify-center items-center">

              <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible hidden sm:block" xmlns="http://www.w3.org/2000/svg">
                <path d="M 120 40 L 210 110" fill="none" stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="4 4" />
                <path d="M 80 260 L 150 260" fill="none" stroke="#cbd5e1" strokeWidth="1.5" />
                <path d="M 280 370 L 340 400" fill="none" stroke="#3b82f6" strokeWidth="1.5" />
              </svg>

              {/* Smartphone Frame */}
              <div className="relative z-10 w-[250px] sm:w-[275px] h-[490px] bg-slate-900 rounded-[40px] p-2.5 shadow-2xl border-4 border-slate-800 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="w-24 h-4 bg-slate-900 rounded-b-xl mx-auto absolute top-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center justify-center">
                  <div className="w-8 h-1 bg-slate-700 rounded-full" />
                </div>

                <div className="w-full h-full bg-slate-950 rounded-[30px] overflow-hidden pt-7 px-3 text-white flex flex-col justify-between relative">
                  <div className="space-y-2.5 pt-1 text-left">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                      <span className="font-bold text-blue-400 flex items-center gap-1">
                        <Sparkle className="w-3 h-3 text-amber-400 fill-amber-400" /> Shree Bazaar Studio
                      </span>
                      <span>Live</span>
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800">
                      <p className="text-[10px] text-slate-300">Welcome to Shree Bazaar! Ready to launch your wedding shoot & Meta ad campaign?</p>
                    </div>
                    <div className="bg-indigo-600 p-2.5 rounded-xl text-white text-[10px] font-medium ml-3 shadow-md">
                      Yes! Book the wedding shoot & launch Meta Ads!
                    </div>
                    <div className="bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-[10px] text-slate-300">
                      <p className="text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" /> Shoot Confirmed • Ad Campaign Live!
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-2.5 rounded-xl mb-2 text-center shadow-lg">
                    <span className="text-[9px] text-blue-200 font-bold uppercase tracking-wider block">Live Campaign Performance</span>
                    <div className="text-base font-extrabold text-white">4.8x ROAS Achieved</div>
                  </div>
                </div>
              </div>

              {/* Trophy Badge */}
              <div className="absolute top-2 left-0 sm:-left-8 z-20 bg-white p-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-600">
                  <Trophy className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-extrabold text-slate-900">#1 Media & Marketing</div>
                  <div className="text-[10px] text-slate-500">Full-Service Agency</div>
                </div>
              </div>

              {/* ROAS Graph Card */}
              <div className="absolute top-44 -left-4 sm:-left-12 z-20 bg-slate-900 text-white p-4 rounded-2xl border border-slate-800 shadow-2xl w-44 text-left">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] text-slate-400 uppercase font-semibold">ROAS Growth</span>
                  <Activity className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <div className="h-8 w-full my-1">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
                    <path d="M 0 25 Q 25 20, 50 12 T 100 5" fill="none" stroke="#38bdf8" strokeWidth="2.5" />
                    <circle cx="100" cy="5" r="3" fill="#38bdf8" />
                  </svg>
                </div>
                <div className="text-xl font-extrabold text-white">4.8x ROAS</div>
                <span className="text-[9px] text-emerald-400 font-medium block">✓ Verified Ad Conversion</span>
              </div>

              {/* Clients Card */}
              <div className="absolute bottom-4 -right-2 sm:-right-8 z-20 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-xl text-left">
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex -space-x-2">
                    <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Client" />
                    <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Client" />
                    <img className="w-6 h-6 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=100&q=80" alt="Client" />
                  </div>
                  <span className="text-xs font-extrabold text-slate-900">350+</span>
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">SATISFIED CLIENTS</div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ======================== TRUSTED BY BRANDS ======================== */}
      <TrustedBrands />

      {/* ======================== METRICS GRID ======================== */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {agencyStats.map((st, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:border-slate-300 transition-all text-left space-y-1">
              <div className="text-3xl font-extrabold text-slate-900">
                <AnimatedCounter
                  target={st.target}
                  prefix={st.prefix || ''}
                  suffix={st.suffix || ''}
                  decimals={st.decimals || 0}
                />
              </div>
              <div className="text-xs font-bold text-slate-800">{st.label}</div>
              <div className="text-[11px] text-slate-500">{st.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ======================== SERVICES PREVIEW ======================== */}
      <ServicesPreview />

      {/* ======================== ABOUT PREVIEW ======================== */}
      <AboutPreview />

      {/* ======================== TESTIMONIALS ======================== */}
      <TestimonialsPreview />

      {/* ======================== CONTACT US ======================== */}
      <ContactPreview />

    </div>
  );
};

export default Home;
