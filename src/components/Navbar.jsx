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
            className="flex items-center gap-3 group"
            onClick={() => setOpen(false)}
          >
            <div className="relative">
              <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-lime-300 to-emerald-400 text-green-950 font-extrabold flex items-center justify-center shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6">
                GV
              </div>

              {/* Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-lime-300 blur opacity-30 group-hover:opacity-70 transition duration-300" />
            </div>

            <h1 className="text-xl font-extrabold tracking-tight">
              Ahinsa <span className="text-lime-300">GreenValley</span>
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
            {/* Book Site Visit */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFHg1Fc6L2mCuTWfKogpeshMZEVVSgMapU1XAM_XvWfTUzdw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white font-bold 
              hover:bg-white/20 transition-all duration-300 hover:-translate-y-[1px]"
            >
              🏡 Book Site Visit
            </a>

            {/* Call Now Neon Glow */}
            <a
              href="tel:+919279046985"
              className="px-5 py-2.5 rounded-xl bg-lime-300 text-green-950 font-bold 
              shadow-[0_0_20px_rgba(163,230,53,0.6)] 
              hover:shadow-[0_0_35px_rgba(163,230,53,0.9)] 
              transition-all duration-300 hover:-translate-y-[1px]"
            >
              📞 Call Now
            </a>

            {/* WhatsApp with Logo */}
            <a
              href="https://wa.me/919279046985"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-white/25 text-white font-bold 
              hover:bg-white/10 transition-all duration-300 hover:-translate-y-[1px]
              flex items-center gap-2"
            >
              <FaWhatsapp className="text-xl text-lime-300" />
              WhatsApp
            </a>
          </div>

          {/* ✅ MOBILE: Icons + Menu (Improved spacing) */}
          <div className="md:hidden flex items-center gap-3">
            {/* Call */}
            <a
              href="tel:+919279046985"
              className="w-10 h-10 rounded-xl bg-lime-300 text-green-950 font-semibold 
              shadow-[0_0_15px_rgba(163,230,53,0.7)]
              flex items-center justify-center"
            >
              📞
            </a>

            {/* Book */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScFHg1Fc6L2mCuTWfKogpeshMZEVVSgMapU1XAM_XvWfTUzdw/viewform?usp=publish-editor"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 text-white font-semibold
              flex items-center justify-center hover:bg-white/15 transition"
            >
              🏡
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919279046985"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl border border-white/25 text-white font-semibold 
              hover:bg-white/10 flex items-center justify-center transition"
            >
              <FaWhatsapp className="text-[22px] text-lime-300" />
            </a>

            {/* ✅ Hamburger Menu Button (bigger + glow) */}
            <button
              onClick={() => setOpen(!open)}
              className="
                w-11 h-11 rounded-2xl
                bg-white/10 border border-white/20
                flex items-center justify-center
                hover:bg-white/15 transition
                shadow-[0_0_20px_rgba(163,230,53,0.18)]
              "
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ✅ MOBILE MENU (Home/About/Contact) */}
        {open && (
          <div className="md:hidden border-t border-white/10 bg-green-950/60 backdrop-blur-xl">
            <nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-3 font-semibold text-white/85">
              <Link
                to="/"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-white/10 transition"
              >
                Home
              </Link>

              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-white/10 transition"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="py-2 px-3 rounded-xl hover:bg-white/10 transition"
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
