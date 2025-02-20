// import { useState, useEffect } from "react";
// import axios from "axios";

// const PreOrderRequest = () => {
//   const [orders, setOrders] = useState([]);
//   const [filteredOrders, setFilteredOrders] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     fetchOrders();
//   }, []);

//   const fetchOrders = async () => {
//     try {
//       const response = await axios.get("https://tekisky-backend.onrender.com/pre/getpreorder");
//       setOrders(response.data);
//       setFilteredOrders(response.data);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   const handleSearch = (e) => {
//     const query = e.target.value.toLowerCase();
//     setSearchQuery(query);
//     const filtered = orders.filter(
//       (order) =>
//         order.customerName.toLowerCase().includes(query) ||
//         order.product.toLowerCase().includes(query) ||
//         order.mobileNumber.includes(query)
//     );
//     setFilteredOrders(filtered);
//   };

//   return (
//     <div className="max-w-6xl mx-auto p-4">
//       <h2 className="text-2xl font-semibold mb-4">Orders Table</h2>

//       <input
//         type="text"
//         placeholder="Search By Customer Name, Product, Or Mobile Number"
//         className="border p-2 rounded w-full md:w-1/2 mb-4"
//         value={searchQuery}
//         onChange={handleSearch}
//       />

//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-300">
//           <thead>
//             <tr className="bg-gray-200 text-left">
//               <th className="border p-2">ID</th>
//               <th className="border p-2">Customer Name</th>
//               <th className="border p-2">Product</th>
//               <th className="border p-2">Quantity</th>
//               <th className="border p-2">Mobile Number</th>
//               <th className="border p-2">Created At</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredOrders.length > 0 ? (
//               filteredOrders.map((order, index) => (
//                 <tr key={index} className="hover:bg-gray-100">
//                   <td className="border p-2">{order.id}</td>
//                   <td className="border p-2">{order.customerName}</td>
//                   <td className="border p-2">{order.product}</td>
//                   <td className="border p-2">{order.quantity}</td>
//                   <td className="border p-2">{order.mobileNumber}</td>
//                   <td className="border p-2">{order.createdAt}</td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="border p-2 text-center">
//                   No orders found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default PreOrderRequest;
import React, { useState } from "react";
import axios from "axios";
// import "./app.css";

const PreOrderRequest = () => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setMessage("");

    try {
      const url = "https://tekisky-backend.onrender.com/pre/getpreorder"; // ✅ Fixed API URL

      const response = await axios.get(url);
      setUserData(response.data);
      setMessage("Data fetched successfully!");
    } catch (error) {
      console.error("Fetch error:", error.response?.data || error.message);
      setMessage(
        error.response?.data?.message || "Failed to fetch data. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center text-blue-600">
        PreOrder Requests
      </h2>
      <div className="flex justify-center">
        <button
          onClick={handleFetch}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {loading ? "Fetching..." : "Get PreOrders"}
        </button>
      </div>
      {message && <p className="mt-2 text-center text-red-500">{message}</p>}

      {userData.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-200 border border-gray-700">
                <th className="border border-gray-700 p-2">Name</th>
                <th className="border border-gray-700 p-2">Mobile no</th>
                <th className="border border-gray-700 p-2">Product</th>
                <th className="border border-gray-700 p-2">Quantity</th>
                <th className="border border-gray-700 p-2">Description</th>
              
              </tr>
            </thead>
            <tbody>
              {userData.map((val, index) => (
                <tr key={index} className="hover:bg-gray-100 border border-gray-700">
                  <td className="border border-gray-700 p-2">{val.customerName}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.mobileNumber}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.whichProductWantToPurchase}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.quantity}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.description}</td>
                  <td className="border border-gray-700 p-2 text-center">{new Date(val.createdAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PreOrderRequest;

