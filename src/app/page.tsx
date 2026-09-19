import CurrentlySection from "@/components/currently/CurrentlySection";
import Hero from "@/components/hero/Hero";
import Bookshelf from "@/components/home/Bookshelf";
import EngineeringPhilosophy from "@/components/home/EngineeringPhilosophy";
import RecentWriting from "@/components/home/RecentWriting";
import FeaturedProjects from "@/components/projects/FeaturedProjects";

export default function Home() {
  return (
     <main className="">
      <Hero />
      <CurrentlySection />
      <FeaturedProjects />
      <EngineeringPhilosophy />
      <RecentWriting />
      <Bookshelf />
    </main>
  );
}
