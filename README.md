# The Grand Aurora — Luxury Wedding Hall & Convention Centre

> *"Where Beautiful Beginnings Become Timeless Memories."*

A luxury, high-conversion landing page designed for premium Indian wedding halls, convention centres, and royal kalyana mantapas in Karnataka, India. Crafted with editorial elegance, authentic AI-generated wedding photography, and a centralized configuration architecture.

---

## ✨ Features & Highlights

- **Luxury Hospitality Aesthetic**: Warm Ivory (`#FAF8F3`), Champagne Gold (`#B99A62`), Cream (`#F1EBDD`), and Deep Maroon (`#652B35`) palette inspired by high-end Indian wedding publications.
- **Cinematic Visual Storytelling**: 8 photorealistic AI-generated photographs representing authentic Indian wedding ceremonies, mandaps, reception stages, banquet dining, and illuminated convention centre architecture.
- **Dynamic Navbar**: Transparent over the hero section, morphs into a frosted ivory header with subtle drop-shadow on scroll. Includes responsive mobile drawer navigation.
- **Hero Showcase**: Full-height hero with typography hierarchy, quick highlights, dual CTAs, and an animated scroll-down indicator.
- **Editorial About Section**: Storytelling layout with framed ceremony photography, heritage highlight badge, and key architectural pillars.
- **Venue Facilities & Occasions**: Modular cards covering the Grand Wedding Hall, Dining Banquets, Bridal Sanctuary, and Valet Parking, plus dedicated event profiles.
- **Interactive Photo Gallery**: Asymmetric editorial masonry grid with hover zoom and a full-screen **Lightbox Modal** supporting keyboard navigation (`ESC`, `←`, `→`).
- **Direct WhatsApp Lead Conversion**:
  - **Floating Action Button** with tooltip and subtle breathing animation.
  - **Interactive Booking Form** with input validation that dynamically compiles and launches a formatted enquiry directly to WhatsApp (`wa.me`).
  - Clickable direct phone (`tel:`) and email (`mailto:`) links.
- **Centralized Customization**: Every client detail, phone number, address, Google Maps link, event list, and photo path is stored in `src/data/venueData.js` for instant white-label re-branding.
- **Production-Ready & Responsive**: Optimized for 360px mobile up to 4K ultra-wide screens, achieving instant load times and zero build warnings.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Playfair Display, Cormorant Garamond, Inter (via Google Fonts)

---

## 📁 Project Structure

```
the-grand-aurora/
├── public/
│   └── images/
│       ├── hero-wedding.jpg       # Luxury Mandap in Grand Convention Hall
│       ├── wedding-ceremony.jpg   # Traditional Indian Wedding Rituals
│       ├── grand-hall.jpg         # High-Ceiling Banquet & Chandeliers
│       ├── reception-stage.jpg    # Royal Reception Stage with Florals
│       ├── dining-area.jpg        # Fine Banqueting Setup & Settings
│       ├── venue-exterior.jpg     # Illuminated Twilight Architecture
│       ├── floral-decoration.jpg  # Traditional Jasmine & Brass Urli
│       └── wedding-couple.jpg     # Joyful Indian Bride & Groom
├── src/
│   ├── components/
│   │   ├── Navbar.jsx             # Sticky frosted navigation & mobile drawer
│   │   ├── Hero.jsx               # Cinematic hero with dual action CTAs
│   │   ├── About.jsx              # Brand story & architectural highlights
│   │   ├── VenueHighlights.jsx    # 4 Signature facility feature cards
│   │   ├── Events.jsx             # Ceremonies, Receptions & Engagements
│   │   ├── Gallery.jsx            # Interactive grid with Lightbox viewer
│   │   ├── WhyChooseUs.jsx        # 4 Core brand pillars
│   │   ├── CallToAction.jsx       # Striking full-width banner
│   │   ├── Contact.jsx            # Concierge info & WhatsApp enquiry form
│   │   ├── Footer.jsx             # Brand links, social icons & back-to-top
│   │   └── WhatsAppButton.jsx     # Floating bottom-right quick chat action
│   ├── data/
│   │   └── venueData.js           # ⚙️ Central configuration file
│   ├── App.jsx                    # Application root layout
│   ├── index.css                  # Tailwind CSS v4 & custom scrollbar setup
│   └── main.jsx                   # Vite React entrypoint
├── index.html                     # SEO meta tags, Google Fonts & OpenGraph
├── vite.config.js                 # Vite + Tailwind v4 plugin config
└── package.json
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18.0.0 or higher)
- npm or pnpm / yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd the-grand-aurora
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. Build for production:
   ```bash
   npm run build
   ```
   The production-optimized bundle will be generated in the `dist/` directory.

5. Preview the production build locally:
   ```bash
   npm run preview
   ```

---

## ⚙️ Customizing for a New Client / Venue

All venue content is centralized in **`src/data/venueData.js`**. To customize for a new client:

1. **Venue Details & Contact**:
   - Change `brand.name` and `brand.tagline`.
   - Update `contact.phoneDisplay` and `contact.phoneTel`.
   - Set `contact.whatsappNumber` to the client's WhatsApp business number (digits with country code, e.g. `919876543210`).
   - Update `contact.email`, `contact.address`, and `contact.googleMapsUrl`.

2. **Custom Photos**:
   - Replace the JPG images inside `public/images/` or point `src/data/venueData.js` to new image filenames.

3. **Event Configurations & Facilities**:
   - Edit the items under `highlights.items` and `events.categories` to reflect the venue's exact specifications.

---

## 🌐 Deploying to Vercel

### Option 1: Vercel CLI (Quickest)
```bash
npm install -g vercel
vercel
```
Follow the prompts (accept default settings; framework preset is automatically detected as **Vite**).

### Option 2: GitHub + Vercel Dashboard
1. Initialize git and commit:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: The Grand Aurora landing page"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/your-username/the-grand-aurora.git
   git branch -M main
   git push -u origin main
   ```
3. Import the repository in [Vercel](https://vercel.com/new).
4. Build Settings:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. Click **Deploy**.

---

## 📄 License & Attribution

Designed and developed as a premium agency showcase demo. Clean, modular, and ready for commercial client adaptation.
