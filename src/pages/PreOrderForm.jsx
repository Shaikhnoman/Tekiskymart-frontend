import { useState } from "react";

const PreOrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    quantity: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    // API integration can be added here
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Pre Order</h2>
      <p className="text-center text-blue-600 font-semibold">Get 15% Off On Pre-Orders!</p>
      <p className="text-center text-gray-500 mb-6">Pre Order Means Order Us 5 To 10 Days Before</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-semibold">Your Name <span className="text-red-500">*</span></label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Enter Name" required />
        </div>
        <div>
          <label className="block font-semibold">Your Mobile Number <span className="text-red-500">*</span></label>
          <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Mobile Number" required />
        </div>
        <div>
          <label className="block font-semibold">Which Product You Want To Purchase <span className="text-red-500">*</span></label>
          <select name="product" value={formData.product} onChange={handleChange} className="w-full p-2 border rounded-lg" required>
            <option value="">Select Product</option>
            <option value="Product 1">Product 1</option>
            <option value="Product 2">Product 2</option>
            <option value="Product 3">Product 3</option>
          </select>
        </div>
        <div>
          <label className="block font-semibold">How Much Quantity <span className="text-red-500">*</span></label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Quantity" required />
        </div>
        <div>
          <label className="block font-semibold">Description</label>
          <textarea name="description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded-lg" placeholder="Enter Description" rows="3"></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-bold">Submit Pre Order</button>
        </div>
      </form>
    </div>
  );
};

export default PreOrderForm;