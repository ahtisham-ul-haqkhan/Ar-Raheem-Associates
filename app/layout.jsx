import './globals.css';

export const viewport = {
  themeColor: '#0b1f3a',
  width: 'device-width',
  initialScale: 1,
};

export const metadata = {
  metadataBase: new URL('https://arraheemassociates.vercel.app'),
  title: {
    default: 'AL-RAHEEM ASSOCIATES | Real Estate, Civil Construction & Investments • Karachi, Pakistan',
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
    'turnkey civil contracting karachi',
    'commercial tower builders karachi',
    'residential construction contractors sindh',
  ],
  authors: [{ name: 'Zohaib Khan - AL-RAHEEM ASSOCIATES' }],
  creator: 'Zohaib Khan',
  publisher: 'AL-RAHEEM ASSOCIATES',
  category: 'Civil Construction & Real Estate Development',
  manifest: '/manifest.json',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: 'https://arraheemassociates.vercel.app',
  },
  verification: {
    google: 'google459ddefc778d8809',
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
        url: '/images/zvisiting-card-user.jpg',
        width: 1368,
        height: 784,
        alt: 'AL-RAHEEM ASSOCIATES - Zohaib Khan',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AL-RAHEEM ASSOCIATES | Real Estate & Construction',
    description:
      'Established in 2016. Certified real estate, civil construction, and skilled labor firm in Keamari, Karachi.',
    images: ['/images/zvisiting-card-user.jpg'],
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
  other: {
    'geo.region': 'PK-SD',
    'geo.placename': 'Karachi, Sindh, Pakistan',
    'geo.position': '24.8138;66.9749',
    ICBM: '24.8138, 66.9749',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['GeneralContractor', 'RealEstateAgent'],
      '@id': 'https://arraheemassociates.vercel.app/#business',
      name: 'AL-RAHEEM ASSOCIATES',
      alternateName: ['Al-Raheem Associates', 'AR Builder & Developer', 'AR Raheem Associates', 'M/s Al-Raheem Associates'],
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
        jobTitle: 'Founder, Owner & Chief Executive Officer',
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
      priceRange: 'PKR',
      currenciesAccepted: 'PKR',
      paymentAccepted: 'Cash, Cheque, Bank Transfer',
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
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Karachi' },
        { '@type': 'AdministrativeArea', name: 'Keamari' },
        { '@type': 'AdministrativeArea', name: 'Clifton' },
        { '@type': 'AdministrativeArea', name: 'DHA Karachi' },
        { '@type': 'AdministrativeArea', name: 'Shahrah-e-Faisal' },
      ],
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
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://arraheemassociates.vercel.app/#video-owner-intro',
      name: 'Zohaib Khan – Owner AL-RAHEEM ASSOCIATES | Company Introduction & Vision',
      description:
        'Official introduction by Zohaib Khan, Owner and Founder of AL-RAHEEM ASSOCIATES, Karachi. Presenting the company\'s real estate brokerage, turnkey civil construction, skilled labor workforce, and property investment services established since 2016.',
      thumbnailUrl: [
        'https://arraheemassociates.vercel.app/images/Professional_Suit_Portrait.png',
      ],
      uploadDate: '2026-11-13T00:00:00+05:00',
      contentUrl: 'https://arraheemassociates.vercel.app/videos/owner-video.mp4',
      embedUrl: 'https://arraheemassociates.vercel.app/#home',
      publisher: {
        '@type': 'Organization',
        name: 'AL-RAHEEM ASSOCIATES',
        logo: {
          '@type': 'ImageObject',
          url: 'https://arraheemassociates.vercel.app/images/logo-icon-key.svg',
        },
      },
    },
    {
      '@type': 'VideoObject',
      '@id': 'https://arraheemassociates.vercel.app/#video-site-tour',
      name: 'Al-Raheem Associates - Comprehensive Project Walkthrough',
      description:
        'Exclusive on-site walkthrough showcasing ongoing foundation, structural RCC reinforcement work, column casting, and engineering supervision across active project sites in Karachi by Al-Raheem Associates.',
      thumbnailUrl: [
        'https://arraheemassociates.vercel.app/images/video-thumb-steel.svg',
      ],
      uploadDate: '2026-11-11T20:21:17+05:00',
      duration: 'PT3M7S',
      contentUrl: 'https://arraheemassociates.vercel.app/videos/project-tour-2.mp4',
      embedUrl: 'https://arraheemassociates.vercel.app/#videos',
      publisher: {
        '@type': 'Organization',
        name: 'AL-RAHEEM ASSOCIATES',
        logo: {
          '@type': 'ImageObject',
          url: 'https://arraheemassociates.vercel.app/images/logo-icon-key.svg',
        },
      },
    },
    {
      '@type': 'WebSite',
      '@id': 'https://arraheemassociates.vercel.app/#website',
      url: 'https://arraheemassociates.vercel.app/',
      name: 'AL-RAHEEM ASSOCIATES',
      publisher: {
        '@id': 'https://arraheemassociates.vercel.app/#business',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://arraheemassociates.vercel.app/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What services does Al-Raheem Associates provide in Karachi?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Al-Raheem Associates provides turnkey civil construction, residential and commercial property development, skilled labor mobilization, shop and apartment booking brokerage, and property assessment across Karachi.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Al-Raheem Associates officially registered and verified?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, Al-Raheem Associates is an official corporate member of Karachi Chamber of Commerce & Industry (KCCI #150586), an active taxpayer registered with Federal Board of Revenue (FBR NTN #5357401-7), and verified by Pakistan Businessmen Association (#BP-2670).',
          },
        },
        {
          '@type': 'Question',
          name: 'How can I schedule an on-site visit or consultation with founder Zohaib Khan?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'You can book an immediate site visit or consultation directly via WhatsApp at +92 341 8186681 or by visiting our headquarters at Plot No. 128, Shop No. 4, Azan Centre, Keamari, Karachi.',
          },
        },
      ],
    },
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
