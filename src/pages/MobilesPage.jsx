// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Skeleton from 'react-loading-skeleton'
// import 'react-loading-skeleton/dist/skeleton.css'
// const MobilesPage = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMobiles = async () => {
//       try {
//         const response = await axios.get("https://tekisky-backend.onrender.com/product/getproduct"); // 👈 API URL Change Karein
//         setMobiles(response.data); // API response ke data ko state me store kar rahe hain
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching mobiles:", error);
//         setError("Failed to load mobile data.");
//         setLoading(false);
//       }
//     };

//     fetchMobiles();
//   }, []);

//   if (loading) return <p className="text-center">Loading...</p>;
//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto p-5">
//       {/* Header Section */}
//       <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
//         <h2 className="text-xl font-bold text-blue-700">मोबाइल्स</h2>
//         <h2 className="text-xl font-bold text-blue-700">MOBILES</h2>
//         <h2 className="text-xl font-bold text-blue-700">موبائلز</h2>
//       </div>

//       {/* Mobiles Items Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
//         {mobiles.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all"
//           >
//             <img
//               src={item.image}
//               alt={item.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h3 className="mt-2 text-lg font-semibold truncate">{item.description}</h3>
//             <div className="flex justify-between items-center mt-2">
//               <span className="text-red-600 font-bold text-xl">₹{item.price}</span>
//               <span className="text-gray-500 line-through">₹{item.originalPrice}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MobilesPage;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const MobilesPage = () => {
//   const [mobiles, setMobiles] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchMobiles = async () => {
//       try {
//         const response = await axios.get("https://tekisky-backend.onrender.com/product/getproduct");
//         const filteredMobiles = response.data.filter(item => item.productType === "mobiles");
//         setMobiles(filteredMobiles);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching mobiles:", error);
//         setError("Failed to load mobile data.");
//         setLoading(false);
//       }
//     };

//     fetchMobiles();
//   }, []);

//   if (error) return <p className="text-center text-red-500">{error}</p>;

//   return (
//     <div className="container mx-auto p-5">
//       {/* Header Section */}
//       <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
//         <h2 className="text-xl font-bold text-blue-700">मोबाइल्स</h2>
//         <h2 className="text-xl font-bold text-blue-700">MOBILES</h2>
//         <h2 className="text-xl font-bold text-blue-700">موبائلز</h2>
//       </div>

//       {/* Mobiles Items Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
//         {loading
//           ? Array.from({ length: 8 }).map((_, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
//                 <Skeleton height={160} />
//                 <Skeleton className="mt-2" height={20} width={`80%`} />
//                 <Skeleton className="mt-2" height={20} width={`60%`} />
//               </div>
//             ))
//           : mobiles.map((item, index) => (
//               <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
//                 <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded-md" />
//                 <h3 className="mt-2 text-lg font-semibold truncate">{item.description}</h3>
//                 <div className="flex justify-between items-center mt-2">
//                   <span className="text-red-600 font-bold text-xl">₹{item.price}</span>
//                   <span className="text-gray-500 line-through">₹{item.originalPrice}</span>
//                 </div>
//               </div>
//             ))}
//       </div>
//     </div>
//   );
// };

// export default MobilesPage;



import React, { useEffect, useState } from "react";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MobilesPage = () => {
  const [mobiles, setMobiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMobiles = async () => {
      try {
        const response = await axios.get("https://tekisky-backend.onrender.com/product/getproduct");
        const filteredMobiles = response.data.filter(item => item.productType === "mobiles");
        setMobiles(filteredMobiles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching mobiles:", error);
        setError("Failed to load mobile data.");
        setLoading(false);
      }
    };

    fetchMobiles();
  }, []);

  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-5">
      {/* Header Section */}
      <div className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
        <h2 className="text-xl font-bold text-blue-700">मोबाइल्स</h2>
        <h2 className="text-xl font-bold text-blue-700">MOBILES</h2>
        <h2 className="text-xl font-bold text-blue-700">موبائلز</h2>
      </div>

      {/* Mobiles Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-5">
        {loading
          ? Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg">
                <Skeleton height={160} />
                <Skeleton className="mt-2" height={20} width={`80%`} />
                <Skeleton className="mt-2" height={20} width={`60%`} />
              </div>
            ))
          : mobiles.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-all">
                <img src={item.imageURL[0]} alt={item.header} className="w-full h-40 object-cover rounded-md" />
                <h3 className="mt-2 text-lg font-semibold truncate">{item.header}</h3>
                <p className="text-gray-600 text-sm truncate">{item.productName}</p>
                <p className="text-sm text-gray-500 truncate">{item.description}</p>
                <p className="text-sm text-gray-500">Color: {item.color}</p>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-red-600 font-bold text-xl">₹{item.offerPrice}</span>
                  <span className="text-gray-500 line-through">₹{item.mrp}</span>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default MobilesPage;


