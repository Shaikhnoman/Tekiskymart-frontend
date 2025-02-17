// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const url = "https://tekisky-backend.onrender.com/user/register";

//     try {
//       await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setSuccess("Registration Successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       console.error("Error during registration:", err);
//       setError(err.response?.data?.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
//         {/* Left Section */}
//         <div className="w-1/2 p-6">
//           <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//             <p className="text-center text-sm mt-4">
//               Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
//             </p>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
//           <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
//           <p className="text-center text-sm mt-2">Join us today!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const registerUrl = "https://tekisky-backend.onrender.com/user/createuser";

//     try {
//       await axios.post(registerUrl, formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       setSuccess("Registration Successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       console.error("Error during registration:", err);
//       setError(err.response?.data?.message || "Registration failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
//         {/* Left Section */}
//         <div className="w-1/2 p-6">
//           <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Name:</label>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Password:</label>
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Register
//             </button>
//             <p className="text-center text-sm mt-4">
//               Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
//             </p>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
//           <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
//           <p className="text-center text-sm mt-2">Join us today!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     role: "user", // Default role
//     shopCategory: "",
//     shopName: "",
//     shopAddress: "",
//     GST: "",
//   });

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const registerUrl = "https://tekisky-backend.onrender.com/user/createuser";

//     console.log("Submitting Registration Data:", formData); // Debugging

//     if (!formData.firstName || !formData.lastName || !formData.mobileNumber || !formData.email || !formData.password) {
//       setError("Please fill in all required fields.");
//       return;
//     }

//     try {
//       const response = await axios.post(registerUrl, formData, {
//         headers: { "Content-Type": "application/json" },
//       });

//       console.log("Response:", response.data);
//       setSuccess("Registration Successful! Redirecting to login...");
//       setTimeout(() => navigate("/login"), 2000);
//     } catch (err) {
//       console.error("Error during registration:", err);
//       if (err.response) {
//         setError(err.response.data.message || "Registration failed. Please try again.");
//       } else {
//         setError("Something went wrong. Please try again.");
//       }
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
//         <div className="w-1/2 p-6">
//           <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">First Name:</label>
//               <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Last Name:</label>
//               <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Mobile Number:</label>
//               <input type="text" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Password:</label>
//               <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Shop Category:</label>
//               <input type="text" name="shopCategory" value={formData.shopCategory} onChange={handleChange} className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Shop Name:</label>
//               <input type="text" name="shopName" value={formData.shopName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">Shop Address:</label>
//               <input type="text" name="shopAddress" value={formData.shopAddress} onChange={handleChange} className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             <div>
//               <label className="block text-gray-600 font-medium">GST:</label>
//               <input type="text" name="GST" value={formData.GST} onChange={handleChange} className="w-full px-4 py-2 border rounded-md bg-gray-200" />
//             </div>
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">Register</button>
//             <p className="text-center text-sm mt-4">
//               Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
//             </p>
//           </form>
//         </div>

//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
//           <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
//           <p className="text-center text-sm mt-2">Join us today!</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;
// import React, { useState } from "react";
// import axios from "axios";

// const RegisterPage = () => {

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     role: "seller",
//     shopCategory: "",
//     shopName: "",
//     shopAddress: "",
//     GST: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     // SetShow(false)
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
    
//     axios
//       .post("https://tekisky-backend.onrender.com/user/createUser",formData,{
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     })
//       .then((response) => {
//         setFormData(response.data);
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//     }
//  return (
//   <div>
  
//    <div className="fform">
//      <form  onSubmit={handleSubmit}>
//       <label>
//         First Name:
//         <input
//           type="text"
//           name="firstName"
//           value={formData.firstName}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Last Name:
//         <input
//           type="text"
//           name="lastName"
//           value={formData.lastName}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Mobile Number:
//         <input
//           type="text"
//           name="mobileNumber"
//           value={formData.mobileNumber}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Email:
//         <input
//           type="email"
//           name="email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Password:
//         <input
//           type="password"
//           name="password"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Role:
//         <select
//           name="role"
//           value={formData.role}
//           onChange={handleChange}
//         >
//           <option value="seller">Seller</option>
//           <option value="admin">Admin</option>
//         </select>
//       </label>
//       <br />

//       <label>
//         Shop Category:
//         <input
//           type="text"
//           name="shopCategory"
//           value={formData.shopCategory}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Shop Name:
//         <input
//           type="text"
//           name="shopName"
//           value={formData.shopName}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         Shop Address:
//         <input
//           type="text"
//           name="shopAddress"
//           value={formData.shopAddress}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />

//       <label>
//         GST:
//         <input
//           type="text"
//           name="GST"
//           value={formData.GST}
//           onChange={handleChange}
//           required
//         />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//    </div>
//     </div>
//   );
// };

// export default RegisterPage;

// import React, { useState } from "react";
// import axios from "axios";

// const RegisterPage = () => {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     mobileNumber: "",
//     email: "",
//     password: "",
//     role: "seller",
//     shopCategory: "",
//     shopName: "",
//     shopAddress: "",
//     GST: ""
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
//       .post("https://tekisky-backend.onrender.com/user/createUser", formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((response) => {
//         setFormData(response.data);
//         console.log(response.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Register</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           {[
//             { label: "First Name", name: "firstName", type: "text" },
//             { label: "Last Name", name: "lastName", type: "text" },
//             { label: "Mobile Number", name: "mobileNumber", type: "text" },
//             { label: "Email", name: "email", type: "email" },
//             { label: "Password", name: "password", type: "password" },
//             { label: "Shop Category", name: "shopCategory", type: "text" },
//             { label: "Shop Name", name: "shopName", type: "text" },
//             { label: "Shop Address", name: "shopAddress", type: "text" },
//             { label: "GST", name: "GST", type: "text" },
//           ].map((field, index) => (
//             <div key={index}>
//               <label className="block text-gray-600 font-medium">{field.label}:</label>
//               <input
//                 type={field.type}
//                 name={field.name}
//                 value={formData[field.name]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
//               />
//             </div>
//           ))}

//           <div>
//             <label className="block text-gray-600 font-medium">Role:</label>
//             <select
//               name="role"
//               value={formData.role}
//               onChange={handleChange}
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-100"
//             >
//               <option value="seller">Seller</option>
//               <option value="admin">Admin</option>
//             </select>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;

import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    role: "seller",
    shopCategory: "",
    shopName: "",
    shopAddress: "",
    GST: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://tekisky-backend.onrender.com/user/createUser",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
        {/* Left Section */}
        <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-bold">Welcome to Tekisky Mart!</h2>
          <p className="text-white mt-2">Admin / Seller Dashboard</p>
        </div>
        {/* Right Section */}
        <div className="w-1/2 p-8">
          <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-1/2 p-2 border rounded"
                required
              />
            </div>
            <input
              type="text"
              name="mobileNumber"
              placeholder="Mobile Number"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="shopCategory"
              placeholder="Shop Category"
              value={formData.shopCategory}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={formData.shopName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="shopAddress"
              placeholder="Shop Address"
              value={formData.shopAddress}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <input
              type="text"
              name="GST"
              placeholder="GST Number"
              value={formData.GST}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            >
              Register
            </button>
          </form>
          <p className="text-center mt-4">
            Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
