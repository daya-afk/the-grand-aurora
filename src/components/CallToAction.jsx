import React from 'react';
import { MessageSquare, Phone } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function CallToAction() {
  const { cta, contact } = venueData;

  const whatsappUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    contact.whatsappDefaultMessage
  )}`;

  return (
    <section className="relative py-28 lg:py-36 bg-[#1C1917] overflow-hidden text-center">
      {/* Background Photography with Luxurious Deep Warm Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={cta.backgroundImage}
          alt="Luxury wedding reception stage at The Grand Aurora"
          className="w-full h-full object-cover object-center transform scale-105"
          loading="lazy"
        />
        {/* Layered dark scrims for maximum editorial text contrast */}
        <div className="absolute inset-0 bg-[#292521]/80 backdrop-brightness-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/80" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-10">
        {/* Tagline intro badge */}
        <div className="inline-block text-[#D5BD91] text-xs sm:text-sm font-sans tracking-[0.3em] uppercase font-semibold mb-4 border-b border-[#D5BD91]/40 pb-1">
          Begin Your Celebration Journey
        </div>

        {/* Heading */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#FAF8F3] leading-[1.18] mb-6 drop-shadow-md">
          {cta.heading}
        </h2>

        {/* Supporting text */}
        <p className="font-sans text-base sm:text-lg md:text-xl text-[#FAF8F3]/85 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
          {cta.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-[#B99A62] hover:bg-[#A3854F] text-white font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-sm transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2.5 transform hover:-translate-y-0.5"
          >
            <MessageSquare className="w-4 h-4 fill-current" />
            <span>Enquire on WhatsApp</span>
          </a>

          <a
            href={`tel:${contact.phoneTel}`}
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-[#FAF8F3] border border-[#D5BD91]/70 font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] rounded-sm backdrop-blur-sm transition-all duration-300 flex items-center justify-center gap-2.5 hover:border-[#D5BD91]"
          >
            <Phone className="w-4 h-4 text-[#D5BD91]" />
            <span>Call Us: {contact.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
}
