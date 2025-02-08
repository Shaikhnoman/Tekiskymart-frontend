import React from 'react';
import watchsimg from '../assets/images/watch.jpg'
import { Link } from 'react-router-dom';

const watchItems = [
  {
    name: 'Bonafide T900',
    price: 549,
    originalPrice: 1499,
    image: watchsimg,
  },
  {
    name: 'U&I ICONIC Series',
    price: 1899,
    originalPrice: 2299,
    image: watchsimg,
  },
  // Add more items if needed
];

const Watchs = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">घड्याळ</h2>
        <h2 className="text-xl font-bold text-blue-700">WATCHES</h2>
        <h2 className="text-xl font-bold text-blue-700">گھڑیاں</h2>
      </div>

      {/* Watches Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {watchItems.map((item, index) => (
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
      <Link to='/watches'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Watchs;
