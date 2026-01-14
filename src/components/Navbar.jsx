import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50">
      {/* Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-green-600 via-emerald-400 to-lime-400" />

      {/* Navbar */}
      <div className="bg-white/80 backdrop-blur-xl border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LEFT: Logo + Company Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-green-700 to-emerald-400 text-white font-extrabold flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-105 group-hover:-rotate-6">
                GV
              </div>
              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-green-400 blur opacity-20 group-hover:opacity-40 transition duration-300" />
            </div>

            <h1 className="text-xl font-extrabold tracking-tight text-gray-900">
              Ahinsa <span className="text-green-700">GreenValley</span>
            </h1>
          </Link>

          {/* CENTER: Links */}
          <nav className="hidden md:flex gap-10 font-semibold text-gray-700">
            <Link to="/" className="relative group">
              <span className="group-hover:text-green-700 transition">Home</span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link to="/about" className="relative group">
              <span className="group-hover:text-green-700 transition">About</span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link to="/contact" className="relative group">
              <span className="group-hover:text-green-700 transition">Contact</span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-green-600 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* RIGHT: Call Now + WhatsApp */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="+91 9279046985"
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 text-white font-bold shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-[1px]"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919279046985"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border-2 border-green-700 text-green-700 font-bold hover:bg-green-50 transition-all duration-300 hover:-translate-y-[1px]"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* MOBILE: only showing phone/whatsapp + menu not needed */}
          <div className="md:hidden flex gap-2">
            <a
              href="tel:+919999999999"
              className="px-3 py-2 rounded-lg bg-green-700 text-white font-semibold"
            >
              📞
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-2 rounded-lg border border-green-700 text-green-700 font-semibold"
            >
              💬
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
