import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const GiftItemsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://tekisky-backend.onrender.com/product/getproduct");
        const filteredProducts = response.data.filter(item => item.productCategory === "giftitems");
        setProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching gift items:", error);
        setError("Failed to load gift items.");
      }
      setLoading(false);
    };
    
    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-5">
      {/* Header with Multiple Languages */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">उपहार सामान</h2>
        <h2 className="text-xl font-bold text-blue-700">GIFT-ITEMS</h2>
        <h2 className="text-xl font-bold text-blue-700">تحف أشياء</h2>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg">
              <Skeleton height={160} className="rounded-lg" />
              <Skeleton height={20} className="mt-2" />
              <Skeleton height={15} width="80%" className="mt-1" />
              <Skeleton height={20} width="50%" className="mt-2" />
            </div>
          ))}
        </div>
      ) : error ? (
        <p className="text-center text-red-500">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
          {products.map((product, index) => (
            <div key={index} className="bg-white p-4 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <img src={product.imageURL[0]} alt={product.header} className="w-full h-40 object-cover rounded-lg" />
              <h3 className="text-lg font-semibold mt-2 truncate">{product.header}</h3>
              <p className="text-sm text-gray-500 truncate">{product.description}</p>
              <p className="text-sm text-gray-500">Color: {product.color}</p>
              <div className="flex justify-between items-center mt-2">
                <span className="text-red-600 font-bold text-xl">₹{product.offerPrice}</span>
                <span className="text-gray-500 line-through">₹{product.mrp}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GiftItemsPage;
