import React from 'react';
import { Link } from 'react-router-dom';
import {
  Camera,
  Megaphone,
  Code2,
  ArrowRight,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';

const ServicesPreview = () => {
  const topServices = [
    {
      id: 'shoots',
      title: 'Media & Shoots',
      icon: Camera,
      badge: '4K/8K Cinematic',
      desc: 'Wedding shoots, party shoots, corporate brand films, viral ad shoots, and luxury product photography.',
      features: ['Wedding Shoots', 'Party Shoots', 'Brand Commercials', 'Product Ad Shoots'],
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-50 border-indigo-100'
    },
    {
      id: 'ads',
      title: 'Performance Ads',
      icon: Megaphone,
      badge: 'High ROAS',
      desc: 'ROI-driven Meta (FB & IG) ads and Google PPC campaigns built to generate high-intent leads and ecommerce sales.',
      features: ['Meta Ads (FB/IG)', 'Google Search & PPC', 'YouTube Video Ads', 'Retargeting Funnels'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 border-blue-100'
    },
    {
      id: 'webdev',
      title: 'Web Dev, SEO & ASO',
      icon: Code2,
      badge: 'Engineering',
      desc: 'Custom web development, e-commerce web apps, plus ranking #1 on Google (SEO) and App Stores (ASO).',
      features: ['Custom Web Development', 'E-Commerce Portals', 'Google SEO Ranking', 'App Store ASO'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 border-emerald-100'
    }
  ];

  return (
    <section className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        
        {/* CENTERED Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-blue-600"></span>
            <span>Our Core Agency Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Everything You Need to <span className="text-blue-600">Scale Your Brand</span>
          </h2>
          
          <p className="text-slate-600 text-base max-w-2xl mx-auto">
            From high-end wedding and commercial shoots to Meta/Google ads, graphic print design, video editing, custom web dev, SEO & ASO.
          </p>

          {/* View More Services AS A LINK (Not a Button) */}
          <div className="pt-2">
            <Link
              to="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-indigo-600 transition-colors group"
            >
              <span>View More Services</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 3 Core Services Cards Grid (Shoots, Ads, Web Dev) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all flex flex-col justify-between text-left group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className={`p-3.5 rounded-xl ${service.bgColor} border`}>
                      <Icon className={`w-6 h-6 ${service.color}`} />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
                      {service.badge}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-xs leading-relaxed mt-2">
                      {service.desc}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-3 border-t border-slate-100">
                    {service.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500">Professional Execution</span>
                  <Link
                    to="/services"
                    className="text-xs font-bold text-blue-600 hover:text-indigo-600 flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ServicesPreview;
