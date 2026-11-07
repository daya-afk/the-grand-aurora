import React from 'react';
import { Palette, HeartHandshake, MapPin, Crown, Sparkles } from 'lucide-react';
import { venueData } from '../data/venueData';

const iconMap = {
  Palette,
  HeartHandshake,
  MapPin,
  Crown,
};

export default function WhyChooseUs() {
  const { whyChooseUs } = venueData;

  return (
    <section id="why-choose-us" className="py-24 lg:py-32 bg-[#FAF8F3] relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#F1EBDD]/50 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span>The Aurora Distinction</span>
            <span className="w-6 h-[1px] bg-[#B99A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-tight mb-5">
            {whyChooseUs.heading}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#292521]/75 font-light leading-relaxed">
            {whyChooseUs.subheading}
          </p>
        </div>

        {/* 4 Pillars Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {whyChooseUs.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.title}
                className="group p-8 rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/35 hover:border-[#B99A62] shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div>
                  {/* Subtle index mark */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-sm bg-[#F1EBDD] flex items-center justify-center text-[#B99A62] group-hover:bg-[#652B35] group-hover:text-[#D5BD91] transition-colors duration-300">
                      <Icon className="w-6 h-6 stroke-[1.6]" />
                    </div>
                    <span className="font-serif text-xs font-semibold text-[#D5BD91] tracking-widest uppercase">
                      Pillar 0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292521] mb-3 group-hover:text-[#652B35] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-sans text-sm text-[#292521]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[#F1EBDD] flex items-center gap-1.5 text-xs text-[#B99A62] font-sans font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B99A62]" />
                  <span>Uncompromising Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
