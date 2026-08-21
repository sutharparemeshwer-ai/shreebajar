import React from 'react';
import { Link } from 'react-router-dom';
import {
  Building2,
  CheckCircle2,
  ArrowRight,
  Sparkle
} from 'lucide-react';

const AboutPreview = () => {
  const highlights = [
    {
      title: 'Cinematic Shoot Studio',
      desc: 'Top-tier 4K/8K equipment & drone videography for product shoots, corporate films, and viral ad campaigns.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Ads & ROAS',
      desc: 'Data-driven Meta & Google ad campaigns engineered for maximum return on ad spend.'
    },
    {
      title: 'Graphic & Print Experts',
      desc: 'Designing high-converting posters, restaurant menus, luxury business cards, and packaging.'
    },
    {
      icon: Globe,
      title: 'Custom Web Dev & Apps',
      desc: 'High-speed, conversion-focused websites, e-commerce stores, SEO & ASO.'
    }
  ];

  return (
    <section className="relative z-10 bg-white border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* LEFT COLUMN: Agency Story & Key Facts */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-semibold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              <span>About SK Marketing Agency</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              We Craft Visuals & Drive <span className="text-blue-600">Explosive Growth</span>
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              SK Marketing is a full-service media production and digital growth agency. We bridge the gap between stunning visual storytelling—product, party, and brand shoots—and high-converting Meta/Google ads, graphic design, custom web development, SEO & ASO.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="bg-slate-50 p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* "View More About Us" AS A LINK (not a button) */}
            <div className="pt-4 flex items-center gap-6">
              <Link
                to="/about"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-indigo-600 transition-colors group"
              >
                <span>View More About Us</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-xs text-slate-500 font-medium">✦ 350+ Projects Completed</span>
            </div>
          </div>

          {/* RIGHT COLUMN: aboutgr.svg Illustration (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-6 items-center justify-center lg:justify-end">
            <div className="w-full max-w-lg">
              <img
                src="/aboutgr.svg"
                alt="SK Marketing Agency Team Illustration"
                className="w-full h-auto object-contain drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
