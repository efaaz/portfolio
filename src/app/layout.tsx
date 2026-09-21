import "./globals.css";
import type { Metadata, Viewport } from "next";
import { geist, geistMono, dmSerif } from "./fonts";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { JsonLd } from "./json-ld";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: siteConfig.title,
    template: "%s | Efaz",
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  authors: [
    {
      name: siteConfig.author.name,
      url: siteConfig.author.url,
    },
  ],

  creator: siteConfig.author.name,

  publisher: siteConfig.author.name,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: absoluteUrl("/images/og/default.jpg"),
        width: 1200,
        height: 630,
        alt: "Efaz — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [absoluteUrl("/images/og/default.jpg")],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? {
        google: process.env.GOOGLE_SITE_VERIFICATION,
      }
    : undefined,

  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#050914",
  colorScheme: "dark",
};

const personSchema = {
  "@type": "Person",
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.author.name,
  url: absoluteUrl("/about"),
  image: absoluteUrl("/images/profile/me.png"),
  jobTitle: "Software Engineer",
  description:
    "Software engineer building web applications and exploring software architecture, technology, business, psychology, and systems.",

  sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
};

const websiteSchema = {
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.name,
  description: siteConfig.description,
  publisher: {
    "@id": `${siteConfig.url}/#person`,
  },
  inLanguage: "en",
};

const websiteGraph = {
  "@context": "https://schema.org",
  "@graph": [personSchema, websiteSchema],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <JsonLd data={websiteGraph} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
