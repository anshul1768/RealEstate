import React from "react";

const PropertyCategories = () => {
  const categories = [
    {
      title: "Shops",
      count: "120",
      icon: "🏪",
      desc: "Prime market shops for business growth.",
      tag: "Best for Business",
      bg: "/Shop.jpeg",
    },
    {
      title: "Residential Plots",
      count: "250",
      icon: "📍",
      desc: "Perfect plots to build your dream home.",
      tag: "Top Demand",
      bg: "/resident.jpeg",
    },
    {
      title: "Commercial Plots",
      count: "180",
      icon: "🏢",
      desc: "High-return commercial investment plots.",
      tag: "High ROI",
      bg: "/plots.jpeg",
    },
    {
      title: "Villas",
      count: "90",
      icon: "🏡",
      desc: "Luxury villas with premium amenities.",
      tag: "Premium Living",
      bg: "/villa.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 pb-8">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Property Category
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Explore properties by category and find your perfect match
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="
              group relative overflow-hidden rounded-2xl p-6 border
              shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2
              bg-cover bg-center
            "
            style={{ backgroundImage: `url(${item.bg})` }}
          >
            {/* ✅ Dark Overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* ✅ Neon Border Glow (Hover) */}
            <div
              className="
                absolute inset-0 rounded-2xl border-2 border-transparent
                group-hover:border-lime-300/60 transition-all duration-500
                group-hover:shadow-[0_0_35px_rgba(163,230,53,0.45)]
              "
            />

            {/* ✅ Extra Glow Blob */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-lime-300/25 rounded-full blur-3xl opacity-0 group-hover:opacity-70 transition duration-500" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition duration-500" />

            {/* ✅ Shine Effect (Light Streak) */}
            <div
              className="
                absolute top-0 -left-[120%] w-[200%] h-full
                bg-gradient-to-r from-transparent via-white/15 to-transparent
                rotate-12
                group-hover:left-[120%]
                transition-all duration-700
              "
            />

            {/* Content */}
            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs border border-white/30 backdrop-blur-md">
                ✅ {item.tag}
              </div>

              {/* Icon */}
              <div
                className="
                  mt-4 w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl
                  shadow-sm border border-white/20 backdrop-blur-md
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:shadow-[0_0_25px_rgba(163,230,53,0.65)]
                "
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-xl font-extrabold text-white">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="mt-2 text-white/90 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Count */}
              <div className="mt-4 flex items-end justify-between">
                <p className="text-3xl font-extrabold text-lime-300 drop-shadow-[0_0_10px_rgba(163,230,53,0.6)]">
                  {item.count}
                  <span className="text-lime-200">+</span>
                </p>
                <p className="text-white/80 font-semibold text-sm">
                  Properties
                </p>
              </div>

              {/* ✅ Bottom Neon Line */}
              <div className="mt-5 h-[3px] w-0 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-400 rounded-full group-hover:w-full transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
