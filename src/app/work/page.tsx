import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import WorkCard from "@/components/projects/WorkCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ??
      "http://localhost:3000",
  ),

  title: {
    default: "My Works",
    template: "%s | Efaz",
  },

   description: "Selected software projects and products built by Efaz."
};

export default function WorkPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[5%]
            top-[8%]
            h-96
            w-96
            rounded-full
            bg-brand-violet/4.5
            blur-[140px]
          "
        />

        <div
          className="
            absolute
            right-[5%]
            top-[35%]
            h-80
            w-80
            rounded-full
            bg-brand-cyan/3
            blur-[130px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            left-[35%]
            h-72
            w-72
            rounded-full
            bg-brand-coral/2
            blur-[120px]
          "
        />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
        {/* Header */}
        <header className="max-w-4xl">
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-brand-cyan
                shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />

            <span
              className="
                text-xs
                font-medium
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Work
            </span>

            <div className="h-px w-16 bg-white/8" />
          </div>

          <h1
            className="
              mt-8
              text-5xl
              font-semibold
              tracking-tighter
              text-foreground
              sm:text-6xl
              lg:text-7xl
              lg:leading-[1.03]
            "
          >
            Things I've{" "}
            <span className="font-serif italic text-gradient">built.</span>
          </h1>

          <p
            className="
              mt-7
              max-w-2xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            A collection of software projects I've built while exploring
            engineering, product thinking, and real-world problems.
          </p>
        </header>

        {/* Small intro bar */}
        <div
          className="
            mt-14
            flex
            flex-col
            gap-4
            border-y
            border-white/8
            py-5
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-sm text-muted-foreground">
            {projects.length} projects
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/50">
            Software · Systems · Products
          </p>
        </div>

        {/* Projects */}
        <div className="mt-10">
          {projects.map((project, index) => (
            <WorkCard key={project.slug} project={project} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-white/8 pt-10">
          <p className="max-w-xl text-sm leading-6 text-muted-foreground">
            Some projects are experiments, some are products, and some started
            as ways to understand a problem more deeply.
          </p>

          <Link
            href="/"
            className="
              group
              mt-5
              inline-flex
              items-center
              gap-2
              text-sm
              font-medium
              text-foreground
              transition-colors
              hover:text-brand-violet
            "
          >
            Back to home
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
    </main>
  );
}
