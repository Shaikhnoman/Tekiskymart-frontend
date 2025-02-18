import { useState, useEffect } from "react";
import axios from "axios";

const PreOrderRequest = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const response = await axios.get("https://your-backend.com/api/orders");
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
        order.product.toLowerCase().includes(query) ||
        order.mobileNumber.includes(query)
    );
    setFilteredOrders(filtered);
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Orders Table</h2>

      <input
        type="text"
        placeholder="Search By Customer Name, Product, Or Mobile Number"
        className="border p-2 rounded w-full md:w-1/2 mb-4"
        value={searchQuery}
        onChange={handleSearch}
      />

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border p-2">ID</th>
              <th className="border p-2">Customer Name</th>
              <th className="border p-2">Product</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Mobile Number</th>
              <th className="border p-2">Created At</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-2">{order.id}</td>
                  <td className="border p-2">{order.customerName}</td>
                  <td className="border p-2">{order.product}</td>
                  <td className="border p-2">{order.quantity}</td>
                  <td className="border p-2">{order.mobileNumber}</td>
                  <td className="border p-2">{order.createdAt}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="border p-2 text-center">
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

export default PreOrderRequest;
