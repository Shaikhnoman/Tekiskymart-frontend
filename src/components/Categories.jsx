import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import axios from "axios";
import { motion } from "framer-motion";

const Categories = () => {
  const [categories, setCategories] = useState([]); // Store categories
  const navigate = useNavigate(); // For navigation

  useEffect(() => {
    axios
      .get("https://tekisky-backend.onrender.com/product/getproduct") // Fetch products
      .then((response) => {
        const products = response.data;
        const categorizedProducts = {};

        // Group products by category
        products.forEach((product) => {
          if (!categorizedProducts[product.productType]) {
            categorizedProducts[product.productType] = product;
          }
        });

        // Convert object to array format for mapping
        setCategories(
          Object.keys(categorizedProducts).map((category) => ({
            name: category,
            image: categorizedProducts[category].imageURL[0], // First product image
          }))
        );
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {/* Categories Header */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Shop by Category
        </h2>

        {/* Categories Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-center">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center cursor-pointer"
              whileHover={{ scale: 1.1 }}
              onClick={() => navigate(`/category/${category.name}`)} // Navigate to category page
            >
              {/* Circular Image */}
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Category Name */}
              <p className="mt-2 text-xs font-semibold text-gray-700 uppercase">
                {category.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
