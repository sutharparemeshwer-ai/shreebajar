import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Riya Mehta',
    role: 'Bride — Wedding Client',
    rating: 5,
    text: 'Shree Bazaar captured our wedding so beautifully. The cinematic teaser brought tears to my eyes. Absolutely world-class team and delivery was faster than promised!',
    avatar: 'RM',
    color: 'bg-indigo-100 text-indigo-700'
  },
  {
    name: 'Arjun Kapoor',
    role: 'Founder — Nexus Tech',
    rating: 5,
    text: "Our Google Ads ROAS jumped from 1.8x to 4.9x within 45 days. Their performance marketing team knows exactly how to target high-intent buyers. Best agency we've worked with.",
    avatar: 'AK',
    color: 'bg-blue-100 text-blue-700'
  },
  {
    name: 'Priya Sharma',
    role: 'Owner — Lumina Silks',
    rating: 5,
    text: 'The brand shoot for our saree collection was stunning — the colors, lighting, and compositions were on another level. Our Instagram engagement doubled post the campaign.',
    avatar: 'PS',
    color: 'bg-rose-100 text-rose-700'
  },
  {
    name: 'Vikram Joshi',
    role: 'CEO — Aura Living',
    rating: 5,
    text: "They built our custom Shopify store and took our Google SEO from page 3 to page 1 in under 3 months. Our organic traffic grew by 340%. Incredible ROI.",
    avatar: 'VJ',
    color: 'bg-emerald-100 text-emerald-700'
  },
  {
    name: 'Sunita Rao',
    role: 'Restaurant Owner — Spice Route',
    rating: 5,
    text: 'The restaurant menu they designed for us is absolutely gorgeous. Customers keep complimenting it. Also did our poster and social media creatives — all top quality.',
    avatar: 'SR',
    color: 'bg-amber-100 text-amber-700'
  },
  {
    name: 'Dev Malhotra',
    role: 'Brand Manager — Zenith Organics',
    rating: 5,
    text: 'Their Meta ad team doubled our monthly sales in 60 days. The ad creatives they produced were viral-worthy. We renewed for a 12-month contract immediately.',
    avatar: 'DM',
    color: 'bg-purple-100 text-purple-700'
  }
];

const TestimonialsPreview = () => {
  const preview = testimonials.slice(0, 3);

  return (
    <section className="relative z-10 bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-amber-500"></span>
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            What Our Clients <span className="text-blue-600">Say About Us</span>
          </h2>
          <p className="text-slate-600 text-sm">
            Real results. Real brands. 350+ satisfied shoots, campaigns & web projects.
          </p>
          <div className="pt-1">
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-blue-600 hover:text-indigo-600 transition-colors group"
            >
              <span>Read More Reviews</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all text-left flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative">
                  <Quote className="w-7 h-7 text-slate-200 absolute -top-1 -left-1" />
                  <p className="text-slate-700 text-sm leading-relaxed pl-5 relative z-10">
                    {t.text}
                  </p>
                </div>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-slate-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-extrabold ${t.color} shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">{t.name}</div>
                  <div className="text-[11px] text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsPreview;
