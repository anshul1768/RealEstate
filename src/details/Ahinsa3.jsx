import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Ahinsa3 = () => {
  const [selected, setSelected] = useState(null);

  const gallery = [
    { image: "/Ahinsa3/Picture1_Ahinsa3.png", label: "Main Gate" },
    { image: "/Ahinsa3/Picture2_Ahinsa3.jpg", label: "Selfie Point" },
    { image: "/Ahinsa3/Picture3_Ahinsa3.jpg", label: "Club House" },
    { image: "/Ahinsa3/Picture4_Ahinsa3.jpg", label: "Indoor and Interior" },
    { image: "/Ahinsa3/Picture5_Ahinsa3.jpg", label: "Empire Street" },
    { image: "/Ahinsa3/Picture6_Ahinsa3.jpg", label: "Garden and Surrounding" },
    { image: "/Ahinsa3/Picture7_Ahinsa3.jpg", label: "Garden and Surrounding" },
    { image: "/Ahinsa3/Picture8_Ahinsa3.jpg", label: "Garden and Surrounding" },
    { image: "/Ahinsa3/Picture9_Ahinsa3.jpg", label: "Garden and Surrounding" },
    { image: "/Ahinsa3/Picture10_Ahinsa3.png", label: "Victoria Boundary Hall" },
    { image: "/Ahinsa3/Picture11_Ahinsa3.jpg", label: "Master Plan" },
  ];

  // ✅ Location Details
  const locationDetails = {
    title: "Location Advantage 📍",
    subtitle:
      "Discover a unique community on the outskirts of Agra, located along the Agra–Jalesar Road, a direct route to the iconic Taj Mahal. This prestigious property offers the perfect balance of luxury and the tranquility of nature, with excellent connectivity to the city and surrounding attractions.",
    points: [
      "✅ All Connected Expressways",
      "✅ 1 hr 30 min to Jewar Airport",
      "✅ 5 min to Yamuna Expressway",
      "✅ 10 min to Lucknow Expressway",
      "✅ 30 min to Agra Airport",
      "✅ 25 min to Agra Cantt Railway Station",
      "✅ 20 min to Agra Fort Railway Station",
      "✅ 5 min to GS Public School",
      "✅ 8 min to Boston Public School",
    ],
  };

  // ✅ ESC press to close modal
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // ✅ Map Links
  const mapOpenUrl = "https://maps.app.goo.gl/fQ9JCTAjwu9akceq6";

  // ✅ Embed link (iframe)
  const mapEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28288.99507257852!2d78.158!3d27.2322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39746f0075100abf%3A0x8cc9253ea6751170!2sAhinsa%20Green%20Valley%2C%20Dharera%2C%20Uttar%20Pradesh%20283202!5e0!3m2!1sen!2sin!4v1737170000000";

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center">
        <p className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-50 text-green-700 font-bold text-sm border border-green-100">
          🌿 Ahinsa Green Valley Empire
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Experience Nature + Comfort <br />
          at <span className="text-green-700">Ahinsa Green Valley Empire</span>
        </h1>

        <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
          Ahinsa GreenValley is a premium residential & investment destination,
          surrounded by greenery, calm environment, and modern development.
          Perfect for families, investors, and those who want peaceful living
          close to nature.
        </p>
      </div>

      {/* ✅ Premium Mosaic Gallery */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Big Image */}
        <button
          onClick={() => setSelected(gallery[0])}
          className="lg:col-span-7 relative overflow-hidden rounded-[28px] shadow-xl group focus:outline-none border border-gray-200"
        >
          <img
            src={gallery[0].image}
            alt={gallery[0].label}
            loading="lazy"
            className="w-full h-[520px] object-cover transition duration-700 group-hover:scale-[1.06]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
          <div className="absolute top-5 left-5">
            <span className="px-4 py-2 rounded-full bg-white/15 border border-white/20 text-white text-sm font-extrabold backdrop-blur-md">
              📸 {gallery.length} Photos
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 text-white text-left">
            <p className="text-sm opacity-90 font-bold">{gallery[0].label}</p>
            <h2 className="text-2xl md:text-3xl font-extrabold mt-1">
              Premium Project Gallery
            </h2>
          </div>
        </button>

        {/* Right Side Mosaic */}
        <div className="lg:col-span-5 grid grid-cols-2 gap-5">
          {gallery.slice(1, 5).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-[24px] shadow-lg group focus:outline-none border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="w-full h-[250px] object-cover transition duration-700 group-hover:scale-[1.08]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-95" />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="px-3 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-white text-xs font-extrabold border border-white/15">
                  🔍 View
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <p className="truncate px-3 py-1.5 rounded-full bg-white/15 border border-white/15 backdrop-blur-md text-white text-xs font-extrabold text-left">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* Bottom Row */}
        <div className="lg:col-span-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {gallery.slice(5).map((item, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(item)}
              className="relative overflow-hidden rounded-[24px] shadow-lg group focus:outline-none border border-gray-200"
            >
              <img
                src={item.image}
                alt={item.label}
                loading="lazy"
                className="w-full h-[180px] object-cover transition duration-700 group-hover:scale-[1.1]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-95" />

              <div className="absolute bottom-3 left-3 right-3">
                <p className="truncate px-3 py-1.5 rounded-full bg-white/15 border border-white/15 backdrop-blur-md text-white text-xs font-extrabold text-left">
                  {item.label}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* ✅ Location Advantage */}
      <div className="mt-12 rounded-3xl bg-gradient-to-br from-green-700 to-emerald-500 border shadow-xl p-7 text-white">
  <h2 className="text-2xl font-extrabold text-white">
    {locationDetails.title}
  </h2>

  <p className="mt-3 text-white/90 leading-relaxed max-w-5xl">
    {locationDetails.subtitle}
  </p>

  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {locationDetails.points.map((point, index) => (
      <div
        key={index}
        className="
          rounded-2xl
          border border-white/25
          bg-white/10 backdrop-blur
          px-4 py-3
          font-semibold text-white
          shadow-sm
          hover:bg-white/20
          transition-all duration-300
          hover:-translate-y-[2px]
        "
      >
        {point}
      </div>
    ))}
  </div>
</div>


      {/* ✅ Map Section */}
      <div className="mt-12 rounded-3xl bg-white border shadow-sm p-7">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">
              Project Location Map 🗺️
            </h2>
            <p className="mt-2 text-gray-600 leading-relaxed max-w-3xl">
              Find the exact location of Ahinsa Green Valley Empire and easily
              navigate using Google Maps.
            </p>
          </div>

          <a
            href={mapOpenUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center px-5 py-3 rounded-2xl bg-gradient-to-r from-green-700 to-emerald-500 text-white font-extrabold shadow-md hover:shadow-xl transition"
          >
            📍 Open in Google Maps
          </a>
        </div>

        <div className="mt-6 rounded-3xl overflow-hidden border shadow-sm">
          <iframe
            title="Ahinsa3 Location"
            src={mapEmbedUrl}
            width="100%"
            height="520"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
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
            <li className="flex items-center gap-2">✅ Green & peaceful environment</li>
            <li className="flex items-center gap-2">✅ Prime location with easy connectivity</li>
            <li className="flex items-center gap-2">✅ Residential plots & villas available</li>
            <li className="flex items-center gap-2">✅ High ROI investment opportunities</li>
          </ul>

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
          <h3 className="text-2xl font-extrabold">Start Your Journey Today 🌿</h3>

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

      {/* ✅ Lightbox Modal */}
      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute -top-12 right-0 text-white font-extrabold text-lg bg-white/10 hover:bg-white/20 px-4 py-2 rounded-xl"
            >
              ✕ Close
            </button>

            <img
              src={selected.image}
              alt={selected.label}
              className="w-full max-h-[80vh] object-contain rounded-3xl shadow-2xl border border-white/10"
            />

            <div className="mt-4 text-center text-white">
              <p className="text-lg font-extrabold">{selected.label}</p>
              <p className="text-white/70 text-sm mt-1">
                Tap outside or press ESC to close
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ahinsa3;
