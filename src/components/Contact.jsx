import React from "react";
import { PhoneCall, Mail, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-emerald-900 to-green-800" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_55%)]" />

        {/* Glow Blobs */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-lime-300/20 rounded-full blur-3xl" />
        <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          {/* Glowing Badge */}
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur text-sm font-semibold shadow-[0_0_18px_rgba(34,197,94,0.35)]">
            Contact Green Valley
          </p>

          {/* Glowing Heading */}
          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            Get in{" "}
            <span className="text-lime-300 drop-shadow-[0_0_18px_rgba(163,230,53,0.7)]">
              Touch
            </span>
          </h1>

          <p className="mt-4 text-white/85 max-w-2xl text-base md:text-lg leading-relaxed">
            Have questions about properties? Call or WhatsApp us for verified
            listings and quick assistance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+918218428395"
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

            {/* ✅ WhatsApp with Logo */}
            <a
              href="https://wa.me/919279046985?text=Hi%2C%20I%20want%20to%20know%20details%20about%20your%20project%20Ahinsa%20Green%20Valley"
              target="_blank"
              rel="noreferrer"
              className="
                inline-flex items-center gap-2 px-6 py-3 rounded-xl
                border border-white/30 bg-white/10 backdrop-blur 
                font-extrabold text-white
                hover:bg-white/15 transition-all duration-300 hover:-translate-y-[2px]
                hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]
              "
            >
              <FaWhatsapp className="text-xl text-lime-300" />
              WhatsApp
            </a>
          </div>

          {/* Bottom Glow Line */}
          <div className="mt-10 h-[3px] w-40 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.55)]" />
        </div>
      </section>

      {/* CONTACT INFO */}
      <section className="max-w-7xl mx-auto px-4 py-14">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Contact Information
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            Reach out anytime. Our team will help you with property details,
            site visits and complete documentation.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Phone */}
          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
            {/* Shine */}
            <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.55)] transition-all duration-300">
              <PhoneCall className="text-lime-300" />
            </div>

            <h3 className="relative z-10 mt-4 font-extrabold text-white">
              Phone
            </h3>
            <p className="relative z-10 mt-1 text-white/70">
            +918218428395</p>

            <a
              href="tel:+918218428395"
              className="relative z-10 mt-3 inline-block text-lime-300 font-bold hover:underline"
            >
              Call Now →
            </a>

            {/* Bottom neon line */}
            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>

          {/* WhatsApp */}
          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
            <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.55)] transition-all duration-300">
              {/* ✅ WhatsApp Logo */}
              <FaWhatsapp className="text-2xl text-lime-300" />
            </div>

            <h3 className="relative z-10 mt-4 font-extrabold text-white">
              WhatsApp
            </h3>
            <p className="relative z-10 mt-1 text-white/70">
              Quick chat support
            </p>

            <a
              href="https://wa.me/919279046985?text=Hi%2C%20I%20want%20to%20know%20details%20about%20your%20project%20Ahinsa%20Green%20Valley"
              target="_blank"
              rel="noreferrer"
              className="relative z-10 mt-3 inline-block text-lime-300 font-bold hover:underline"
            >
              Message Now →
            </a>

            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>

          {/* Email */}
          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
            <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.55)] transition-all duration-300">
              <Mail className="text-lime-300" />
            </div>

            <h3 className="relative z-10 mt-4 font-extrabold text-white">
              Email
            </h3>
            <p className="relative z-10 mt-1 text-white/70">
              info@greenvalley.com
            </p>

            <a
              href="mailto:info@greenvalley.com"
              className="relative z-10 mt-3 inline-block text-lime-300 font-bold hover:underline"
            >
              Send Email →
            </a>

            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>

          {/* Office */}
          <div className="group relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <div className="absolute inset-0 rounded-2xl group-hover:shadow-[0_0_35px_rgba(34,197,94,0.30)] transition-all duration-500" />
            <div className="absolute top-0 -left-[120%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 group-hover:left-[120%] transition-all duration-700" />

            <div className="relative z-10 w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_18px_rgba(34,197,94,0.55)] transition-all duration-300">
              <MapPin className="text-lime-300" />
            </div>

            <h3 className="relative z-10 mt-4 font-extrabold text-white">
              Office
            </h3>
            <p className="relative z-10 mt-1 text-white/70">Agra, UP</p>
            <p className="relative z-10 mt-1 text-white/50 text-sm">
              (Office visit by appointment)
            </p>

            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="rounded-3xl overflow-hidden border shadow-sm">
          <iframe
            title="Office Location"
            className="w-full h-[380px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56636.055582138825!2d77.9649108!3d27.1766701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974770a5bff89d7%3A0x7f0a0c9bca5f6d6f!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730000000000"
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://maps.google.com/?q=Agra,+Uttar+Pradesh"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-700 text-white font-extrabold shadow hover:shadow-xl transition"
          >
            <MapPin size={18} />
            Open in Google Maps
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
