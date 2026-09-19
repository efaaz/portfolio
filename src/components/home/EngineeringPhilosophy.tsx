import { Brain, Layers3, Lightbulb, Network, Users } from "lucide-react";

const principles = [
  {
    number: "01",
    title: "Start With the Problem",
    description: "Understand the problem before choosing the technology.",
    icon: Lightbulb,
    accent: "brand-cyan",
  },
  {
    number: "02",
    title: "Technology Serves the Problem",
    description:
      "Choose tools because they fit the problem, not because they are fancy tech.",
    icon: Layers3,
    accent: "brand-violet",
  },
  {
    number: "03",
    title: "Build for Change",
    description:
      "Prefer simple systems that can evolve over clever systems that are difficult to maintain.",
    icon: Network,
    accent: "brand-coral",
  },
  {
    number: "04",
    title: "Model the Real World",
    description:
      "Good software should reflect the domain, its constraints, and the workflows of the people using it.",
    icon: Brain,
    accent: "brand-lime",
  },
  {
    number: "05",
    title: "Understand the People",
    description:
      "Software exists for people, so understanding behavior, incentives, and context matters as much as understanding code.",
    icon: Users,
    accent: "brand-violet",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section className="relative overflow-hidden border-b border-white/6">
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute
            left-[10%]
            top-[20%]
            h-72
            w-72
            rounded-full
            bg-brand-violet/5
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            right-[8%]
            bottom-[10%]
            h-72
            w-72
            rounded-full
            bg-brand-cyan/4
            blur-[120px]
          "
        />
      </div>

      {/* Subtle grid */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-20
          bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)]
          bg-size-[48px_48px]
        "
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:px-8 lg:px-10 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* =====================================
              LEFT SIDE
          ====================================== */}
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="mb-6 flex items-center gap-3">
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
                Engineering Philosophy
              </span>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-xl
                text-4xl
                font-semibold
                tracking-[-0.035em]
                text-foreground
                sm:text-5xl
                lg:text-6xl
              "
            >
              How I think
              <br />
              about{" "}
              <span className="font-serif italic text-gradient">software.</span>
            </h2>

            {/* Main statement */}
            <p
              className="
                mt-8
                max-w-lg
                text-lg
                leading-8
                text-muted-foreground
              "
            >
              Software is a tool for solving real problems not an end in itself.
              I care about the system behind the code: the people, constraints,
              incentives, and outcomes.
            </p>

            {/* Philosophy marker */}
            <div className="mt-10 flex items-center gap-4">
              <div
                className="
                  h-px
                  w-16
                  bg-linear-to-r
                  from-brand-violet
                  to-brand-cyan
                "
              />

              <span className="font-mono text-xs tracking-[0.18em] text-muted-foreground">
                THINK · BUILD · LEARN
              </span>
            </div>
          </div>

          {/* =====================================
              RIGHT SIDE
          ====================================== */}
          <div className="relative">
            <div className="space-y-3">
              {principles.map((principle) => {
                const Icon = principle.icon;

                return (
                  <article
                    key={principle.number}
                    className="
                      group
                      relative
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/2
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-white/13
                      hover:bg-white/[0.035]
                    "
                  >
                    <div className="flex gap-5 p-5 sm:gap-7 sm:p-6">
                      {/* Number + node */}
                      <div className="relative z-10 hidden shrink-0 items-start sm:flex">
                        <div
                          className="
                            flex
                            h-10
                            w-10
                            items-center
                            justify-center
                            rounded-full
                            border
                            border-white/10
                            bg-[#050914]
                            font-mono
                            text-xs
                            text-muted-foreground
                            transition-all
                            duration-300
                            group-hover:border-brand-violet/40
                            group-hover:text-foreground
                          "
                        >
                          {principle.number}
                        </div>
                      </div>

                      {/* Icon */}
                      <div
                        className={`
                          flex
                          h-10
                          w-10
                          shrink-0
                          items-center
                          justify-center
                          rounded-xl
                          border
                          border-white/[0.07]
                          bg-white/2.5
                          text-${principle.accent}
                          transition-all
                          duration-300
                          group-hover:scale-105
                        `}
                      >
                        <Icon size={18} strokeWidth={1.7} />
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground sm:hidden">
                            {principle.number}
                          </span>

                          <h3
                            className="
                              text-base
                              font-medium
                              tracking-tight
                              text-foreground
                              sm:text-lg
                            "
                          >
                            {principle.title}
                          </h3>
                        </div>

                        <p
                          className="
                            mt-2
                            max-w-xl
                            text-sm
                            leading-6
                            text-muted-foreground
                            sm:text-[15px]
                          "
                        >
                          {principle.description}
                        </p>
                      </div>

                      {/* Hover indicator */}
                      <div
                        className="
                          hidden
                          shrink-0
                          items-center
                          self-center
                          sm:flex
                        "
                      >
                        <span
                          className="
                            h-1.5
                            w-1.5
                            rounded-full
                            bg-white/10
                            transition-all
                            duration-300
                            group-hover:bg-brand-violet
                            group-hover:shadow-[0_0_12px_rgba(168,85,247,0.7)]
                          "
                        />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
