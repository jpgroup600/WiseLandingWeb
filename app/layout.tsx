import { Metadata } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'WiseRootree',
  description: '비즈니스 통합솔루션',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  authors: [{ name: 'WiseRootree' }],
  metadataBase: new URL('https://와루.com'),
  openGraph: {
    type: 'website',
    title: 'WiseRootree',
    description: '비즈니스 통합솔루션',
    url: 'https://와루.com',
    siteName: 'WiseRootree',
    images: [{
      url: '/preview.jpg',
      width: 1200,
      height: 627,
      alt: 'Site preview image',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WiseRootree',
    description: '비즈니스 통합솔루션',
    images: ['/preview.png'],
  },
  icons: {
    icon: [
      { url: '/Navbar/logo.png', sizes: '16x16', type: 'image/png' },
      { url: '/Navbar/logo.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/Navbar/logo.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  // manifest: '/site.webmanifest',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: 'https://와루.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Navbar/logo.png" />
      </head>
      <body
        className= {`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    <div className="min-h-screen w-full bg-white">
      {children}
    </div>
      </body>
    </html>
  );
}
