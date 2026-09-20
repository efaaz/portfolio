import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";

type WorkCardProps = {
  project: Project;
  index: number;
};

export default function WorkCard({ project, index }: WorkCardProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="
        group
        block
        border-b
        border-white/8
        py-10
        transition-colors
        duration-300
        hover:bg-white/[0.012]
        sm:py-14
        lg:py-16
      "
    >
      <article className="grid gap-8 lg:grid-cols-[70px_1fr_420px] lg:items-center lg:gap-10">
        {/* Number */}
        <div className="hidden lg:block">
          <span
            className="
              font-mono
              text-xs
              text-white/20
              transition-colors
              duration-300
              group-hover:text-brand-violet/70
            "
          >
            {(index + 1).toString().padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="min-w-0">
          {/* Meta */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-brand-cyan">
              {project.type}
            </span>

            <span className="h-1 w-1 rounded-full bg-white/20" />

            <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50">
              {project.year}
            </span>
          </div>

          {/* Title */}
          <div className="mt-4 flex items-start gap-4">
            <h2
              className="
                text-3xl
                font-semibold
                tracking-[-0.035em]
                text-foreground
                transition-colors
                duration-300
                group-hover:text-white
                sm:text-4xl
                lg:text-5xl
              "
            >
              {project.title}
            </h2>

            <ArrowUpRight
              size={20}
              className="
                mt-1
                shrink-0
                text-white/20
                transition-all
                duration-300
                group-hover:-translate-y-1
                group-hover:translate-x-1
                group-hover:text-brand-violet
              "
            />
          </div>

          {/* Description */}
          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-muted-foreground
              sm:text-[15px]
            "
          >
            {project.description}
          </p>

          {/* Technologies */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="
                  rounded-md
                  border
                  border-white/8
                  bg-white/2
                  px-2.5
                  py-1
                  text-[10px]
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

          {/* Mobile CTA */}
          <div
            className="
              mt-7
              flex
              items-center
              gap-2
              text-xs
              font-medium
              text-muted-foreground
              lg:hidden
            "
          >
            View case study
            <ArrowUpRight size={14} />
          </div>
        </div>

        {/* Image */}
        <div
          className="
            relative
            aspect-[1.45]
            overflow-hidden
            rounded-2xl
            border
            border-white/8
            bg-[#0B1220]
          "
        >
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="
              (max-width: 1024px) 100vw,
              420px
            "
            className="
              object-cover
              transition-transform
              duration-700
              ease-out
              group-hover:scale-[1.04]
            "
          />

          {/* Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-linear-to-t
              from-[#050914]/35
              via-transparent
              to-transparent
              opacity-70
            "
          />

          {/* Corner indicator */}
          <div
            className="
              absolute
              bottom-4
              right-4
              flex
              h-9
              w-9
              items-center
              justify-center
              rounded-full
              border
              border-white/10
              bg-[#050914]/60
              text-white/70
              backdrop-blur-md
              transition-all
              duration-300
              group-hover:border-brand-violet/30
              group-hover:bg-brand-violet/10
              group-hover:text-brand-violet
            "
          >
            <ArrowUpRight size={15} />
          </div>
        </div>
      </article>
    </Link>
  );
}
