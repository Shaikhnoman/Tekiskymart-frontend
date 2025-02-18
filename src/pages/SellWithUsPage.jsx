import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SellWithUsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.example.com/sell-with-us');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Sell With Us Requests</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Shop Seller Name</th>
            <th className="py-2 px-4 border-b">Do You Have GST</th>
            <th className="py-2 px-4 border-b">GST Number</th>
            <th className="py-2 px-4 border-b">Do You Have Shop</th>
            <th className="py-2 px-4 border-b">Shop Name</th>
            <th className="py-2 px-4 border-b">Product Details</th>
            <th className="py-2 px-4 border-b">Mobile Number</th>
            <th className="py-2 px-4 border-b">Which Product Do You Want To Sell</th>
            <th className="py-2 px-4 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">{item.shopSellerName}</td>
              <td className="py-2 px-4 border-b">{item.doYouHaveGST}</td>
              <td className="py-2 px-4 border-b">{item.gstNumber}</td>
              <td className="py-2 px-4 border-b">{item.doYouHaveShop}</td>
              <td className="py-2 px-4 border-b">{item.shopName}</td>
              <td className="py-2 px-4 border-b">{item.productDetails}</td>
              <td className="py-2 px-4 border-b">{item.mobileNumber}</td>
              <td className="py-2 px-4 border-b">{item.whichProductDoYouWantToSell}</td>
              <td className="py-2 px-4 border-b">{item.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SellWithUsPage;