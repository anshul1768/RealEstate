import React from "react";
import { Search, PhoneCall, Home, FileCheck } from "lucide-react";

const SimpleProcess = () => {
  const steps = [
    {
      title: "Search Property",
      desc: "Browse listings and find the perfect property for your needs.",
      icon: <Search size={26} className="text-lime-300" />,
    },
    {
      title: "Contact Us",
      desc: "Call or WhatsApp our team to get complete property details.",
      icon: <PhoneCall size={26} className="text-lime-300" />,
    },
    {
      title: "Visit & Choose",
      desc: "Schedule a site visit and finalize the property you love.",
      icon: <Home size={26} className="text-lime-300" />,
    },
    {
      title: "Finalize Deal",
      desc: "Smooth documentation and quick deal closure with support.",
      icon: <FileCheck size={26} className="text-lime-300" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Streamlined Process
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Simple steps to get your dream property
        </p>
      </div>

      {/* Steps */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((item, index) => (
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
                group-hover:shadow-[0_0_35px_rgba(163,230,53,0.25)]
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

            {/* Icon */}
            <div
              className="
                relative z-10 w-14 h-14 rounded-2xl
                bg-white/10 border border-white/15
                flex items-center justify-center shadow-md
                transition-all duration-300
                group-hover:scale-110
                group-hover:shadow-[0_0_22px_rgba(163,230,53,0.55)]
              "
            >
              {item.icon}
            </div>

            {/* Text */}
            <h3 className="relative z-10 mt-5 text-lg font-extrabold text-white">
              {item.title}
            </h3>

            <p className="relative z-10 mt-2 text-white/70 leading-relaxed text-sm">
              {item.desc}
            </p>

            {/* ✅ Bottom Neon Line */}
            <div className="relative z-10 mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleProcess;
