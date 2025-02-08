import React from 'react';
import Mobilesimg from '../assets/images/mobile.jpg';
import { Link } from 'react-router-dom';



const Mobiles = () => {
  const watchItems = [
    {
      image: Mobilesimg,
      name: 'SuperVOOC Mob..',
      price: '₹499',
      originalPrice: '₹1299',
    },
    {
      image: Mobilesimg,
      name: 'VMBS Power Sh...',
      price: '₹349',
      originalPrice: '₹699',
    },
    {
      image: Mobilesimg,
      name: 'Mi Dual Drive...',
      price: '₹249',
      originalPrice: '₹999',
    },
    {
      image: Mobilesimg,
      name: 'Flash Pods Pr...',
      price: '₹499',
      originalPrice: '₹999',
    },
    {
      image: Mobilesimg,
      name: 'Gripp Back Co...',
      price: '₹169',
      originalPrice: '₹300',
    },
  ];

  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">मोबाइल्स</h2>
        <h2 className="text-xl font-bold text-blue-700">MOBILES</h2>
        <h2 className="text-xl font-bold text-blue-700">موبائلز</h2>
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
      <Link to='/mobiles'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default Mobiles;