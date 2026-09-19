import { ArrowUpRight } from "lucide-react";

function StartConversation() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
      <div className="border-b border-white/8 py-24 sm:py-28">
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
            <span className="font-serif italic text-gradient">problem</span> or
            something
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
    </section>
  );
}

export default StartConversation;
