import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, CalendarCheck } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#FAF8F3]/95 backdrop-blur-md shadow-sm border-b border-[#D5BD91]/30 py-4 text-[#292521]'
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent py-6 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          className="group flex flex-col tracking-wider focus:outline-none"
          onClick={closeMenu}
        >
          <span
            className={`font-serif text-xl sm:text-2xl font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
              isScrolled ? 'text-[#292521] group-hover:text-[#B99A62]' : 'text-white group-hover:text-[#D5BD91]'
            }`}
          >
            {venueData.brand.name}
          </span>
          <span
            className={`text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-sans font-medium transition-colors ${
              isScrolled ? 'text-[#B99A62]' : 'text-[#D5BD91]/90'
            }`}
          >
            Convention Centre &amp; Wedding Hall
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8 text-[13px] uppercase tracking-[0.15em] font-medium font-sans">
          <a
            href="#home"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Home
          </a>
          <a
            href="#about"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            About
          </a>
          <a
            href="#facilities"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Facilities
          </a>
          <a
            href="#events"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Events
          </a>
          <a
            href="#gallery"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Gallery
          </a>
          <a
            href="#why-choose-us"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            className={`transition-colors duration-200 ${
              isScrolled ? 'hover:text-[#B99A62]' : 'hover:text-[#D5BD91]'
            }`}
          >
            Contact
          </a>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-sm hover:shadow-md bg-[#B99A62] hover:bg-[#A3854F] text-white hover:scale-[1.02] active:scale-[0.98]"
          >
            <CalendarCheck className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className={`lg:hidden p-2 rounded-sm transition-colors ${
              isScrolled ? 'text-[#292521] hover:bg-[#F1EBDD]' : 'text-white hover:bg-white/10'
            }`}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <div
        className={`lg:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bg-[#FAF8F3] border-b border-[#D5BD91]/40 shadow-xl transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100 py-6' : 'max-h-0 opacity-0 py-0'
        }`}
      >
        <div className="px-6 flex flex-col space-y-4 text-sm font-sans tracking-wider uppercase text-[#292521]">
          <a
            href="#home"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            About Us
          </a>
          <a
            href="#facilities"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Venue Facilities
          </a>
          <a
            href="#events"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Celebration Spaces
          </a>
          <a
            href="#gallery"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Photo Gallery
          </a>
          <a
            href="#why-choose-us"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Why Choose Us
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="py-2 border-b border-[#F1EBDD] hover:text-[#B99A62] transition-colors"
          >
            Contact &amp; Enquiry
          </a>
          <div className="pt-2 flex flex-col gap-3">
            <a
              href="#contact"
              onClick={closeMenu}
              className="w-full text-center py-3 bg-[#B99A62] hover:bg-[#A3854F] text-white rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors shadow-sm"
            >
              Enquire on WhatsApp
            </a>
            <a
              href={`tel:${venueData.contact.phoneTel}`}
              className="w-full text-center py-2.5 border border-[#B99A62] text-[#B99A62] hover:bg-[#F1EBDD] rounded-sm font-semibold text-xs uppercase tracking-widest transition-colors flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call {venueData.contact.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
