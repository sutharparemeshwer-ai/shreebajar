import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import DottedCanvas from '../components/DottedCanvas';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  ChevronDown,
  Clock,
  MessageCircle,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Star
} from 'lucide-react';

/* ─── Custom Dropdown ──────────────────────────── */
const Dropdown = ({ label, options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative w-full">
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer hover:border-indigo-400"
      >
        <span className={value ? 'text-slate-900 font-medium' : 'text-slate-400'}>
          {value || `Select ${label}...`}
        </span>
        <ChevronDown className={`w-4 h-4 text-slate-400 ml-2 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <ul className="absolute z-50 left-0 right-0 mt-1.5 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden py-1">
          {options.map((opt, i) => (
            <li key={i}>
              <button
                type="button"
                onClick={() => { onChange(opt); setOpen(false); }}
                className={`w-full text-left px-4 py-2.5 text-sm transition-colors cursor-pointer hover:bg-indigo-50 hover:text-indigo-700 ${value === opt ? 'bg-indigo-50 text-indigo-700 font-semibold' : 'text-slate-700'}`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

/* ─── FAQ Accordion Item ───────────────────────── */
const FaqItem = ({ q, a, index, openIndex, setOpen }) => {
  const isOpen = openIndex === index;
  return (
    <div className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen ? 'border-indigo-200 shadow-sm' : 'border-slate-200'}`}>
      <button
        onClick={() => setOpen(isOpen ? null : index)}
        className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
      >
        <span className={`text-sm font-bold transition-colors ${isOpen ? 'text-indigo-700' : 'text-slate-900'}`}>{q}</span>
        <ChevronDown className={`w-4 h-4 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180 text-indigo-600' : 'text-slate-400'}`} />
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
};

/* ─── Main Contact Page ────────────────────────── */
const Contact = () => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const serviceOptions = [
    'Wedding / Party Shoot',
    'Brand / Ad Shoot',
    'Meta Ads (FB/IG)',
    'Google Ads / PPC',
    'Poster / Menu / Card Design',
    'Video / Photo Editing',
    'Web Development',
    'SEO / ASO',
    'Custom Combo Package',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', phone: '', service: '', message: '' });
    }, 5000);
  };

  const contactChannels = [
    {
      icon: Phone,
      title: 'Call / WhatsApp',
      value: '+91 98765 43210',
      sub: 'Mon–Sat, 9am – 8pm IST',
      href: 'tel:+919876543210',
      accent: 'bg-indigo-50 text-indigo-600 border-indigo-100',
    },
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@shreebazaar.com',
      sub: 'Reply within 30 minutes',
      href: 'mailto:hello@shreebazaar.com',
      accent: 'bg-blue-50 text-blue-600 border-blue-100',
    },
    {
      icon: MapPin,
      title: 'Studio Location',
      value: 'India — Serving Nationwide',
      sub: 'On-site shoots across India',
      href: 'https://maps.google.com',
      accent: 'bg-rose-50 text-rose-600 border-rose-100',
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 30 Minutes',
      sub: 'Average team response time',
      href: null,
      accent: 'bg-emerald-50 text-emerald-600 border-emerald-100',
    },
  ];

  const faqs = [
    {
      q: 'How quickly will you respond to my inquiry?',
      a: 'Our team responds to all inquiries within 30 minutes during business hours (Mon–Sat, 9am–8pm IST). For urgent shoots or campaigns, call or WhatsApp us directly for an instant response.'
    },
    {
      q: 'Do you work with clients outside your city?',
      a: 'Absolutely. We serve clients pan-India for shoots (we travel to your location), and our Meta Ads, Google Ads, web development, SEO, and design services are delivered 100% remotely to clients across India.'
    },
    {
      q: 'What is included in the free consultation?',
      a: 'The free 30-minute consultation covers your brand goals, budget expectations, timeline, and which services would best fit your needs. There is zero obligation — we just want to understand your vision.'
    },
    {
      q: 'Can I combine multiple services into one package?',
      a: 'Yes — in fact, we recommend it. Clients who combine shoots + Meta Ads + web development get our best rates and the most cohesive brand presence. Tell us your needs and we will build a custom package.'
    },
    {
      q: 'What is your pricing structure?',
      a: 'We offer transparent pricing with no hidden fees. Shoot packages start at ₹9,999, print design from ₹999, video editing from ₹499/reel, and web development from ₹14,999. Ad management is either a flat monthly fee or 15% of ad spend.'
    },
  ];

  const trustPoints = [
    { icon: Zap,     label: '< 30 min reply' },
    { icon: Shield,  label: 'No lock-in contracts' },
    { icon: Star,    label: '4.9★ client rating' },
    { icon: Check,   label: '100% on-time delivery' },
  ];

  return (
    <div className="relative min-h-screen bg-white text-slate-900 overflow-hidden pt-28">

      <DottedCanvas />

      {/* ══ HERO ════════════════════════════════════════════════════ */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-100/90 border border-slate-200 text-slate-800 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              Get In Touch
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
              Let's Build<br />
              Something<br />
              <span className="text-indigo-600">Great Together.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              Whether you need a wedding shoot, a high-converting Meta ad campaign, a luxury restaurant menu, or a custom website — we're ready to make it happen.
            </p>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-slate-700 font-semibold pt-1">
              {trustPoints.map((t, i) => {
                const Icon = t.icon;
                return (
                  <span key={i} className="flex items-center gap-1.5">
                    <Icon className="w-4 h-4 text-indigo-600" /> {t.label}
                  </span>
                );
              })}
            </div>
          </div>

          {/* RIGHT — contact channel cards */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-3">
            {contactChannels.map((ch, i) => {
              const Icon = ch.icon;
              const content = (
                <div className={`bg-white rounded-2xl border border-slate-200 p-5 hover:border-slate-300 hover:shadow-md transition-all flex items-start gap-3 ${ch.href ? 'cursor-pointer group' : ''}`}>
                  <div className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 ${ch.accent}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-0.5">{ch.title}</div>
                    <div className="text-xs font-extrabold text-slate-900 group-hover:text-indigo-600 transition-colors leading-snug">{ch.value}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{ch.sub}</div>
                  </div>
                </div>
              );
              return ch.href ? (
                <a key={i} href={ch.href} target={ch.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">
                  {content}
                </a>
              ) : (
                <div key={i}>{content}</div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ══ MAIN FORM + SIDE INFO ════════════════════════════════════ */}
      <section className="relative z-10 bg-slate-50 border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* FORM */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-sm">
                <h2 className="text-2xl font-extrabold text-slate-900 mb-1">Send Us a Message</h2>
                <p className="text-slate-500 text-sm mb-8">Fill in the details and our team will respond within 30 minutes.</p>

                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-14 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                      <CheckCircle2 className="w-7 h-7 text-emerald-500" />
                    </div>
                    <h3 className="text-xl font-extrabold text-slate-900">Message Received!</h3>
                    <p className="text-slate-500 text-sm max-w-sm">
                      Thank you, {form.name || 'there'}! Our team will contact you within 30 minutes.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Your Name <span className="text-rose-500">*</span></label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-400 cursor-text"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Email Address <span className="text-rose-500">*</span></label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          placeholder="rahul@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-400 cursor-text"
                        />
                      </div>
                    </div>

                    {/* Phone + Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Phone / WhatsApp</label>
                        <input
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-400 cursor-text"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Service Interested In</label>
                        <Dropdown
                          label="a service"
                          options={serviceOptions}
                          value={form.service}
                          onChange={val => setForm({ ...form, service: val })}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="text-xs font-semibold text-slate-700 mb-1.5 block">Message / Requirements <span className="text-rose-500">*</span></label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm focus:outline-none focus:border-indigo-500 transition-colors placeholder:text-slate-400 resize-none cursor-text"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl bg-slate-900 text-white font-bold text-sm hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      By submitting, you agree to be contacted by our team. We never spam.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* SIDE — why us + WhatsApp CTA */}
            <div className="lg:col-span-5 space-y-5">

              {/* Why choose us */}
              <div className="bg-white rounded-3xl border border-slate-200 p-7 shadow-sm">
                <h3 className="text-base font-extrabold text-slate-900 mb-5">Why Work With Us?</h3>
                <ul className="space-y-4">
                  {[
                    { title: 'Dedicated Account Manager',   desc: 'One point of contact for all your projects — shoots, ads, design, and web.',    color: 'bg-indigo-50 text-indigo-600' },
                    { title: '30-Min Response Guarantee',   desc: 'We respond to every inquiry within 30 minutes during business hours.',            color: 'bg-blue-50 text-blue-600' },
                    { title: 'No Lock-in Contracts',        desc: 'Month-to-month engagements. Stay because results are great, not because you must.', color: 'bg-emerald-50 text-emerald-600' },
                    { title: 'Transparent Reporting',       desc: 'Weekly shoot reports, ad dashboards, and SEO keyword trackers — always open to you.', color: 'bg-violet-50 text-violet-600' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${item.color}`}>
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-extrabold text-slate-900">{item.title}</div>
                        <div className="text-xs text-slate-500 mt-0.5 leading-relaxed">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WhatsApp instant CTA */}
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 bg-emerald-600 hover:bg-emerald-500 transition-all rounded-2xl p-5 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1 text-left">
                  <div className="text-xs font-bold text-emerald-200 uppercase tracking-wider mb-0.5">Instant Chat</div>
                  <div className="text-sm font-extrabold text-white">Message Us on WhatsApp</div>
                  <div className="text-[11px] text-emerald-200 mt-0.5">Usually replies within 5 minutes</div>
                </div>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Social proof mini card */}
              <div className="bg-slate-900 rounded-2xl p-6 text-white">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                  ))}
                  <span className="text-xs text-slate-400 ml-1">4.9 / 5.0</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed italic mb-3">
                  "Shree Bazaar completely transformed our brand — stunning wedding film, killer Meta ads, and a website that actually converts. Best decision we made."
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 flex items-center justify-center text-[10px] font-bold text-white">RK</div>
                  <div>
                    <div className="text-[11px] font-bold text-white">Riya Kapoor</div>
                    <div className="text-[10px] text-slate-500">Wedding Client · Delhi</div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ═════════════════════════════════════════════════════ */}
      <section className="relative z-10 bg-white border-t border-slate-100 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block mb-2">FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">Frequently Asked Questions</h2>
            <p className="text-slate-500 text-sm">Everything you need to know before working with us.</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                q={faq.q}
                a={faq.a}
                index={i}
                openIndex={openFaq}
                setOpen={setOpenFaq}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">
              Still have questions?{' '}
              <a href="mailto:hello@shreebazaar.com" className="text-indigo-600 font-bold hover:underline">
                Email us directly
              </a>{' '}
              or{' '}
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold hover:underline">
                WhatsApp us
              </a>.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
