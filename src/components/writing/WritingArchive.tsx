"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";

type WritingPost = {
  slug: string;
  frontmatter: {
    title: string;
    description: string;
    date: string;
    category?: string;
    readingTime?: string;
    tags?: string[];
  };
};

type WritingArchiveProps = {
  posts: any[];
};

const categoryStyles: Record<
  string,
  {
    text: string;
    dot: string;
    hover: string;
  }
> = {
  Engineering: {
    text: "text-brand-cyan",
    dot: "bg-brand-cyan",
    hover: "hover:border-brand-cyan/30",
  },

  Books: {
    text: "text-brand-violet",
    dot: "bg-brand-violet",
    hover: "hover:border-brand-violet/30",
  },

  Psychology: {
    text: "text-brand-coral",
    dot: "bg-brand-coral",
    hover: "hover:border-brand-coral/30",
  },

  Business: {
    text: "text-brand-lime",
    dot: "bg-brand-lime",
    hover: "hover:border-brand-lime/30",
  },

  Economics: {
    text: "text-brand-lime",
    dot: "bg-brand-lime",
    hover: "hover:border-brand-lime/30",
  },

  Ideas: {
    text: "text-brand-violet",
    dot: "bg-brand-violet",
    hover: "hover:border-brand-violet/30",
  },
};

function getCategoryStyle(category: string) {
  return (
    categoryStyles[category] ?? {
      text: "text-muted-foreground",
      dot: "bg-muted-foreground",
      hover: "hover:border-white/20",
    }
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default function WritingArchive({ posts }: WritingArchiveProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(() => {
    const uniqueCategories = posts
      .map((post) => post.frontmatter.category)
      .filter((category): category is string => Boolean(category));

    return ["All", ...Array.from(new Set(uniqueCategories))];
  }, [posts]);

  const filteredPosts = useMemo(() => {
    if (activeCategory === "All") {
      return posts;
    }

    return posts.filter((post) => post.frontmatter.category === activeCategory);
  }, [posts, activeCategory]);

  return (
    <section className="mt-20 sm:mt-24">
      {/* =====================================================
          FILTER BAR
      ====================================================== */}

      <div className="border-y border-white/8">
        <div className="flex flex-col gap-5 py-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Categories */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((category) => {
              const active = activeCategory === category;

              const style =
                category === "All"
                  ? {
                      text: "text-foreground",
                      dot: "bg-foreground",
                    }
                  : getCategoryStyle(category);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 ${ active? "border-white/16 bg-white/[0.07] text-foreground": "border-white/[0.07] bg-white/1.5 text-muted-foreground hover:bg-white/4 hover:text-foreground"}`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${style.dot} ${active? "opacity-100": "opacity-group-hover:opacity-80"}`}
                  />

                  {category}
                </button>
              );
            })}
          </div>

          {/* Count */}
          <div className="shrink-0">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted-foreground/60">
              {filteredPosts.length.toString().padStart(2, "0")}{" "}
              {filteredPosts.length === 1 ? "article" : "articles"}
            </span>
          </div>
        </div>
      </div>

      {/* =====================================================
          POSTS
      ====================================================== */}

      <div className="border-b border-white/8">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post, index) => {
            const category = post.frontmatter.category ?? "Engineering";

            const style = getCategoryStyle(category);

            return (
              <Link
                key={post.slug}
                href={`/writing/${post.slug}`}
                className={`group block border-b border-white/8 transition-colors duration-300 last:border-b-0 hover:bg-white/1.5`}
              >
                <article className="py-8 sm:py-10 lg:py-11">
                  <div className="grid gap-6 lg:grid-cols-[70px_150px_1fr_120px_40px] lg:items-start lg:gap-7">
                    {/* Number */}
                    <div className="hidden lg:block">
                      <span
                        className="font-mono text-xs text-white/20 transition-colors duration-300 group-hover:text-brand-violet/70"
                      >
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                    </div>

                    {/* Category */}
                    <div className="flex items-center gap-2.5 lg:pt-1">
                      <span
                        className={`h-1.5 w-1.5 rounded-full ${style.dot} opacity-70 transition-opacity group-hover:opacity-100`}
                      />
                      <span
                        className={`text-[10px] font-medium tracking-[0.18em] ${style.text}`}
                      >
                        {category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h2
                        className="max-w-3xl text-xl font-medium leading-8 tracking-tight text-foreground transition-colors duration-300 group-hover:text-white sm:text-2xl"
                      >
                        {post.frontmatter.title}
                      </h2>

                      <p
                        className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-[15px]"
                      >
                        {post.frontmatter.description}
                      </p>

                      {/* Tags */}
                      {post.frontmatter.tags &&
                        post.frontmatter.tags.length > 0 && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {post.frontmatter.tags.slice(0, 3).map((tag: string) => (
                              <span
                                key={tag}
                                className="rounded-md border border-white/8 bg-white/8 px-2 py-1 text-[10px] text-muted-foreground/70"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                    </div>

                    {/* Date */}
                    <div className="flex items-center gap-2 lg:justify-end lg:pt-1">
                      <span className="font-mono text-[10px] tracking-[0.12em] text-muted-foreground/60">
                        {formatDate(post.frontmatter.date)}
                      </span>

                      {post.frontmatter.readingTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-white/20" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50">
                            {post.frontmatter.readingTime}
                          </span>
                        </>
                      )}
                    </div>

                    {/* Arrow */}
                    <div className="hidden justify-end lg:flex">
                      <span
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/8 text-muted-foreground transition-all duration-300 group-hover:border-brand-violet/30 group-hover:bg-brand-violet/10 group-hover:text-brand-violet"
                      >
                        <ArrowUpRight
                          size={16}
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        />
                      </span>
                    </div>
                  </div>

                  {/* Mobile metadata */}
                  <div className="mt-5 flex items-center justify-between lg:hidden">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60">
                        {formatDate(post.frontmatter.date)}
                      </span>

                      {post.frontmatter.readingTime && (
                        <>
                          <span className="h-1 w-1 rounded-full bg-white/20" />

                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50">
                            {post.frontmatter.readingTime}
                          </span>
                        </>
                      )}
                    </div>

                    <span
                      className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground transition-colors group-hover:text-brand-violet"
                    >
                      Read
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </article>
              </Link>
            );
          })
        ) : (
          /* Empty state */
          <div className="py-24 text-center">
            <p className="text-sm text-muted-foreground">
              No writings in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
