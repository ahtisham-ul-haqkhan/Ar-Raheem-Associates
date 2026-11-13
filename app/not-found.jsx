import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | AL-RAHEEM ASSOCIATES',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0b1f3a',
      color: '#ffffff',
      textAlign: 'center',
      padding: '20px'
    }}>
      <h1 style={{ fontSize: '72px', fontWeight: '800', color: '#c9a227', marginBottom: '10px' }}>404</h1>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '20px' }}>Page Not Found</h2>
      <p style={{ color: '#aaaaaa', maxWidth: '480px', marginBottom: '30px' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" style={{
        background: '#c9a227',
        color: '#0b1f3a',
        fontWeight: '700',
        padding: '12px 28px',
        borderRadius: '4px',
        textDecoration: 'none'
      }}>
        Return to Home
      </Link>
    </div>
  );
}

