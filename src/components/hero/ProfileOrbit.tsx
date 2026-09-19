import Image from "next/image";
import dp from "@/assets/images/profile/me.png";
import FloatingCard from "./FloatingCard";

function ProfileOrbit() {
  return (
    <section className="relative flex items-center justify-center">
      <div className="relative h-64 w-64 sm:h-80 sm:w-80">
        {/* Ambient background glow */}
        <div
          className="
            absolute inset-6 rounded-full
            bg-[radial-gradient(circle_at_35%_30%,rgba(168,85,247,0.22),transparent_45%),radial-gradient(circle_at_70%_65%,rgba(34,211,238,0.16),transparent_45%)]
            blur-2xl
          "
        />

        {/* Soft outer circle */}
        <div
          className="
            absolute -inset-5
            rounded-full
            border border-white/6
          "
        />

        {/* Main orbital ring */}
        <div
          className="
            absolute -inset-3
            rounded-full
            border border-white/8
          "
        />

        {/* Rotating orbital system */}
        <div
          className="
            absolute -inset-3
            animate-[spin_18s_linear_infinite]
            motion-reduce:animate-none
          "
        >
          {/* Violet orbit segment */}
          <div
            className="
              absolute inset-0
              rounded-full
              border border-transparent
              border-t-brand-violet/80
              border-r-brand-violet/20
            "
          />

          {/* Cyan orbit dot */}
          <span
            className="
              absolute left-1/2 top-0
              h-2.5 w-2.5
              -translate-x-1/2
              rounded-full
              bg-brand-cyan
              shadow-[0_0_20px_rgba(34,211,238,0.8)]
            "
          />

          {/* Violet orbit dot */}
          <span
            className="
              absolute bottom-4 right-7
              h-1.5 w-1.5
              rounded-full
              bg-brand-violet
              shadow-[0_0_15px_rgba(168,85,247,0.8)]
            "
          />
        </div>

        {/* Inner decorative ring */}
        <div
          className="
            absolute inset-2
            rounded-full
            border border-brand-cyan/12
          "
        />

        {/* Profile image frame */}
        <div
          className="
            absolute inset-5
            overflow-hidden
            rounded-full
            border border-white/10
            bg-[#0B1220]
            shadow-[0_0_60px_rgba(168,85,247,0.12)]
          "
        >
          <Image
            src={dp}
            alt="Efaz"
            fill
            sizes="320px"
            className="object-contain grayscale"
            priority
          />

          {/* Subtle image overlay */}
          <div
            className="
              pointer-events-none
              absolute inset-0
              rounded-full
              bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_35%)]
            "
          />
        </div>

        {/* ================================
            FLOATING CARD — BUILDING
        ================================= */}

        <FloatingCard
          delay="0s"
          className="
            top-60
            sm:top-46
            -right-16
            sm:-right-36
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-brand-cyan/10
                text-brand-cyan
              "
            >
              ↗
            </div>

            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-brand-cyan">
                BUILDING
              </p>
              <p className="mt-0.5 pb-1 text-sm font-medium text-white">AI ERP for SMEs</p>
              <p className="mt-0.5 text-sm font-medium text-white">Next.js • FastAPI</p>
            </div>
          </div>
        </FloatingCard>

        {/* ================================
            FLOATING CARD — READING
        ================================= */}

        <FloatingCard
          delay="1.2s"
          className="
            -bottom-4
            -left-16
            sm:-left-34
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-brand-violet/10
                text-brand-violet
              "
            >
              📖
            </div>

            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-brand-violet">
                READING
              </p>

              <p className="mt-0.5 text-sm font-medium text-white">
                Organizational
              </p>
              <p className="mt-0.5 text-sm font-medium text-white">
                Psychology
              </p>
            </div>
          </div>
        </FloatingCard>

        {/* ================================
            FLOATING CARD — LEARNING
        ================================= */}
        <FloatingCard
          delay="0s"
          className="
            
            -left-10
            sm:-left-30
          "
        >
          <div className="flex items-center gap-3">
            <div
              className="
                flex h-8 w-8 items-center justify-center
                rounded-lg
                bg-brand-lime/10
                text-brand-lime
              "
            >
              ◌
            </div>

            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] text-brand-lime">
                LEARNING
              </p>

              <p className="mt-0.5 text-sm font-medium text-white">
                Backend Architecture
              </p>
            </div>
          </div>
        </FloatingCard>

        {/* Small decorative markers */}

        <span
          className="
            absolute left-1 top-20
            h-1.5 w-1.5
            rounded-full
            bg-brand-coral
            shadow-[0_0_12px_rgba(255,122,107,0.7)]
          "
        />

        <span
          className="
            absolute bottom-12 right-0
            h-1 w-1
            rounded-full
            bg-brand-cyan
            shadow-[0_0_10px_rgba(34,211,238,0.7)]
          "
        />
      </div>
    </section>
  );
}

export default ProfileOrbit;
