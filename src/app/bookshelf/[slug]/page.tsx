import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen, CalendarDays, Clock3, Star,} from "lucide-react";
import { notFound } from "next/navigation";
import { getBookBySlug, getBookCover, getBooks } from "@/lib/books";
import { getPostBySlug } from "@/lib/post";
import { absoluteUrl } from "@/lib/site";
import { JsonLd } from "@/app/json-ld";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getBooks().map((book) => ({
    slug: book.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const book = getBookBySlug(slug);

  if (!book) {
    return {};
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

  const canonicalUrl = `${siteUrl}/bookshelf/${book.slug}`;

  const coverUrl = getBookCover(book.isbn);

  return {
    title: book.title,
    description:
      book.description ??
      `${book.title} by ${book.author} — part of Efaz's personal bookshelf.`,

    alternates: {
      canonical: canonicalUrl,
    },

    openGraph: {
      type: "website",
      url: canonicalUrl,
      title: book.title,
      description: book.description ?? `${book.title} by ${book.author}`,

      siteName: "Efaz",

      images: [
        {
          url: coverUrl,
          alt: `Cover of ${book.title}`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: book.title,
      description: book.description ?? `${book.title} by ${book.author}`,

      images: [coverUrl],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const book = getBookBySlug(slug);

  if (!book) {
    notFound();
  }
  const relatedWriting =
    book.relatedWritingSlugs
      ?.map((writingSlug) => {
        try {
          return getPostBySlug(writingSlug);
        } catch {
          return null;
        }
      })
      .filter((post): post is NonNullable<typeof post> => post !== null) ?? [];

  const formattedYear = book.year ? String(book.year) : null;
      const canonical = absoluteUrl(`/bookshelf/${book.slug}`);

const bookSchema = {
  "@context": "https://schema.org",
  "@type": "Book",

  "@id": `${canonical}#book`,

  name: book.title,

  author: {
    "@type": "Person",
    name: book.author,
  },

  isbn: book.isbn,

  url: canonical,

  image: book.cover
    ? absoluteUrl(book.cover)
    : undefined,

  description: book.description,

  inLanguage: "en",
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
      name: "Bookshelf",
      item: absoluteUrl("/bookshelf"),
    },
    {
      "@type": "ListItem",
      position: 3,
      name: book.title,
      item: canonical,
    },
  ],
};
  return (
    <>
      <JsonLd data={bookSchema} />
      <JsonLd data={breadcrumbSchema} />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
            absolute
            left-[5%]
            top-[5%]
            h-105
            w-105
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
            bottom-[10%]
            left-[30%]
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
            href="/bookshelf"
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
            Back to bookshelf
          </Link>
        </div>

        {/* =====================================================
            BOOK HERO
        ====================================================== */}

        <section
          className="
            grid
            gap-12
            py-16
            sm:py-20
            lg:grid-cols-[360px_1fr]
            lg:gap-20
            lg:py-24
          "
        >
          {/* Book cover */}
          <div className="mx-auto w-full max-w-[320px] lg:mx-0">
            <div
              className="
                relative
                aspect-2/3
                overflow-hidden
                rounded-2xl
                border
                border-white/8
                bg-[#0B1220]
                shadow-[0_30px_90px_rgba(0,0,0,0.35)]
              "
            >
              <Image
                src={getBookCover(book.isbn)}
                alt={book.title}
                fill
                priority
                sizes="(max-width: 1024px) 320px,360px"
                className="object-cover"
              />

              {/* subtle overlay */}
              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  bg-linear-to-t
                  from-[#050914]/20
                  via-transparent
                  to-white/4
                "
              />
            </div>
          </div>

          {/* Book information */}
          <div className="max-w-3xl self-center">
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
                {book.category}
              </span>
            </div>

            {/* Title */}
            <h1
              className="
                mt-6
                text-4xl
                font-semibold
                leading-[1.05]
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              {book.title}
            </h1>

            {/* Author */}
            <p className="mt-4 text-lg text-muted-foreground">{book.author}</p>

            {/* Rating */}
            <div className="mt-7 flex items-center gap-3">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill={index < book.rating ? "currentColor" : "none"}
                    className={
                      index < book.rating ? "text-brand-coral" : "text-white/15"
                    }
                  />
                ))}
              </div>

              <span className="text-sm text-muted-foreground">
                {book.rating}/5
              </span>
            </div>

            {/* Description */}
            {book.description && (
              <p
                className="
                  mt-8
                  max-w-2xl
                  text-base
                  leading-8
                  text-muted-foreground
                  sm:text-lg
                "
              >
                {book.description}
              </p>
            )}

            {/* Metadata */}
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-x-6
                gap-y-3
                font-mono
                text-[10px]
                uppercase
                tracking-[0.12em]
                text-muted-foreground/70
              "
            >
              {formattedYear && (
                <div className="flex items-center gap-2">
                  <CalendarDays size={13} />
                  <span>Read in {formattedYear}</span>
                </div>
              )}

              <div className="flex items-center gap-2">
                <BookOpen size={13} />
                <span>{book.status.replaceAll("-", " ")}</span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            MY NOTES
        ====================================================== */}

        {(book.whyIRead || book.thoughts) && (
          <section className="border-t border-white/8 py-20 sm:py-24">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              {/* Left */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-brand-cyan">
                    01
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    My notes
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
                  What stayed
                  <span className="font-serif italic text-gradient">
                    {" "}
                    with me.
                  </span>
                </h2>
              </div>

              {/* Right */}
              <div className="space-y-10">
                {book.whyIRead && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-violet">
                      Why I read it
                    </p>

                    <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
                      {book.whyIRead}
                    </p>
                  </div>
                )}

                {book.thoughts && (
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-brand-cyan">
                      What I took away
                    </p>

                    <div
                      className="
                        relative
                        mt-4
                        overflow-hidden
                        rounded-2xl
                        border
                        border-white/8
                        bg-white/2
                        p-6
                        sm:p-8
                      "
                    >
                      <div
                        className="
                          pointer-events-none
                          absolute
                          -right-10
                          -top-10
                          h-32
                          w-32
                          rounded-full
                          bg-brand-cyan/6
                          blur-[60px]
                        "
                      />

                      <p className="relative text-base leading-8 text-foreground/90 sm:text-lg">
                        {book.thoughts}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* =====================================================
            RELATED WRITING
        ====================================================== */}

        <section className="border-t border-white/8 py-20 sm:py-24 lg:py-28">
          <div className="flex items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] text-brand-violet">
                  02
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Related writing
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
                Ideas that came
                <span className="font-serif italic text-gradient">
                  {" "}
                  out of reading.
                </span>
              </h2>
            </div>

            {relatedWriting.length > 0 && (
              <Link
                href="/writing"
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
                All writing
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
            )}
          </div>

          {relatedWriting.length > 0 ? (
            <div className="mt-10 border-t border-white/8">
              {relatedWriting.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="
                    group
                    block
                    border-b
                    border-white/8
                    py-7
                    transition-colors
                    duration-300
                    hover:bg-white/1.5
                    sm:py-8
                  "
                >
                  <div className="grid gap-5 sm:grid-cols-[60px_130px_1fr_40px] sm:items-start sm:gap-6">
                    {/* Number */}
                    <span
                      className="
                        hidden
                        font-mono
                        text-xs
                        text-white/20
                        sm:block
                      "
                    >
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    {/* Category */}
                    <div className="pt-1">
                      <span
                        className="
                          text-[10px]
                          font-medium
                          uppercase
                          tracking-[0.18em]
                          text-brand-violet
                        "
                      >
                        {post.frontmatter.category ?? "Writing"}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3
                        className="
                          text-lg
                          font-medium
                          leading-7
                          tracking-tight
                          text-foreground
                          transition-colors
                          duration-200
                          group-hover:text-white
                          sm:text-xl
                        "
                      >
                        {post.frontmatter.title}
                      </h3>

                      <p
                        className="
                          mt-2
                          max-w-2xl
                          text-sm
                          leading-6
                          text-muted-foreground
                        "
                      >
                        {post.frontmatter.description}
                      </p>

                      <div
                        className="
                          mt-4
                          flex
                          items-center
                          gap-3
                          font-mono
                          text-[10px]
                          uppercase
                          tracking-[0.12em]
                          text-muted-foreground/60
                        "
                      >
                        <span>{post.frontmatter.date}</span>

                        {post.frontmatter.readingTime && (
                          <>
                            <span className="h-1 w-1 rounded-full bg-white/20" />

                            <span className="flex items-center gap-1.5">
                              <Clock3 size={11} />
                              {post.frontmatter.readingTime}
                            </span>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="hidden justify-end sm:flex">
                      <span
                        className="
                          flex
                          h-9
                          w-9
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-white/8
                          text-muted-foreground
                          transition-all
                          duration-300
                          group-hover:border-brand-violet/30
                          group-hover:bg-brand-violet/10
                          group-hover:text-brand-violet
                        "
                      >
                        <ArrowUpRight
                          size={16}
                          className="
                            transition-transform
                            duration-300
                            group-hover:-translate-y-0.5
                            group-hover:translate-x-0.5
                          "
                        />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div
              className="
                mt-10
                rounded-2xl
                border
                border-white/8
                bg-white/2
                px-6
                py-10
                text-sm
                text-muted-foreground
              "
            >
              No related writing yet. I'm still thinking about this one.
            </div>
          )}
        </section>

        {/* =====================================================
            FOOTER NAV
        ====================================================== */}

        <section className="border-t border-white/8 py-16">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/bookshelf"
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
              <ArrowLeft size={15} />
              Back to bookshelf
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
              Explore writing
              <ArrowUpRight
                size={15}
                className="
                  transition-transform
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                "
              />
            </Link>
          </div>
        </section>
      </div>
    </main>
  </>);
}
