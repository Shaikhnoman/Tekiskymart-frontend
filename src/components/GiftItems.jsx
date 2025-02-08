import React from "react";
import jewleryimg from '../assets/images/Jewelry.jpg'
import { Link } from "react-router-dom";

const products = [
  {
    name: "Show Peace Rickshaw",
    image: jewleryimg,
    price: 270,
    originalPrice: 360,
  },
  {
    name: "Show Peace Golden Cycle",
    image: jewleryimg,
    price: 370,
    originalPrice: 650,
  },
  {
    name: "Tea Cup Stand",
    image: jewleryimg,
    price: 210,
    originalPrice: 390,
  },
  {
    name: "Charpai Set",
    image: jewleryimg,
    price: 299,
    originalPrice: 699,
  },
  {
    name: "Jewelry Box",
    image: jewleryimg,
    price: 195,
    originalPrice: 399,
  },
  {
    name: "Agarbatti Holder",
    image: jewleryimg,
    price: 120,
    originalPrice: 260,
  },
  {
    name: "Wooden Cutlery",
    image: jewleryimg,
    price: 160,
    originalPrice: 350,
  },
  {
    name: "Door Bell",
    image: jewleryimg,
    price: 200,
    originalPrice: 400,
  },
];

const GiftItems = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">उपहार सामान</h2>
        <h2 className="text-xl font-bold text-blue-700">GIFT-ITEMS</h2>
        <h2 className="text-xl font-bold text-blue-700">تحف أشياء</h2>
      </div>

      {/* Gift Cards */}
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
      <Link to='/giftitems'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default GiftItems;
