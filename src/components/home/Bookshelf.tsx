import Link from "next/link";
import { ArrowUpRight, BookOpen } from "lucide-react";
import { books } from "@/data/books";
import BookCard from "@/components/books/BookCard";

export default function Bookshelf() {
  const featuredBooks = books.slice(0, 6);

  return (
    <section className="relative overflow-hidden border-b border-white/6">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[20%]
            top-[20%]
            h-72
            w-72
            rounded-full
            bg-brand-violet/4
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[15%]
            h-64
            w-64
            rounded-full
            bg-brand-cyan/[0.035]
            blur-[110px]
          "
        />
      </div>

      {/* Grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(to_right,rgba(255,255,255,0.022)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.022)_1px,transparent_1px)]
          bg-size-[48px_48px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        {/* Header */}
        <div className="flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <BookOpen
              size={16}
              className="text-brand-violet"
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
              Bookshelf
            </span>

            <div className="h-px w-16 bg-white/[0.07]" />
          </div>

          <Link
            href="/bookshelf"
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
            View bookshelf

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

        {/* Introduction */}
        <div className="mt-10 max-w-3xl">
          <h2
            className="
              text-4xl
              font-semibold
              tracking-[-0.035em]
              text-foreground
              sm:text-5xl
            "
          >
            Books that shape
            <span className="font-serif italic text-gradient">
              {" "}how I think.
            </span>
          </h2>

          <p
            className="
              mt-5
              max-w-2xl
              text-base
              leading-7
              text-muted-foreground
              sm:text-lg
            "
          >
            I read beyond software to understand people,
            businesses, systems, and the ideas that influence
            how we build technology.
          </p>
        </div>

        {/* Books */}
        <div
          className="
            mt-12
            flex
            gap-5
            overflow-x-auto
            pb-6
            scrollbar-none
            sm:gap-6
          "
        >
          {featuredBooks.map((book) => (
            <BookCard
              key={book.slug}
              book={book}
            />
          ))}
        </div>

        {/* Bottom statement */}
        <div
          className="
            mt-10
            flex
            max-w-3xl
            items-start
            gap-4
            border-l
            border-brand-violet/30
            pl-5
          "
        >
          <p className="text-sm leading-6 text-muted-foreground">
            Reading isn't separate from my engineering work.
            It gives me different lenses for understanding
            problems, people, incentives, and systems.
          </p>
        </div>

        {/* Mobile link */}
        <div className="mt-8 sm:hidden">
          <Link
            href="/bookshelf"
            className="
              group
              inline-flex
              items-center
              gap-2
              text-sm
              text-muted-foreground
              hover:text-foreground
            "
          >
            View bookshelf

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}