import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";

import {
  getAllSlugs,
  getPostBySlug,
} from "@/lib/post";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    return {};
  }

  if (!post) {
    return {};
  }

  const { title, description, date, category, cover } =
    post.frontmatter;

  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  const canonicalUrl = `${siteUrl}/writing/${slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: canonicalUrl,
    },

    authors: [
      {
        name: "Efaz",
      },
    ],

    openGraph: {
      type: "article",
      url: canonicalUrl,
      title,
      description,
      siteName: "Efaz",
      publishedTime: date,
      authors: ["Efaz"],
      section: category,

      ...(cover && {
        images: [
          {
            url: cover,
            width: 1200,
            height: 630,
            alt: title,
          },
        ],
      }),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      ...(cover && {
        images: [cover],
      }),
    },
  };
}
import { useMDXComponents } from "@/app/mdx-component";
import { Metadata } from "next";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    slug,
  }));
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  let post;

  try {
    post = getPostBySlug(slug);
  } catch {
    notFound();
  }

  if (!post) {
    notFound();
  }

  const frontmatter = post.frontmatter;

  const formattedDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(frontmatter.date));

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* Violet glow */}
        <div
          className="
            absolute
            left-[5%]
            top-[8%]
            h-105
            w-105
            rounded-full
            bg-brand-violet/4.5
            blur-[140px]
          "
        />

        {/* Cyan glow */}
        <div
          className="
            absolute
            right-[0%]
            top-[35%]
            h-90
            w-90
            rounded-full
            bg-brand-cyan/[0.035]
            blur-[130px]
          "
        />
      </div>

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-grid
          opacity-15
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        {/* =====================================================
            BACK
        ====================================================== */}

        <div className="pt-8 sm:pt-10">
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

            Back to writing
          </Link>
        </div>

        {/* =====================================================
            ARTICLE HEADER
        ====================================================== */}

        <header className="mx-auto max-w-4xl pb-14 pt-16 sm:pt-20 lg:pb-16 lg:pt-24">
          {/* Category */}
          <div className="flex items-center gap-3">
            <span
              className="
                h-1.5
                w-1.5
                rounded-full
                bg-brand-violet
                shadow-[0_0_12px_rgba(168,85,247,0.8)]
              "
            />

            <span
              className="
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-brand-violet
              "
            >
              {frontmatter.category ?? "Engineering"}
            </span>
          </div>

          {/* Title */}
          <h1
            className="
              mt-7
              max-w-4xl
              text-4xl
              font-semibold
              leading-[1.08]
              tracking-[-0.045em]
              text-foreground
              sm:text-5xl
              lg:text-6xl
              xl:text-7xl
            "
          >
            {frontmatter.title}
          </h1>

          {/* Description */}
          <p
            className="
              mt-7
              max-w-3xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
              sm:leading-8
            "
          >
            {frontmatter.description}
          </p>

          {/* Metadata */}
          <div
            className="
              mt-8
              flex
              flex-wrap
              items-center
              gap-x-5
              gap-y-3
              font-mono
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-muted-foreground/70
            "
          >
            <div className="flex items-center gap-2">
              <CalendarDays size={13} />

              <span>{formattedDate}</span>
            </div>

            {frontmatter.readingTime && (
              <>
                <span className="h-1 w-1 rounded-full bg-white/20" />

                <div className="flex items-center gap-2">
                  <Clock size={13} />

                  <span>
                    {frontmatter.readingTime}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* Tags */}
          {frontmatter.tags &&
            frontmatter.tags.length > 0 && (
              <div className="mt-7 flex flex-wrap gap-2">
                {frontmatter.tags.map((tag: string) => (
                  <span
                    key={tag}
                    className="
                      rounded-full
                      border
                      border-white/8
                      bg-white/2.5
                      px-3
                      py-1.5
                      text-[10px]
                      text-muted-foreground
                    "
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
        </header>

        {/* =====================================================
            COVER IMAGE
        ====================================================== */}

        {frontmatter.cover && (
          <div className="mx-auto max-w-5xl pb-16">
            <div
              className="
                relative
                aspect-16/8
                overflow-hidden
                rounded-2xl
                border
                border-white/8
                bg-surface
                shadow-[0_30px_100px_rgba(0,0,0,0.30)]
              "
            >
              <Image
                src={frontmatter?.cover}
                alt=""
                fill
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1280px) 90vw,
                  1100px
                "
                className="object-cover"
              />

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#050914]/30
                  via-transparent
                  to-transparent
                "
              />
            </div>
          </div>
        )}

        {/* =====================================================
            ARTICLE
        ====================================================== */}

        <div className="mx-auto max-w-3xl pb-24 sm:pb-32">
          <div
            className="
              border-t
              border-white/8
              pt-10
              sm:pt-12
            "
          >
            <MDXRemote
              source={post.content}
              components={useMDXComponents()}
            />
          </div>

          {/* =================================================
              ARTICLE END
          ================================================== */}

          <div className="mt-16 border-t border-white/8 pt-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground">
                  End of article
                </p>

                <p className="mt-2 text-sm text-muted-foreground/70">
                  More ideas and notes on software, systems,
                  and everything around them.
                </p>
              </div>

              <Link
                href="/writing"
                className="
                  group
                  inline-flex
                  shrink-0
                  items-center
                  gap-2
                  text-sm
                  font-medium
                  text-foreground
                  transition-colors
                  hover:text-brand-violet
                "
              >
                Explore more writing

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
        </div>
      </div>
    </main>
  );
}