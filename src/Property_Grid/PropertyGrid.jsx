import React from "react";
import PropertyCard from "../components/PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
      name: "Ahinsa Green Valley",
      location: "Noida, UP",
      type: "Villa",
      bhk: "4BHK",
      bath: 3,
      sqft: 3500,
      image:
        "public/WhatsApp Image 2026-01-14 at 20.00.45.jpeg",
    },
    {
      name: "Ahinsa The Grand Green Valley",
      location: "Gurgaon, Haryana",
      type: "Apartment",
      bhk: "3BHK",
      bath: 2,
      sqft: 1800,
      image:
        "public/WhatsApp Image 2026-01-14 at 20.00.46.jpeg",
    },
    {
      name: "Ahinsa Green Valley Empire",
      location: "Delhi",
      type: "Independent House",
      bhk: "3BHK",
      bath: 2,
      sqft: 2200,
      image:
        "public/WhatsApp Image 2026-01-14 at 20.00.47.jpeg",
    },
    {
      name: "Ahinsa Green Valley Orchid",
      location: "Lucknow, UP",
      type: "Studio",
      bhk: "1BHK",
      bath: 1,
      sqft: 900,
      image:
        "public/WhatsApp Image 2026-01-14 at 20.05.00.jpeg",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-14">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Featured Properties
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          Handpicked premium properties for you
        </p>
      </div>

      {/* Property Grid */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((item, index) => (
          <PropertyCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PropertyGrid;
