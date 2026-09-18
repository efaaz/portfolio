import Link from "next/link";
import React from "react";

function HeroTextBox() {
  return (
    <section className="sm:px-0 px-12 mt-16 text-center sm:text-left sm:mt-0">
      <div className="sm:mx-auto max-w-5xl space-y-3 py-5">
        <p className="text-violet-500 text-sm sm:text-xl font-mono font-semibold">
          Hi! I'm
          <span className="text-gradient2 font-mono"> Wasifur Rahman EFAZ</span>
        </p>
        <h1 className="text-4xl sm:text-6xl font-sans font-semibold">
          I build software{" "}
        </h1>
        <h1 className="text-4xl sm:text-6xl text-muted-foreground font-sans font-semibold">
          and study the{" "}
        </h1>
        <h1 className="text-4xl sm:text-6xl pb-2 font-serif italic text-gradient1 font-semibold">
          systems
          <span className="text-gradient2"> behind it.</span>{" "}
        </h1>

        <p className="text-lg text-muted-foreground">
          Software Engineer · Web Developer · Thinker · Reader
        </p>
        <p className="text-lg text-muted-foreground max-w-xl">
          I build web applications with a focus beyond the code, understanding
          the people, businesses, and problems they are built to solve.
        </p>
        <div className="sm:flex gap-5 flex-col sm:flex-row items-center justify-start mt-5">
          <div className="">
            <Link
              className="bg-brand-violet shadow-2xl text-sm text-white px-5 py-3 rounded-full font-sans font-semibold hover:bg-brand-violet/50"
              href="/projects"
            >
              View my works ➜
            </Link>
          </div>
          <div className="mt-9 sm:mt-0">
            <Link
              className="bg-background border border-brand-violet/70 text-sm text-white px-5 py-3 rounded-full font-sans font-semibold hover:bg-brand-violet/50"
              href="/writtings"
            >
              Read my writing ➜
            </Link>
          </div>
        </div>

        {/* <div className="rounded-xl border border-brand-violet bg-surface-elevated p-8">
          <p className="font-mono text-brand-cyan">
            $ echo "portfolio system online"
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default HeroTextBox;
