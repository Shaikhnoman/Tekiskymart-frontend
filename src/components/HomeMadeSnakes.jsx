import React from 'react';
import snacksimg from '../assets/images/snacks.jpg'
import { Link } from 'react-router-dom';

const snacks = [
  { name: 'Kalonji Papdi', price: 100, originalPrice: 130, image: snacksimg },
  // Add more snack items here as needed
];

const HomeMadeSnakes = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header Section with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">घरगुती चविष्टे</h2>
        <h2 className="text-xl font-bold text-blue-700">HOMEMADE SNACKS</h2>
        <h2 className="text-xl font-bold text-blue-700">گھرپلو سنیکس</h2>
      </div>

      {/* Snacks Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {snacks.map((snack, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
          >
            <img
              src={snack.image}
              alt={snack.name}
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-lg font-semibold truncate">{snack.name}</h3>
            <div className="flex justify-between items-center mt-2">
              <span className="text-red-600 font-bold text-xl">₹{snack.price}</span>
              <span className="text-gray-500 line-through">₹{snack.originalPrice}</span>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <Link to='/homemadesnacks'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default HomeMadeSnakes;
