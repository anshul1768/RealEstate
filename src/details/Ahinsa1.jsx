import React from "react";
import { Link } from "react-router-dom";

const Ahinsa1 = () => {
  const images = [
    "/WhatsApp Image 2026-01-15 at 14.45.06.jpeg",
    "/WhatsApp Image 2026-01-15 at 14.45.07.jpeg",
    "/WhatsApp Image 2026-01-15 at 14.45.08.jpeg",
    "/WhatsApp Image 2026-01-15 at 14.45.09.jpeg",
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-bold text-sm border border-green-100">
          🌿 Ahinsa GreenValley
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Experience Nature + Comfort <br />
          at <span className="text-green-700">Ahinsa GreenValley</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Ahinsa GreenValley is a premium residential & investment destination,
          surrounded by greenery, calm environment, and modern development.
          Perfect for families, investors, and those who want peaceful living
          close to nature.
        </p>
      </div>

      {/* Image Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Big Image */}
        <div className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-md group">
          <img
            src={images[0]}
            alt="Ahinsa GreenValley"
            className="w-full h-[360px] object-cover group-hover:scale-105 transition duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-5 text-white">
            <p className="text-sm font-semibold opacity-90">
              Premium Living in Green Environment
            </p>
            <h2 className="text-2xl font-extrabold mt-1">
              Peaceful & Modern Lifestyle
            </h2>
          </div>
        </div>

        {/* 3 small images */}
        <div className="grid grid-cols-1 gap-5">
          {[1, 2, 3].map((idx) => (
            <div
              key={idx}
              className="relative overflow-hidden rounded-3xl shadow-md group"
            >
              <img
                src={images[idx]}
                alt={`Ahinsa GreenValley ${idx}`}
                className="w-full h-[170px] object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          ))}
        </div>
      </div>

      {/* Description Box */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left */}
        <div className="bg-white rounded-3xl border shadow-sm p-7">
          <h2 className="text-2xl font-extrabold text-gray-900">
            Why Choose Ahinsa GreenValley?
          </h2>

          <p className="mt-3 text-gray-600 leading-relaxed">
            Enjoy modern facilities with a nature-friendly environment. Whether
            you want to build your dream home or make an investment, Ahinsa
            GreenValley provides the best option with long-term value.
          </p>

          <ul className="mt-5 space-y-3 text-gray-700 font-semibold">
            <li className="flex items-center gap-2">
              ✅ Green & peaceful environment
            </li>
            <li className="flex items-center gap-2">
              ✅ Prime location with easy connectivity
            </li>
            <li className="flex items-center gap-2">
              ✅ Residential plots & villas available
            </li>
            <li className="flex items-center gap-2">
              ✅ High ROI investment opportunities
            </li>
          </ul>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFHg1Fc6L2mCuTWfKogpeshMZEVVSgMapU1XAM_XvWfTUzdw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-2xl bg-white border-2 border-emerald-600 text-emerald-700 font-bold hover:bg-emerald-50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              🏡 Book Site Visit
            </a>

            <a
              href="tel:+919279046985"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-500 text-white font-bold shadow-md hover:shadow-xl transition-all duration-300"
            >
              📞 Call Now
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-emerald-500 p-8 text-white shadow-lg">
          <h3 className="text-2xl font-extrabold">
            Start Your Journey Today 🌿
          </h3>

          <p className="mt-3 text-white/90 leading-relaxed">
            Book a site visit and explore the beauty of Ahinsa GreenValley
            yourself. Our team will guide you and help you select the best
            property as per your need.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
              <p className="text-sm opacity-90">Project Type</p>
              <p className="text-lg font-extrabold">Plots + Villas</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
              <p className="text-sm opacity-90">Best For</p>
              <p className="text-lg font-extrabold">Living + Investment</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
              <p className="text-sm opacity-90">Environment</p>
              <p className="text-lg font-extrabold">Green & Peaceful</p>
            </div>
            <div className="bg-white/10 rounded-2xl p-4 border border-white/15">
              <p className="text-sm opacity-90">Support</p>
              <p className="text-lg font-extrabold">24/7 Assistance</p>
            </div>
          </div>

          <Link
            to="/contact"
            className="mt-7 inline-flex w-full items-center justify-center px-6 py-3 rounded-2xl bg-white text-green-700 font-extrabold hover:bg-gray-100 transition"
          >
            Contact Us →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Ahinsa1;
