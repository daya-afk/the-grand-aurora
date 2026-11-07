import React, { useState } from 'react';
import { Phone, MessageSquare, Mail, MapPin, ExternalLink, Calendar, Users, Send, CheckCircle2 } from 'lucide-react';
import { venueData } from '../data/venueData';

export default function Contact() {
  const { contact } = venueData;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    eventType: 'Wedding',
    eventDate: '',
    guestCount: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please provide a valid phone number';
    } else if (formData.phone.trim().length < 8) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.eventDate) {
      newErrors.eventDate = 'Please select your preferred date';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Construct formatted WhatsApp message
    const lines = [
      `*New Event Enquiry | ${venueData.brand.name}*`,
      `• *Client Name:* ${formData.fullName.trim()}`,
      `• *Contact Phone:* ${formData.phone.trim()}`,
      `• *Occasion / Event:* ${formData.eventType}`,
      `• *Preferred Event Date:* ${formData.eventDate}`,
      `• *Estimated Guest Count:* ${formData.guestCount.trim() || 'To be finalized'}`,
      `• *Special Requests / Notes:* ${formData.message.trim() || 'None provided'}`,
      ``,
      `_Sent via The Grand Aurora Website Enquiry Form_`,
    ];

    const messageText = lines.join('\n');
    const waUrl = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(messageText)}`;

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-[#FAF8F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 text-[#B99A62] text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold mb-3">
            <span className="w-6 h-[1px] bg-[#B99A62]" />
            <span>Reservations &amp; Enquiries</span>
            <span className="w-6 h-[1px] bg-[#B99A62]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#292521] leading-tight mb-5">
            Let's Plan Your Celebration
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#292521]/75 font-light leading-relaxed">
            Our team is delighted to assist you with hall availability, customized floor planning, and scheduling an in-person venue tour.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Details & Venue Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-[#F1EBDD]/50 border border-[#D5BD91]/40 rounded-sm p-8 sm:p-10 shadow-sm">
              <h3 className="font-serif text-2xl font-bold text-[#292521] mb-6 border-b border-[#D5BD91]/30 pb-4">
                Venue Concierge Desk
              </h3>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/40 flex items-center justify-center text-[#B99A62] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#292521]/60 font-sans block mb-1">
                      Direct Telephone
                    </span>
                    <a
                      href={`tel:${contact.phoneTel}`}
                      className="text-base sm:text-lg font-serif font-semibold text-[#292521] hover:text-[#B99A62] transition-colors"
                    >
                      {contact.phoneDisplay}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/40 flex items-center justify-center text-[#B99A62] shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#292521]/60 font-sans block mb-1">
                      WhatsApp Quick Chat
                    </span>
                    <a
                      href={`https://wa.me/${contact.whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-lg font-serif font-semibold text-[#292521] hover:text-[#B99A62] transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>+{contact.whatsappNumber}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#B99A62]" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/40 flex items-center justify-center text-[#B99A62] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#292521]/60 font-sans block mb-1">
                      Official Enquiries
                    </span>
                    <a
                      href={`mailto:${contact.email}`}
                      className="text-base font-sans font-medium text-[#292521] hover:text-[#B99A62] transition-colors break-all"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/40 flex items-center justify-center text-[#B99A62] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-widest text-[#292521]/60 font-sans block mb-1">
                      Venue Location
                    </span>
                    <p className="text-sm font-sans text-[#292521]/85 leading-relaxed">
                      {contact.address.line1}, {contact.address.line2}
                      <br />
                      {contact.address.city}, {contact.address.state} – {contact.address.pincode}
                    </p>
                    <a
                      href={contact.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold uppercase tracking-wider text-[#652B35] hover:text-[#B99A62] transition-colors"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Office hours reminder */}
              <div className="mt-8 pt-6 border-t border-[#D5BD91]/30 text-xs font-sans text-[#292521]/70 leading-normal">
                <span className="font-semibold text-[#292521] block mb-1">Visiting Hours:</span>
                {contact.officeHours}
              </div>
            </div>
          </div>

          {/* Right Column: WhatsApp Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-sm p-8 sm:p-10 border border-[#D5BD91]/40 shadow-lg">
              <div className="mb-6">
                <h3 className="font-serif text-2xl font-bold text-[#292521] mb-2">
                  Send Booking Enquiry
                </h3>
                <p className="text-xs sm:text-sm font-sans text-[#292521]/70">
                  Fill in your celebration details. Submitting this form directly formats and opens an enquiry on WhatsApp with our management desk.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-sm bg-[#FAF8F3] border border-[#B99A62] flex items-start gap-3 text-xs sm:text-sm font-sans text-[#292521]">
                  <CheckCircle2 className="w-5 h-5 text-[#B99A62] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block text-[#652B35]">WhatsApp Chat Opened</span>
                    Your enquiry details have been prepared and forwarded. If WhatsApp did not open automatically, please click below to send directly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name & Phone Number */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border focus:outline-none focus:ring-1 transition-colors ${
                        errors.fullName
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-[#B99A62]'
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-[11px] text-red-500 font-sans mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 00000"
                      className={`w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border focus:outline-none focus:ring-1 transition-colors ${
                        errors.phone
                          ? 'border-red-400 focus:ring-red-400'
                          : 'border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-[#B99A62]'
                      }`}
                    />
                    {errors.phone && (
                      <span className="text-[11px] text-red-500 font-sans mt-1 block">
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* Event Type & Expected Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="eventType"
                      className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                    >
                      Event Type
                    </label>
                    <select
                      id="eventType"
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-1 focus:ring-[#B99A62] focus:outline-none transition-colors"
                    >
                      <option value="Traditional Wedding">Traditional Wedding</option>
                      <option value="Wedding Reception">Wedding Reception</option>
                      <option value="Engagement Ceremony">Engagement Ceremony</option>
                      <option value="Sangeet / Mehendi">Sangeet / Mehendi</option>
                      <option value="Anniversary Celebration">Anniversary Celebration</option>
                      <option value="Convention / Corporate">Convention / Corporate Event</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="eventDate"
                      className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                    >
                      Expected Event Date *
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border focus:outline-none focus:ring-1 transition-colors ${
                          errors.eventDate
                            ? 'border-red-400 focus:ring-red-400'
                            : 'border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-[#B99A62]'
                        }`}
                      />
                    </div>
                    {errors.eventDate && (
                      <span className="text-[11px] text-red-500 font-sans mt-1 block">
                        {errors.eventDate}
                      </span>
                    )}
                  </div>
                </div>

                {/* Number of Guests */}
                <div>
                  <label
                    htmlFor="guestCount"
                    className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                  >
                    Expected Number of Guests
                  </label>
                  <input
                    type="text"
                    id="guestCount"
                    name="guestCount"
                    value={formData.guestCount}
                    onChange={handleChange}
                    placeholder="e.g. 500 - 800 guests"
                    className="w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-1 focus:ring-[#B99A62] focus:outline-none transition-colors"
                  />
                </div>

                {/* Additional Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-xs uppercase tracking-wider font-sans font-semibold text-[#292521] mb-2"
                  >
                    Message / Special Requirements
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your preferred timing, catering requirements or any specific questions..."
                    className="w-full px-4 py-3 text-sm rounded-sm bg-[#FAF8F3] border border-[#D5BD91]/50 focus:border-[#B99A62] focus:ring-1 focus:ring-[#B99A62] focus:outline-none transition-colors resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full py-4 bg-[#B99A62] hover:bg-[#A3854F] text-white rounded-sm font-sans text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry on WhatsApp</span>
                </button>

                <p className="text-[11px] text-center text-[#292521]/60 font-sans mt-3">
                  Clicking will open WhatsApp with your prefilled enquiry details ready to send. No spam, guaranteed.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
