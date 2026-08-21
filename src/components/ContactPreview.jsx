import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Send,
  MessageCircle,
  ChevronDown
} from 'lucide-react';

const services = [
  'Product / Commercial Shoot',
  'Brand / Ad Shoot',
  'Meta Ads (FB/IG)',
  'Google Ads / PPC',
  'Poster / Menu / Card Design',
  'Video / Photo Editing',
  'Web Development',
  'SEO / ASO',
  'Custom Package'
];

/* ── Custom Dropdown ──────────────────────────────────────────── */
const CustomDropdown = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [dropStyle, setDropStyle] = useState({});
  const ref = useRef(null);
  const triggerRef = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Recalculate position on scroll / resize
  useEffect(() => {
    if (!open) return;
    const update = () => {
      if (!triggerRef.current) return;
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = services.length * 42 + 16;
      const spaceBelow = window.innerHeight - rect.bottom;
      const goUp = spaceBelow < dropdownHeight;
      setDropStyle({
        position: 'fixed',
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
        ...(goUp
          ? { bottom: window.innerHeight - rect.top + 6 }
          : { top: rect.bottom + 6 }),
      });
    };
    update();
    window.addEventListener('scroll', update, true);
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update, true);
      window.removeEventListener('resize', update);
    };
  }, [open]);

  const handleToggle = () => {
    if (!open && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const dropdownHeight = services.length * 42 + 16;
      const spaceBelow = window.innerHeight - rect.bottom;
      const goUp = spaceBelow < dropdownHeight;
      setDropStyle({
        position: 'fixed',
        left: rect.left,
        width: rect.width,
        zIndex: 9999,
        ...(goUp
          ? { bottom: window.innerHeight - rect.top + 6 }
          : { top: rect.bottom + 6 }),
      });
    }
    setOpen(o => !o);
  };

  const selected = value || 'Select a service...';

  return (
    <div ref={ref} className="relative w-full">
      {/* Trigger */}
      <button
        ref={triggerRef}
        type="button"
        onClick={handleToggle}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors cursor-pointer hover:border-blue-400"
      >
        <span className={value ? 'text-slate-900 font-medium' : 'text-slate-400'}>
          {selected}
        </span>
        <ChevronDown
          className={`w-4 h-4 text-slate-500 ml-2 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Dropdown panel — fixed position, escapes any overflow:hidden parent */}
      {open && (
        <ul
          style={dropStyle}
          className="bg-white border border-slate-200 rounded-xl shadow-2xl overflow-hidden py-1"
        >
          {services.map((s, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => { onChange(s); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer hover:bg-blue-50 hover:text-blue-700 ${value === s ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700'}`}
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ── Main Component ───────────────────────────────────────────── */
const ContactPreview = () => {
  const [form, setForm] = useState({ name: '', phone: '', service: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', phone: '', service: '' });
  };

  return (
    <section className="relative z-10 bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* LEFT: Contact Info */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5" />
              Get In Touch
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Let's Build Something <span className="text-blue-600">Great Together</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you need a product shoot, a high-converting Meta ad campaign, a restaurant menu, or a custom website — we're ready to make it happen.
            </p>

            <div className="space-y-4 pt-2">
              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Call / WhatsApp</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">+91 98765 43210</div>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@skmarketing.com"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Email Us</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">hello@skmarketing.com</div>
                </div>
              </a>

              {/* Location — now has hover effect + pointer cursor */}
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Studio Location</div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">India — Serving Nationwide</div>
                </div>
              </a>
            </div>

            {/* View More link */}
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-indigo-600 transition-colors group"
              >
                <span>Visit Full Contact Page</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* RIGHT: Quick Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Enquiry — We'll Reply in 30 Minutes</h3>

              {sent ? (
                <div className="flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 px-5 py-4 rounded-xl text-sm font-semibold">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>Thank you! Our team will contact you within 30 minutes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm({ ...form, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 cursor-text"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Phone / WhatsApp Number</label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={e => setForm({ ...form, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-blue-500 transition-colors placeholder:text-slate-400 cursor-text"
                    />
                  </div>

                  {/* Custom Dropdown */}
                  <div>
                    <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Service You're Interested In</label>
                    <CustomDropdown
                      value={form.service}
                      onChange={(val) => setForm({ ...form, service: val })}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-sm mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Enquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactPreview;
