import React from "react";
import ProfileOrbit from "./ProfileOrbit";
import HeroTextBox from "./HeroTextBox";

function Hero() {
  return (
    <section className="py-20">
      <div className="sm:flex justify-center items-center gap-10 sm:gap-60">
        <ProfileOrbit />
        <HeroTextBox />
      </div>
    </section>
  );
}

export default Hero;
