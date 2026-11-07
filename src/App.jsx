import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import VenueHighlights from './components/VenueHighlights';
import Events from './components/Events';
import Gallery from './components/Gallery';
import WhyChooseUs from './components/WhyChooseUs';
import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F3] text-[#292521] selection:bg-[#B99A62]/30 selection:text-[#652B35]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Introduction / About Us */}
        <About />

        {/* Section 3: Venue Highlights */}
        <VenueHighlights />

        {/* Section 4: Celebrations / Events */}
        <Events />

        {/* Section 5: Photo Gallery */}
        <Gallery />

        {/* Section 6: Why Choose Us */}
        <WhyChooseUs />

        {/* Section 7: Call to Action */}
        <CallToAction />

        {/* Section 8: Contact & Enquiry */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />
    </div>
  );
}
