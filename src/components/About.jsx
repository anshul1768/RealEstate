import React from "react";
import { BadgeCheck, Users, Home, PhoneCall } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const About = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-emerald-900 to-green-800" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_50%)]" />

        {/* Glow blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold shadow-[0_0_18px_rgba(34,197,94,0.35)]">
            <BadgeCheck size={18} />
            Green Valley Real Estate
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            About{" "}
            <span className="text-lime-300 drop-shadow-[0_0_18px_rgba(163,230,53,0.7)]">
              Green Valley
            </span>
          </h1>

          <p className="mt-4 text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
            We help you buy, sell, and rent premium properties with full
            transparency, verified listings, and fast documentation — making
            your journey smooth and stress-free.
          </p>

          {/* Bottom glow line */}
          <div className="mt-10 h-[3px] w-44 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.55)]" />
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left text */}
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              Your Trusted Real Estate Partner
            </h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Green Valley is a trusted name in real estate that focuses on
              customer satisfaction, verified properties, and smooth processes.
              We believe finding your perfect home should be easy, clear, and
              reliable.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Whether you're looking for a luxury villa, modern apartment,
              commercial space, or plots — our team ensures you get the best
              deals with full support from start to finish.
            </p>

            {/* ✅ Small highlights (rang + glow) */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Verified Listings */}
              <div
                className="
                  group relative overflow-hidden rounded-2xl p-4
                  bg-gradient-to-br from-green-950 via-emerald-950 to-green-900
                  border border-white/10
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-1
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-500" />
                {/* Shine */}
                <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

                <p className="relative z-10 font-extrabold text-white">
                  Verified Listings
                </p>
                <p className="relative z-10 text-sm text-white/70 mt-1">
                  100% genuine & verified properties.
                </p>

                <div className="relative z-10 mt-4 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
              </div>

              {/* Fast Documentation */}
              <div
                className="
                  group relative overflow-hidden rounded-2xl p-4
                  bg-gradient-to-br from-green-950 via-emerald-950 to-green-900
                  border border-white/10
                  shadow-lg hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-1
                "
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_30px_rgba(34,197,94,0.30)] transition-all duration-500" />
                {/* Shine */}
                <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

                <p className="relative z-10 font-extrabold text-white">
                  Fast Documentation
                </p>
                <p className="relative z-10 text-sm text-white/70 mt-1">
                  Smooth process with quick closure.
                </p>

                <div className="relative z-10 mt-4 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-green-200 to-emerald-100 blur-2xl opacity-60" />
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400"
              alt="About Green Valley"
              className="relative w-full h-[420px] object-cover rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="max-w-7xl mx-auto px-4 pb-14">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              title: "Properties",
              icon: <Home className="text-lime-300" />,
              value: (
                <>
                  500<span className="text-lime-200">+</span>
                </>
              ),
              sub: "Premium listings available",
            },
            {
              title: "Happy Clients",
              icon: <Users className="text-lime-300" />,
              value: (
                <>
                  1200<span className="text-lime-200">+</span>
                </>
              ),
              sub: "Trusted customers",
            },
            {
              title: "Experience",
              icon: <BadgeCheck className="text-lime-300" />,
              value: (
                <>
                  10<span className="text-lime-200">+</span>
                </>
              ),
              sub: "Years in real estate",
            },
          ].map((card, idx) => (
            <div
              key={idx}
              className="
                group relative overflow-hidden rounded-2xl p-6
                bg-gradient-to-br from-green-950 via-emerald-950 to-green-900
                border border-white/10
                shadow-lg hover:shadow-2xl
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
              {/* Shine */}
              <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

              <div className="relative z-10 flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center shadow-md group-hover:shadow-[0_0_18px_rgba(34,197,94,0.55)] transition-all duration-300">
                  {card.icon}
                </div>
                <h3 className="font-extrabold text-white">{card.title}</h3>
              </div>

              <p className="relative z-10 mt-4 text-4xl font-extrabold text-lime-300 drop-shadow-[0_0_12px_rgba(163,230,53,0.55)]">
                {card.value}
              </p>
              <p className="relative z-10 mt-1 text-white/70">{card.sub}</p>

              <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY US MINI */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Why People Trust Green Valley
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Transparent Deals",
              desc: "No hidden charges. We provide clarity and honesty in every deal.",
            },
            {
              title: "Best Support",
              desc: "From property selection to paperwork — full support from our team.",
            },
            {
              title: "Prime Locations",
              desc: "Handpicked properties in top locations for the best investment.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="
                group relative overflow-hidden rounded-2xl p-6
                bg-gradient-to-br from-green-950 via-emerald-950 to-green-900
                border border-white/10
                shadow-lg hover:shadow-2xl
                transition-all duration-300 hover:-translate-y-2
              "
            >
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
              {/* Shine */}
              <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

              <h3 className="relative z-10 font-extrabold text-white">
                {item.title}
              </h3>
              <p className="relative z-10 mt-2 text-white/70">{item.desc}</p>

              <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-green-950 via-emerald-900 to-green-800 text-white overflow-hidden relative border border-white/10 shadow-lg">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_50%)]" />
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />

          <div className="relative flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold">
                Ready to find your dream property?
              </h2>
              <p className="mt-3 text-white/90 max-w-xl">
                Call or WhatsApp us for verified properties and the best deals.
              </p>
            </div>

            <div className="flex gap-3 flex-wrap">
              <a
                href="tel:+919279046985"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl 
                  bg-lime-300 text-green-950 font-extrabold
                  shadow-[0_0_25px_rgba(163,230,53,0.6)]
                  hover:shadow-[0_0_40px_rgba(163,230,53,0.9)]
                  transition-all duration-300 hover:-translate-y-[2px]
                "
              >
                <PhoneCall size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/919279046985"
                target="_blank"
                rel="noreferrer"
                className="
                  inline-flex items-center gap-2 px-6 py-3 rounded-xl
                  border border-white/30 bg-white/10 backdrop-blur
                  font-extrabold hover:bg-white/15 transition-all duration-300 hover:-translate-y-[2px]
                  hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
                "
              >
                <FaWhatsapp className="text-xl text-lime-300" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
