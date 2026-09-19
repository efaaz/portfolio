import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { Book } from "@/data/books";
import { getBookCover } from "@/lib/books";

type BookCardProps = {
  book: Book;
};

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link
      href={`/bookshelf/${book.slug}`}
      className="group block w-37.5 shrink-0 sm:w-42.5"
    >
      {/* Cover */}
      <div
        className="
          relative
          aspect-2/3
          overflow-hidden
          rounded-xl
          border
          border-white/8
          bg-[#0B1220]
          shadow-[0_15px_40px_rgba(0,0,0,0.25)]
          transition-all
          duration-500
          group-hover:-translate-y-2
          group-hover:border-white/15
          group-hover:shadow-[0_25px_60px_rgba(0,0,0,0.35)]
        "
      >
        <Image
          src={getBookCover(book.isbn)}
          alt={`Cover of ${book.title}`}
          fill
          sizes="170px"
          className="
            object-cover
            transition-transform
            duration-700
            ease-out
            group-hover:scale-[1.03]
          "
        />

        {/* Dark bottom gradient */}
        <div
          className="
            absolute
            inset-x-0
            bottom-0
            h-1/3
            bg-linear-to-t
            from-[#050914]/50
            to-transparent
          "
        />

        {/* Hover arrow */}
        <div
          className="
            absolute
            right-3
            top-3
            flex
            h-8
            w-8
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#050914]/60
            text-white
            opacity-0
            backdrop-blur-md
            transition-all
            duration-300
            group-hover:opacity-100
          "
        >
          <ArrowUpRight size={14} />
        </div>
      </div>

      {/* Metadata */}
      <div className="mt-4">
        <h3
          className="
            line-clamp-2
            text-sm
            font-medium
            leading-5
            text-foreground
          "
        >
          {book.title}
        </h3>

        <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
          {book.author}
        </p>

        <div className="mt-2 flex items-center justify-between">
          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.12em]
              text-brand-violet
            "
          >
            {book.category}
          </span>

          <span className="text-xs tracking-widest text-brand-coral">
            {"★".repeat(book.rating)}
          </span>
        </div>
      </div>
    </Link>
  );
}