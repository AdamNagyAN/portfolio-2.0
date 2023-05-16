import { Mukta } from 'next/font/google';

import '@/styles/globals.css';
import { siteConfig } from '@/config/site';
import { absoluteUrl, cn } from '@/lib/utils';
import Navbar from '@/components/molecules/navbar/NavBar';
import Footer from '@/components/molecules/footer/Footer';

const fontMukta = Mukta({
  weight: ['200', '500', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  preload: true,
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'Next.js',
    'React',
    'Tailwind CSS',
    'Web design',
    'Web development',
    'Website',
  ],
  authors: [
    {
      name: 'Adam Nagy',
      url: 'https://adamnagy.live',
    },
  ],
  creator: 'Adam Nagy',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: absoluteUrl('/images/Logo.svg'),
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={cn('font-sans scroll-smooth', fontMukta.variable)}
    >
      <head />
      <body className="min-h-screen bg-base-100 text-white overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
