import Image from "next/image";
import Link from "next/link";
import {
  ArrowDownRight,
  ArrowUpRight,
  Brain,
  Code2,
  Lightbulb,
  Network,
  Sparkles,
} from "lucide-react";

import dp from "@/assets/images/about/landscape.jpg";
import { Metadata } from "next";
import { absoluteUrl, siteConfig } from "@/lib/site";
import { JsonLd } from "../json-ld";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Efaz, a software engineer interested in web development, software architecture, psychology, business, economics, and systems.",

  alternates: {
    canonical: absoluteUrl("/about"),
  },

  openGraph: {
    title: "About Efaz — Software Engineer",
    description:
      "The story behind my work in software, technology, systems, psychology, and business.",
    url: absoluteUrl("/about"),
    type: "profile",
    images: [
      {
        url: absoluteUrl("/images/about/landscape.jpg"),
        alt: "About Efaz",
      },
    ],
  },
};

const journey = [
  {
    year: "2018",
    title: "The first spark",
    text: "While I was in 8th grade, I discovered programming and started learning Python. FreeCodeCamp became one of my first serious learning resources.",
    accent: "text-brand-cyan",
  },
  {
    year: "2020",
    title: "A pause I didn't choose",
    text: "The pandemic disrupted both learning and academics. Family loss and the return of academic pressure pushed coding into the background for a while.",
    accent: "text-brand-coral",
  },
  {
    year: "2023",
    title: "Starting again, with purpose",
    text: "After my HSC exam, I had a few months before university. I decided to restart coding seriously, this time with a clear direction: web development.",
    accent: "text-brand-violet",
  },
  {
    year: "2023 →",
    title: "From web development to engineering",
    text: "I worked through the MERN stack and gradually moved deeper into backend development, databases, APIs, architecture, and system design.",
    accent: "text-brand-lime",
  },
  {
    year: "NOW",
    title: "Building beyond the stack",
    text: "Alongside my CSE degree, I continue exploring modern technologies such as FastAPI, PostgreSQL, MySQL, and software architecture while building real projects.",
    accent: "text-brand-cyan",
  },
];

const interests = [
  {
    title: "Psychology",
    description:
      "Understanding behaviour, decisions, biases, and how people interact with systems.",
    icon: Brain,
    color: "text-brand-coral",
    bg: "bg-brand-coral/10",
  },
  {
    title: "Economics",
    description:
      "Learning about incentives, trade offs, markets, and how people make decisions under constraints.",
    icon: Network,
    color: "text-brand-lime",
    bg: "bg-brand-lime/10",
  },
  {
    title: "Business",
    description:
      "Understanding how organizations operate and how software can solve real operational problems.",
    icon: Lightbulb,
    color: "text-brand-violet",
    bg: "bg-brand-violet/10",
  },
  {
    title: "Technology",
    description:
      "Exploring software engineering, architecture, systems, and the technologies that make products possible.",
    icon: Code2,
    color: "text-brand-cyan",
    bg: "bg-brand-cyan/10",
  },
];

export default function AboutPage() {
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",

    "@id": `${absoluteUrl("/about")}#profile`,

    url: absoluteUrl("/about"),

    name: "About Efaz",

    mainEntity: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#person`,
      name: "Efaz",
      url: absoluteUrl("/about"),
      image: absoluteUrl("/images/profile/me.png"),
      jobTitle: "Software Engineer",

      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    },
  };
  return (
    <>
      {" "}
      <JsonLd data={profileSchema} />
      <main className="relative min-h-screen overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="
            absolute
            left-[5%]
            top-[8%]
            h-96
            w-96
            rounded-full
            bg-brand-violet/4
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

        <div className="pointer-events-none absolute inset-0 bg-grid opacity-20" />

        <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
          {/* ==================================================
            HERO / LANDSCAPE
        ================================================== */}

          <section className="pt-8 sm:pt-10">
            <div
              className="
              relative
              aspect-16/8
              overflow-hidden
              rounded-3xl
              border
              border-white/8
              bg-surface
              shadow-[0_30px_100px_rgba(0,0,0,0.3)]
            "
            >
              <Image
                src={dp}
                alt="Landscape"
                fill
                priority
                quality={95}
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover object-[50%_20%]"
              />

              {/* Dark overlay */}
              <div
                className="
                absolute
                inset-0
                bg-linear-to-t
                from-[#050914]
                via-[#050914]/45
                to-[#050914]/10
              "
              />

              {/* Color glow */}
              <div
                className="
                absolute
                inset-0
                bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(34,211,238,0.10),transparent_30%)]
              "
              />

              {/* Text */}
              <div className="absolute inset-x-0 bottom-0 p-7 sm:p-10 lg:p-14">
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                  <span className="text-xs md:text-lg font-medium uppercase tracking-[0.2em] text-white/70">
                    About me
                  </span>
                </div>

                <h1
                  className="
                  mt-2
                  max-w-3xl
                  text-xl
                  font-semibold
                  leading-[1.05]
                  tracking-tighter
                  text-white
                  sm:text-5xl
                  lg:text-7xl
                "
                >
                  The person
                  <br />
                  <span className="font-serif italic text-gradient">
                    behind the software.
                  </span>
                </h1>
              </div>
            </div>
          </section>

          {/* ==================================================
            QUOTE
        ================================================== */}

          <section className="mx-auto max-w-5xl py-10 sm:py-24 lg:py-28">
            <div className="flex gap-5 sm:gap-8">
              <div
                className="
                hidden
                w-px
                shrink-0
                bg-linear-to-b
                from-brand-violet
                via-brand-cyan
                to-transparent
                sm:block
              "
              />

              <div>
                <span className="font-serif text-5xl leading-none text-brand-violet">
                  “
                </span>

                <blockquote
                  className="
                  mt-3
                  text-3xl
                  font-medium
                  leading-tight
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
                >
                  Anyone that suggests me to do less is either not a real
                  friend or very confused.
                </blockquote>

                <div className="mt-7 flex items-center gap-3">
                  <div className="h-px w-8 bg-brand-violet/60" />

                  <span className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    Grant Cardone
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
            ABOUT ME
        ================================================== */}

          <section className="border-t border-white/8 py-10 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-brand-violet">
                    01
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    About me
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
                  A little more
                  <span className="font-serif italic text-gradient">
                    {" "}
                    context.
                  </span>
                </h2>
              </div>

              <div className="max-w-3xl space-y-6 text-[16px] leading-8 text-muted-foreground sm:text-lg sm:leading-9">
                <p>
                  I’m a Computer Science & Engineering student at American
                  International University-Bangladesh who enjoys building
                  practical software applications that pair clean user
                  interfaces with maintainable, scalable backend logic.
                </p>

                <p>
                  My journey hasn't been as straightforward as it might appear.
                  In 2018, while I was in 8th grade, I started learning
                  programming with Python. At the time, there weren't many
                  high-quality learning resources available online, so
                  FreeCodeCamp became one of the places where I learned the
                  fundamentals.
                </p>

                <p>
                  I wanted to start building projects, but then I discovered web
                  development and shifted toward HTML and CSS. In 2020, the
                  pandemic disrupted my learning and academics. After that came
                  family circumstances and increasing academic pressure, and
                  coding temporarily moved into the background.
                </p>

                <p>
                  Fast-forward to 2023. After completing my HSC, I had a few
                  months before university started. I used that time to restart
                  coding with a clear purpose: web development. I spent those
                  months learning the MERN stack and then gradually expanded
                  into backend development with Node.js, Express, and MongoDB.
                </p>

                <p>
                  After enrolling in the CSE program at American International
                  University Bangladesh, I continued learning beyond the
                  academic curriculum. I've explored technologies such as
                  FastAPI, MySQL, PostgreSQL, and software architecture while
                  continuing to build projects on my own.
                </p>
              </div>
            </div>
          </section>

          {/* ==================================================
            JOURNEY
        ================================================== */}

          <section className="border-t border-white/8 py-10 sm:py-24 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] tracking-[0.18em] text-brand-cyan">
                    02
                  </span>

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    The journey
                  </span>
                </div>

                <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl">
                  Started with code.
                  <br />
                  <span className="font-serif italic text-gradient">
                    Still evolving.
                  </span>
                </h2>

                <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
                  The path wasn't linear. That's part of the story.
                </p>
              </div>

              <div className="relative">
                {/* Timeline */}
                <div
                  className="
                  absolute
                  bottom-6
                  left-1.75
                  top-6
                  w-px
                  bg-linear-to-b
                  from-brand-cyan/40
                  via-white/8
                  to-brand-violet/40
                "
                />

                <div className="space-y-10">
                  {journey.map((item) => (
                    <article key={item.year} className="relative pl-10">
                      {/* Node */}
                      <span
                        className="
                        absolute
                        left-0
                        top-1.5
                        h-3.75
                        w-3.75
                        rounded-full
                        border
                        border-white/12
                        bg-[#050914]
                      "
                      />

                      <div className="flex flex-wrap items-center gap-3">
                        <span
                          className={`
                          font-mono
                          text-xs
                          tracking-[0.15em]
                          ${item.accent}
                        `}
                        >
                          {item.year}
                        </span>

                        <span className="h-1 w-1 rounded-full bg-white/20" />

                        <h3 className="text-lg font-medium tracking-tight text-foreground">
                          {item.title}
                        </h3>
                      </div>

                      <p className="mt-3 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-[15px]">
                        {item.text}
                      </p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
            BEYOND CODE
        ================================================== */}

          <section className="border-t border-white/8 py-10 sm:py-24 lg:py-28">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[10px] tracking-[0.18em] text-brand-violet">
                  03
                </span>

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  Beyond code
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-semibold tracking-[-0.035em] text-foreground sm:text-4xl lg:text-5xl">
                I don't want my learning
                <br />
                to stop at{" "}
                <span className="font-serif italic text-gradient">
                  technology.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                I'm deeply interested in non-fiction, especially behavioural
                economics, business management, organizational psychology,
                decision-making, and systems. Since 2023, I've read almost 50
                books across these areas.
              </p>

              <p className="mt-5 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                Reading leads to writing for me. I write about ideas that catch
                my attention and try to connect them back to software, users,
                organizations, and the problems technology is supposed to solve.
              </p>
            </div>
          </section>

          {/* ==================================================
            BELIEF
        ================================================== */}

          <section className="border-t border-white/8 py-10 sm:py-24 lg:py-28">
            <div
              className="
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/8
              bg-[#0B1220]/70
              p-7
              sm:p-10
              lg:p-14
            "
            >
              {/* glow */}
              <div
                className="
                pointer-events-none
                absolute
                -right-20
                -top-20
                h-72
                w-72
                rounded-full
                bg-brand-violet/8
                blur-[100px]
              "
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <Sparkles size={16} className="text-brand-violet" />

                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                    A belief I keep coming back to
                  </span>
                </div>

                <h2
                  className="
                  mt-7
                  max-w-4xl
                  text-3xl
                  font-semibold
                  leading-[1.2]
                  tracking-[-0.035em]
                  text-foreground
                  sm:text-4xl
                  lg:text-5xl
                "
                >
                  In the age of AI, learning shouldn't stop at the boundary of
                  one discipline.
                </h2>

                <p
                  className="
                  mt-6
                  max-w-3xl
                  text-base
                  leading-8
                  text-muted-foreground
                  sm:text-lg
                "
                >
                  I believe software engineers should stay curious about the
                  world around technology. Economics, business, psychology, and
                  software are not isolated subjects they influence one another.
                  Learning across these disciplines helps me understand people
                  and problems more deeply and, ultimately, build more useful
                  products.
                </p>

                <div className="mt-8 flex items-center gap-3">
                  <div className="h-px w-12 bg-linear-to-r from-brand-violet to-brand-cyan" />

                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                    Keep learning
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ==================================================
            CTA
        ================================================== */}

          <section className="border-t border-white/8 py-14 sm:py-28 lg:py-36">
            <div className="max-w-4xl">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_12px_rgba(34,211,238,0.8)]" />

                <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  What's next
                </span>
              </div>

              <h2
                className="
                mt-7
                text-4xl
                font-semibold
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
              >
                Building, learning,
                <br />
                and looking for the next
                <span className="font-serif italic text-gradient">
                  {" "}
                  problem.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                I'm available for internships, collaborations, and project work
                that values thoughtful engineering, curiosity, and human
                centered design.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:rahmanefazwasifur@gmail.com"
                  className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-brand-violet/30
                  bg-brand-violet/10
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-foreground
                  transition-all
                  duration-300
                  hover:border-brand-violet/50
                  hover:bg-brand-violet/15
                "
                >
                  Get in touch
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <Link
                  href="/writing"
                  className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-white/8
                  bg-white/2.5
                  px-5
                  py-3
                  text-sm
                  font-medium
                  text-muted-foreground
                  transition-all
                  duration-300
                  hover:border-white/15
                  hover:text-foreground
                "
                >
                  Read my writing
                  <ArrowDownRight size={15} />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
