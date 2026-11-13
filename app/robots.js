export default function robots() {
  const baseUrl = 'https://arraheemassociates.vercel.app';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Image',
        allow: '/',
      },
      {
        userAgent: 'Googlebot-Video',
        allow: ['/videos/owner-video.mp4', '/videos/project-tour-1.mp4', '/videos/project-tour-2.mp4', '/videos/project-tour-3.mp4'],
      },
      {
        userAgent: 'bingbot',
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

