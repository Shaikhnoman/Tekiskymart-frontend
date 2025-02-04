import { useState } from "react";

export default function OrderForm() {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
    quantity: "",
    description: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="max-w-md mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4 ml-38 ">Pre-Order</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <label>Your Name</label>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" /><br></br>
        <label>Your Mobile No.</label>
        <input type="tel" name="mobile" placeholder="Mobile" value={formData.mobile} onChange={handleChange} required className="w-full p-2 border rounded" /><br></br>
        <label>Which product you want to purchase</label>
        <input type="text" name="product" placeholder="Product" value={formData.product} onChange={handleChange} required className="w-full p-2 border rounded" /><br></br>
        <label>How much quantity</label>
        <input type="number" name="quantity" placeholder="Quantity" value={formData.quantity} onChange={handleChange} required className="w-full p-2 border rounded" /><br></br>
        <label>Description</label>
        <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" /><br></br>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}
