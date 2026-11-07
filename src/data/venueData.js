/**
 * THE GRAND AURORA - Centralized Venue Configuration & Data
 * 
 * IMPORTANT FOR CLIENT CUSTOMIZATION:
 * This file contains all editable content, contact details, image references,
 * and venue specifications for The Grand Aurora landing page.
 * 
 * When deploying this template for a new wedding hall or convention centre client:
 * 1. Replace the brand details (name, tagline, descriptions).
 * 2. Update contact info (phone, WhatsApp number, email, address, Google Maps link).
 * 3. Update facilities/features and event categories according to the actual venue.
 * 4. Replace image filenames in /public/images/ with client-provided photos.
 */

export const venueData = {
  brand: {
    name: "THE GRAND AURORA",
    tagline: "Where Beautiful Beginnings Become Timeless Memories.",
    shortName: "Grand Aurora",
    taglineIntro: "AN EXTRAORDINARY VENUE FOR EXTRAORDINARY MOMENTS",
    heroHeading: "Celebrate Love.\nCreate Timeless Memories.",
    heroSubheading:
      "A beautiful destination for weddings, receptions and life's most cherished celebrations. Experience exceptional spaces and warm hospitality.",
  },

  contact: {
    // Phone numbers (Replace with client contact)
    phoneDisplay: "+91 98765 43210",
    phoneTel: "+919876543210",
    
    // WhatsApp number with country code without '+' or special characters (e.g. 919876543210)
    whatsappNumber: "919876543210",
    whatsappDefaultMessage: "Hello The Grand Aurora, I would like to enquire about venue availability for an upcoming celebration.",
    
    // Email (Replace with client email)
    email: "celebrate@thegrandaurora.com",
    
    // Physical venue address (Replace with client address in Karnataka)
    address: {
      line1: "Survey No. 42, Aurora Boulevard",
      line2: "Near International Airport Expressway",
      city: "Bengaluru",
      state: "Karnataka",
      pincode: "562157",
      country: "India",
      full: "Survey No. 42, Aurora Boulevard, Near International Airport Expressway, Bengaluru, Karnataka 562157",
    },
    
    // Map link placeholder
    googleMapsUrl: "https://maps.google.com/?q=Bengaluru+Karnataka+Convention+Centre",
    
    // Social media placeholders
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://youtube.com",
    },

    officeHours: "Monday to Sunday: 9:00 AM – 8:00 PM (Visits by prior appointment recommended)",
  },

  about: {
    badge: "THE ART OF CELEBRATION",
    title: "More Than a Venue. A Place Where Memories Begin.",
    description:
      "Every celebration deserves a beautiful setting. At The Grand Aurora, we bring together elegant spaces, thoughtful hospitality and beautiful surroundings to create unforgettable experiences for you and your loved ones.",
    extendedDescription:
      "Nestled amidst serene greenery with architectural grandeur inspired by royal heritage and modern aesthetics, our convention centre provides an idyllic canvas for weddings of distinction.",
    image: "/images/wedding-ceremony.jpg",
    imageAlt: "Traditional Indian wedding ceremony at The Grand Aurora",
    highlights: [
      {
        title: "Elegant Event Spaces",
        description: "Expansive halls with soaring ceilings, bespoke crystal chandeliers, and grand architecture designed for timeless ceremonies.",
      },
      {
        title: "Thoughtful Hospitality",
        description: "A dedicated venue management team committed to seamless coordination and warm guest care throughout your celebration.",
      },
      {
        title: "Beautiful Celebrations",
        description: "Every corner is meticulously designed to create picturesque backdrops for cherished heirloom wedding photography.",
      },
    ],
  },

  highlights: {
    heading: "Everything You Need for a Perfect Celebration",
    subheading: "Beautiful spaces and thoughtful facilities to make every occasion memorable.",
    items: [
      {
        id: "hall",
        title: "Grand Wedding Hall",
        description: "Spacious and beautifully designed interiors for memorable wedding celebrations.",
        icon: "Castle",
        badge: "Main Mandap & Hall",
      },
      {
        id: "dining",
        title: "Elegant Dining Area",
        description: "A comfortable dining experience for guests with thoughtfully arranged spaces.",
        icon: "UtensilsCrossed",
        badge: "Bespoke Banqueting",
      },
      {
        id: "bridal",
        title: "Premium Bridal Suite",
        description: "A private and comfortable space for the bride and family to prepare.",
        icon: "Sparkles",
        badge: "Private Sanctuary",
      },
      {
        id: "parking",
        title: "Ample Parking",
        description: "Convenient parking arrangements for guests attending your celebration.",
        icon: "Car",
        badge: "Valet & Dedicated Lots",
      },
    ],
  },

  events: {
    heading: "Perfect Spaces for Every Occasion",
    subheading: "Thoughtfully configured venues designed to honour tradition while embracing contemporary grandeur.",
    categories: [
      {
        id: "ceremonies",
        title: "Wedding Ceremonies",
        tag: "Traditional & Auspicious",
        description: "Beautiful settings for traditional and contemporary weddings.",
        image: "/images/wedding-ceremony.jpg",
        imageAlt: "Traditional Indian Wedding Mandap and Ceremony",
        features: ["Pooja & Mandap setup space", "Acoustic-treated hall", "Stage illumination"],
      },
      {
        id: "receptions",
        title: "Wedding Receptions",
        tag: "Grand & Glamorous",
        description: "Celebrate your special evening with elegance and style.",
        image: "/images/reception-stage.jpg",
        imageAlt: "Grand Reception Stage with floral décor and chandeliers",
        features: ["Expansive stage for felicitation", "Intelligent ambient lighting", "Surround sound support"],
      },
      {
        id: "engagements",
        title: "Engagements & Special Events",
        tag: "Intimate & Festive",
        description: "Memorable spaces for engagements, anniversaries and family celebrations.",
        image: "/images/wedding-couple.jpg",
        imageAlt: "Engagements, Sangeet and Anniversary Celebrations",
        features: ["Flexible layout configurations", "Dance floor space", "Dedicated dressing suites"],
      },
    ],
  },

  gallery: {
    heading: "Moments Worth Remembering",
    subheading: "A glimpse into the beauty of celebrations and special moments.",
    items: [
      {
        id: 1,
        src: "/images/hero-wedding.jpg",
        title: "Grand Mandap Elegance",
        category: "Mandap & Stage",
        alt: "Grand wedding mandap with crystal chandeliers and floral decorations",
        span: "col-span-12 md:col-span-8 aspect-[16/10]",
      },
      {
        id: 2,
        src: "/images/wedding-ceremony.jpg",
        title: "Sacred Rituals",
        category: "Ceremony",
        alt: "Indian bride and groom during traditional wedding rituals",
        span: "col-span-12 md:col-span-4 aspect-[4/5]",
      },
      {
        id: 3,
        src: "/images/grand-hall.jpg",
        title: "High Ceiling Convention Hall",
        category: "Interior Architecture",
        alt: "Wide interior view of the grand wedding hall with majestic chandeliers",
        span: "col-span-12 md:col-span-4 aspect-[4/5]",
      },
      {
        id: 4,
        src: "/images/reception-stage.jpg",
        title: "Evening Reception Splendor",
        category: "Reception",
        alt: "Floral decorated royal reception stage",
        span: "col-span-12 md:col-span-4 aspect-[4/5]",
      },
      {
        id: 5,
        src: "/images/floral-decoration.jpg",
        title: "Artisanal Floral Details",
        category: "Decor",
        alt: "Close-up of traditional fresh floral decorations and brass lamps",
        span: "col-span-12 md:col-span-4 aspect-[4/5]",
      },
      {
        id: 6,
        src: "/images/dining-area.jpg",
        title: "Royal Dining Hall",
        category: "Hospitality",
        alt: "Spacious banqueting and dining hall with elegant table settings",
        span: "col-span-12 md:col-span-6 aspect-[16/10]",
      },
      {
        id: 7,
        src: "/images/venue-exterior.jpg",
        title: "Illuminated Twilight Facade",
        category: "Architecture",
        alt: "Exterior view of The Grand Aurora convention centre at dusk",
        span: "col-span-12 md:col-span-6 aspect-[16/10]",
      },
    ],
  },

  whyChooseUs: {
    heading: "Where Every Detail Matters",
    subheading: "Thoughtfully conceived to deliver serenity, grandeur, and heartfelt Indian hospitality.",
    items: [
      {
        title: "Beautifully Designed Spaces",
        description: "Soaring high ceilings, unobstructed sightlines, and timeless ivory-gold architectural design that flatters every celebration style.",
        icon: "Palette",
      },
      {
        title: "Warm & Welcoming Hospitality",
        description: "Courteous facility support staff and experienced coordinators who treat your family and guests with gracious hospitality.",
        icon: "HeartHandshake",
      },
      {
        title: "Convenient Location",
        description: "Situated along major transit corridors in Karnataka, offering effortless accessibility and smooth arrival for all visiting guests.",
        icon: "MapPin",
      },
      {
        title: "Memorable Celebrations",
        description: "An inspiring atmosphere designed to elevate personal rituals into cherished, photogenic heirlooms that last across generations.",
        icon: "Crown",
      },
    ],
  },

  cta: {
    heading: "Your Special Day Deserves a Special Place.",
    subheading: "Let's make your celebration unforgettable. Get in touch with our team to explore the venue and discuss your requirements.",
    backgroundImage: "/images/reception-stage.jpg",
  },

  navigation: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Facilities", href: "#facilities" },
    { label: "Events", href: "#events" },
    { label: "Gallery", href: "#gallery" },
    { label: "Why Choose Us", href: "#why-choose-us" },
    { label: "Contact", href: "#contact" },
  ],
};
