import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ArrowUpRight, ArrowRight } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();

  const serviceLinks = [
    'Wedding & Event Shoots',
    'Brand & Ad Shoots',
    'Meta & Google Ads',
    'Poster & Menu Design',
    'Video & Photo Editing',
    'Web Dev, SEO & ASO',
  ];

  const companyLinks = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'About Us', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  const socials = [
    { symbol: '📸', name: 'Instagram', color: 'hover:bg-pink-600' },
    { symbol: 'f',  name: 'Facebook',  color: 'hover:bg-blue-700' },
    { symbol: '▶',  name: 'YouTube',   color: 'hover:bg-red-600'  },
    { symbol: '𝕏',  name: 'Twitter X', color: 'hover:bg-neutral-700' },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-800">

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Glow blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-64 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-48 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* ── TOP CTA BANNER ─────────────────────────────────────── */}
      <div className="relative z-10 border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Ready to grow?</p>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">remarkable.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-bold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-900/40 group"
          >
            Book Free Consultation
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── MAIN GRID ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="space-y-5 lg:col-span-1">
            <Link to="/" className="inline-block text-2xl font-extrabold tracking-tight text-white">
              SHREE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">BAZAAR</span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              India's full-service media & digital marketing agency — 4K/8K shoots, high-ROAS ads, print design, video editing, web dev, SEO & ASO.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label={s.name}
                  title={s.name}
                  className={`w-9 h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 text-[13px] font-bold transition-all duration-200 ${s.color} hover:border-transparent hover:text-white hover:scale-110`}
                >
                  {s.symbol}
                </a>
              ))}
            </div>

            {/* Live indicator */}
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Clients
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Services</h4>
            <ul className="space-y-2.5">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Stats */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Company</h4>
            <ul className="space-y-2.5">
              {companyLinks.map((c, i) => (
                <li key={i}>
                  <Link
                    to={c.href}
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider + mini stats */}
            <div className="pt-4 mt-2 border-t border-white/[0.07] space-y-2.5">
              {[
                { label: 'Shoots Delivered', value: '350+', color: 'text-white' },
                { label: 'Ad Revenue',       value: '₹10Cr+', color: 'text-emerald-400' },
                { label: 'Client Rating',    value: '4.9 ⭐',  color: 'text-amber-400' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-xs">
                  <span className="text-slate-500">{stat.label}</span>
                  <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Contact</h4>

            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Call / WhatsApp</div>
                    <div className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">+91 98765 43210</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:hello@shreebazaar.com" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Email</div>
                    <div className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">hello@shreebazaar.com</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group cursor-pointer">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Location</div>
                    <div className="text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">India — Nationwide</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM STRIP ───────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="text-xs text-slate-600">© {year} Shree Bazaar Media & Marketing. All rights reserved.</span>
          <div className="flex items-center gap-5 text-xs text-slate-600">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <span className="hidden sm:inline text-slate-700">Made with ❤ in India</span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
