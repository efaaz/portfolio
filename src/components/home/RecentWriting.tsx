import Link from "next/link";
import { ArrowUpRight, BookOpen, Brain, Code2 } from "lucide-react";

const writings = [
  {
    number: "01",
    category: "Engineering",
    title:
      "Why Good Software Architecture Starts With Understanding the Business",
    description:
      "Why technical decisions become better when you first understand the problem, workflow, and people behind the software.",
    date: "Sep 2026",
    readTime: "7 min read",
    icon: Code2,
    accent: "text-brand-cyan",
    accentBg: "bg-brand-cyan/10",
    slug: "software-architecture-business",
  },
  {
    number: "02",
    category: "Books",
    title: "What Antifragile Taught Me About Building Resilient Systems",
    description:
      "Ideas about uncertainty, stress, and optionality—and how they changed the way I think about software systems.",
    date: "Aug 2026",
    readTime: "9 min read",
    icon: BookOpen,
    accent: "text-brand-violet",
    accentBg: "bg-brand-violet/10",
    slug: "antifragile-resilient-systems",
  },
  {
    number: "03",
    category: "Psychology",
    title: "Why Incentives Matter More Than Motivation in Engineering Teams",
    description:
      "What behavioral science can teach us about the systems and incentives that shape how teams work.",
    date: "Jul 2026",
    readTime: "6 min read",
    icon: Brain,
    accent: "text-brand-coral",
    accentBg: "bg-brand-coral/10",
    slug: "incentives-engineering-teams",
  },
];

export default function RecentWriting() {
  return (
    <section className="relative overflow-hidden border-b border-white/6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[15%]
            top-[20%]
            h-72
            w-72
            rounded-full
            bg-brand-violet/4.5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-[10%]
            right-[10%]
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
        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <div className="flex items-center gap-3">
          <span
            className="
              h-1.5
              w-1.5
              rounded-full
              bg-brand-violet
              shadow-[0_0_12px_rgba(168,85,247,0.7)]
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
            Recent Writing
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* ==================================================
            PERSONAL QUOTE
        ================================================== */}

        <div className="mt-10 max-w-4xl">
          <blockquote
            className="
              text-2xl
              font-medium
              leading-[1.35]
              tracking-tight
              text-foreground
              sm:text-3xl
              lg:text-4xl
            "
          >
            <span className="font-serif text-brand-violet">“</span>I don't want
            to stop learning at the boundaries of code. I read about{" "}
            <span className="font-serif italic text-brand-cyan">
              psychology, economics, business, and organizations
            </span>{" "}
            to understand the world software operates in and write about the
            ideas that connect back to technology.
            <span className="font-serif text-brand-violet">”</span>
          </blockquote>

          <div className="mt-6 flex items-center gap-3">
            <div className="h-px w-8 bg-brand-violet/60" />

            <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
              Wasifur Rahman Efaz
            </span>
          </div>
        </div>

        {/* ==================================================
            WRITING LIST HEADER
        ================================================== */}

        <div className="mt-20 flex items-end justify-between gap-6">
          <div>
            <p className="text-sm text-muted-foreground">
              Ideas, notes, and lessons I'm exploring.
            </p>
          </div>

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
            View all writing
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

        {/* ==================================================
            WRITING ITEMS
        ================================================== */}

        <div className="mt-7 border-t border-white/8">
          {writings.map((writing) => {
            const Icon = writing.icon;

            return (
              <Link
                key={writing.slug}
                href={`/writing/${writing.slug}`}
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
                <div className="grid gap-5 sm:grid-cols-[60px_150px_1fr_32px] sm:items-start sm:gap-6">
                  {/* Number */}
                  <span
                    className="
                      hidden
                      font-mono
                      text-xs
                      text-white/25
                      sm:block
                    "
                  >
                    {writing.number}
                  </span>

                  {/* Category */}
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`
                        flex
                        h-8
                        w-8
                        items-center
                        justify-center
                        rounded-lg
                        ${writing.accentBg}
                        ${writing.accent}
                      `}
                    >
                      <Icon size={15} strokeWidth={1.8} />
                    </span>

                    <span
                      className={`
                        text-[10px]
                        font-medium
                        uppercase
                        tracking-[0.18em]
                        ${writing.accent}
                      `}
                    >
                      {writing.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3
                      className="
                        max-w-3xl
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
                      {writing.title}
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
                      {writing.description}
                    </p>

                    <div className="mt-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
                      <span>{writing.date}</span>

                      <span className="h-1 w-1 rounded-full bg-white/20" />

                      <span>{writing.readTime}</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="hidden justify-end pt-1 sm:flex">
                    <ArrowUpRight
                      size={17}
                      className="
                        text-white/30
                        transition-all
                        duration-300
                        group-hover:-translate-y-1
                        group-hover:translate-x-1
                        group-hover:text-brand-violet
                      "
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Mobile view all */}
        <div className="mt-7 flex sm:hidden">
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
            View all writing
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
