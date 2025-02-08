import React from "react";
import Perfumesimg from '../assets/images/Perfumes.jpg'


const products = [
  { name: "OUDH KUWAITI", price: 500, originalPrice: 600, image: Perfumesimg},
  { name: "KAMAIL MUMTAZ", price: 499, originalPrice: 599, image: Perfumesimg },
  { name: "MISK RIJALI", price: 498, originalPrice: 599, image: Perfumesimg},
  { name: "ROYAL YASMINE", price: 450, originalPrice: 760, image: Perfumesimg },
  { name: "Mukhallat Khususi", price: 300, originalPrice: 350, image: Perfumesimg },
  { name: "Mukhallat Floral", price: 400, originalPrice: 600, image: Perfumesimg},
  { name: "Identity Floral", price: 350, originalPrice: 500, image: Perfumesimg },
  { name: "Royal Hiba Floral", price: 400, originalPrice: 550, image: Perfumesimg },
];

const PerfumePage = () => {
  return (
    <div className="container mx-auto p-5">
      {/* Header with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">सुगंधित</h2>
        <h2 className="text-xl font-bold text-blue-700">PERFUMES</h2>
        <h2 className="text-xl font-bold text-blue-700">عطر</h2>
      </div>

      {/* Perfumes Cards */}
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

export default PerfumePage;
