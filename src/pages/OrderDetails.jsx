import { useState, useEffect } from "react";
import axios from "axios";

const OrderDetails = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem("token"); // Assuming auth is required
      const response = await axios.get("https://your-backend.com/api/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(response.data);
      setFilteredOrders(response.data);
    } catch (error) {
      console.error("Error fetching orders:", error);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    const filtered = orders.filter(
      (order) =>
        order.customerName.toLowerCase().includes(query) ||
        order.orderStatus.toLowerCase().includes(query)
    );
    setFilteredOrders(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-4">Order Details</h1>

      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          placeholder="Search by Order Status"
          className="border p-2 rounded w-full md:w-1/3"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded ml-2">
          Download Verified Orders
        </button>
        <button className="bg-green-500 text-white py-2 px-4 rounded ml-2">
          Download Delivered Orders
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">Order ID</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Total Amount</th>
              <th className="border p-2">Order Status</th>
              <th className="border p-2">Created At</th>
              <th className="border p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{order.orderId}</td>
                  <td className="border p-2">{order.customerName}</td>
                  <td className="border p-2">{order.mobileNumber}</td>
                  <td className="border p-2">{order.address}</td>
                  <td className="border p-2">{order.totalAmount}</td>
                  <td className="border p-2 text-blue-600 font-bold">
                    {order.orderStatus}
                  </td>
                  <td className="border p-2">{order.createdAt}</td>
                  <td className="border p-2">
                    <button className="bg-blue-600 text-white px-3 py-1 rounded">
                      More Info
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="border p-2 text-center">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails;
