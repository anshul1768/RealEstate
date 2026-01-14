import React from "react";

const PropertyCategories = () => {
  const categories = [
    {
      title: "Residential",
      count: "250",
      icon: "🏡",
    },
    {
      title: "Commercial",
      count: "120",
      icon: "🏢",
    },
    {
      title: "Plots",
      count: "180",
      icon: "📍",
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
          Explore properties by category
        </p>
      </div>

      {/* Cards */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-green-50 flex items-center justify-center text-3xl">
              {item.icon}
            </div>

            {/* Title */}
            <h3 className="mt-4 text-xl font-extrabold text-gray-900">
              {item.title}
            </h3>

            {/* Count */}
            <p className="mt-2 text-3xl font-extrabold text-green-700">
              {item.count}
              <span className="text-green-500">+</span>
            </p>

            {/* Properties Text */}
            <p className="mt-1 text-gray-600 font-medium">Properties</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyCategories;
