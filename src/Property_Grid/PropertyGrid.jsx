import React from "react";
import PropertyCard from "../components/PropertyCard";

const PropertyGrid = () => {
  const properties = [
    {
  id: 1,
  name: "Ahinsa Green Valley",
  location: "Kuberpur, Agra (Near KP Institute, NH-2 Highway)",
  startingPrice: "₹10,500 / sqyd",
  image: "/WhatsApp Image 2026-01-14 at 20.00.47.jpeg",
},
  {
  id: 2,
  name: "Ahinsa The Grand Green Valley",
  location: "Kundol, Fatehabad, Agra, Uttar Pradesh 283111",
  startingPrice: "₹16,500 / sqyd",
  image: "/WhatsApp Image 2026-01-14 at 20.00.45.jpeg",
},
    {
  id: 3,
  name: "Ahinsa Green Valley Empire",
  location: "Etmadpur–Khandoli Road, Mudi Chauraha, Agra, Uttar Pradesh 283202",
  startingPrice: "₹14,500 / sqyd",
  image: "/WhatsApp Image 2026-01-14 at 20.00.46.jpeg",
},
    {
  id: 4,
  name: "Ahinsa Green Valley Orchid",
  location: "Kuberpur, Agra (Near KP Institute, NH-2 Highway)",
  startingPrice: "₹21,500 / sqyd",
  image: "/WhatsApp Image 2026-01-14 at 20.05.00.jpeg",
},
  ];

  return (
    <section id="featured" className="max-w-7xl mx-auto px-4 pb-4">
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
<div className="mt-10 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {properties.map((item, index) => (
    <PropertyCard key={index} item={item} />
  ))}
</div>
    </section>
  );
};

export default PropertyGrid;
