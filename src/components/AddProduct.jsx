import { useState } from "react";
import axios from "axios";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    type: "",
    brand: "",
    header: "",
    stockQty: "",
    mrp: "",
    offerPrice: "",
    tekiskyPrice: "",
    weight: "",
    unit: "",
    description: "",
    sellerInfo: "",
    dealOfTheDay: false,
    approved: "No",
    images: [],
  });

  const categories = ["Electronics", "Clothing", "Groceries", "Accessories"];
  const units = ["Kg", "Liters", "Pieces"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleToggle = () => {
    setFormData({ ...formData, dealOfTheDay: !formData.dealOfTheDay });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://your-api-endpoint.com/products"; // Replace with actual API URL
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      if (key === "images") {
        Array.from(formData.images).forEach((file) => {
          formDataToSend.append("images", file);
        });
      } else {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post(apiUrl, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Product added:", response.data);
      alert("Product added successfully!");
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-blue-600 mb-4">
          Add Product
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Category */}
          <div>
            <label className="block text-gray-700">Product Category:</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            >
              <option value="">Select Category</option>
              {categories.map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-gray-700">Product Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter product name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Product Type */}
          <div>
            <label className="block text-gray-700">Product Type:</label>
            <input
              type="text"
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Enter product type"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Product Brand */}
          <div>
            <label className="block text-gray-700">Product Brand:</label>
            <input
              type="text"
              name="brand"
              value={formData.brand}
              onChange={handleChange}
              placeholder="Enter product brand"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* MRP */}
          <div>
            <label className="block text-gray-700">MRP:</label>
            <input
              type="number"
              name="mrp"
              value={formData.mrp}
              onChange={handleChange}
              placeholder="Enter MRP"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Offer Price */}
          <div>
            <label className="block text-gray-700">Offer Price:</label>
            <input
              type="number"
              name="offerPrice"
              value={formData.offerPrice}
              onChange={handleChange}
              placeholder="Enter Offer Price"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Tekisky Price */}
          <div>
            <label className="block text-gray-700">Tekisky Price:</label>
            <input
              type="number"
              name="tekiskyPrice"
              value={formData.tekiskyPrice}
              onChange={handleChange}
              placeholder="Enter Tekisky Price"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Upload Images */}
          <div>
            <label className="block text-gray-700">Upload Images:</label>
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="w-full px-3 py-2 border rounded-lg"
            />
          </div>

          {/* Deal of the Day Toggle */}
          <div className="flex items-center space-x-2">
            <label className="block text-gray-700">Deal of the Day:</label>
            <input
              type="checkbox"
              checked={formData.dealOfTheDay}
              onChange={handleToggle}
              className="w-5 h-5"
            />
          </div>

          {/* Approved */}
          <div className="flex items-center space-x-4">
            <label className="block text-gray-700">Approved:</label>
            <label>
              <input
                type="radio"
                name="approved"
                value="Yes"
                checked={formData.approved === "Yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="approved"
                value="No"
                checked={formData.approved === "No"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>

          {/* Submit & Cancel */}
          <div className="flex justify-between">
            <button
              type="button"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
