import type { Metadata } from 'next';
import { Geist } from 'next/font/google'; // Corrected import
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster

const geistSans = Geist({ // Corrected instantiation
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'Axel - Administrateur Système & Créateur de serveurs Minecraft | Portfolio',
    template: '%s | Axel - Portfolio',
  },
  description: 'Portfolio d\'Axel, administrateur système (Linux, DevOps) et créateur de projets, y compris des serveurs Minecraft. Découvrez mes compétences et réalisations.',
  keywords: ['administrateur système', 'sysadmin', 'devops', 'linux', 'serveur minecraft', 'minecraft', 'développement système', 'cybersécurité', 'portfolio', 'Axel'],
  authors: [{ name: 'Axel' }],
  creator: 'Axel',
  openGraph: {
    title: 'Axel - Administrateur Système & Créateur de serveurs Minecraft',
    description: 'Portfolio d\'Axel, administrateur système et passionné par les serveurs Minecraft.',
    url: 'https://alexportfolio-pi.vercel.app/', // Replace with your actual domain
    siteName: 'Portfolio Axel',
    images: [
      {
        url: 'https://i.imgur.com/udDPqBW.jpeg', // Hero image or a general site image
        width: 200,
        height: 200,
        alt: 'Portfolio Axel - Administrateur Système',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axel - Administrateur Système & Créateur de serveurs Minecraft',
    description: 'Découvrez les projets et compétences d\'Axel, administrateur système et créateur de serveurs Minecraft.',
    // creator: '@yourtwitterhandle', // Replace with your Twitter handle if you have one
    images: ['https://i.imgur.com/udDPqBW.jpeg'], // Hero image or a general site image
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark" suppressHydrationWarning>
      <body className={`${geistSans.variable} antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
