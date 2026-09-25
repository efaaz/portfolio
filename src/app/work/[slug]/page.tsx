import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";

import { getAllProjectSlugs, getProjectBySlug } from "@/lib/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { JsonLd } from "@/app/json-ld";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

/* =========================================================
   STATIC PARAMS
========================================================= */

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const canonical = absoluteUrl(`/work/${project.slug}`);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    "@id": `${canonical}#project`,

    name: project.title,

    description: project.description,

    url: canonical,

    image: absoluteUrl(project.image),

    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: absoluteUrl("/about"),
    },

    programmingLanguage: project.technologies,

    ...(project.githubUrl
      ? {
          codeRepository: project.githubUrl,
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: absoluteUrl("/work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  };

  return {
    title: project.title,

    description: project.description,

    alternates: {
      canonical,
    },

    openGraph: {
      title: project.title,
      description: project.description,
      type: "article",
      url: canonical,

      images: [
        {
          url: absoluteUrl(project.image),
          alt: project.title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.description,
      images: [absoluteUrl(project.image)],
    },
  };
}
export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }
  const canonical = absoluteUrl(`/work/${project.slug}`);

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",

    "@id": `${canonical}#project`,

    name: project.title,

    description: project.description,

    url: canonical,

    image: absoluteUrl(project.image),

    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: siteConfig.author.name,
      url: absoluteUrl("/about"),
    },

    programmingLanguage: project.technologies,

    ...(project.githubUrl
      ? {
          codeRepository: project.githubUrl,
        }
      : {}),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: absoluteUrl("/work"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: project.title,
        item: canonical,
      },
    ],
  };
  return (
    <>
      <JsonLd data={projectSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="relative min-h-screen overflow-hidden">
        {/* =====================================================
          BACKGROUND
      ====================================================== */}

        <div className="pointer-events-none absolute inset-0">
          <div
            className="
            absolute
            left-[5%]
            top-[5%]
            h-105
            w-105
            rounded-full
            bg-brand-violet/4
            blur-[140px]
          "
          />

          <div
            className="
            absolute
            right-[5%]
            top-[35%]
            h-90
            w-90
            rounded-full
            bg-brand-cyan/3
            blur-[130px]
          "
          />

          <div
            className="
            absolute
            bottom-[5%]
            left-[35%]
            h-75
            w-75
            rounded-full
            bg-brand-coral/2
            blur-[120px]
          "
          />
        </div>

        {/* Grid */}
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-15" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* =====================================================
            BACK
        ====================================================== */}

          <div className="pt-8 sm:pt-10">
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
              duration-200
              hover:text-foreground
            "
            >
              <ArrowLeft
                size={15}
                className="
                transition-transform
                duration-200
                group-hover:-translate-x-1
              "
              />
              Back to work
            </Link>
          </div>

          {/* =====================================================
            PROJECT HEADER
        ====================================================== */}

          <header className="max-w-5xl pb-12 pt-16 sm:pt-20 lg:pb-16 lg:pt-24">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-brand-cyan">
                {project.type}
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60">
                {project.year}
              </span>
            </div>

            {/* Title */}
            <h1
              className="
              mt-7
              max-w-5xl
              text-5xl
              font-semibold
              leading-[1.04]
              tracking-tighter
              text-foreground
              sm:text-6xl
              lg:text-7xl
            "
            >
              {project.title}
            </h1>

            {/* Description */}
            <p
              className="
              mt-7
              max-w-6xl
              text-lg
              leading-8
              text-muted-foreground
              sm:text-xl
            "
            >
              {project.description}
            </p>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-brand-violet/30
                  bg-brand-violet/10
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-brand-violet/50
                  hover:bg-brand-violet/15
                "
                >
                  Live project
                  <ExternalLink
                    size={14}
                    className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/8
                  bg-white/2
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:text-foreground
                "
                >
                  Source code
                  <ArrowUpRight
                    size={14}
                    className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  />
                </a>
              )}
              {project.githubFrontendUrl && (
                <a
                  href={project.githubFrontendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/8
                  bg-white/2
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:text-foreground
                "
                >
                  Frontend Source code
                  <ArrowUpRight
                    size={14}
                    className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  />
                </a>
              )}
              {project.githubBackendUrl && (
                <a
                  href={project.githubBackendUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/8
                  bg-white/2
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:text-foreground
                "
                >
                  Backend Source code
                  <ArrowUpRight
                    size={14}
                    className="
                    transition-transform
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                  />
                </a>
              )}

            </div>
          </header>

          {/* =====================================================
            HERO IMAGE
        ====================================================== */}

          <section className="pb-20">
            <div
              className="
              relative
              aspect-video
              overflow-hidden
              rounded-3xl
              border
              border-white/8
              bg-surface
              shadow-[0_35px_100px_rgba(0,0,0,0.30)]
            "
            >
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />

              <div
                className="
                pointer-events-none
                absolute
                inset-0
                bg-linear-to-t
                from-[#050914]/25
                via-transparent
                to-transparent
              "
              />
            </div>
          </section>

          {/* =====================================================
            OVERVIEW
        ====================================================== */}

          {project.overview && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="01"
                  label="Overview"
                  title="What is it?"
                />

                <p className="max-w-3xl text-lg leading-9 text-muted-foreground sm:text-xl">
                  {project.overview}
                </p>
              </div>
            </section>
          )}

          {/* =====================================================
            PROBLEM
        ====================================================== */}

          {project.problem && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="02"
                  label="Problem"
                  title="What problem is being solved?"
                />

                <div className="max-w-3xl">
                  <p className="text-lg leading-9 text-muted-foreground sm:text-xl">
                    {project.problem}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
            APPROACH
        ====================================================== */}

          {project.approach && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="03"
                  label="Approach"
                  title="How I approached it."
                />

                <p className="max-w-3xl text-lg leading-9 text-muted-foreground sm:text-xl">
                  {project.approach}
                </p>
              </div>
            </section>
          )}

          {/* =====================================================
            TECHNOLOGY
        ====================================================== */}

          <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
              <SectionLabel number="04" label="Technology" title="The stack." />

              <div className="flex max-w-3xl items-center flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <p
                    key={technology}
                    className="
                    rounded-xl
                    border
                    border-white/8
                    bg-white/2.5
                    px-4
                    py-2.5
                    text-sm
                    text-muted-foreground
                    transition-all
                    duration-200
                    hover:border-brand-violet/25
                    hover:bg-brand-violet/5
                    hover:text-foreground
                  "
                  >{technology}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* =====================================================
            ARCHITECTURE
        ====================================================== */}

          {project.architecture && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="05"
                  label="Architecture"
                  title="How it fits together."
                />

                <div className="max-w-3xl">
                  {/* Architecture diagram */}
                  <div className="overflow-hidden rounded-2xl border border-white/8 bg-[#080E19] p-6 sm:p-8">
                    <div className="font-mono text-xs text-muted-foreground">
                      <div className="rounded-xl border border-brand-violet/20 bg-brand-violet/5 p-4 text-brand-violet">
                        {project.frontend?.title}
                        <span className="ml-2 text-white/70">→ {project.frontend?.description}</span>
                      </div>

                      <div className="flex justify-center py-3 text-white">
                        ↓
                      </div>

                      <div className="rounded-xl border border-brand-cyan/20 bg-brand-cyan/4 p-4 text-brand-cyan">
                        {project.backend?.title}
                        <span className="ml-2 text-white/70">
                          → {project.backend?.description}
                        </span>
                      </div>

                      <div className="flex justify-center py-3 text-white">
                        ↓
                      </div>

                      <div className="rounded-xl border border-brand-lime/20 bg-brand-lime/4 p-4 text-brand-lime">
                        {project.orm?.title}
                        <span className="ml-2 text-white/70">
                          → {project.orm?.description}
                        </span>
                      </div>
                      <div className="flex justify-center py-3 text-white">
                        ↓
                      </div>

                      <div className="rounded-xl border-brand-coral/20 bg-brand-coral/4 p-4 text-brand-coral border">
                        {project.db?.title}
                        <span className="ml-2 text-white/70">
                          → {project.db?.description}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="mt-6 text-base leading-8 text-muted-foreground sm:text-lg">
                    {project.architecture}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
            FEATURES
        ====================================================== */}

          {project.features && project.features.length > 0 && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="06"
                  label="Features"
                  title="What it does."
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <article
                      key={feature.title}
                      className="
                        rounded-2xl
                        border
                        border-white/[0.07]
                        bg-white/2
                        p-6
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-white/13
                        hover:bg-white/[0.035]
                      "
                    >
                      <div
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-xl
                          bg-brand-violet/10
                          text-brand-violet
                        "
                      >
                        <Check size={17} />
                      </div>

                      <h3 className="mt-5 text-base font-medium text-foreground">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-muted-foreground">
                        {feature.description}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
            TECHNICAL DECISIONS
        ====================================================== */}

          {project.technicalDecisions &&
            project.technicalDecisions.length > 0 && (
              <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
                <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                  <SectionLabel
                    number="07"
                    label="Decisions"
                    title="Why I built it this way."
                  />

                  <div className="border-t border-white/8">
                    {project.technicalDecisions.map((decision, index) => (
                      <article
                        key={decision.title}
                        className="
                          border-b
                          border-white/8
                          py-7
                        "
                      >
                        <div className="flex gap-5">
                          <span className="font-mono text-[10px] text-brand-violet">
                            {(index + 1).toString().padStart(2, "0")}
                          </span>

                          <div>
                            <h3 className="text-base font-medium text-foreground sm:text-lg">
                              {decision.title}
                            </h3>

                            <p className="mt-2 text-sm leading-7 text-muted-foreground sm:text-[15px]">
                              {decision.description}
                            </p>
                          </div>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            )}

          {/* =====================================================
            SCREENSHOTS
        ====================================================== */}

          {project.screenshots && project.screenshots.length > 0 && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="08"
                  label="Screenshots"
                  title="Inside the product."
                />

                <div className="space-y-6">
                  {project.screenshots.map((screenshot) => (
                    <div
                      key={screenshot.src}
                      className="
                        relative
                        aspect-16/10
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/8
                        bg-surface
                      "
                    >
                      <Image
                        src={project.image}
                        alt={screenshot.alt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 800px"
                        className="
                          object-cover
                          transition-transform
                          duration-700
                          hover:scale-[1.015]
                        "
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
            CHALLENGES
        ====================================================== */}

          {project.challenges && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="09"
                  label="Challenges"
                  title="What was difficult?"
                />

                <p className="max-w-3xl text-lg leading-9 text-muted-foreground sm:text-xl">
                  {project.challenges}
                </p>
              </div>
            </section>
          )}

          {/* =====================================================
            LESSONS
        ====================================================== */}

          {project.lessons && (
            <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
              <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
                <SectionLabel
                  number="10"
                  label="Lessons"
                  title="What I learned."
                />

                <div
                  className="
                  relative
                  overflow-hidden
                  rounded-2xl
                  border
                  border-white/8
                  bg-white/2
                  p-7
                  sm:p-9
                "
                >
                  <div
                    className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-48
                    w-48
                    rounded-full
                    bg-brand-violet/8
                    blur-[80px]
                  "
                  />

                  <p className="relative font-semibold text-lg leading-9 text-foreground/90 sm:text-xl">
                    {project.lessons}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* =====================================================
            NEXT STEP
        ====================================================== */}

          <section className="border-t border-white/8 py-20 sm:py-24">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
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
                <ArrowLeft
                  size={15}
                  className="transition-transform group-hover:-translate-x-1"
                />
                More projects
              </Link>

              <Link
                href="/writing"
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
                Read my thinking
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.18em] text-brand-violet">
          {number}
        </span>

        <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </span>
      </div>

      <h2
        className="
          mt-5
          text-3xl
          font-semibold
          tracking-[-0.035em]
          text-foreground
          sm:text-4xl
        "
      >
        {title}
      </h2>
    </div>
  );
}
