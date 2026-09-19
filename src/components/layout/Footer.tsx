import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin } from "react-icons/fa";

const footerLinks = [
  {
    label: "Work",
    href: "/work",
  },
  {
    label: "Writing",
    href: "/writing",
  },
  {
    label: "Bookshelf",
    href: "/bookshelf",
  },
  {
    label: "About",
    href: "/about",
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/6">
      {/* Violet glow */}
      <div
        className="
          pointer-events-none
          absolute
          -left-32
          bottom-0
          h-96
          w-96
          rounded-full
          bg-brand-violet/5
          blur-[130px]
        "
      />

      {/* Cyan glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-32
          top-0
          h-96
          w-96
          rounded-full
          bg-brand-cyan/4
          blur-[130px]
        "
      />

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

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        <div className="border-b border-white/8 py-24 sm:py-28 lg:py-36">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-brand-cyan
                  shadow-[0_0_12px_rgba(34,211,238,0.75)]
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
                Let's build something Together
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-4xl
                text-4xl
                font-semibold
                tracking-[-0.045em]
                text-foreground
                sm:text-5xl
                lg:text-7xl
                lg:leading-[1.05]
              "
            >
              Have an idea,
              <br />
              <span className="font-serif italic text-gradient">
                problem
              </span>{" "}
              or something
              <br />
              worth building?
            </h2>

            {/* Description */}
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
              I’m always interested in building useful software, exploring
              interesting problems, and learning from people who think
              differently.
            </p>

            {/* CTA */}
            <div className="mt-9">
              <a
                href="mailto:rahmanefazwasifur@gmail.com"
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-brand-violet/30
                  bg-brand-violet/10
                  px-6
                  py-3.5
                  text-sm
                  font-medium
                  text-foreground
                  shadow-[0_0_40px_rgba(168,85,247,0.08)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:border-brand-violet/50
                  hover:bg-brand-violet/15
                  hover:shadow-[0_0_60px_rgba(168,85,247,0.15)]
                "
              >
                Start a conversation
                <ArrowUpRight
                  size={16}
                  className="
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </a>
            </div>
          </div>
        </div>
        <div className="grid gap-12 py-14 lg:grid-cols-[1.4fr_0.6fr_0.6fr] lg:py-16">
          <div className="max-w-md">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-lg font-semibold tracking-tight">EFAZ</span>
              <span
                className="
                  h-1.5
                  w-1.5
                  rounded-full
                  bg-brand-cyan
                  shadow-[0_0_10px_rgba(34,211,238,0.8)]
                "
              />
            </Link>

            <p
              className="
                mt-5
                max-w-sm
                text-sm
                leading-6
                text-muted-foreground
              "
            >
              Software engineer building web applications, exploring systems,
              and learning from ideas beyond the world of code.
            </p>

            {/* Social links */}
            <div className="mt-7 flex items-center gap-2">
              <SocialLink href="https://github.com/efaaz" label="GitHub">
                <Github size={16} />
              </SocialLink>

              <SocialLink href="https://linkedin.com/in/wasifur-rahman-efaz" label="LinkedIn">
                <Linkedin size={16} />
              </SocialLink>

              <SocialLink href="mailto:rahmanefazwasifur@gmail.com" label="Email">
                <Mail size={16} />
              </SocialLink>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Explore
            </p>

            <nav className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="
                    text-sm
                    text-muted-foreground
                    transition-colors
                    duration-200
                    hover:text-foreground
                  "
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Current */}
          <div>
            <p
              className="
                mb-5
                text-[10px]
                font-medium
                uppercase
                tracking-[0.2em]
                text-muted-foreground
              "
            >
              Currently
            </p>

            <div className="space-y-3 text-sm">
              <div>
                <p className="text-foreground">Building</p>

                <p className="text-muted-foreground">AI ERP</p>
              </div>

              <div>
                <p className="text-foreground">Reading</p>

                <p className="text-muted-foreground">Psychology & Economics</p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}

        <div
          className="
            flex
            flex-col
            gap-4
            border-t
            border-white/8
            py-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/70">
            © {new Date().getFullYear()} Efaz. All rights reserved.
          </p>

          <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-muted-foreground/50">
            Build · Think · Learn
          </p>
        </div>
      </div>
    </footer>
  );
}

/* =========================================================
   SOCIAL LINK
========================================================= */

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      aria-label={label}
      className="
        flex
        h-9
        w-9
        items-center
        justify-center
        rounded-full
        border
        border-white/8
        bg-white/2.5
        text-muted-foreground
        transition-all
        duration-200
        hover:border-brand-violet/30
        hover:bg-brand-violet/10
        hover:text-brand-violet
      "
    >
      {children}
    </a>
  );
}
