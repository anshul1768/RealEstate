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
    <section className="py-2 max-w-7xl mx-auto px-4">
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
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((item, index) => (
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
            {/* ✅ Glow on hover */}
            <div
              className="
                absolute inset-0 rounded-2xl
                group-hover:shadow-[0_0_35px_rgba(163,230,53,0.35)]
                transition-all duration-500
              "
            />

            {/* ✅ Shine effect */}
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
                group-hover:scale-110
                group-hover:shadow-[0_0_22px_rgba(163,230,53,0.55)]
                transition-all duration-300
              "
            >
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="relative z-10 mt-4 text-xl font-extrabold text-white">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="relative z-10 mt-2 text-white/70 leading-relaxed">
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

export default ChooseUs;
