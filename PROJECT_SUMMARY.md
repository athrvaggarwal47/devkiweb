# Project Summary: Devki Nandan & Sons

## Overview
A modern Next.js web application for **Devki Nandan & Sons**, an electrical goods business established in 1957 in Rampur Bushahr, Himachal Pradesh. The site showcases trusted electrical brands, product catalogs, and provides direct supply support.

## Tech Stack
- **Framework:** Next.js 16.2.1 with App Router
- **Styling:** Tailwind CSS 4 with PostCSS
- **Animations:** Framer Motion 12.38.0
- **Icons:** Lucide React 1.6.0
- **Language:** TypeScript 5
- **Storage:** Vercel Blob (production) / Local filesystem (development)
- **Auth:** Custom SHA256 session-based admin authentication

## Project Structure

```
devkiweb/
├── app/                      # Next.js app directory
│   ├── page.tsx             # Home page with hero & catalogs
│   ├── layout.tsx           # Root layout with theme & fonts
│   ├── [slug]/              # Dynamic SEO landing pages
│   ├── about/               # Company history (1957-present)
│   ├── contact/             # Contact page with location map
│   ├── catalogs/            # Catalog library with filters
│   ├── admin/               # Protected admin panel
│   │   ├── login/           # Admin login page
│   │   ├── catalogs/        # Upload & manage catalogs
│   │   └── actions.ts       # Server-side auth actions
│   └── api/admin/           # Admin API routes
├── components/              # Reusable React components
│   ├── layout/              # Navbar, Footer
│   └── ui/                  # CatalogCard, SectionHeading, etc.
├── data/                    # Static data
│   ├── brands.ts           # 9 partner electrical brands
│   ├── catalogs.ts         # Base catalog definitions
│   ├── catalogs.user.json  # User-uploaded catalogs
│   └── seo-pages.ts        # 4 SEO landing pages
├── lib/                    # Utilities
│   ├── admin-auth.ts       # Session management
│   ├── catalog-store.ts    # Blob/local storage handling
│   ├── seo.ts              # Metadata & structured data
│   ├── whatsapp.ts         # WhatsApp link generation
│   └── utils.ts            # Tailwind utilities
├── public/                 # Static assets & PDFs
│   └── catalogs/           # Catalog PDFs (uploads dir)
└── [config files]          # tsconfig, package.json, etc.
```

## Key Features

### 🏪 Public Pages
- **Home** - Hero section, business stats, category showcase, featured catalogs
- **Catalogs** - Searchable library with brand & category filters
- **About** - Company history, 69+ years of business
- **Contact** - Direct contact info, WhatsApp integration, Google Maps
- **SEO Pages** - 4 dynamic landing pages for local electrical sourcing

### 🔐 Admin Panel
- Protected login with environment-based credentials
- Upload PDF catalogs with metadata
- Dual storage: Vercel Blob (production) or Local filesystem (dev)
- Auto-cache revalidation after uploads
- Featured catalog promotion to homepage

### 🎨 Design & UX
- **Theme:** Dark/Light mode toggle with localStorage persistence
- **Responsive:** Mobile-first design with Tailwind CSS 4
- **Animations:** Smooth transitions via Framer Motion
- **Brand Colors:** Custom palette (Ink, Sand, Copper, Signal)
- **Fonts:** Space Grotesk (display), Manrope (body) from Google Fonts

### 📱 Integrations
- WhatsApp CTA button (floating, animated)
- Google Maps embedded location
- SEO metadata & structured data (JSON-LD)
- Sitemap generation from dynamic routes

## Partner Brands (9 total)
Anchor • Havells • Panasonic • Greatwhite • Diplast • Philips • Bajaj • Racold • Usha

## Contact Info
- **Phone:** +91 94180 00309
- **Email:** puneet@devkinandanandsons.com
- **Location:** Main Market, Rajpur, Rampur Bushahr, Himachal Pradesh 172001
- **Hours:** Mon-Sat 9AM-7PM IST

## Environment Setup

### Required Environment Variables
```
ADMIN_USERNAME=puneet@devkinandanandsons.com  (optional, defaults to this)
ADMIN_PASSWORD=<your-secure-password>         (required for admin panel)
BLOB_READ_WRITE_TOKEN=<vercel-blob-token>     (optional, for production uploads)
```

## Development Commands
```bash
npm run dev      # Start dev server on http://localhost:3000
npm run build    # Build for production
npm start        # Run production server
npm run lint     # Run ESLint
```

## Deployment
- **Optimized for:** Vercel
- **Auto-deployed:** From git repository
- **PDFs:** Stored in Vercel Blob or public/catalogs/uploads/
- **Cache:** Revalidated on-demand after catalog uploads

## Codebase Highlights
- ✅ Full TypeScript with strict mode
- ✅ Server & Client components (App Router)
- ✅ Proper separation of concerns
- ✅ Type-safe data structures
- ✅ Secure admin authentication
- ✅ SEO optimized (metadata, structured data, sitemaps)
- ✅ Performance optimized (image optimization, code splitting)

---

**Last Updated:** April 2026  
**Status:** Production-ready
