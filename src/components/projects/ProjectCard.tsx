import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <article
      className="
        group
        relative
        rounded-2xl
        border
        border-white/8
        bg-surface
        p-2
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-white/[0.14]
        hover:shadow-[0_20px_60px_rgba(0,0,0,0.25)]
      "
    >
      {/* Project image */}
      <Link
        href={`/work/${project.slug}`}
        className="block"
      >
        <div
          className="
            relative
            aspect-[1.65]
            overflow-hidden
            rounded-xl
            bg-[#080E19]
          "
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Image gradient */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#050914]/40
              via-transparent
              to-transparent
            "
          />

          {/* Featured label */}
          {project.featured && (
            <div
              className="
                absolute
                left-4
                top-4
                rounded-full
                border
                border-brand-violet/30
                bg-[#0B1220]/80
                px-3
                py-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.15em]
                text-brand-violet
                backdrop-blur-md
              "
            >
              Featured
            </div>
          )}
        </div>
      </Link>

      {/* Information panel */}
      <div
        className="
          relative
          z-10
          -mt-10
          mx-2
          rounded-xl
          border
          border-white/8
          bg-[#0B1220]/95
          px-5
          py-5
          shadow-[0_12px_40px_rgba(0,0,0,0.25)]
          backdrop-blur-xl
        "
      >
        {/* Title + arrow */}
        <div className="flex items-start justify-between gap-4">
          <Link href={`/work/${project.slug}`}>
            <h3
              className="
                text-lg
                font-medium
                tracking-tight
                text-foreground
                transition-colors
                duration-200
                group-hover:text-white
              "
            >
              {project.title}
            </h3>
          </Link>

          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.title}`}
            className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-full
              border
              border-white/8
              text-muted-foreground
              transition-all
              duration-200
              group-hover:border-brand-violet/30
              group-hover:text-brand-violet
            "
          >
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

        {/* Description */}
        <p
          className="
            mt-2
            line-clamp-2
            text-sm
            leading-6
            text-muted-foreground
          "
        >
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="
                rounded-md
                border
                border-white/8
                bg-white/2.5
                px-2.5
                py-1
                text-[11px]
                text-muted-foreground
                transition-colors
                duration-200
                group-hover:border-white/12
              "
            >
              {technology}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}