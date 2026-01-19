import React from "react";
import { Link } from "react-router-dom";

const PropertyCard = ({ item }) => {
  return (
    <div className="group rounded-2xl overflow-hidden h-full flex flex-col border border-white/10 bg-gradient-to-br from-green-950/80 via-emerald-950/70 to-green-900/80 backdrop-blur-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      {/* Image */}
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-[1.06]"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* ✅ Price Badge on Image */}
        <div className="absolute bottom-3 left-3">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white font-extrabold text-sm shadow-md backdrop-blur-xl">
            Starting <span className="text-lime-300">{item.startingPrice}</span>
          </span>
        </div>

        {/* ✅ Neon line */}
        <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-lime-300 via-emerald-400 to-green-500 group-hover:w-full transition-all duration-500" />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name */}
        <h2 className="text-lg font-extrabold text-white">{item.name}</h2>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2 text-white/70">
          <span className="text-lime-300 text-lg">📍</span>
          <p className="text-sm font-medium line-clamp-2">{item.location}</p>
        </div>

        {/* ✅ Button always at bottom */}
        <Link
          to={`/property/${item.id}`}
          className="mt-auto pt-5 inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 rounded-xl 
          bg-lime-300 text-green-950 font-extrabold 
          shadow-[0_0_18px_rgba(163,230,53,0.55)]
          hover:shadow-[0_0_30px_rgba(163,230,53,0.85)]
          transition-all duration-300"
        >
          View Details →
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
