import React from 'react';
import { Star, Award, ShieldCheck, TrendingUp, Sparkle } from 'lucide-react';

const TrustedBrands = () => {
  const brandLogos = [
    {
      name: 'Lumina Silks',
      category: 'Luxury Fashion & Sarees',
      result: '+180% Sales Growth • 4K Brand Shoot',
      iconText: 'LUMINA'
    },
    {
      name: 'Aura Living',
      category: 'Home Decor & Furniture',
      result: '4.9x ROAS on Meta Ads • Custom Web Store',
      iconText: 'AURA'
    },
    {
      name: 'Nexus Tech',
      category: 'D2C Consumer Electronics',
      result: 'Google Ads Leader • 24hr Reel Edits',
      iconText: 'NEXUS'
    },
    {
      name: 'Zenith Organics',
      category: 'Gourmet Foods & Spices',
      result: 'Brand Ad Shoot • Amazon & Google SEO',
      iconText: 'ZENITH'
    },
    {
      name: 'Varanasi Crafts',
      category: 'Artisanal Heritage',
      result: 'Pan-India Reach • Reels Video Editing',
      iconText: 'VARANASI'
    },
    {
      name: 'Velvet & Thread',
      category: 'Boutique Apparel',
      result: 'Meta Ads Conversion • Printable Menus & Cards',
      iconText: 'VELVET'
    }
  ];

  return (
    <section className="relative z-10 bg-white border-y border-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Big Centered Blue Heading & Star Rating */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          
          {/* Big Blue Main Heading */}
          <h2 className="text-3xl sm:text-5xl font-extrabold text-blue-600 tracking-tight">
            Trusted By 250+ Brands & Startups
          </h2>

          {/* Subheading & Rating Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.9/5 Rating</span>
            <span className="text-slate-400">•</span>
            <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">
              350+ Verified Shoots & Growth Campaigns
            </span>
          </div>
        </div>

        {/* Brand Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {brandLogos.map((brand, idx) => (
            <div
              key={idx}
              className="group bg-white p-5 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all text-center flex flex-col justify-between cursor-pointer"
            >
              <div className="h-10 flex items-center justify-center">
                <span className="font-extrabold tracking-widest text-slate-400 group-hover:text-blue-600 transition-colors text-sm sm:text-base">
                  {brand.iconText}
                </span>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <div className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </div>
                <div className="text-[9px] text-slate-500 font-medium truncate mt-0.5">
                  {brand.result}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Micro Trust Banner */}
        <div className="mt-10 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center gap-8 text-xs font-semibold text-slate-500">
          <span className="flex items-center gap-1.5">
            <Award className="w-4 h-4 text-blue-600" /> High-Converting Meta & Google Ads
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" /> 4K/8K Professional Shoot Studio
          </span>
          <span className="flex items-center gap-1.5">
            <TrendingUp className="w-4 h-4 text-indigo-600" /> Average 4.8x Campaign ROAS
          </span>
        </div>

      </div>
    </section>
  );
};

export default TrustedBrands;
