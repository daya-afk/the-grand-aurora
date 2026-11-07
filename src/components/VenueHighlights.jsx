import React from 'react';
import { Castle, UtensilsCrossed, Sparkles, Car, Check } from 'lucide-react';
import { venueData } from '../data/venueData';

const iconMap = {
  Castle,
  UtensilsCrossed,
  Sparkles,
  Car,
};

export default function VenueHighlights() {
  const { highlights } = venueData;

  return (
    <section id="facilities" className="py-24 bg-[#F1EBDD]/60 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span>Signature Facilities</span>
            <span className="w-6 h-[1px] bg-[#B99A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-tight mb-5">
            {highlights.heading}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#292521]/75 font-light leading-relaxed">
            {highlights.subheading}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.items.map((item, index) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <div
                key={item.id}
                className="group relative bg-[#FAF8F3] rounded-sm p-8 border border-[#D5BD91]/40 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Subtle top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-[#B99A62] transition-colors duration-300" />

                <div>
                  {/* Category Badge & Index */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[10px] uppercase font-sans font-semibold tracking-[0.2em] text-[#B99A62] bg-[#F1EBDD] px-2.5 py-1 rounded-sm">
                      {item.badge}
                    </span>
                    <span className="font-serif text-sm font-semibold text-[#D5BD91]">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 rounded-full bg-[#FAF8F3] border border-[#D5BD91]/60 flex items-center justify-center text-[#652B35] mb-6 group-hover:bg-[#652B35] group-hover:text-[#D5BD91] transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>

                  {/* Card Title */}
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#292521] mb-3 group-hover:text-[#652B35] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="font-sans text-sm text-[#292521]/75 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>

                {/* Subtle card footer indicator */}
                <div className="mt-8 pt-4 border-t border-[#F1EBDD] flex items-center gap-2 text-xs text-[#B99A62] font-sans font-medium">
                  <Check className="w-3.5 h-3.5 text-[#B99A62]" />
                  <span>Available for Your Booking</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance note */}
        <div className="mt-14 text-center">
          <p className="text-xs sm:text-sm font-sans text-[#292521]/60 italic">
            * Complete venue walkthroughs and tailored layout configurations can be scheduled with our planning concierge.
          </p>
        </div>
      </div>
    </section>
  );
}
