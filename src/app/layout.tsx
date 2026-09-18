import type { Metadata } from "next";
import "./globals.css";
import {
  geist,
  geistMono,
  dmSerif,
} from "./fonts";
import Navbar from "@/components/navigation/Navbar";

export const metadata: Metadata = {
  title: "Efaz — Software Engineer",
  description:
    "Software engineer building useful software and exploring systems, technology, business, and human behavior.",
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
        </body>
    </html>
  );
}
