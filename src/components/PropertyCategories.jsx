import React from "react";

const PropertyCategories = () => {
  const categories = [
    {
      title: "Shops",
      count: "120",
      icon: "🏪",
      desc: "Prime market shops for business growth.",
      tag: "Best for Business",
    },
    {
      title: "Residential Plots",
      count: "250",
      icon: "📍",
      desc: "Perfect plots to build your dream home.",
      tag: "Top Demand",
    },
    {
      title: "Commercial Plots",
      count: "180",
      icon: "🏢",
      desc: "High-return commercial investment plots.",
      tag: "High ROI",
    },
    {
      title: "Villas",
      count: "90",
      icon: "🏡",
      desc: "Luxury villas with premium amenities.",
      tag: "Premium Living",
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
            className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-52 h-52 bg-green-200 rounded-full blur-3xl opacity-0 group-hover:opacity-40 transition duration-500" />

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 text-green-700 font-bold text-xs border border-green-100">
              ✅ {item.tag}
            </div>

            {/* Icon */}
            <div className="mt-4 w-14 h-14 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-50 flex items-center justify-center text-3xl shadow-sm border">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="mt-2 text-gray-600 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* Count */}
            <div className="mt-4 flex items-end justify-between">
              <p className="text-3xl font-extrabold text-green-700">
                {item.count}
                <span className="text-green-500">+</span>
              </p>
              <p className="text-gray-500 font-semibold text-sm">Properties</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
