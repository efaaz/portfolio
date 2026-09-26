"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const navItems = [
  {
    label: "Work",
    href: "/work",
    icon: Briefcase,
  },
  {
    label: "Writing",
    href: "/writing",
    icon: BookOpen,
  },
  {
    label: "Bookshelf",
    href: "/bookshelf",
    icon: BookOpen,
  },
  {
    label: "About",
    href: "/about",
    icon: UserRound,
  },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <div className="md:hidden">
      {/* Menu button */}
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
        className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/8 bg-white/4 text-foreground transition-all duration-200 hover:border-white/15 hover:bg-white/[0.07]"
      >
        {open ? <X size={19} /> : <Menu size={19} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close menu"
              onClick={closeMenu}
              className="fixed inset-0 top-18 z-40 cursor-default bg-black/30 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Panel */}
            <motion.div
              className="
                absolute
                left-4
                right-4
                top-[calc(100%+0.75rem)]
                z-50
                overflow-hidden
                rounded-2xl
                border
                border-white/8
                bg-[#0B1220]/95
                shadow-[0_24px_80px_rgba(0,0,0,0.35)]
                backdrop-blur-2xl
              "
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -8,
                scale: 0.98,
              }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="p-3">
                {/* Navigation */}
                <nav className="space-y-1">
                  {navItems.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.04 * index,
                          duration: 0.2,
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          className="
                            group
                            flex
                            items-center
                            gap-3
                            rounded-xl
                            px-4
                            py-3.5
                            text-sm
                            font-medium
                            text-muted-foreground
                            transition-colors
                            duration-200
                            hover:bg-white/4
                            hover:text-foreground
                          "
                        >
                          <Icon
                            size={17}
                            className="
                              text-muted-foreground
                              transition-colors
                              duration-200
                              group-hover:text-brand-violet
                            "
                          />

                          <span>{item.label}</span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Divider */}
                <div className="my-3 h-px bg-white/[0.07]" />

                {/* Status */}
                <div
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-3
                  "
                >
                  <span className="relative flex h-2 w-2">
                    <span
                      className="
                        absolute
                        inline-flex
                        h-full
                        w-full
                        animate-ping
                        rounded-full
                        bg-brand-lime
                        opacity-50
                      "
                    />
                    <span
                      className="
                        relative
                        inline-flex
                        h-2
                        w-2
                        rounded-full
                        bg-brand-lime
                      "
                    />
                  </span>

                  <div>
                    <p className="text-xs text-muted-foreground">Currently</p>

                    <p className="text-sm font-medium text-foreground">
                      Building AI ERP
                    </p>
                  </div>
                </div>

                {/* Resume */}
                <Link
                  href="https://drive.google.com/file/d/1Dhdl2h1kZbR6CeKRZcTD6GlbyHpoY-Al/view?usp=sharing"
                  target="_blank"
                  onClick={closeMenu}
                  className="
                    group
                    mt-2
                    flex
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    border
                    border-brand-violet/30
                    bg-brand-violet/10
                    px-4
                    py-3
                    text-sm
                    font-medium
                    text-foreground
                    transition-all
                    duration-200
                    hover:border-brand-violet/50
                    hover:bg-brand-violet/15
                  "
                >
                  Resume
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
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
