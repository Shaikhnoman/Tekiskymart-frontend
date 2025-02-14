// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
// import { ShoppingCart, Star, CheckCircle, XCircle } from "lucide-react";
// import ProductSkeleton from "../common/ProductsSkeleton";

// const CategoryPage = () => {
//   const { categoryName } = useParams(); // Get category name from URL
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     axios
//       .get("https://tekisky-backend.onrender.com/product/getproduct") // Fetch all products
//       .then((response) => {
//         // Filter products belonging to the selected category
//         const filteredProducts = response.data.filter(
//           (product) => product.productType === categoryName
//         );
//         setProducts(filteredProducts);
//         setLoading(false);
//       })
//       .catch((error) => {
//         console.error("Error fetching products:", error);
//         setLoading(false);
//       });
//   }, [categoryName]);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//         {categoryName}
//       </h1>

//       {loading ? (
//         /** Show multiple skeletons like YouTube **/
//         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//           {Array.from({ length: 8 }).map((_, index) => (
//             <ProductSkeleton key={index} />
//           ))}
//         </div>
//       ) : products.length === 0 ? (
//         <p className="text-center text-red-500">No products found!</p>
//       ) : (
//         <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
//           {products.map((product) => (
//             <motion.div
//               key={product._id}
//               className="bg-white shadow-md rounded-lg p-3 border border-gray-200 hover:shadow-lg transition-transform duration-300"
//               whileHover={{ scale: 1.02 }}
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <img
//                   src={product.imageURL[0]}
//                   alt={product.productName}
//                   className="w-full h-40 object-contain rounded-md"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="mt-3">
//                 <h2 className="text-sm font-semibold text-gray-800 truncate">
//                   {product.productName}
//                 </h2>
//                 <p className="text-xs text-gray-500">{product.productBrand}</p>

//                 {/* Category & Rating */}
//                 <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
//                   <Star className="text-yellow-400 w-4 h-4" />
//                   {product.productCategory}
//                 </div>

//                 {/* Price & Stock */}
//                 <div className="flex justify-between items-center mt-3">
//                   <p className="text-lg font-bold text-green-600">
//                     ₹{product.offerPrice}
//                     <span className="text-gray-400 text-sm line-through ml-1">
//                       ₹{product.mrp}
//                     </span>
//                   </p>
//                   {product.availableStockQty > 0 ? (
//                     <CheckCircle className="text-green-500 w-5 h-5" />
//                   ) : (
//                     <XCircle className="text-red-500 w-5 h-5" />
//                   )}
//                 </div>

//                 {/* Add to Cart Button */}
//                 <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
//                   <ShoppingCart size={16} />
//                   Add to Cart
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { ShoppingCart, Star, CheckCircle, XCircle } from "lucide-react";
import ProductSkeleton from "../common/ProductsSkeleton";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://tekisky-backend.onrender.com/product/getproduct")
      .then((response) => {
        const filteredProducts = response.data.filter(
          (product) => product.productType === categoryName
        );
        setProducts(filteredProducts);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, [categoryName]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
        {categoryName}
      </h1>

      {loading ? (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      ) : products.length === 0 ? (
        <p className="text-center text-red-500">No products found!</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {products.map((product) => (
            <motion.div
              key={product._id}
              className="bg-white shadow-md rounded-lg p-3 border border-gray-200 hover:shadow-lg transition-transform duration-300 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => navigate(`/product/${product._id}`)}
            >
              <div className="relative">
                <img
                  src={product.imageURL[0]}
                  alt={product.productName}
                  className="w-full h-40 object-contain rounded-md"
                />
              </div>

              <div className="mt-3">
                <h2 className="text-sm font-semibold text-gray-800 truncate">
                  {product.productName}
                </h2>
                <p className="text-xs text-gray-500">{product.productBrand}</p>

                <div className="flex items-center gap-1 mt-2 text-xs text-gray-600">
                  <Star className="text-yellow-400 w-4 h-4" />
                  {product.productCategory}
                </div>

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

                <button className="mt-3 w-full bg-blue-500 text-white py-2 text-sm rounded-md flex items-center justify-center gap-2 hover:bg-blue-600 transition">
                  <ShoppingCart size={16} />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryPage;


