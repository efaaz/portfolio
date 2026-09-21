import CurrentlySection from "@/components/currently/CurrentlySection";
import Hero from "@/components/hero/Hero";
import Bookshelf from "@/components/home/Bookshelf";
import EngineeringPhilosophy from "@/components/home/EngineeringPhilosophy";
import RecentWriting from "@/components/home/RecentWriting";
import StartConversation from "@/components/home/StartConversation";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import { absoluteUrl } from "@/lib/site";
import { Metadata } from "next";
import { Analytics } from '@vercel/analytics/next';

export const metadata: Metadata = {
  title: "Efaz — Software Engineer",

  description:
    "I build software and study the systems behind it — technology, business, psychology, economics, and human behavior.",

  alternates: {
    canonical: absoluteUrl("/"),
  },

  openGraph: {
    title: "Efaz — Software Engineer",
    description:
      "Software engineer building web applications and exploring the systems behind technology.",
    url: absoluteUrl("/"),
    type: "website",

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
    title: "Efaz — Software Engineer",
    description:
      "Software engineer building web applications and exploring the systems behind technology.",
    images: [absoluteUrl("/images/og/default.jpg")],
  },
};
export default function Home() {
  return (
    <main className="">
      <Hero />
      <CurrentlySection />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <RecentWriting />
      <Bookshelf />
      <StartConversation />
      <Analytics />
    </main>
  );
}
