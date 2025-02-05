import React from "react";
import othersimg from '../assets/images/others.jpg'

const products = [
  { name: "Microsoft 330 Combo", price: 1600, originalPrice: 2000, image: othersimg },
  { name: "Quick Heal Pro", price: 385, originalPrice: 850, image: othersimg },
];

const Others = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">इतर</h2>
        <h2 className="text-xl font-bold text-blue-700">OTHERS</h2>
        <h2 className="text-xl font-bold text-blue-700">دیگر</h2>
      </div>

      {/* Others Cards */}
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

      {/* View More Button */}
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
    </div>
  );
};

export default Others;
