export default function Home() {
  return (
     <main className="min-h-screen bg-background text-foreground p-10">
      <div className="mx-auto max-w-5xl space-y-10">

        <h1 className="text-6xl font-sans font-semibold">
          I build software and study{" "}
          <span className="font-serif italic text-gradient">
            systems
          </span>
          .
        </h1>

        <p className="text-lg text-muted-foreground">
          Software Engineer · Web Developer · Thinker · Reader
        </p>

        <div className="grid gap-4 md:grid-cols-3">

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-brand-cyan font-semibold">
              BUILDING
            </p>
            <p className="mt-2 text-xl">
              AI ERP
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-brand-violet font-semibold">
              READING
            </p>
            <p className="mt-2 text-xl">
              Psychology
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6">
            <p className="text-brand-lime font-semibold">
              THINKING
            </p>
            <p className="mt-2 text-xl">
              Systems
            </p>
          </div>

        </div>

        <div className="rounded-xl border border-brand-violet bg-surface-elevated p-8">
          <p className="font-mono text-brand-cyan">
            $ echo "portfolio system online"
          </p>
        </div>

      </div>
    </main>
  );
}
