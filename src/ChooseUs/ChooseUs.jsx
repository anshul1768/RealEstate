import React from "react";
import { BadgeCheck, Zap } from "lucide-react";

const ChooseUs = () => {
  const features = [
    {
      title: "Verified Properties",
      desc: "100% genuine listings with complete verification and transparency.",
      icon: <BadgeCheck size={30} className="text-green-700" />,
    },
    {
      title: "Quick Process",
      desc: "Fast paperwork & easy booking process with full support.",
      icon: <Zap size={30} className="text-green-700" />,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Why Choose Us
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Your trusted partner in real estate
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="mt-2 text-gray-600 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;
