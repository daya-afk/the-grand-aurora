import React from 'react';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
import { venueData } from '../data/venueData';

function InstagramIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function YoutubeIcon({ className = 'w-4 h-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <polygon points="10 15 15 12 10 9 10 15" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Footer() {
  const { brand, contact, navigation } = venueData;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-[#211B18] text-[#FAF8F3] pt-20 pb-12 border-t border-[#D5BD91]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block focus:outline-none">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-[0.15em] text-[#FAF8F3] block">
                {brand.name}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans text-[#D5BD91] block mt-1">
                Luxury Wedding Hall &amp; Convention Centre
              </span>
            </a>

            <p className="font-sans text-sm text-[#FAF8F3]/70 font-light leading-relaxed max-w-sm pt-2">
              "{brand.tagline}"
            </p>

            <p className="font-sans text-xs text-[#FAF8F3]/50 leading-relaxed max-w-sm">
              Karnataka's exquisite celebration destination. Crafted for memorable muhurthams, royal receptions, and landmark family occasions.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a
                href={contact.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profile"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D5BD91]/30 flex items-center justify-center text-[#D5BD91] hover:bg-[#B99A62] hover:text-white transition-all duration-300"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.socials.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook page"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D5BD91]/30 flex items-center justify-center text-[#D5BD91] hover:bg-[#B99A62] hover:text-white transition-all duration-300"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href={contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube channel"
                className="w-9 h-9 rounded-full bg-white/5 border border-[#D5BD91]/30 flex items-center justify-center text-[#D5BD91] hover:bg-[#B99A62] hover:text-white transition-all duration-300"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-lg font-semibold text-[#D5BD91] mb-6 tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs uppercase tracking-widest text-[#FAF8F3]/70">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-[#B99A62] transition-colors duration-200 block py-0.5"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Concierge Contact */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#D5BD91] mb-6 tracking-wider">
              Venue Location &amp; Inquiries
            </h4>

            <div className="space-y-3.5 text-xs sm:text-sm font-sans text-[#FAF8F3]/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B99A62] shrink-0 mt-0.5" />
                <span>
                  {contact.address.line1}, {contact.address.line2}, {contact.address.city}, {contact.address.state} {contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#B99A62] shrink-0" />
                <a
                  href={`tel:${contact.phoneTel}`}
                  className="hover:text-[#D5BD91] transition-colors"
                >
                  {contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#B99A62] shrink-0" />
                <a
                  href={`mailto:${contact.email}`}
                  className="hover:text-[#D5BD91] transition-colors break-all"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            <div className="pt-4">
              <a
                href={contact.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 bg-white/5 border border-[#D5BD91]/40 rounded-sm text-xs uppercase tracking-widest text-[#D5BD91] hover:bg-[#B99A62] hover:text-white transition-colors"
              >
                Directions on Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back-to-Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#FAF8F3]/50">
          <p>
            &copy; {new Date().getFullYear()} {brand.name}. All rights reserved. Designed for presentation &amp; demonstration purposes.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#D5BD91] hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to top</span>
            <div className="w-7 h-7 rounded-full bg-white/5 border border-[#D5BD91]/30 flex items-center justify-center group-hover:bg-[#B99A62] group-hover:text-white transition-all duration-300">
              <ArrowUp className="w-3.5 h-3.5" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
