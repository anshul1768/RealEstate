import React from "react";
import { BadgeCheck, Users, Home, PhoneCall, MessageCircle } from "lucide-react";

const About = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-emerald-700 to-green-600" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm font-semibold">
            <BadgeCheck size={18} />
            Green Valley Real Estate
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            About <span className="text-green-200">Green Valley</span>
          </h1>

          <p className="mt-4 text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
            We help you buy, sell, and rent premium properties with full
            transparency, verified listings, and fast documentation — making
            your journey smooth and stress-free.
          </p>
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

            {/* Small highlights */}
            <div className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border bg-green-50">
                <p className="font-extrabold text-gray-900">Verified Listings</p>
                <p className="text-sm text-gray-600 mt-1">
                  100% genuine & verified properties.
                </p>
              </div>

              <div className="p-4 rounded-2xl border bg-green-50">
                <p className="font-extrabold text-gray-900">Fast Documentation</p>
                <p className="text-sm text-gray-600 mt-1">
                  Smooth process with quick closure.
                </p>
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
          <div className="rounded-2xl p-6 border shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <Home className="text-green-700" />
              <h3 className="font-extrabold text-gray-900">Properties</h3>
            </div>
            <p className="mt-4 text-4xl font-extrabold text-green-700">
              500<span className="text-green-400">+</span>
            </p>
            <p className="mt-1 text-gray-600">Premium listings available</p>
          </div>

          <div className="rounded-2xl p-6 border shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <Users className="text-green-700" />
              <h3 className="font-extrabold text-gray-900">Happy Clients</h3>
            </div>
            <p className="mt-4 text-4xl font-extrabold text-green-700">
              1200<span className="text-green-400">+</span>
            </p>
            <p className="mt-1 text-gray-600">Trusted customers</p>
          </div>

          <div className="rounded-2xl p-6 border shadow-sm bg-white">
            <div className="flex items-center gap-3">
              <BadgeCheck className="text-green-700" />
              <h3 className="font-extrabold text-gray-900">Experience</h3>
            </div>
            <p className="mt-4 text-4xl font-extrabold text-green-700">
              10<span className="text-green-400">+</span>
            </p>
            <p className="mt-1 text-gray-600">Years in real estate</p>
          </div>
        </div>
      </section>

      {/* WHY US MINI */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center">
          Why People Trust Green Valley
        </h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl p-6 border shadow-sm hover:shadow-lg transition">
            <h3 className="font-extrabold text-gray-900">Transparent Deals</h3>
            <p className="mt-2 text-gray-600">
              No hidden charges. We provide clarity and honesty in every deal.
            </p>
          </div>

          <div className="rounded-2xl p-6 border shadow-sm hover:shadow-lg transition">
            <h3 className="font-extrabold text-gray-900">Best Support</h3>
            <p className="mt-2 text-gray-600">
              From property selection to paperwork — full support from our team.
            </p>
          </div>

          <div className="rounded-2xl p-6 border shadow-sm hover:shadow-lg transition">
            <h3 className="font-extrabold text-gray-900">Prime Locations</h3>
            <p className="mt-2 text-gray-600">
              Handpicked properties in top locations for the best investment.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl p-8 md:p-12 bg-gradient-to-r from-green-800 to-emerald-600 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_50%)]" />

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
                href="tel:+919999999999"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-green-800 font-extrabold shadow hover:shadow-xl transition"
              >
                <PhoneCall size={18} />
                Call Now
              </a>

              <a
                href="https://wa.me/919999999999"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/50 bg-white/10 backdrop-blur font-extrabold hover:bg-white/20 transition"
              >
                <MessageCircle size={18} />
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
