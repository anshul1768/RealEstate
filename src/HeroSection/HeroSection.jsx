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

  // Auto slide every 4 sec
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">
      {/* Carousel Images */}
      <div
        className="flex h-full transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((img, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/45"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="max-w-2xl text-white">
            <p className="inline-block px-4 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm font-semibold">
              Green Valley Real Estate
            </p>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
              Find Your <span className="text-green-300">Dream Home</span> Today
            </h1>

            <p className="mt-4 text-base md:text-lg text-white/90">
              Premium properties for buying, renting and selling. Trusted deals,
              best prices and smooth experience.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-400 text-white font-bold shadow hover:shadow-xl transition hover:-translate-y-[1px]"
              >
                Contact Us
              </Link>

              <Link
                to="/about"
                className="px-6 py-3 rounded-xl border border-white/40 bg-white/10 backdrop-blur font-bold hover:bg-white/20 transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 text-white text-2xl flex items-center justify-center backdrop-blur transition"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 hover:bg-white/35 text-white text-2xl flex items-center justify-center backdrop-blur transition"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === idx ? "w-10 bg-green-400" : "w-3 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
