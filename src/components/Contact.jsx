import React from "react";
import { PhoneCall, Mail, MapPin, MessageCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-800 via-emerald-700 to-green-600" />
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_55%)]" />

        <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-24 text-white">
          <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 backdrop-blur text-sm font-semibold">
            Contact Green Valley
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
            Get in <span className="text-green-200">Touch</span>
          </h1>

          <p className="mt-4 text-white/90 max-w-2xl text-base md:text-lg leading-relaxed">
            Have questions about properties? Call or WhatsApp us for verified
            listings and quick assistance.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+919279046985"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-green-800 font-extrabold shadow hover:shadow-xl transition"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <a
              href="https://wa.me/919279046985"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-white/50 bg-white/10 backdrop-blur font-extrabold hover:bg-white/20 transition"
            >
              <MessageCircle size={18} />
              WhatsApp
            </a>
          </div>
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
          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <PhoneCall className="text-green-700" />
            </div>
            <h3 className="mt-4 font-extrabold text-gray-900">Phone</h3>
            <p className="mt-1 text-gray-600">+91 9279046985</p>
            <a
              href="tel:+919279046985"
              className="mt-3 inline-block text-green-700 font-bold hover:underline"
            >
              Call Now →
            </a>
          </div>

          {/* WhatsApp */}
          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <MessageCircle className="text-green-700" />
            </div>
            <h3 className="mt-4 font-extrabold text-gray-900">WhatsApp</h3>
            <p className="mt-1 text-gray-600">Quick chat support</p>
            <a
              href="https://wa.me/919279046985"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-green-700 font-bold hover:underline"
            >
              Message Now →
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <Mail className="text-green-700" />
            </div>
            <h3 className="mt-4 font-extrabold text-gray-900">Email</h3>
            <p className="mt-1 text-gray-600">info@greenvalley.com</p>
            <a
              href="mailto:info@greenvalley.com"
              className="mt-3 inline-block text-green-700 font-bold hover:underline"
            >
              Send Email →
            </a>
          </div>

          {/* Address */}
          <div className="rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
              <MapPin className="text-green-700" />
            </div>
            <h3 className="mt-4 font-extrabold text-gray-900">Office</h3>
            <p className="mt-1 text-gray-600">Agra, UP</p>
            <p className="mt-1 text-gray-500 text-sm">
              (Office visit by appointment)
            </p>
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
            // ✅ IMPORTANT: maps.app.goo.gl nahi chalega, embed link lagega
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56636.055582138825!2d77.9649108!3d27.1766701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974770a5bff89d7%3A0x7f0a0c9bca5f6d6f!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1730000000000"
          ></iframe>
        </div>

        {/* ✅ Optional button */}
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
