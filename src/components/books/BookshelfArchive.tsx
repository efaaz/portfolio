"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { BookType } from "@/data/books";
import { getBookCover } from "@/lib/books";

type BookshelfArchiveProps = {
  books: BookType[];
};

const statusFilters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Read",
    value: "read",
  },
  {
    label: "Reading",
    value: "reading",
  },
  {
    label: "Want to read",
    value: "want-to-read",
  },
];

const categoryColors: Record<string, string> = {
  Psychology: "text-brand-coral",
  Systems: "text-brand-violet",
  Technology: "text-brand-cyan",
  Economics: "text-brand-lime",
  Business: "text-brand-lime",
  Finance: "text-brand-cyan",
  Productivity: "text-brand-violet",
  "Critical Thinking": "text-brand-coral",
  Behavior: "text-brand-coral",
};

function getCategoryColor(category: string) {
  return categoryColors[category] ?? "text-muted-foreground";
}

export default function BookshelfArchive({ books }: BookshelfArchiveProps) {
  const [statusFilter, setStatusFilter] = useState("all");

  const [categoryFilter, setCategoryFilter] = useState("All");

  const categories = [
  "All",
  ...Array.from(new Set(books.map((book) => book.category))),
];

 const filteredBooks: BookType[] = books.filter((book) => {
  const matchesStatus =
    statusFilter === "all" || book.status === statusFilter;

  const matchesCategory =
    categoryFilter === "All" || book.category === categoryFilter;

  return matchesStatus && matchesCategory;
});

const groupedBooks = new Map<string, BookType[]>();

filteredBooks.forEach((book) => {
  const booksInCategory = groupedBooks.get(book.category);

  if (booksInCategory) {
    booksInCategory.push(book);
  } else {
    groupedBooks.set(book.category, [book]);
  }
});

  return (
    <section className="mt-20 sm:mt-24">
      {/* =====================================================
          STATUS FILTER
      ====================================================== */}

      <div className="border-y border-white/8 py-5">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {statusFilters.map((filter) => {
              const active = statusFilter === filter.value;

              return (
                <button
                  key={filter.value}
                  type="button"
                  onClick={() => setStatusFilter(filter.value)}
                  className={`shrink-0 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${active ? "border-white/16 bg-white/8 text-foreground" : "border-white/[0.07] bg-white/1.5 text-muted-foreground hover:bg-white/4 hover:text-foreground"}`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>

          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
            {filteredBooks.length} books
          </span>
        </div>
      </div>

      {/* =====================================================
          CATEGORY FILTER
      ====================================================== */}

      <div className="mt-4 flex gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((category) => {
          const active = categoryFilter === category;

          const color =
            category === "All" ? "text-foreground" : getCategoryColor(category);

          return (
            <button
              key={category}
              type="button"
              onClick={() => setCategoryFilter(category)}
              className={`flex shrink-0 items-center gap-2 rounded-lg px-3 py-2 text-xs transition-all duration-200 ${active ? "bg-white/5" : "hover:bg-white/2.5"}`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full bg-current ${color} ${active ? "opacity-100" : "opacity-40"}`}
              />

              <span
                className={active ? "text-foreground" : "text-muted-foreground"}
              >
                {category}
              </span>
            </button>
          );
        })}
      </div>

      {/* =====================================================
          YEAR GROUPS
      ====================================================== */}

      <div className="mt-16 space-y-20">
        {Array.from(groupedBooks.entries()).map(([year, yearBooks]) => (
          <section key={year}>
            {/* Year heading */}
            <div className="mb-8 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.16em] text-brand-violet">
                {year}
              </span>

              <div className="h-px flex-1 bg-white/[0.07]" />

              <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50">
                {yearBooks.length} {yearBooks.length === 1 ? "book" : "books"}
              </span>
            </div>

            {/* Books */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
              {yearBooks.map((book: BookType) => (
                <BookItem key={book.slug} book={book} />
              ))}
            </div>
          </section>
        ))}

        {Array.from(groupedBooks.values()).flat().length === 0 && (
          <div className="border-y border-white/8 py-24 text-center">
            <p className="text-sm text-muted-foreground">
              No books match these filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

function BookItem({ book }: { book: BookType }) {
  const categoryColor = getCategoryColor(book.category);

  return (
    <Link href={`/bookshelf/${book.slug}`} className="group block">
      {/* Cover */}
      <div
        className="relative aspect-2/3 overflow-hidden rounded-xl border-2 border-white/8 bg-[#0B1220] shadow-[0_15px_40px_rgba(0,0,0,0.22)] transition-all duration-500 group-hover:-translate-y-2 group-hover:border-white/15 group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]"
      >
        <Image
          src={book.cover ?? getBookCover(book.isbn)}
          alt={`Cover of ${book.title}`}
          fill
          sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw,(max-width: 1024px) 23vw, 170px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />

        {/* Hover overlay */}
        <div
          className="absolute inset-0bg-linear-to-t from-[#050914]/50 via-transparent to-transparent opacity-60"
        />

        {/* Hover arrow */}
        <div
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full borderborder-white/10 bg-[#050914]/70 text-white opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100"
        >
          <ArrowUpRight size={14} />
        </div>

        {/* Status */}
        {book.status === "reading" && (
          <div
            className="absolute bottom-3 left-3 rounded-full border border-brand-cyan/30 bg-[#050914]/75px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.12em] text-brand-cyan backdrop-blur-md"
          >
            Reading
          </div>
        )}
      </div>

      {/* Metadata */}
      <div className="mt-4">
        <h3
          className="line-clamp-2 text-sm font-medium leading-5 tracking-tight text-foreground"
        >
          {book.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
          {book.author}
        </p>

        <div className="mt-2 flex items-center justify-between gap-2">
          <span
            className={`text-[9px] font-medium uppercase tracking-[0.12em] ${categoryColor}`}
          >
            {book.category}
          </span>

          <span className="text-[10px] tracking-[0.08em] text-brand-coral">
            {"★".repeat(book.rating)}
          </span>
        </div>
      </div>
    </Link>
  );
}
