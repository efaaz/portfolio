import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MobileNav from "./MobileNav";

const navItems = [
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

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/6 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto relative flex h-18 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tight text-foreground">
            EFAZ
          </span>

          <span className="h-1.5 w-1.5 rounded-full bg-brand-cyan shadow-[0_0_10px_rgba(34,211,238,0.8)]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                relative
                text-sm
                text-muted-foreground
                transition-colors
                duration-200
                hover:text-foreground
              "
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          {/* Status */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-lime opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-lime" />
            </span>

            <span>Available</span>
          </div>

          {/* Resume */}
          <Link
            href="https://drive.google.com/file/d/119EKO-zL3Tp2H4kYol3v1hsrRjLqxxIX/view?usp=sharing"
            target="_blank"
            className="
              group
              flex
              items-center
              gap-1.5
              rounded-full
              border
              border-white/10
              bg-white/4
              px-4
              py-2
              text-sm
              font-medium
              text-foreground
              transition-all
              duration-200
              hover:border-brand-violet/40
              hover:bg-white/[0.07]
            "
          >
            Resume
            <ArrowUpRight
              size={14}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        {/* Mobile button */}
       <MobileNav />
      </div>
    </header>
  );
}
