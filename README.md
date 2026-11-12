# AL-RAHEEM ASSOCIATES - Corporate Portfolio & Real Estate Website

A production-ready, multi-section corporate website for **AL-RAHEEM ASSOCIATES** (Statutory Firm: **M/s Al-Raheem Associates**), an officially certified real estate brokerage, property development, skilled construction workforce, and investment management firm based in Karachi, Pakistan.

This website is engineered to convey unquestioned corporate legitimacy, professional standing, and government compliance—ideal for institutional clients, property investors, banking partners, and international visa/consular verification.

---

## Verified Company Credentials

| Field | Registered Record |
| :--- | :--- |
| **Operating Brand Name** | **AL-RAHEEM ASSOCIATES** |
| **Registered Statutory Firm** | **M/s Al-Raheem Associates** |
| **Founder & Owner** | **Zohaib Khan** |
| **Year Established** | **2016** (Serving Since 2016 in Karachi) |
| **KCCI Membership No.** | **150586** (Karachi Chamber of Commerce & Industry &bull; Valid through 31-Mar-2027) |
| **KCCI Book & Serial** | Book No: K 03022 &bull; Serial No: K 302136 |
| **FBR National Tax No. (NTN)** | **5357401-7** (Active Taxpayer &bull; ATL Enrolled) |
| **Taxpayer Registration / CNIC**| **42401-8997962-9** |
| **Tax Jurisdiction** | Regional Tax Office - I (RTO-I), Karachi |
| **Pakistan Businessmen Association (PBA)** | Businessman No: **BP-2670** &bull; Business No: **BS-2687** (Valid through 31-Mar-2026) |
| **Registered Business Address** | Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh 75620, Pakistan |
| **Primary Phone / WhatsApp** | **+92 341 8186681** (03418186681) |
| **Alternate / Office Contact** | **+92 333 2179918** |
| **Official Email** | **info@alraheemassociates.com** |
| **Working Hours** | Monday – Saturday: 9:00 AM – 6:00 PM |

---

## Core Services (From Official Executive Card & Records)

1. **Booking Apartments & Shops**: Primary booking and allocation management for new residential and commercial developments across Karachi.
2. **Resale - Flats, Shops & Offices**: Specialized resale brokerage facilitating transparent real estate transactions.
3. **Rent - Flats, Shops & Godowns**: Comprehensive tenancy and commercial storage / warehouse leasing management.
4. **Property Assessment**: Valuation, structural assessment, and commercial viability audits.
5. **Skilled Construction Workforce**: Experienced masons, carpenters, electricians, and plumbers providing turnkey residential and commercial craftsmanship.
6. **Property Investment Consultancy**: Structured capital growth strategies in Karachi's prime commercial and residential sectors.

---

## Table of Contents
1. [Tech Stack & Architecture](#1-tech-stack--architecture)
2. [File Structure & Document Map](#2-file-structure--document-map)
3. [Credentials & Document Lightbox](#3-credentials--document-lightbox)
4. [How to Replace Images](#4-how-to-replace-images)
5. [How to Edit Text & Contact Details](#5-how-to-edit-text--contact-details)
6. [How to Configure Contact Form Email](#6-how-to-configure-contact-form-email)
7. [How to Change Colors & Design System](#7-how-to-change-colors--design-system)
8. [Free Deployment Guide (Netlify & GitHub Pages)](#8-free-deployment-guide)
9. [Connecting a Custom Domain](#9-connecting-a-custom-domain)

---

## 1. Tech Stack & Architecture (Next.js App Router)

- **Framework**: **Next.js 14+ (App Router)** & React 18
- **Styling**: Bootstrap 5.3.3, Bootstrap Icons 1.11.3, AOS (Animate on Scroll), CSS Variables (`:root`)
- **Typography**: Google Fonts (Poppins & Inter)
- **Deployment & Production**: 100% Vercel & Netlify ready with static generation (`npm run build`)
- **Domain**: Configured for `https://arraheemassociates.vercel.app`
- **SEO & Search Indexing**:
  - Full Next.js Metadata API (`app/layout.jsx`)
  - Semantic HTML5, Open Graph Protocol, Twitter Cards
  - JSON-LD Structured Data Schema (`RealEstateAgent`, `GeneralContractor`, `LocalBusiness`)
  - Automated `sitemap.xml` & `robots.txt` in `public/`
- **Zero Design Change**: 100% pixel-perfect conversion, exact layout, original styling, and interactive features (Bootstrap modals, WhatsApp chat popup, filter tabs, back to top).

---

## 2. Quick Start Commands

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (http://localhost:3000)
npm run dev

# 3. Build for production (pre-renders static pages for max performance)
npm run build

# 4. Start production server
npm start
```

---

## 3. Deploying to Vercel

1. Push this folder to your GitHub / GitLab repository.
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your repository. Vercel automatically detects **Next.js**.
4. Set Project Name / Domain to: **`arraheemassociates`** (will deploy to `https://arraheemassociates.vercel.app`).
5. Click **Deploy**. Vercel will run `npm run build` and your site will be live instantly with full SEO indexing!

---

## 4. File Structure & Document Map

```text
AR-Builder&Developer/
│
├── app/
│   ├── layout.jsx               # Root Next.js layout, SEO metadata, JSON-LD, fonts
│   ├── page.jsx                 # Full single-page interactive website in React JSX
│   ├── globals.css              # Combined Bootstrap, Icons, AOS, and custom styles
│   └── not-found.jsx            # 404 Not Found error page
│
├── public/
│   ├── robots.txt               # SEO Crawler directives for Google/Bing
│   ├── sitemap.xml              # XML Sitemap linked to arraheemassociates.vercel.app
│   ├── images/                  # All logos, founder portraits, cards, and certificates
│   └── assets/                  # Verification documents and original records
│
├── next.config.mjs              # Next.js configuration
├── package.json                 # Next.js scripts & dependencies
├── .gitignore                   # Next.js git ignore configuration
├── index.html                   # Static HTML version (catalogue button removed)
└── README.md                    # This documentation file
```

---

## 3. Credentials & Document Lightbox

In Section 6 (`#credentials`), five official statutory documents are showcased:
1. **Karachi Chamber of Commerce (KCCI) Certificate**: Displays high-res scan `images/kcci-certificate.jpg` and links directly to `images/kcci-membership-certificate.pdf`.
2. **KCCI Executive Membership Card**: Displays front & back scans side-by-side in the lightbox modal and links to `images/kcci-membership-card.pdf`.
3. **FBR NTN Tax Registration Certificate**: Displays the verified FBR Active Taxpayer vector certificate (`images/cert-ntn.svg`) and links to `images/fbr-ntn-tax-certificate.pdf`.
4. **Official Executive Visiting Card (Royal Blue Edition)**: Vector recreation displaying full service list and contact info.
5. **Pakistan Businessmen Association Card**: Displays front & back verification cards and links to `images/pba-businessmen-verification.pdf`.

Clicking **"Inspect"** opens the responsive lightbox modal with high-resolution images, full legal description, and a **"View / Download Original PDF"** button.

---

## 4. How to Replace Images

### Owner / Founder Photo
- **File location**: `images/Professional_Suit_Portrait.png`
- To update: Place your new portrait at `images/Professional_Suit_Portrait.png`.

### Project Portfolio Images
In `index.html`, every project card has an image tag:
```html
<img src="https://images.unsplash.com/photo-..." alt="Project Name" class="project-img">
```
To replace an image:
1. Save your project photo into the `images/` directory (e.g. `images/project-1.jpg`).
2. Replace the `src` attribute with `images/project-1.jpg`.
3. Also update the `data-proj-image` attribute on the corresponding button so the popup modal displays your photo.

---

## 5. How to Edit Text & Contact Details

All data in `index.html` has been updated with real records:
- **Business Name**: AL-RAHEEM ASSOCIATES
- **Commercial Entity**: Al-Raheem Associates
- **Founder & Owner**: Zohaib Khan
- **Office Address**: Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch), Keamari, Karachi, Sindh 75620, Pakistan
- **Phone / WhatsApp**: `+92 341 8186681` (and `+92 333 2179918`)
- **Email**: `info@alraheemassociates.com`
- **KCCI / FBR Numbers**: KCCI # 150586 | NTN # 5357401-7 | PBA # BP-2670

To adjust any text, open `index.html` in VS Code or any text editor and edit the corresponding section.

---

## 6. How to Configure Contact Form Email

The contact form uses [FormSubmit.co](https://formsubmit.co) for zero-backend form submissions.

1. In `index.html`, find the `<form>` tag in the Contact section:
   ```html
   <form action="https://formsubmit.co/info@alraheemassociates.com" method="POST" ...>
   ```
2. Replace `info@alraheemassociates.com` with the email address where you want inquiry submissions delivered (e.g., `yourname@gmail.com`).
3. The very first time a submission is sent through the live site, FormSubmit will send a confirmation email to that address. Click the **"Activate Form"** button inside the email, and all subsequent inquiries will arrive directly in your inbox with full client details.

---

## 7. How to Change Colors & Design System

Colors are defined as CSS custom properties in `css/style.css` at the top (`:root`):

```css
:root {
  --primary-navy: #0B1F3A;         /* Primary corporate navy */
  --accent-gold: #C9A227;          /* Accent gold */
  --bg-light: #F5F7FA;             /* Alternating section background */
  --text-dark: #1F2937;            /* Body typography */
}
```

Modifying these variables updates the theme across all sections immediately.

---

## 8. Free Deployment Guide

### Option A: Netlify (Drag & Drop — Fastest, 60 seconds)
1. Go to [netlify.com](https://www.netlify.com) and log in or sign up.
2. Open the **"Sites"** tab.
3. Drag the entire project folder into the Netlify Drop area.
4. Your site will instantly go live with a free SSL certificate (HTTPS) and an address like `https://random-name.netlify.app`.

### Option B: GitHub Pages
1. Create a new repository on GitHub (e.g. `al-raheem-associates`).
2. Push this project folder to the repository.
3. Go to **Settings** > **Pages** > Select branch `main` and root `/` > Click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

---

## 9. Connecting a Custom Domain

1. In your Netlify or GitHub Pages dashboard, go to **Domain Management** / **Custom Domains**.
2. Enter your custom domain (e.g. `alraheemassociates.com` or `alraheemassociates.com`).
3. Add the provided DNS records (A record pointing to the server IP and CNAME for `www`) at your domain registrar (GoDaddy, Namecheap, etc.).
4. Netlify / GitHub will automatically provision a free Let's Encrypt SSL certificate within a few minutes.
