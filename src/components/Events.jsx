import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function Events() {
  const { events } = venueData;

  return (
    <section id="events" className="py-24 lg:py-32 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#B99A62]" />
              <span>Celebrations &amp; Occasions</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-tight">
              {events.heading}
            </h2>
          </div>

          <p className="font-sans text-sm sm:text-base text-[#292521]/70 max-w-md font-light leading-relaxed">
            {events.subheading}
          </p>
        </div>

        {/* 3 Event Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10">
          {events.categories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-[#F1EBDD]/40 rounded-sm overflow-hidden border border-[#D5BD91]/40 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-[#292521]">
                <img
                  src={category.image}
                  alt={category.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                {/* Event Category Tag */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-sm text-[11px] uppercase tracking-widest font-sans font-semibold bg-[#FAF8F3]/90 text-[#652B35] backdrop-blur-sm shadow-sm">
                    {category.tag}
                  </span>
                </div>

                {/* Subtitle on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-serif text-2xl font-bold text-[#FAF8F3] drop-shadow-sm">
                    {category.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between bg-[#FAF8F3]">
                <div>
                  <p className="font-sans text-sm text-[#292521]/80 leading-relaxed mb-6 font-normal">
                    {category.description}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-2.5 mb-8">
                    {category.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2.5 text-xs text-[#292521]/75 font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#B99A62] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enquiry Action */}
                <div className="pt-4 border-t border-[#F1EBDD]">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-between w-full text-xs uppercase tracking-[0.2em] font-sans font-semibold text-[#652B35] group-hover:text-[#B99A62] transition-colors"
                  >
                    <span>Enquire For This Event</span>
                    <div className="w-7 h-7 rounded-full bg-[#F1EBDD] flex items-center justify-center group-hover:bg-[#B99A62] group-hover:text-white transition-all duration-300">
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
