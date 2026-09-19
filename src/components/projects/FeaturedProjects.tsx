import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  return (
    <section className="relative border-b border-white/6">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">

        {/* Section heading */}
        <div className="mb-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-brand-violet
                shadow-[0_0_12px_rgba(168,85,247,0.7)]
              "
            />

            <h2
              className="
                text-xs
                md:text-lg
                font-medium
                uppercase
                tracking-[0.2em]
                text-foreground/90
              "
            >
              Featured Projects
            </h2>
          </div>

          <Link
            href="/work"
            className="
              group
              hidden
              items-center
              gap-2
              text-sm
              text-muted-foreground
              transition-colors
              hover:text-foreground
              sm:flex
            "
          >
            View all projects

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
            />
          ))}
        </div>

        {/* Mobile view all */}
        <div className="mt-8 flex sm:hidden">
          <Link
            href="/work"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-muted-foreground
              transition-colors
              hover:text-foreground
            "
          >
            View all projects

            <ArrowUpRight
              size={15}
              className="
                transition-transform
                duration-200
                group-hover:-translate-y-0.5
                group-hover:translate-x-0.5
              "
            />
          </Link>
        </div>
      </div>
    </section>
  );
}