// 

import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle, XCircle } from "lucide-react";
import ProductSkeleton from "../common/ProductsSkeleton";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // Navigate to details page

  useEffect(() => {
    axios
      .get("https://tekisky-backend.onrender.com/product/getproduct")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Featured Products
      </h1>

      {/* Product Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {loading
          ? [...Array(8)].map((_, index) => <ProductSkeleton key={index} />)
          : products.map((product) => (
              <motion.div
                key={product._id}
                className="bg-white shadow-md rounded-lg p-3 border border-gray-200 hover:shadow-lg transition-transform duration-300 cursor-pointer"
                whileHover={{ scale: 1.02 }}
                onClick={() => navigate(`/product/${product._id}`, { state: product })}
              >
                {/* Product Image */}
                <div className="relative">
                  <img
                    src={product.imageURL[0]}
                    alt={product.productName}
                    className="w-full h-40 object-contain rounded-md"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-3">
                  <h2 className="text-sm font-semibold text-gray-800 truncate">
                    {product.header}
                  </h2>
                  <p className="text-xs text-gray-500">{product.productBrand}</p>

                  {/* Category & Rating */}
                  <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                    <Star className="text-yellow-400 w-4 h-4" />
                    {product.productCategory}
                  </div>

                  {/* Price & Stock */}
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-lg font-bold text-green-600">
                      ₹{product.offerPrice}
                      <span className="text-gray-400 text-sm line-through ml-1">
                        ₹{product.mrp}
                      </span>
                    </p>
                    {product.availableStockQty > 0 ? (
                      <CheckCircle className="text-green-500 w-5 h-5" />
                    ) : (
                      <XCircle className="text-red-500 w-5 h-5" />
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
                    <ShoppingCart size={16} />
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            ))}
      </div>
    </div>
  );
};

export default Products;
