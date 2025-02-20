// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const SellWithUsPage = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://api.example.com/sell-with-us');
//         setData(response.data);
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">All Sell With Us Requests</h1>
//       <table className="min-w-full bg-white border border-gray-300">
//         <thead>
//           <tr>
//             <th className="py-2 px-4 border-b">Shop Seller Name</th>
//             <th className="py-2 px-4 border-b">Do You Have GST</th>
//             <th className="py-2 px-4 border-b">GST Number</th>
//             <th className="py-2 px-4 border-b">Do You Have Shop</th>
//             <th className="py-2 px-4 border-b">Shop Name</th>
//             <th className="py-2 px-4 border-b">Product Details</th>
//             <th className="py-2 px-4 border-b">Mobile Number</th>
//             <th className="py-2 px-4 border-b">Which Product Do You Want To Sell</th>
//             <th className="py-2 px-4 border-b">Created At</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item, index) => (
//             <tr key={index} className="hover:bg-gray-100">
//               <td className="py-2 px-4 border-b">{item.shopSellerName}</td>
//               <td className="py-2 px-4 border-b">{item.doYouHaveGST}</td>
//               <td className="py-2 px-4 border-b">{item.gstNumber}</td>
//               <td className="py-2 px-4 border-b">{item.doYouHaveShop}</td>
//               <td className="py-2 px-4 border-b">{item.shopName}</td>
//               <td className="py-2 px-4 border-b">{item.productDetails}</td>
//               <td className="py-2 px-4 border-b">{item.mobileNumber}</td>
//               <td className="py-2 px-4 border-b">{item.whichProductDoYouWantToSell}</td>
//               <td className="py-2 px-4 border-b">{item.createdAt}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default SellWithUsPage;

import { useState } from "react";
import axios from "axios";

const SellWithUsPage = () => {
  const [formData, setFormData] = useState({
    shopSellerName: "",
    mobileNumber: "",
    whichProductYouHaveToSell: "",
    productDetails: "",
    doYouHaveShop: false,
    shopName: "",
    doYouHaveGST: false,
    GST: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "radio") {
      const booleanValue = value === "yes";
      setFormData((prevData) => ({
        ...prevData,
        [name]: booleanValue,
        ...(name === "doYouHaveShop" && !booleanValue ? { shopName: "" } : {}),
        ...(name === "doYouHaveGST" && !booleanValue ? { GST: "" } : {}),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      await axios.post("https://tekisky-backend.onrender.com/client/enquiry", formData);
      setMessage("Enquiry submitted successfully!");
      setFormData({
        shopSellerName: "",
        mobileNumber: "",
        whichProductYouHaveToSell: "",
        productDetails: "",
        doYouHaveShop: false,
        shopName: "",
        doYouHaveGST: false,
        GST: "",
      });
    } catch (error) {
      setMessage("Failed to submit enquiry. Please try again.");
      console.error("Submission error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sell With Us</h1>
      <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Authentic And Reliable Genuine Products</li>
        <li>No Illegal Materials</li>
        <li>All Government Norms Should Be Followed</li>
        <li>₹1000 Subscription For 6 Months With A Maximum Of 10 Product Sales</li>
        <li>Deals Only For Premium Customers</li>
      </ul>
      {message && (
        <p className={`text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            name="shopSellerName"
            value={formData.shopSellerName}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Mobile Number *</label>
          <input
            type="text"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Mobile Number"
            required
            pattern="\d{10}"
            title="Enter a valid 10-digit mobile number"
          />
        </div>
        <div>
          <label className="block font-medium">Which Product Do You Want To Sell *</label>
          <input
            type="text"
            name="whichProductYouHaveToSell"
            value={formData.whichProductYouHaveToSell}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Product Name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Details *</label>
          <textarea
            name="productDetails"
            value={formData.productDetails}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Product Details"
            required
          ></textarea>
        </div>
        <div>
          <label className="font-medium">Do You Have Shop?</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="doYouHaveShop"
                value="yes"
                checked={formData.doYouHaveShop === true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="doYouHaveShop"
                value="no"
                checked={formData.doYouHaveShop === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        {formData.doYouHaveShop && (
          <div>
            <label className="block font-medium">Shop Name *</label>
            <input
              type="text"
              name="shopName"
              value={formData.shopName}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter Shop Name"
              required={formData.doYouHaveShop}
            />
          </div>
        )}
        <div>
          <label className="font-medium">Do You Have G.S.T. Number?</label>
          <div className="flex items-center space-x-4">
            <label>
              <input
                type="radio"
                name="doYouHaveGST"
                value="yes"
                checked={formData.doYouHaveGST === true}
                onChange={handleChange}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="doYouHaveGST"
                value="no"
                checked={formData.doYouHaveGST === false}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>
        {formData.doYouHaveGST && (
          <div>
            <label className="block font-medium">GST Number *</label>
            <input
              type="text"
              name="GST"
              value={formData.GST}
              onChange={handleChange}
              className="w-full p-2 border rounded-md"
              placeholder="Enter GST Number"
              required={formData.doYouHaveGST}
            />
          </div>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Enquiry"}
        </button>
      </form>
    </div>
  );
};

export default SellWithUsPage;
