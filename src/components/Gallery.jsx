import React, { useState, useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function Gallery() {
  const { gallery } = venueData;
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => {
    setActiveImageIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setActiveImageIndex(null);
    document.body.style.overflow = 'auto';
  }, []);

  const showNext = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev + 1) % gallery.items.length);
  }, [activeImageIndex, gallery.items.length]);

  const showPrev = useCallback(() => {
    if (activeImageIndex === null) return;
    setActiveImageIndex((prev) => (prev - 1 + gallery.items.length) % gallery.items.length);
  }, [activeImageIndex, gallery.items.length]);

  // Handle keyboard events (ESC, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, closeLightbox, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-[#F1EBDD]/40 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span>Visual Splendour</span>
            <span className="w-6 h-[1px] bg-[#B99A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-tight mb-5">
            {gallery.heading}
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#292521]/75 font-light leading-relaxed">
            {gallery.subheading}
          </p>
        </div>

        {/* Gallery Grid (Asymmetric Editorial Layout) */}
        <div className="grid grid-cols-12 gap-5 sm:gap-6">
          {gallery.items.map((item, index) => (
            <div
              key={item.id}
              onClick={() => openLightbox(index)}
              className={`group relative overflow-hidden rounded-sm cursor-pointer bg-[#292521] shadow-md hover:shadow-2xl transition-all duration-500 ${item.span}`}
              role="button"
              tabIndex={0}
              aria-label={`View ${item.title}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  openLightbox(index);
                }
              }}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-108"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-[11px] uppercase tracking-[0.2em] font-sans font-medium text-[#D5BD91] mb-1">
                  {item.category}
                </span>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FAF8F3]">
                    {item.title}
                  </h3>
                  <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white border border-white/30 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Subtle gold border on hover */}
              <div className="absolute inset-0 border border-[#B99A62]/0 group-hover:border-[#B99A62]/80 transition-colors duration-300 pointer-events-none rounded-sm" />
            </div>
          ))}
        </div>

        {/* Caption beneath gallery */}
        <div className="mt-12 text-center flex items-center justify-center gap-2 text-xs font-sans text-[#292521]/60">
          <Sparkles className="w-3.5 h-3.5 text-[#B99A62]" />
          <span>Click any photograph to view in high-resolution gallery mode</span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar: Title & Close Button */}
          <div
            className="absolute top-0 inset-x-0 p-6 flex items-center justify-between z-20 bg-gradient-to-b from-black/80 to-transparent text-white"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-[#D5BD91] font-sans font-medium">
                {gallery.items[activeImageIndex].category} ({activeImageIndex + 1} of {gallery.items.length})
              </span>
              <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                {gallery.items[activeImageIndex].title}
              </h4>
            </div>

            <button
              onClick={closeLightbox}
              className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close image viewer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#B99A62] text-white transition-colors border border-white/20 z-20"
            aria-label="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Main Image in Viewport */}
          <div
            className="relative max-w-5xl max-h-[82vh] overflow-hidden rounded-sm shadow-2xl flex items-center justify-center z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={gallery.items[activeImageIndex].src}
              alt={gallery.items[activeImageIndex].alt}
              className="max-h-[80vh] w-auto max-w-full object-contain rounded-sm"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 sm:p-4 rounded-full bg-black/50 hover:bg-[#B99A62] text-white transition-colors border border-white/20 z-20"
            aria-label="Next photograph"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Bottom Bar Caption */}
          <div
            className="absolute bottom-4 inset-x-0 text-center text-xs sm:text-sm text-white/70 font-sans z-20 pointer-events-none"
          >
            {gallery.items[activeImageIndex].alt}
          </div>
        </div>
      )}
    </section>
  );
}
