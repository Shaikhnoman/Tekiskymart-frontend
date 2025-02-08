import React from "react";
import dateimg from '../assets/images/dates.jpg'

const products = [
  {
    name: "Razan Dates",
    image: dateimg,
    price: 1600,
    originalPrice: 2000,
  },
  {
    name: "Ajwa Taj Al-Madina",
    image: dateimg,
    price: 400,
    originalPrice: 600,
  },
  {
    name: "Rabiya Sinwan",
    image: dateimg,
    price: 1520,
    originalPrice: 1700,
  },
  {
    name: "Sukkari Dates",
    image: dateimg,
    price: 400,
    originalPrice: 500,
  },
  {
    name: "Kalmi",
    image: dateimg,
    price: 400,
    originalPrice: 450,
  },
  {
    name: "Sahara Kimia",
    image: dateimg,
    price: 160,
    originalPrice: 215,
  },
  {
    name: "Mabroon Dates",
    image: dateimg,
    price: 1000,
    originalPrice: 1200,
  },
  {
    name: "Tunisian Dates",
    image: dateimg,
    price: 280,
    originalPrice: 350,
  }
];

const DatePage = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">खजूर</h2>
        <h2 className="text-xl font-bold text-blue-700">DATES</h2>
        <h2 className="text-xl font-bold text-blue-700">كُهْجُور</h2>
      </div>

      {/* Date Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg"
            />
            <h3 className="text-lg font-semibold mt-2 truncate">
              {product.name}
            </h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-red-600 font-bold text-xl">
                ₹{product.price}
              </span>
              <span className="text-gray-500 line-through">
                ₹{product.originalPrice}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DatePage;
