import React, { useState } from "react";
import axios from "axios";
// import "./app.css";

const Show = () => {
  const [userData, setUserData] = useState([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFetch = async () => {
    setLoading(true);
    setMessage("");

    try {
      const url = "https://tekisky-backend.onrender.com/product/getproduct"; // ✅ Fixed API URL

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
        Product Table Data
      </h2>
      <div className="flex justify-center">
        <button
          onClick={handleFetch}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
        >
          {loading ? "Fetching..." : "Get Product"}
        </button>
      </div>
      {message && <p className="mt-2 text-center text-red-500">{message}</p>}

      {userData.length > 0 && (
        <div className="mt-4 overflow-x-auto">
          <table className="w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-200 border border-gray-700">
                <th className="border border-gray-700 p-2">Product ID</th>
                <th className="border border-gray-700 p-2">Product Name</th>
                <th className="border border-gray-700 p-2">Available Stock Qty</th>
                <th className="border border-gray-700 p-2">Price</th>
                <th className="border border-gray-700 p-2">Offer Price</th>
                <th className="border border-gray-700 p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((val, index) => (
                <tr key={index} className="hover:bg-gray-100 border border-gray-700">
                  <td className="border border-gray-700 p-2 text-center">{val._id}</td>
                  <td className="border border-gray-700 p-2">{val.productName}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.availableStockQty}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.mrp}</td>
                  <td className="border border-gray-700 p-2 text-center">{val.offerPrice}</td>
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

export default Show;
