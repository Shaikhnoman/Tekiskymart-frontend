import React from 'react';
import dryfruitsimg from '../assets/images/dryfruits.jpg';
import { Link } from 'react-router-dom';

const DryFruits = () => {
    const dryFruitsItems = [

        {
        
        image: dryfruitsimg, // Replace with your image paths
        
        name: 'Ramaa Munakka...',
        
        price: '₹170',
        
        originalPrice: '₹300',
        
        },
        
        {
        
        image: dryfruitsimg,
        
        name: 'Tulsi Califor...',
        
        price: '₹350',
        
        originalPrice: '₹590',
        
        },
        
        {
        
        image: dryfruitsimg,
        
        name: 'India Taj Kis...',
        
        price: '₹70',
        
        originalPrice: '₹100',
        
        },
        
        {
        
        image: dryfruitsimg,
        
        name: 'BAZANA Califo...',
        
        price: '₹250',
        
        originalPrice: '₹500',
        
        },
        
        {
        
        image: dryfruitsimg,
        
        name: 'Nutlife Walnu....',
        
        price: '₹230',
        
        originalPrice: '₹425',
        
        },
        
        {
        
        image: dryfruitsimg,
        
        name: 'Kaju W320',
        
        price: '₹750',
        
        originalPrice: '₹1299',
        
        },
        
        ];

  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">सूखे मेवे</h2>
        <h2 className="text-xl font-bold text-blue-700">DRY FRUITS</h2>
        <h2 className="text-xl font-bold text-blue-700">خشک میوه جات</h2>
      </div>

      {/* Watches Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {dryFruitsItems.map((item, index) => (
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
      <Link to='/dryfruits'>
      <div className="flex justify-center mt-5">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
          VIEW MORE
        </button>
      </div>
      </Link>
    </div>
  );
};

export default DryFruits;