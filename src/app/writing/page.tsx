import { getAllPosts } from "@/lib/post";
import WritingArchive from "@/components/writing/WritingArchive";

export default function WritingPage() {
  const posts = getAllPosts();

  // Only pass serializable data to the client component.
  const postSummaries = posts.map((post) => ({
    slug: post.slug,
    frontmatter: post.frontmatter,
  }));

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[8%]
            top-[10%]
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
            top-[45%]
            h-80
            w-80
            rounded-full
            bg-brand-cyan/3
            blur-[130px]
          "
        />
      </div>

      {/* Grid */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-10">

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
              Writing
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
              lg:leading-[1.04]
            "
          >
            Ideas, notes &{" "}
            <span className="font-serif italic text-gradient">
              observations.
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
            Writing about software, systems, psychology,
            business, economics, books, and the ideas I find
            worth exploring.
          </p>
        </header>

        {/* Archive */}
        <WritingArchive posts={postSummaries} />
      </div>
    </main>
  );
}