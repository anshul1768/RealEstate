import React from "react";

const PropertyCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Name */}
        <h2 className="text-lg font-extrabold text-gray-900">
          {item.name}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 mt-1 text-gray-600">
          <span className="text-green-600 text-lg">📍</span>
          <p className="text-sm font-medium">{item.location}</p>
        </div>

        {/* Info */}
        <div className="mt-4 flex flex-wrap gap-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 font-semibold">
            {item.type}
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
            🛏 {item.bhk}
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
            🛁 {item.bath} Bath
          </span>

          <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 font-semibold">
            📐 {item.sqft} sqft
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
