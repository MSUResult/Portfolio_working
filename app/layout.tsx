import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./context/ThemeContext";
import Footer from "./components/Footer";
import Script from "next/script"; // ✅ for Schema

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Shivansh Singh | Saharanpur Web Developer | Next.js & MERN Stack Expert",
  description:
    "I'm Shivansh Singh, a professional web developer from Saharanpur specializing in Next.js, React, Tailwind, SEO, and modern full-stack web development.",
  keywords: [
    "Saharanpur web developer",
    "Saharanpur Website Maker",
    "web developer in Saharanpur",
    "Next.js developer",
    "React developer",
    "freelance web designer Saharanpur",
    "Website Creator in Saharanpur",
    "MERN stack developer",
  ],
  authors: [{ name: "Shivansh Singh" }],
  openGraph: {
    title: "Shivansh Singh | Saharanpur Web Developer",
    description:
      "Portfolio of Shivansh Singh — Web Developer from Saharanpur, building high-performance websites using Next.js and React.",
    url: "https://shivansh-webdev.vercel.app",
    siteName: "Shivansh Portfolio",
    images: [
      {
        url: "https://shivansh-webdev.vercel.app/og-image.jpg", // Replace with your image
        width: 1200,
        height: 630,
        alt: "Shivansh Singh - Saharanpur Web Developer",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shivansh Singh | Saharanpur Web Developer",
    description:
      "Building modern websites with React, Next.js & Tailwind — based in Saharanpur, India.",
    images: ["https://shivansh-webdev.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema for Google Rich Results */}
        <Script
          id="schema-person"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Shivansh Singh",
              jobTitle: "Web Developer",
              description:
                "Professional Web Developer from Saharanpur specializing in Next.js, React, Tailwind, and SEO.",
              url: "https://shivansh-webdev.vercel.app",
              sameAs: [
                "https://github.com/MSUResult",
                "https://www.linkedin.com/in/shivansh-singh-bb1b0b328/",
                "https://x.com/Adarshs97102593",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Saharanpur",
                addressRegion: "Uttar Pradesh",
                addressCountry: "India",
              },
            }),
          }}
        />
      </head>

      <body
        className={`bg-white transition-colors dark:bg-gray-900 dark:text-white ${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider>
          <Navbar />
          <main className="min-h-screen pt-24">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
