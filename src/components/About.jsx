import React from 'react';
import { ArrowRight, Sparkles, Building2, HeartHandshake } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function About() {
  const { about } = venueData;

  const highlightIcons = [
    Building2,
    HeartHandshake,
    Sparkles,
  ];

  return (
    <section id="about" className="py-24 lg:py-32 bg-[#FAF8F3] relative overflow-hidden">
      {/* Subtle Luxury Pattern / Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F1EBDD]/60 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#B99A62]/5 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Photography with Luxury Framing */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative frame */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#D5BD91]/50 rounded-sm transform -rotate-1 pointer-events-none" />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl aspect-[4/5] bg-[#F1EBDD]">
                <img
                  src={about.image}
                  alt={about.imageAlt}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Luxury Accent Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#652B35] text-[#FAF8F3] p-4 sm:p-5 rounded-sm shadow-xl max-w-[200px] border border-[#B99A62]/30">
                <span className="block font-serif text-2xl sm:text-3xl font-bold text-[#D5BD91]">
                  Karnataka
                </span>
                <span className="block text-[11px] uppercase tracking-wider font-sans font-medium text-white/80 mt-1">
                  Premier Wedding &amp; Convention Landmark
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Narrative & Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Heading */}
            <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
              <span className="w-8 h-[1px] bg-[#B99A62]" />
              <span>{about.badge}</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-[1.2] mb-6">
              {about.title}
            </h2>

            {/* Description Paragraph */}
            <p className="font-sans text-base sm:text-lg text-[#292521]/80 leading-relaxed mb-6 font-light">
              {about.description}
            </p>

            {about.extendedDescription && (
              <p className="font-sans text-sm sm:text-base text-[#292521]/70 leading-relaxed mb-10 font-light border-l-2 border-[#D5BD91] pl-4">
                {about.extendedDescription}
              </p>
            )}

            {/* Three Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 pt-4 border-t border-[#D5BD91]/30">
              {about.highlights.map((item, index) => {
                const IconComponent = highlightIcons[index % highlightIcons.length];
                return (
                  <div key={item.title} className="group">
                    <div className="w-10 h-10 rounded-sm bg-[#F1EBDD] flex items-center justify-center mb-3 text-[#B99A62] border border-[#D5BD91]/40 group-hover:bg-[#B99A62] group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-[#292521] mb-1.5 group-hover:text-[#B99A62] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#292521]/70 leading-normal font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Discover Our Venue Link */}
            <div>
              <a
                href="#facilities"
                className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-sans font-semibold text-[#652B35] hover:text-[#B99A62] transition-colors group"
              >
                <span>Discover Our Venue</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
