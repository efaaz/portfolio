import { getBooks } from "@/lib/books";
import BookshelfArchive from "@/components/books/BookshelfArchive";
import { BookType } from "@/data/books";
import { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Bookshelf",
  description:
    "A personal bookshelf of nonfiction books covering psychology, business, economics, technology, systems, and human behavior.",

  alternates: {
    canonical: absoluteUrl("/bookshelf"),
  },

  openGraph: {
    title: "Bookshelf — Efaz",
    description:
      "Books that shape how I think.",
    url: absoluteUrl("/bookshelf"),
    type: "website",
  },
};

export default function BookshelfPage() {
  const books = getBooks();

  const serializedBooks = books.map((book: BookType) => ({
    ...book,
  }));

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Atmospheric background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[5%]
            top-[5%]
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
                bg-brand-violet
                shadow-[0_0_12px_rgba(168,85,247,0.8)]
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
              Bookshelf
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
            Books that shape
            <br />
            <span className="font-serif italic text-gradient">
              how I think.
            </span>
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
            A collection of books I've read, am reading, or want to
            explore—mostly around psychology, economics, business, systems, technology, and human behavior.
          </p>
        </header>

        {/* Small stats */}
        <div
          className="
            mt-12
            grid
            max-w-2xl
            grid-cols-2
            gap-3
            sm:grid-cols-4
          "
        >
          <Stat value={`${books.length}+`} label="Books" />

          <Stat
            value="15+"
            label="Categories"
          />

          <Stat
            value={`${books.filter((book: BookType) => book.status === "read").length}`}
            label="Read"
          />

          <Stat
            value={`${
              books.filter((book: BookType) => book.status === "reading").length
            }`}
            label="Reading"
          />
        </div>

        {/* Archive */}
        <BookshelfArchive books={serializedBooks} />
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div
      className="
        rounded-xl
        border
        border-white/[0.07]
        bg-white/2
        px-4
        py-4
      "
    >
      <p className="text-2xl font-medium tracking-tight text-foreground">
        {value}
      </p>

      <p className="mt-1 text-xs text-muted-foreground">{label}</p>
    </div>
  );
}
