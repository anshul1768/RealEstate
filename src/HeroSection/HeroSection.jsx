import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const images = [
    "/WhatsApp Image 2026-01-14 at 20.00.45.jpeg",
    "/WhatsApp Image 2026-01-14 at 20.00.46.jpeg",
    "/slider_01.jpeg",
    "/WhatsApp Image 2026-01-14 at 20.05.00.jpeg",
  ];

  const [current, setCurrent] = useState(0);

  // ✅ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      {/* ✅ Slider Track */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translate3d(-${current * 100}%, 0, 0)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full flex-shrink-0 h-full">
            {/* ✅ FULL IMAGE (cover full hero container) */}
            <img
              src={img}
              alt={`slide-${idx}`}
              className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
            />
          </div>
        ))}
      </div>

      {/* ✅ HERO TEXT */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">
            {/* <p className="inline-flex px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold">
              Green Valley Real Estate
            </p> */}

            <h1 className="mt-4 text-3xl md:text-6xl font-extrabold leading-tight">
              Find Your{" "}
              <span className="text-lime-300 drop-shadow-[0_0_18px_rgba(163,230,53,0.75)]">
                Dream Property
              </span>
            </h1>

            <p className="mt-4 text-sm md:text-lg text-white/85">
              Verified deals • Best price • Smooth process
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
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
  className="
    px-6 py-3 rounded-xl bg-gray-900 text-white font-extrabold
    hover:bg-black transition-all duration-300 hover:-translate-y-[2px]
    shadow-md hover:shadow-xl
  "
>
  Contact Now
</Link>
            </div>

            <div className="mt-10 h-[3px] w-44 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.55)]" />
          </div>
        </div>
      </div>

      {/* ✅ Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full
        bg-white/20 hover:bg-white/35 text-white text-2xl flex items-center justify-center backdrop-blur transition"
      >
        ‹
      </button>

      {/* ✅ Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full
        bg-white/20 hover:bg-white/35 text-white text-2xl flex items-center justify-center backdrop-blur transition"
      >
        ›
      </button>

      {/* ✅ Dots */}
      <div className="absolute bottom-5 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === idx ? "w-10 bg-lime-300" : "w-3 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
