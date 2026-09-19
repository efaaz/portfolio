import type { Metadata } from "next";
import "./globals.css";
import { geist, geistMono, dmSerif } from "./fonts";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000",
  ),

  title: {
    default: "Efaz — Software Engineer",
    template: "%s | Efaz",
  },

  description:
    "Software engineer building web applications and exploring systems, technology, business, and human behavior.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
