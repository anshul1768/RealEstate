import React from "react";
import { BadgeCheck, Landmark, HandCoins } from "lucide-react";

const ChooseUs = () => {
  const features = [
    {
      title: "Legally Compliant",
      desc: "Legally compliant real estate business following Income Tax Section 143(1) & 80A norms.",
      icon: <Landmark size={30} className="text-lime-300" />,
    },
    {
      title: "Zila Panchayat Approved",
      desc: "The project has received approval from the Zila Panchayat, confirming land & development compliance with local government rules and regulations.",
      icon: <BadgeCheck size={30} className="text-lime-300" />,
    },
    {
      title: "Easy Loan Facility",
      desc: "Loan assistance is available from reputed banks and NBFCs, subject to eligibility and bank approval.",
      icon: <HandCoins size={30} className="text-lime-300" />,
    },
  ];

  return (
    <section className="relative overflow-hidden py-16">
      {/* ✅ Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-emerald-950 to-green-900" />

      {/* ✅ Glow Blobs */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-lime-400/20 rounded-full blur-3xl" />
      <div className="absolute top-20 right-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-green-500/10 rounded-full blur-3xl" />

      {/* ✅ Content */}
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Why Choose Us
          </h2>
          <p className="mt-3 text-white/70 text-base md:text-lg">
            Your trusted partner in real estate
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, index) => (
            <div
              key={index}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/15
              shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div
                className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 
                flex items-center justify-center shadow-md group-hover:scale-110 transition-all duration-300"
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-extrabold text-white">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-white/70 leading-relaxed">{item.desc}</p>

              {/* ✅ Bottom Neon Line */}
              <div className="mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 to-emerald-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
