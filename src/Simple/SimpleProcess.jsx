import React from "react";
import { Search, PhoneCall, Home, FileCheck } from "lucide-react";

const SimpleProcess = () => {
  const steps = [
    {
      num: 1,
      title: "Search Property",
      desc: "Browse listings and find the perfect property for your needs.",
      icon: <Search size={26} className="text-green-700" />,
    },
    {
      num: 2,
      title: "Contact Us",
      desc: "Call or WhatsApp our team to get complete property details.",
      icon: <PhoneCall size={26} className="text-green-700" />,
    },
    {
      num: 3,
      title: "Visit & Choose",
      desc: "Schedule a site visit and finalize the property you love.",
      icon: <Home size={26} className="text-green-700" />,
    },
    {
      num: 4,
      title: "Finalize Deal",
      desc: "Smooth documentation and quick deal closure with support.",
      icon: <FileCheck size={26} className="text-green-700" />,
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
            className="relative bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Number Badge */}
            <div className="absolute -top-4 -left-4 w-10 h-10 rounded-2xl bg-gradient-to-br from-green-700 to-emerald-400 text-white font-extrabold flex items-center justify-center shadow-md">
              {item.num}
            </div>

            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Text */}
            <h3 className="mt-5 text-lg font-extrabold text-gray-900">
              {item.title}
            </h3>
            <p className="mt-2 text-gray-600 leading-relaxed text-sm">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SimpleProcess;
