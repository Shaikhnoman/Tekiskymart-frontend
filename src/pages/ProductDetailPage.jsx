

// import { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { toast } from "react-toastify";

// const ProductDetailPage = () => {
//   const { id } = useParams(); // Get product ID from URL
//   const navigate = useNavigate();

//   const [product, setProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [selectedImage, setSelectedImage] = useState();

//   useEffect(() => {
//     axios
//       .get(`https://tekisky-backend.onrender.com/product/getOneProduct/${id}`)
//       .then((response) => {
//         if (response) {
//           setProduct(response.data);
//           setSelectedImage(response?.data.imageURL[0]); // Set first image
//         } else {
//           console.error("Product not found!");
//         }
//       })
//       .catch((error) => console.error("Error fetching product:", error));
//   }, [id]);

//   if (!product) {
//     return (
//       <div className="text-center text-red-500">Loading product details...</div>
//     );
//   }

//   const increaseQuantity = () => setQuantity(quantity + 1);
//   const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

//   // Handle adding to cart
//   const handleAddToCart = () => {
//     const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
//     const existingItem = cartItems.find((item) => item._id === product._id);

//     if (existingItem) {
//       existingItem.quantity += quantity;
//     } else {
//       cartItems.push({ ...product, quantity });
//     }

//     localStorage.setItem("cart", JSON.stringify(cartItems));
//     toast.success("Product added to cart!");
//   };

//   // Handle Checkout
//   const handleCheckout = () => {
//     navigate("/checkout", { state: { cart: [{ ...product, quantity }] } });
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4 flex gap-8">
//       {/* Left Section - Product Images */}
//       <div className="w-1/2">
//         <img
//           src={selectedImage}
//           alt={product.productName}
//           className="w-full rounded-lg transition-all duration-300"
//         />
//         <div className="flex gap-2 mt-2">
//           {product.imageURL.map((img, index) => (
//             <img
//               key={index}
//               src={img}
//               alt="Product"
//               className={`w-16 h-16 rounded-md border cursor-pointer ${
//                 selectedImage === img ? "border-blue-500" : "border-gray-300"
//               }`}
//               onClick={() => setSelectedImage(img)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Section - Product Info */}
//       <div className="w-1/2">
//         <h1 className="text-3xl font-bold">{product.productName}</h1>
//         <p className="text-lg text-gray-500">{product.productCategory}</p>

//         {/* Price Section */}
//         <div className="mt-2">
//           <p className="text-2xl font-bold text-red-600">
//             Offer Price: ₹{product.offerPrice}
//           </p>
//           <p className="text-lg text-gray-400 line-through">
//             MRP: ₹{product.mrp}
//           </p>
//         </div>

//         {/* Product Details */}
//         <p className="mt-3 text-lg">
//           <strong>Size:</strong> {product.size || "N/A"}
//         </p>
//         <p className="text-lg">
//           <strong>Color:</strong> {product.color || "N/A"}
//         </p>
//         <p className="text-lg">
//           <strong>Material:</strong> {product.material || "N/A"}
//         </p>

//         {/* Quantity Selector */}
//         <div className="mt-4 flex items-center">
//           <span className="mr-3 text-lg">Quantity:</span>
//           <button
//             className="bg-blue-500 text-white px-3 py-1 rounded  cursor-pointer"
//             onClick={decreaseQuantity}
//           >
//             -
//           </button>
//           <span className="mx-2">{quantity}</span>
//           <button
//             className="bg-blue-500 text-white px-3 py-1 rounded  cursor-pointer"
//             onClick={increaseQuantity}
//           >
//             +
//           </button>
//         </div>

//         {/* Add to Cart & Checkout */}
//         <div className="mt-5 flex gap-3">
//           <button
//             className="bg-blue-600 text-white py-2 px-4 rounded cursor-pointer"
//             onClick={handleAddToCart}
//           >
//             Add to Cart
//           </button>
//           <button
//             className="bg-green-600 text-white py-2 px-4 rounded  cursor-pointer"
//             onClick={handleCheckout}
//           >
//             Checkout
//           </button>
//         </div>

//         {/* Delivery Info */}
//         <p className="mt-4 text-blue-600 font-semibold">
//           Delivery Charge 30 Rupees Below ₹500 <br />
//           Free Delivery Above ₹500
//         </p>
//       </div>
//     </div>
//   );
// };

// export default ProductDetailPage;

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const ProductDetailPage = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState();

  useEffect(() => {
    axios
      .get(`https://tekisky-backend.onrender.com/product/getOneProduct/${id}`)
      .then((response) => {
        if (response) {
          setProduct(response.data);
          setSelectedImage(response?.data.imageURL[0]); // Set first image
        } else {
          console.error("Product not found!");
        }
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return (
      <div className="text-center text-red-500 p-4">Loading product details...</div>
    );
  }

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(Math.max(1, quantity - 1));

  // Handle adding to cart
  const handleAddToCart = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cartItems.find((item) => item._id === product._id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cartItems.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success("Product added to cart!");
  };

  // Handle Checkout
  const handleCheckout = () => {
    navigate("/checkout", { state: { cart: [{ ...product, quantity }] } });
  };

  return (
    <div className="max-w-6xl mx-auto p-4 flex flex-col md:flex-row gap-6">
      {/* Left Section - Product Images */}
      <div className="md:w-1/2 w-full">
        <img
          src={selectedImage}
          alt={product.productName}
          className="w-full rounded-lg transition-all duration-300 shadow-lg"
        />
        <div className="flex gap-2 mt-3 overflow-x-auto">
          {product.imageURL.map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Product"
              className={`w-16 h-16 rounded-md border cursor-pointer ${
                selectedImage === img ? "border-blue-500" : "border-gray-300"
              }`}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Right Section - Product Info */}
      <div className="md:w-1/2 w-full">
        <h1 className="text-2xl md:text-3xl font-bold">{product.productName}</h1>
        <p className="text-lg text-gray-500">{product.productCategory}</p>

        {/* Price Section */}
        <div className="mt-2">
          <p className="text-xl md:text-2xl font-bold text-red-600">
            Offer Price: ₹{product.offerPrice}
          </p>
          <p className="text-lg text-gray-400 line-through">
            MRP: ₹{product.mrp}
          </p>
        </div>

        {/* Product Details */}
        <p className="mt-2 text-base md:text-lg">
          <strong>Size:</strong> {product.size || "N/A"}
        </p>
        <p className="text-base md:text-lg">
          <strong>Color:</strong> {product.color || "N/A"}
        </p>
        <p className="text-base md:text-lg">
          <strong>Material:</strong> {product.material || "N/A"}
        </p>

        {/* Quantity Selector */}
        <div className="mt-4 flex items-center gap-3">
          <span className="text-lg">Quantity:</span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <span className="text-lg">{quantity}</span>
          <button
            className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>

        {/* Add to Cart & Checkout */}
        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-md w-full sm:w-auto hover:bg-blue-700 transition"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-green-600 text-white py-2 px-4 rounded-md w-full sm:w-auto hover:bg-green-700 transition"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>

        {/* Delivery Info */}
        <p className="mt-4 text-blue-600 font-semibold text-sm md:text-base">
          Delivery Charge ₹30 for orders below ₹500 <br />
          Free Delivery on orders above ₹500
        </p>
      </div>
    </div>
  );
};

export default ProductDetailPage;

