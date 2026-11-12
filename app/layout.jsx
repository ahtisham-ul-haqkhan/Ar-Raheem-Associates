import './globals.css';

export const viewport = {
  themeColor: '#0b1f3a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://arraheemassociates.vercel.app'),
  title: {
    default: 'AL-RAHEEM ASSOCIATES | Real Estate, Construction & Investments • Karachi, Pakistan',
    template: '%s | AL-RAHEEM ASSOCIATES',
  },
  description:
    'M/s Al-Raheem Associates (AL-RAHEEM ASSOCIATES), established in 2016 in Keamari, Karachi. Certified by Karachi Chamber of Commerce (KCCI #150586), FBR Active Taxpayer (NTN #5357401-7), and PBA verified (#BP-2670). Specializing in real estate brokerage, civil construction, skilled labor force, apartment/shop bookings, and property assessment.',
  keywords: [
    'Al-Raheem Associates',
    'AR Raheem Associates',
    'AR Builder & Developer',
    'Zohaib Khan',
    'real estate karachi',
    'construction company keamari',
    'skilled labor construction karachi',
    'booking apartments shops karachi',
    'KCCI member 150586',
    'FBR NTN 5357401-7',
    'property assessment karachi',
    'godown warehouse rent keamari',
    'civil contractors karachi',
    'property investment pakistan',
    'karachi property consultants',
    'azan centre keamari',
  ],
  authors: [{ name: 'Zohaib Khan - AL-RAHEEM ASSOCIATES' }],
  creator: 'Zohaib Khan',
  publisher: 'AL-RAHEEM ASSOCIATES',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://arraheemassociates.vercel.app',
  },
  openGraph: {
    title: 'AL-RAHEEM ASSOCIATES | Building Trust Since 2016',
    description:
      'Premier real estate, civil construction, skilled labor, and property investment firm established in 2016 in Karachi. KCCI #150586 | FBR NTN #5357401-7 | PBA #BP-2670.',
    url: 'https://arraheemassociates.vercel.app',
    siteName: 'AL-RAHEEM ASSOCIATES',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/visiting-card-blue.svg',
        width: 1050,
        height: 600,
        alt: 'AL-RAHEEM ASSOCIATES - Zohaib Khan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL-RAHEEM ASSOCIATES | Real Estate & Construction',
    description:
      'Established in 2016. Certified real estate, civil construction, and skilled labor firm in Keamari, Karachi.',
    images: ['/images/visiting-card-blue.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/logo-icon-key.svg',
    shortcut: '/images/logo-icon-key.svg',
    apple: '/images/logo-icon-key.svg',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'AL-RAHEEM ASSOCIATES',
  alternateName: ['Al-Raheem Associates', 'AR Builder & Developer', 'AR Raheem Associates'],
  legalName: 'M/s Al-Raheem Associates',
  foundingDate: '2016',
  url: 'https://arraheemassociates.vercel.app/',
  logo: 'https://arraheemassociates.vercel.app/images/logo-icon-key.svg',
  image: 'https://arraheemassociates.vercel.app/images/Professional_Suit_Portrait.png',
  description:
    'Established in 2016. Karachi-based real estate brokerage, civil contracting, property development, skilled labor mobilization, and investment firm. Corporate member of Karachi Chamber of Commerce & Industry (KCCI #150586) and FBR Active Taxpayer (NTN #5357401-7).',
  telephone: '+923418186681',
  email: 'info@alraheemassociates.com',
  founder: {
    '@type': 'Person',
    name: 'Zohaib Khan',
    jobTitle: 'Owner & Founder',
  },
  taxID: '5357401-7',
  vatID: '4240189979629',
  memberOf: [
    {
      '@type': 'Organization',
      name: 'Karachi Chamber of Commerce & Industry (KCCI)',
      identifier: '150586',
    },
    {
      '@type': 'Organization',
      name: 'Pakistan Businessmen Association (PBA)',
      identifier: 'BP-2670',
    },
  ],
  priceRange: '$$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Plot No. 128, Shop No. 4, Azan Centre, Near NBP Bank (Keamari Branch)',
    addressLocality: 'Keamari Town, Karachi West',
    addressRegion: 'Sindh',
    postalCode: '75620',
    addressCountry: 'PK',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 24.8138,
    longitude: 66.9749,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  sameAs: [
    'https://facebook.com/alraheemassociates',
    'https://instagram.com/alraheemassociates',
    'https://linkedin.com/company/alraheemassociates',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body data-bs-spy="scroll" data-bs-target="#mainNav" data-bs-offset="90" tabIndex={0}>
        {children}
      </body>
    </html>
  );
}
