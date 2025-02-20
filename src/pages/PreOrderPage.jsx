


import { useState } from "react";
import axios from "axios";

const PreOrderPage = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    mobileNumber: "",
    whichProductWantToPurchase: "",
    quantity: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    try {
      const response = await axios.post(
        "https://tekisky-backend.onrender.com/pre/addpreorder",
        formData
      );
      setMessage("Pre-order submitted successfully!");
      setFormData({
        customerName: "",
        mobileNumber: "",
        whichProductWantToPurchase: "",
        quantity: "",
        description: "",
      });
      console.log(formData);
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Error submitting pre-order. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Pre Order</h2>
      <p className="text-center text-blue-600 font-semibold">
        Get 15% Off On Pre-Orders!
      </p>

      {message && (
        <p
          className={`text-center font-semibold ${
            message.includes("Error") ? "text-red-500" : "text-green-500"
          }`}
        >
          {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">
            Your Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="customerName"
            value={formData.customerName}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter Name"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">
            Your Mobile Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">
            Which Product You Want To Purchase{" "}
            <span className="text-red-500">*</span>
          </label>
          <select
            name="whichProductWantToPurchase"
            value={formData.whichProductWantToPurchase}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            required
          >
            {/* <option value="">Select Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option> */}

{/* <option value="">Select Product</option> */}
            <option value="Product 1">GIFT-ITEMS</option>
            <option value="Product 2">DATES</option>
            <option value="Product 4">PERFUMES</option>
            <option value="Product 5">CLOTHES</option>
            <option value="Product 6">HOMEMADE SNAKES</option>
            <option value="Product 7">CROCKERY</option>
            <option value="Product 8">WATCHES</option>
            <option value="Product 9">MOBILES</option>{" "}
            <option value="Product 10">DRY FRUITES</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">
            How Much Quantity <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Quantity"
            required
          />
        </div>
        <div>
          <label className="block font-semibold">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg"
            placeholder="Enter Description"
            rows="3"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg font-bold"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Pre Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreOrderPage;