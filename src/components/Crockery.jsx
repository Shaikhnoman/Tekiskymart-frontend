import React from 'react';
import Crockeryimg from '../assets/images/Crockery.jpg'
import { Link } from 'react-router-dom';

const crockeryItems = [
  { name: 'Lemon Set', price: 450, originalPrice: 550, image: Crockeryimg },
  { name: 'Dinner Set', price: 5500, originalPrice: 6500, image: Crockeryimg },
  { name: 'Dinner Set', price: 5000, originalPrice: 6000, image: Crockeryimg },
  { name: 'Dinner Set', price: 4500, originalPrice: 5500, image: Crockeryimg },
  { name: 'Dinner Set', price: 3600, originalPrice: 4000, image: Crockeryimg },
  { name: 'Dinner Set', price: 2800, originalPrice: 3200, image: Crockeryimg },
  // Add more items as needed
];

const Crockery = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">क्रॉकरी</h2>
        <h2 className="text-xl font-bold text-blue-700">CROCKERY</h2>
        <h2 className="text-xl font-bold text-blue-700">کروکری</h2>
      </div>

      {/* Crockery Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {crockeryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold truncate">{item.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-red-600 font-bold text-xl">₹{item.price}</span>
              <span className="text-gray-500 line-through">₹{item.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <Link to='crockery'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Crockery;
