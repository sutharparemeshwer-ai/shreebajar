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
    {
      name: 'Instagram',
      color: 'hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: 'hover:bg-blue-600',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'YouTube',
      color: 'hover:bg-red-600',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    },
    {
      name: 'Twitter X',
      color: 'hover:bg-neutral-700',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            <p className="text-[10px] sm:text-xs font-semibold uppercase tracking-widest text-blue-400 mb-1">Ready to grow?</p>
            <h3 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
              Let's create something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">remarkable.</span>
            </h3>
          </div>
          <Link
            to="/contact"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 sm:px-7 sm:py-3.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs sm:text-sm font-bold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-900/40 group"
          >
            Book Free Consultation
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>

      {/* ── MAIN GRID ──────────────────────────────────────────── */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 sm:pt-14 sm:pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">

          {/* Brand */}
          <div className="space-y-3 sm:space-y-5 lg:col-span-1">
            <Link to="/" className="inline-block text-xl sm:text-2xl font-extrabold tracking-tight text-white">
              SHREE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">BAZAAR</span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
                  className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 transition-all duration-200 ${s.color} hover:border-transparent hover:text-white hover:scale-110`}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Live indicator */}
            <div className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Accepting New Clients
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Services</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {serviceLinks.map((s, i) => (
                <li key={i}>
                  <Link
                    to="/services"
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Stats */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Company</h4>
            <ul className="space-y-2 sm:space-y-2.5">
              {companyLinks.map((c, i) => (
                <li key={i}>
                  <Link
                    to={c.href}
                    className="flex items-center gap-1.5 text-xs sm:text-sm text-slate-400 hover:text-white transition-colors group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-600 group-hover:bg-blue-400 transition-colors shrink-0" />
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Divider + mini stats */}
            <div className="pt-3 mt-2 border-t border-white/[0.07] space-y-2">
              {[
                { label: 'Shoots Delivered', value: '350+', color: 'text-white' },
                { label: 'Ad Revenue',       value: '₹10Cr+', color: 'text-emerald-400' },
                { label: 'Client Rating',    value: '4.9 ⭐',  color: 'text-amber-400' },
              ].map((stat, i) => (
                <div key={i} className="flex justify-between items-center text-[11px] sm:text-xs">
                  <span className="text-slate-500">{stat.label}</span>
                  <span className={`font-bold ${stat.color}`}>{stat.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h4 className="text-[10px] sm:text-[11px] font-extrabold text-slate-400 uppercase tracking-[0.15em]">Contact</h4>

            <ul className="space-y-3 sm:space-y-4">
              <li>
                <a href="tel:+919876543210" className="flex items-start gap-2.5 sm:gap-3 group cursor-pointer">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <Phone className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Call / WhatsApp</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">+91 98765 43210</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="mailto:hello@shreebazaar.com" className="flex items-start gap-2.5 sm:gap-3 group cursor-pointer">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <Mail className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Email</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">hello@shreebazaar.com</div>
                  </div>
                </a>
              </li>

              <li>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-start gap-2.5 sm:gap-3 group cursor-pointer">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-blue-600/20 border border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-all">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 mb-0.5">Location</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-300 group-hover:text-blue-400 transition-colors">India — Nationwide</div>
                  </div>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── BOTTOM STRIP ───────────────────────────────────────── */}
      <div className="relative z-10 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-5 flex flex-col sm:flex-row items-center justify-between gap-2.5">
          <span className="text-[11px] sm:text-xs text-slate-600">© {year} Shree Bazaar Media & Marketing. All rights reserved.</span>
          <div className="flex items-center gap-4 sm:gap-5 text-[11px] sm:text-xs text-slate-600">
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
