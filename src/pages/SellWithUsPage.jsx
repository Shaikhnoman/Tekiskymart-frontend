import React, { useState } from "react";

const SellWithUsPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    details: "",
    hasShop: "no",
    hasGST: "no",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold text-center mb-6">Sell With Us</h1>
      <h2 className="text-xl font-semibold mb-4">Terms & Conditions</h2>
      <ul className="list-disc pl-6 mb-6 text-gray-700">
        <li>Authentic And Reliable Genuine Products</li>
        <li>No Illegal Materials</li>
        <li>All Government Norms Should Be Followed</li>
        <li>1000₹ Subscription For 6 Months With A Maximum Of 10 Product Sales</li>
        <li>Deals Only For Premium Customers</li>
      </ul>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium">Name *</label>
          <input
            type="text"
            name="name"
            value={formData.name}
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
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Mobile Number"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Which Product Do You Want To Sell *</label>
          <input
            type="text"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Product Name"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Product Details *</label>
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            placeholder="Enter Product Details"
            required
          ></textarea>
        </div>
        <div className="flex items-center space-x-4">
          <label className="font-medium">Do You Have Shop?</label>
          <label>
            <input
              type="radio"
              name="hasShop"
              value="yes"
              checked={formData.hasShop === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasShop"
              value="no"
              checked={formData.hasShop === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <div className="flex items-center space-x-4">
          <label className="font-medium">Do You Have G.S.T. Number?</label>
          <label>
            <input
              type="radio"
              name="hasGST"
              value="yes"
              checked={formData.hasGST === "yes"}
              onChange={handleChange}
            />
            Yes
          </label>
          <label>
            <input
              type="radio"
              name="hasGST"
              value="no"
              checked={formData.hasGST === "no"}
              onChange={handleChange}
            />
            No
          </label>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit Enquiry
        </button>
      </form>
    </div>
  );
};

export default SellWithUsPage;
