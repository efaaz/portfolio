import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { SiGithub as Github } from "react-icons/si";
import { FaLinkedin as Linkedin } from "react-icons/fa";

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
              href="/work"
            >
              View my works
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
          <div className="mt-9 sm:mt-0">
            <Link
              className="bg-background border border-brand-violet/70 text-sm text-white px-5 py-3 rounded-full font-sans font-semibold hover:bg-brand-violet/50"
              href="/writing"
            >
              Read my writing
              <ArrowRight className="inline-block ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
        <div className="mt-7 flex items-center justify-center md:justify-normal gap-4">
          <SocialLink href="https://github.com/efaaz" label="GitHub">
            <Github size={16} />
          </SocialLink>

          <SocialLink
            href="https://linkedin.com/in/wasifur-rahman-efaz"
            label="LinkedIn"
          >
            <Linkedin size={16} />
          </SocialLink>

          <SocialLink href="mailto:rahmanefazwasifur@gmail.com" label="Email">
            <Mail size={16} />
          </SocialLink>
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
export default HeroTextBox;
