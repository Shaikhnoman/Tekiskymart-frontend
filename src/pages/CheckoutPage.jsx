// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const CheckoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { cart, subtotal, totalAmount } = location.state || {};

//   const [form, setForm] = useState({
//     name: "",
//     whatsapp: "",
//     phone: "",
//     address: "",
//     landmark: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Order Details:", form, cart);
//     alert("Order placed successfully!");
//     navigate("/");
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Payment Step</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input
//           type="text"
//           name="name"
//           placeholder="Enter Name"
//           className="border p-2 w-full rounded"
//           value={form.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="whatsapp"
//           placeholder="Enter Your WhatsApp Number"
//           className="border p-2 w-full rounded"
//           value={form.whatsapp}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="phone"
//           placeholder="Enter Phone Number"
//           className="border p-2 w-full rounded"
//           value={form.phone}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="address"
//           placeholder="Enter House No, Building, etc."
//           className="border p-2 w-full rounded"
//           value={form.address}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="landmark"
//           placeholder="Enter Landmark E.G. Near IT Park"
//           className="border p-2 w-full rounded"
//           value={form.landmark}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="pincode"
//           placeholder="Enter Pincode"
//           className="border p-2 w-full rounded"
//           value={form.pincode}
//           onChange={handleChange}
//           required
//         />
//         <div className="flex justify-between">
//           <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>
//             Previous
//           </button>
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
//             Proceed to Payment
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;
// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// const CheckoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { cart, subtotal, totalAmount } = location.state || {};

//   const [form, setForm] = useState({
//     name: "",
//     whatsapp: "",
//     phone: "",
//     address: "",
//     landmark: "",
//     pincode: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/order-summary", {
//       state: { cart, subtotal, totalAmount, form },
//     });
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Enter Shipping Details</h1>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Enter Name" className="border p-2 w-full rounded" value={form.name} onChange={handleChange} required />
//         <input type="text" name="whatsapp" placeholder="Enter Your WhatsApp Number" className="border p-2 w-full rounded" value={form.whatsapp} onChange={handleChange} required />
//         <input type="text" name="phone" placeholder="Enter Phone Number" className="border p-2 w-full rounded" value={form.phone} onChange={handleChange} required />
//         <input type="text" name="landmark" placeholder="Enter Landmark" className="border p-2 w-full rounded" value={form.landmark} onChange={handleChange} required />
//         <input type="text" name="pincode" placeholder="Enter Pincode" className="border p-2 w-full rounded" value={form.pincode} onChange={handleChange} required />
//         <textarea name="address" placeholder="Enter Address Details" className="border p-2 w-full rounded" value={form.address} onChange={handleChange} required />
//         <div className="flex justify-between">
//           <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>Back</button>
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Proceed to Payment</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;


// import { useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";
// import axios from "axios";

// const CheckoutPage = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { cart, subtotal, totalAmount } = location.state || {};

//   const [form, setForm] = useState({
//     name: "",
//     whatsapp: "",
//     phone: "",
//     address: "",
//     landmark: "",
//     pincode: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
    
//     try {
//       const response = await axios.post("https://tekisky-backend.onrender.com/order/saveorder", {
//         customer: form,
//         cart,
//         subtotal,
//         totalAmount,
//       });

//       if (response.status === 200) {
//         navigate("/order-summary", {
//           state: { cart, subtotal, totalAmount, form, orderId: response.data.orderId },
//         });
//       }
//     } catch (err) {
//       setError("Failed to place order. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4 text-center">Enter Shipping Details</h1>
//       {error && <p className="text-red-500 text-center">{error}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Enter Name" className="border p-2 w-full rounded" value={form.name} onChange={handleChange} required />
//         <input type="text" name="whatsapp" placeholder="Enter Your WhatsApp Number" className="border p-2 w-full rounded" value={form.whatsapp} onChange={handleChange} required />
//         <input type="text" name="phone" placeholder="Enter Phone Number" className="border p-2 w-full rounded" value={form.phone} onChange={handleChange} required />
//         <input type="text" name="landmark" placeholder="Enter Landmark" className="border p-2 w-full rounded" value={form.landmark} onChange={handleChange} required />
//         <input type="text" name="pincode" placeholder="Enter Pincode" className="border p-2 w-full rounded" value={form.pincode} onChange={handleChange} required />
//         <textarea name="address" placeholder="Enter Address Details" className="border p-2 w-full rounded" value={form.address} onChange={handleChange} required />
//         <div className="flex justify-between">
//           <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>Back</button>
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded" disabled={loading}>
//             {loading ? "Processing..." : "Proceed to Payment"}
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CheckoutPage;


import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart, subtotal, totalAmount } = location.state || {};

  const [form, setForm] = useState({
    name: "",
    whatsapp: "",
    phone: "",
    address: "",
    landmark: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    // Retrieve token from local storage
    const token = localStorage.getItem("token");

    if (!token) {
      setError("Authentication error. Please log in.");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "https://tekisky-backend.onrender.com/order/saveorder",
        {
          customer: form,
          cart,
          subtotal,
          totalAmount,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        navigate("/order-summary", {
          state: { cart, subtotal, totalAmount, form, orderId: response.data.orderId },
        });
      }
    } catch (err) {
      setError("Failed to place order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Enter Shipping Details</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Enter Name" className="border p-2 w-full rounded" value={form.name} onChange={handleChange} required />
        <input type="text" name="whatsapp" placeholder="Enter Your WhatsApp Number" className="border p-2 w-full rounded" value={form.whatsapp} onChange={handleChange} required />
        <input type="text" name="phone" placeholder="Enter Phone Number" className="border p-2 w-full rounded" value={form.phone} onChange={handleChange} required />
        <input type="text" name="landmark" placeholder="Enter Landmark" className="border p-2 w-full rounded" value={form.landmark} onChange={handleChange} required />
        <input type="text" name="pincode" placeholder="Enter Pincode" className="border p-2 w-full rounded" value={form.pincode} onChange={handleChange} required />
        <textarea name="address" placeholder="Enter Address Details" className="border p-2 w-full rounded" value={form.address} onChange={handleChange} required />
        <div className="flex justify-between">
          <button type="button" className="bg-gray-600 text-white py-2 px-4 rounded" onClick={() => navigate(-1)}>Back</button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded" disabled={loading}>
            {loading ? "Processing..." : "Proceed to Payment"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CheckoutPage;

