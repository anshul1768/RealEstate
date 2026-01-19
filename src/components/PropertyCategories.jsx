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
    <section className="max-w-7xl mx-auto px-4 pb-16">
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
            className="group rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border relative overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: `url(${item.bg})`,
            }}
          >
            {/* Dark Overlay (text readable) */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition duration-500 z-0" />

            {/* Content */}
            <div className="relative z-10">
              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white font-bold text-xs border border-white/30 backdrop-blur-md">
                ✅ {item.tag}
              </div>

              {/* Icon */}
              <div className="mt-4 w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-3xl shadow-sm border border-white/20 backdrop-blur-md">
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
                <p className="text-3xl font-extrabold text-green-300">
                  {item.count}
                  <span className="text-green-200">+</span>
                </p>
                <p className="text-white/80 font-semibold text-sm">
                  Properties
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
