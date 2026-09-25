import Image from "next/image";
import {
  Activity,
  Brain,
  BookOpen,
  Network,
  Pickaxe,
} from "lucide-react";
import bgImage from "@/assets/images/profile/currentlybg.jpg";

const currentlyItems = [
  {
    label: "Building",
    title: "AI ERP for SMEs",
    description:
      "Making business operations simpler and smarter.",
    icon: Pickaxe,
    color: "text-brand-cyan",
    iconBg: "bg-brand-cyan/10",
  },
  {
    label: "Learning",
    title: "Backend Architecture",
    description:
      "Exploring scalable systems with FastAPI & PostgreSQL.",
    icon: Brain,
    color: "text-brand-coral",
    iconBg: "bg-brand-coral/10",
  },
  {
    label: "Reading",
    title: "Organizational Psychology",
    description:
      "Understanding people, behaviour and organizations.",
    icon: BookOpen,
    color: "text-brand-violet",
    iconBg: "bg-brand-violet/10",
  },
  // {
  //   label: "Thinking about",
  //   title: "Systems & Incentives",
  //   description:
  //     "How systems shape behaviour and outcomes.",
  //   icon: Network,
  //   color: "text-brand-lime",
  //   iconBg: "bg-brand-lime/10",
  // },
];

const stats = [
  {
    value: "4+",
    label: "Years Learning",
  },
  {
    value: "10+",
    label: "Projects Built",
  },
  {
    value: "50+",
    label: "Books Read",
  },
  {
    value: "∞",
    label: "Ideas Exploring",
  },
  {
    value: "100%",
    label: "Curiosity",
  },
];

export default function CurrentlySection() {
  return (
    <section className="relative overflow-hidden border-y border-white/6">
      {/* Background image */}
      <Image
        src={bgImage}
        alt=""
        fill
        sizes="100vw"
        className="object-cover object-center "
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#050914]/90" />

      {/* Atmospheric gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(168,85,247,0.10),transparent_30%),radial-gradient(circle_at_85%_80%,rgba(34,211,238,0.08),transparent_30%)]" />

      {/* Subtle grid */}
      {/* <div
        className="
          absolute inset-0
          opacity-30
          bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-size-[48px_48px]
        "
      /> */}

      {/* Subtle decorative particles */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <span className="absolute left-[12%] top-[35%] h-1 w-1 rounded-full bg-brand-violet/70" />
        <span className="absolute left-[28%] top-[18%] h-1 w-1 rounded-full bg-brand-cyan/60" />
        <span className="absolute left-[45%] top-[42%] h-1 w-1 rounded-full bg-brand-coral/60" />
        <span className="absolute right-[27%] top-[20%] h-1 w-1 rounded-full bg-brand-violet/50" />
        <span className="absolute right-[12%] top-[48%] h-1 w-1 rounded-full bg-brand-lime/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-10 ">

        {/* Section heading */}
        <div className="mb-10 flex items-center gap-3">
          <Activity
            size={17}
            className="text-brand-violet"
          />

          <span className="text-xs font-medium uppercase tracking-[0.2em] text-foreground/80">
            Currently
          </span>

          <div className="h-px flex-1 bg-white/[0.07]" />
        </div>

        {/* Currently items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3">

          {currentlyItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className={`
                  relative
                  py-4
                  lg:px-7
                  lg:py-2
                  ${index !== 0 ? "lg:border-l lg:border-white/[0.07]" : ""}
                `}
              >
                {/* Icon + label */}
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`
                      flex h-8 w-8 items-center justify-center
                      rounded-lg
                      ${item.iconBg}
                      ${item.color}
                    `}
                  >
                    <Icon size={16} strokeWidth={1.8} />
                  </div>

                  <span
                    className={`
                      text-sm font-medium
                      ${item.color}
                    `}
                  >
                    {item.label}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-medium text-foreground sm:text-lg">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-2 max-w-xs text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Statistics */}
        <div
          className="
            mt-12
            grid
            grid-cols-2
            overflow-hidden
            rounded-2xl
            border
            border-white/8
            bg-[#0B1220]/75
            backdrop-blur-xl
            sm:grid-cols-3
            lg:grid-cols-5
          "
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                px-6
                py-5
                sm:px-7
                ${
                  index > 0
                    ? "border-l border-white/[0.07]"
                    : ""
                }
                ${
                  index >= 2
                    ? "border-t border-white/[0.07] sm:border-t-0"
                    : ""
                }
                ${
                  index === 4
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }
              `}
            >
              <p className="text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                {stat.value}
              </p>

              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}