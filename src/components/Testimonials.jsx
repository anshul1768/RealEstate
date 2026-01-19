import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Green Valley helped us find the perfect home quickly. The team was professional, supportive and transparent throughout the process.",
      name: "Rahul Sharma",
      location: "Noida, UP",
    },
    {
      text: "Amazing service! They showed multiple verified properties and made the entire buying process smooth and hassle-free.",
      name: "Priya Singh",
      location: "Gurgaon, Haryana",
    },
    {
      text: "Highly recommended. Great communication, fast response, and genuine listings. Best real estate experience so far!",
      name: "Amit Verma",
      location: "Delhi",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16">
      {/* ✅ Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900" />

      {/* ✅ Glow Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-yellow-400/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-lime-400/10 rounded-full blur-3xl" />

      {/* ✅ Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Client Testimonials
          </h2>
          <p className="mt-3 text-white/70 text-base md:text-lg">
            What our clients say about Green Valley
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15
              shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* ⭐ Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-300 fill-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="mt-4 text-white/75 leading-relaxed">
                “{item.text}”
              </p>

              {/* Name + Location */}
              <div className="mt-6">
                <h3 className="font-extrabold text-white">{item.name}</h3>
                <p className="text-sm text-white/60">{item.location}</p>
              </div>

              {/* ✅ Neon Bottom Line */}
              <div className="mt-5 h-[3px] w-0 bg-gradient-to-r from-yellow-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
