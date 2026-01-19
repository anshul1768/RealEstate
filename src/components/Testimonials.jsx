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
    <section className="py-16 max-w-7xl mx-auto px-4">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Client Testimonials
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          What our clients say about Green Valley
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-2xl p-6
              bg-gradient-to-br from-green-950 via-emerald-950 to-green-900
              border border-white/10
              shadow-lg hover:shadow-2xl
              transition-all duration-300 hover:-translate-y-2
            "
          >
            {/* ✅ Hover Glow */}
            <div
              className="
                absolute inset-0 rounded-2xl
                group-hover:shadow-[0_0_35px_rgba(253,224,71,0.25)]
                transition-all duration-500
              "
            />

            {/* ✅ Shine Effect */}
            <div
              className="
                absolute top-0 -left-[120%] w-[200%] h-full
                bg-gradient-to-r from-transparent via-white/10 to-transparent
                rotate-12
                group-hover:left-[120%]
                transition-all duration-700
              "
            />

            {/* ⭐ Rating */}
            <div className="relative z-10 flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-300 fill-yellow-300 drop-shadow-[0_0_8px_rgba(253,224,71,0.6)]"
                />
              ))}
            </div>

            {/* Text */}
            <p className="relative z-10 mt-4 text-white/75 leading-relaxed">
              “{item.text}”
            </p>

            {/* Name + Location */}
            <div className="relative z-10 mt-6">
              <h3 className="font-extrabold text-white">{item.name}</h3>
              <p className="text-sm text-white/60">{item.location}</p>
            </div>

            {/* ✅ Neon Bottom Line */}
            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-yellow-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
