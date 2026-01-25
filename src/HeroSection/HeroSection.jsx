import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">

      {/* Blurred background video (fills screen) */}
      <video
        className="absolute inset-0 w-full h-full object-cover blur-xl scale-110"
        src="/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Main video (FULL visible, no cut) */}
      <video
        className="absolute inset-0 w-full h-full object-contain"
        src="/hero_video.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay (desktop only for readability) */}
      <div className="absolute inset-0 bg-black/30 hidden md:block" />

      {/* ================= HERO CONTENT (DESKTOP ONLY) ================= */}
      <div className="absolute inset-0 items-center hidden md:flex">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">

            <h1 className="mt-4 text-6xl font-extrabold leading-tight">
              Find Your{" "}
              <span className="text-lime-300 drop-shadow-[0_0_18px_rgba(163,230,53,0.75)]">
                Dream Property
              </span>
            </h1>

            <p className="mt-4 text-lg text-white/85">
              Verified deals • Best price • Smooth process
            </p>

            <div className="mt-7 flex gap-3">
              <Link
                to="/#featured"
                className="px-6 py-3 rounded-xl bg-lime-300 text-green-950 font-extrabold
                shadow-[0_0_25px_rgba(163,230,53,0.6)]
                hover:shadow-[0_0_40px_rgba(163,230,53,0.9)]
                transition-all duration-300 hover:-translate-y-[2px]"
              >
                Explore Properties
              </Link>

              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gray-900 text-white font-extrabold
                hover:bg-black transition-all duration-300 hover:-translate-y-[2px]
                shadow-md hover:shadow-xl"
              >
                Contact Now
              </Link>
            </div>

            <div className="mt-10 h-[3px] w-44 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.55)]" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
