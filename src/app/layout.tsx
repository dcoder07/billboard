import '~/styles/globals.css';

import { Toaster } from 'react-hot-toast';
import { ClerkProvider, ClerkLoaded, ClerkLoading } from '@clerk/nextjs';

import { GeistSans } from 'geist/font/sans';
import { PageProgress } from '~/components';
import { LoadingScreen } from '~/screens';
import type { Metadata } from 'next';
import type { Viewport } from 'next';

import { env } from '~/env';

export const metadata: Metadata = {
  metadataBase: new URL(env.NEXT_PUBLIC_OG_BASE_URL),
  title: {
    template: '%s | CampusHub',
    default: 'CampusHub',
  },
  description:
    'Register for events, explore clubs, and dive into college life! Join the excitement today!',
  applicationName: 'Gymkhana Technical',
  keywords: ['NIT Agartala', 'IIIT Agartala', 'College Events'],
  creator: 'Vedant Chainani',
  publisher: 'CampusHub',
  icons: [
    { rel: 'icon', url: '/icon.png' },
    { rel: 'apple-touch-icon', url: '/apple-touch-icon.png' },
  ],
  manifest: '/manifest.json',
  twitter: {
    card: 'summary_large_image',
    title: 'CampusHub',
    description:
      'Experience BTC Gymkhana Technical: Register for events, explore clubs, and dive into college life! Join the excitement today!',
    creator: '@Envoy_1084',
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `CampusHub`,
      },
    ],
  },
  openGraph: {
    title: 'CampusHub',
    description:
      'Register for events, explore clubs, and dive into college life! Join the excitement today!',
    type: 'website',
    locale: 'en_US',
    url: '',
    images: [
      {
        url: `/api/og`,
        width: 1200,
        height: 630,
        type: 'image/png',
        alt: `CampusHub`,
      },
    ],
  },
  other: {
    'msapplication-tap-highlight': 'no',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'CampusHub',
    'msapplication-TileColor': '#fff',
  },
};

export const viewport: Viewport = {
  themeColor: 'white',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <ClerkProvider>
        <body className={`${GeistSans.className}`}>
          <PageProgress />
          <ClerkLoading>
            <LoadingScreen />
          </ClerkLoading>
          <ClerkLoaded>
            {children}
            <Toaster position='bottom-right' />
          </ClerkLoaded>
        </body>
      </ClerkProvider>
    </html>
  );
}
