import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Accent Neon Line */}
      <div className="h-[3px] w-full bg-gradient-to-r from-lime-300 via-emerald-400 to-green-800" />

      {/* Gradient Navbar */}
      <div className="bg-gradient-to-r from-green-950 via-emerald-900 to-green-800 text-white shadow-2xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LEFT: Logo + Company Name */}
          <Link
            to="/"
            className="flex items-center gap-2 md:gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div className="relative">
              <img
                src="/Logo.jpeg"
                alt="Ahinsa Green Valley"
                className="
                  w-14 h-14              /* phone: big logo */
                  md:w-14 md:h-14
                  lg:w-16 lg:h-16
                  rounded-2xl
                  object-contain
                  bg-white p-2
                  shadow-lg
                  transition-all duration-300
                  group-hover:scale-110
                "
              />

              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-lime-300 blur opacity-30 group-hover:opacity-70 transition duration-300" />
            </div>

            <h1
              className="
                text-sm                /* phone: small text */
                md:text-xl             /* desktop: normal */
                font-extrabold tracking-tight
              "
            >
              Ahinsa <span className="text-lime-300">Green Valley</span>
            </h1>
          </Link>

          {/* CENTER: Links (Desktop) */}
          <nav className="hidden md:flex gap-10 font-semibold text-white/80">
            <Link to="/" className="relative group">
              <span className="group-hover:text-lime-300 transition">Home</span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link to="/about" className="relative group">
              <span className="group-hover:text-lime-300 transition">About</span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>

            <Link to="/contact" className="relative group">
              <span className="group-hover:text-lime-300 transition">
                Contact
              </span>
              <span className="absolute left-0 -bottom-2 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>

          {/* RIGHT: Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFHg1Fc6L2mCuTWfKogpeshMZEVVSgMapU1XAM_XvWfTUzdw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 font-bold hover:bg-white/20 transition"
            >
              🏡 Book Site Visit
            </a>

            <a
              href="tel:+918218428395"
              className="px-5 py-2.5 rounded-xl bg-lime-300 text-green-950 font-bold shadow hover:shadow-xl transition"
            >
              📞 Call Now
            </a>

            <a
              href="https://wa.me/919279046985?text=Hi%2C%20I%20want%20to%20know%20details%20about%20your%20project%20Ahinsa%20Green%20Valley"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-white/25 font-bold flex items-center gap-2 hover:bg-white/10 transition"
            >
              <FaWhatsapp className="text-xl text-lime-300" />
              WhatsApp
            </a>
          </div>

          {/* MOBILE ICONS */}
          <div className="md:hidden flex items-center gap-3">
            <a href="tel:+918218428395" className="w-10 h-10 rounded-xl bg-lime-300 flex items-center justify-center">📞</a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFHg1Fc6L2mCuTWfKogpeshMZEVVSgMapU1XAM_XvWfTUzdw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center"
            >
              🏡
            </a>

            <a
              href="https://wa.me/919279046985?text=Hi%2C%20I%20want%20to%20know%20details%20about%20your%20project%20Ahinsa%20Green%20Valley"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border flex items-center justify-center"
            >
              <FaWhatsapp className="text-lime-300 text-xl" />
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="w-11 h-11 rounded-2xl bg-white/10 border flex items-center justify-center"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="md:hidden border-t bg-green-950/60 backdrop-blur">
            <nav className="px-4 py-4 flex flex-col gap-3">
              {["Home", "About", "Contact"].map((i) => (
                <Link
                  key={i}
                  to={i === "Home" ? "/" : `/${i.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="py-2 px-3 rounded-xl hover:bg-white/10"
                >
                  {i}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
