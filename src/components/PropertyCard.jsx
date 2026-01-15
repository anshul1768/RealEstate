import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col">
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
      <div className="p-4 flex flex-col flex-1">
        {/* Name */}
        <h2 className="text-lg font-extrabold text-gray-900">{item.name}</h2>

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

        {/* ✅ Button always at bottom */}
        <Link
          to={`/property/${item.id}`}
          className="mt-auto pt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-green-700 to-emerald-500 text-white font-bold shadow-md hover:shadow-xl transition-all duration-300"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
