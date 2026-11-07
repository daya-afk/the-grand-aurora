import React from 'react';
import { ArrowDown, Calendar, Sparkles } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-start bg-[#1C1917] overflow-hidden"
    >
      {/* Background Image with Fallback and Subtle Parallax */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-wedding.jpg"
          alt="Luxury Indian Wedding Mandap at The Grand Aurora"
          className="w-full h-full object-cover object-center transform scale-105 animate-fade-in"
          loading="eager"
          fetchPriority="high"
        />
        {/* Editorial Gradient Overlay - darker on left for clear white text readability, warm vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/90 via-transparent to-black/40" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 w-full pt-28 pb-20">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Subtle Tagline Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-[#D5BD91]/40 mb-6 text-[#D5BD91] text-xs sm:text-[13px] tracking-[0.25em] uppercase font-sans font-medium">
            <Sparkles className="w-3.5 h-3.5 text-[#B99A62]" />
            <span>{venueData.brand.taglineIntro}</span>
          </div>

          {/* Main Editorial Heading */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#FAF8F3] leading-[1.12] tracking-tight mb-6 drop-shadow-sm">
            Celebrate Love.
            <br />
            <span className="text-[#D5BD91] italic font-normal">Create Timeless</span> Memories.
          </h1>

          {/* Supporting Text */}
          <p className="font-sans text-base sm:text-lg md:text-xl text-[#FAF8F3]/90 font-light leading-relaxed mb-10 max-w-xl">
            {venueData.brand.heroSubheading}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <a
              href="#facilities"
              className="px-8 py-4 bg-[#B99A62] hover:bg-[#A3854F] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl text-center transform hover:-translate-y-0.5"
            >
              Explore Our Venue
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FAF8F3] border border-[#D5BD91]/60 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm transition-all duration-300 text-center flex items-center justify-center gap-2 hover:border-[#D5BD91]"
            >
              <Calendar className="w-4 h-4 text-[#D5BD91]" />
              <span>Book a Venue Visit</span>
            </a>
          </div>

          {/* Quick Credibility Features */}
          <div className="mt-14 pt-8 border-t border-white/15 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[#FAF8F3]/80">
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#D5BD91]">Palatial Architecture</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-0.5">High Ceilings &amp; Chandeliers</p>
            </div>
            <div>
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#D5BD91]">Bespoke Hospitality</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-0.5">Dedicated Coordination</p>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="font-serif text-xl sm:text-2xl font-bold text-[#D5BD91]">Prime Karnataka Hub</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-0.5">Airport Corridor Access</p>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator */}
      <a
        href="#about"
        aria-label="Scroll down to About Us section"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#D5BD91] hover:text-white transition-colors duration-300 group"
      >
        <span className="text-[10px] uppercase tracking-[0.25em] font-sans font-medium text-white/70 group-hover:text-white">
          Scroll to Discover
        </span>
        <div className="w-8 h-8 rounded-full border border-[#D5BD91]/50 flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4 text-[#D5BD91]" />
        </div>
      </a>
    </section>
  );
}
