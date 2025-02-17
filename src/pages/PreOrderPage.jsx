

import { useState } from "react";
import axios from "axios";

const PreOrderPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    product: "",
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
      const response = await axios.post("https://tekisky-backend.onrender.com/pre/addpreorder", formData);
      setMessage("Pre-order submitted successfully!");
      setFormData({
        name: "",
        mobile: "",
        product: "",
        quantity: "",
        description: "",
      });
      console.log(formData)
    } catch (error) {
      setMessage("Error submitting pre-order. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <h2 className="text-2xl font-bold text-center mb-4">Pre Order</h2>
      <p className="text-center text-blue-600 font-semibold">Get 15% Off On Pre-Orders!</p>
      
      {message && <p className={`text-center font-semibold ${message.includes("Error") ? "text-red-500" : "text-green-500"}`}>{message}</p>}
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
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg font-bold" disabled={loading}>
            {loading ? "Submitting..." : "Submit Pre Order"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PreOrderPage;


// // import React, { useState } from "react";
// // import axios from "axios";

// // const PreOrderPage = () => {

// //   const [formData, setFormData] = useState({
// //     name: "",
// //     mobile: "",
// //     product: "",
// //             quantity: "",
// //             description: "",
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     // SetShow(false)
// //     setFormData({
// //       ...formData,
// //       [name]: value,
// //     });
// //   };
// //   // let Showdata=()=>{ SetShow(true)}
// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // SetShow(false)
// //     // Handle form submission, like sending data to the backend
// //     // console.log(formData);
// //     axios
// //       .post("https://tekisky-backend.onrender.com/pre/addpreorder",formData,{
// //         headers: {
// //             'Content-Type': 'application/json',
// //         },
// //     })
// //       .then((response) => {
// //         setFormData(response.data);
// //         console.log(response.data);
// //       })
// //       .catch((err) => {
// //         console.log(err);
// //       });
// //     }
// //  return (
// //   <div>
  
// //    <div className="fform">
// //      <form  onSubmit={handleSubmit}>
// //       <label>
// //         First Name:
// //         <input
// //           type="text"
// //           name="firstName"
// //           value={formData.firstName}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Last Name:
// //         <input
// //           type="text"
// //           name="lastName"
// //           value={formData.lastName}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Mobile Number:
// //         <input
// //           type="text"
// //           name="mobileNumber"
// //           value={formData.mobileNumber}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Email:
// //         <input
// //           type="email"
// //           name="email"
// //           value={formData.email}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Password:
// //         <input
// //           type="password"
// //           name="password"
// //           value={formData.password}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Role:
// //         <select
// //           name="role"
// //           value={formData.role}
// //           onChange={handleChange}
// //         >
// //           <option value="seller">Seller</option>
// //           <option value="admin">Admin</option>
// //         </select>
// //       </label>
// //       <br />

// //       <label>
// //         Shop Category:
// //         <input
// //           type="text"
// //           name="shopCategory"
// //           value={formData.shopCategory}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Shop Name:
// //         <input
// //           type="text"
// //           name="shopName"
// //           value={formData.shopName}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         Shop Address:
// //         <input
// //           type="text"
// //           name="shopAddress"
// //           value={formData.shopAddress}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />

// //       <label>
// //         GST:
// //         <input
// //           type="text"
// //           name="GST"
// //           value={formData.GST}
// //           onChange={handleChange}
// //           required
// //         />
// //       </label>
// //       <br />
// //       <button type="submit">Submit</button>
// //     </form>
// //    </div>
 
// //     </div>
// //   );
// // };

// // export default PreOrderPage;




// import React, { useState } from "react";
// import axios from "axios";

// const PreOrderPage = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     mobile: "",
//     product: "",
//     quantity: "",
//     description: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//       .post("https://tekisky-backend.onrender.com/pre/addpreorder",formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         console.log("Pre-order submitted:", response.data);
//       })
//       .catch((err) => {
//         console.error("Error submitting pre-order:", err);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg flex w-3/4 max-w-4xl">
//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold mb-6">Pre-Order Form</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-700">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Mobile:</label>
//               <input
//                 type="text"
//                 name="mobile"
//                 value={formData.mobile}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Product:</label>
//               <input
//                 type="text"
//                 name="product"
//                 value={formData.product}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Quantity:</label>
//               <input
//                 type="number"
//                 name="quantity"
//                 value={formData.quantity}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-700">Description:</label>
//               <textarea
//                 name="description"
//                 value={formData.description}
//                 onChange={handleChange}
//                 required
//                 className="w-full p-2 border rounded"
//               />
//             </div>
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//               Submit Pre-Order
//             </button>
//           </form>
//         </div>
//         <div className="w-1/2 bg-blue-600 text-white flex items-center justify-center p-8 rounded-r-lg">
//           <div>
//             <h2 className="text-2xl font-bold">Welcome to Tekisky Mart!</h2>
//             <p className="mt-2">Secure your product in advance with our pre-order system.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PreOrderPage;

// import React, { useState } from "react";
// import axios from "axios";

// const PreOrderPage = () => {
//     const[show,SetShow]=useState(false)
//   const [formData, setFormData] = useState({
//     userId: "",
//   });
//   const [message, setMessage] = useState(""); 
//   const [userData, setUserData] = useState(null); 

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value.trim(),
//     });
//   };
//   let showf=async(e)=>{
//     e.preventDefault();
//     SetShow(true)
//   }
//   const handleFetch = async (e) => {
//     e.preventDefault();

//     try {
//       // Retrieve the token from localStorage
//       const token = JSON.parse(localStorage.getItem("token"));
//       console.log("Parsed Token:", token); // Debugging

//       if (!token) {
//         setMessage("No token found. Please log in.");
//         return;
//       }

//       // API endpoint
//       const url = https://tekisky-backend.onrender.com/pre/addpreorder

//       // Make API request
//       const response = await axios.get(url,formData{
//         headers: { Authorization: Bearer ${token} }, // Send token with Bearer schema
//       });

//       // Store the fetched user data
//       setUserData(response.data);
//       setMessage("Data fetched successfully!");
//     } catch (error) {
//       console.log("Fetch error:", error);
//       setMessage(
//         error.response?.data?.message ||
//           "Failed to fetch data. Please try again."
//       );
//     }
//   };
//   {JSON.stringify(userData, null, 2)}
// //   {userData.map((val)=>{
// //     return(
// //         <div></div>
// //     )})}
//   return (
//     <div>
//         {!show?(<button onClick={showf}>getproduct</button>):(
//       <form onSubmit={handleFetch}>
//         <h2>Fetch User Data</h2>
//         <label>
//           productID:
//           <input
//             type="text"
//             name="userId"
//             value={formData.userId}
//             onChange={handleChange}
//             placeholder="Enter User ID"
//             required
//           />
//         </label>
//         <button type="submit">Getone
          
//           User</button>
//         <pre>{JSON.stringify(userData,null, 2)}</pre>
//       </form>
//     //   <h3>User Data:</h3>
//     )}
//       {/* )}   */}
//        {/* <pre>{JSON.stringify(userData,null, 2)}</pre> */}
//     </div>
//   );
// };

// export default PreOrderPage;