import React from "react";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Green Valley helped us find the perfect home quickly. The team was professional, supportive and transparent throughout the process.",
      name: "Rahul Sharma",
      location: "Noida, UP",
    },
    {
      text: "Amazing service! They showed multiple verified properties and made the entire buying process smooth and hassle-free.",
      name: "Priya Singh",
      location: "Gurgaon, Haryana",
    },
    {
      text: "Highly recommended. Great communication, fast response, and genuine listings. Best real estate experience so far!",
      name: "Amit Verma",
      location: "Delhi",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
          Client Testimonials
        </h2>
        <p className="mt-3 text-gray-600 text-base md:text-lg">
          What our clients say about Green Valley
        </p>
      </div>

      {/* Cards */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-500 fill-yellow-500"
                />
              ))}
            </div>

            {/* Text */}
            <p className="mt-4 text-gray-600 leading-relaxed">
              “{item.text}”
            </p>

            {/* Name + Location */}
            <div className="mt-6">
              <h3 className="font-extrabold text-gray-900">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
