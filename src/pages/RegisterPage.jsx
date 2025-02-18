// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

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
//     GST: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "https://tekisky-backend.onrender.com/user/createUser",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Registration successful", response.data);
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
        
//         {/* Right Section */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopCategory"
//               placeholder="Shop Category"
//               value={formData.shopCategory}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopName"
//               placeholder="Shop Name"
//               value={formData.shopName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopAddress"
//               placeholder="Shop Address"
//               value={formData.shopAddress}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="GST"
//               placeholder="GST Number"
//               value={formData.GST}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Register
//             </button>
//           </form>
//           <p className="text-center mt-4">
//             Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link>
//           </p>
//         </div>
//         {/* Left Section */}
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10">
//           <h2 className="text-white text-3xl font-bold">Welcome to Tekisky Mart!</h2>
//           <p className="text-white mt-2">Admin / Seller Dashboard</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

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
//     GST: "",
//   });

//   const [errors, setErrors] = useState({});

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateMobileNumber = (mobileNumber) => {
//     const mobileRegex = /^\d{10}$/;
//     return mobileRegex.test(mobileNumber);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Validate fields on change
//     if (name === "email") {
//       setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
//     }
//     if (name === "mobileNumber") {
//       setErrors({ ...errors, mobileNumber: validateMobileNumber(value) ? "" : "Enter a valid 10-digit number" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateEmail(formData.email)) {
//       setErrors({ ...errors, email: "Invalid email format" });
//       return;
//     }
//     if (!validateMobileNumber(formData.mobileNumber)) {
//       setErrors({ ...errors, mobileNumber: "Enter a valid 10-digit number" });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://tekisky-backend.onrender.com/user/createUser",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       console.log("Registration successful", response.data);
//     } catch (error) {
//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex gap-4">
//               <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
//               <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-1/2 p-2 border rounded" required />
//             </div>
//             <input type="text" name="mobileNumber" placeholder="Mobile Number" value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded" required />
//             {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
//             <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
//             <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <input type="text" name="shopCategory" placeholder="Shop Category" value={formData.shopCategory} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <input type="text" name="shopName" placeholder="Shop Name" value={formData.shopName} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <input type="text" name="shopAddress" placeholder="Shop Address" value={formData.shopAddress} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <input type="text" name="GST" placeholder="GST Number" value={formData.GST} onChange={handleChange} className="w-full p-2 border rounded" required />
//             <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">Register</button>
//           </form>
//           <p className="text-center mt-4">Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link></p>
//         </div>
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10">
//           <h2 className="text-white text-3xl font-bold">Welcome to Tekisky Mart!</h2>
//           <p className="text-white mt-2">Admin / Seller Dashboard</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;



// import React, { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import Swal from "sweetalert2";

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
//     GST: "",
//   });

//   const [errors, setErrors] = useState({
//     email: "",
//     mobileNumber: "",
//   });

//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const validateMobile = (mobile) => {
//     const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number format
//     return mobileRegex.test(mobile);
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     // Validation checks
//     if (name === "email") {
//       setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
//     }
//     if (name === "mobileNumber") {
//       setErrors({ ...errors, mobileNumber: validateMobile(value) ? "" : "Invalid mobile number" });
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (errors.email || errors.mobileNumber) {
//       Swal.fire({
//         icon: "error",
//         title: "Invalid Input",
//         text: "Please correct the errors before submitting.",
//       });
//       return;
//     }

//     try {
//       const response = await axios.post(
//         "https://tekisky-backend.onrender.com/user/createUser",
//         formData,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         }
//       );

//       Swal.fire({
//         icon: "success",
//         title: "Registration Successful",
//         text: "Your account has been created successfully!",
//       });

//       console.log("Registration successful", response.data);
//     } catch (error) {
//       Swal.fire({
//         icon: "error",
//         title: "Registration Failed",
//         text: "Something went wrong. Please try again.",
//       });

//       console.error("Error during registration:", error);
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
//         {/* Right Section */}
//         <div className="w-1/2 p-8">
//           <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div className="flex gap-4">
//               <input
//                 type="text"
//                 name="firstName"
//                 placeholder="First Name"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="lastName"
//                 placeholder="Last Name"
//                 value={formData.lastName}
//                 onChange={handleChange}
//                 className="w-1/2 p-2 border rounded"
//                 required
//               />
//             </div>
//             <input
//               type="text"
//               name="mobileNumber"
//               placeholder="Mobile Number"
//               value={formData.mobileNumber}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}

//             <input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

//             <input
//               type="password"
//               name="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopCategory"
//               placeholder="Shop Category"
//               value={formData.shopCategory}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopName"
//               placeholder="Shop Name"
//               value={formData.shopName}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="shopAddress"
//               placeholder="Shop Address"
//               value={formData.shopAddress}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <input
//               type="text"
//               name="GST"
//               placeholder="GST Number"
//               value={formData.GST}
//               onChange={handleChange}
//               className="w-full p-2 border rounded"
//               required
//             />
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//             >
//               Register
//             </button>
//           </form>
//           <p className="text-center mt-4">
//             Already have an account? <Link to="/login" className="text-blue-600">Sign In</Link>
//           </p>
//         </div>
//         {/* Left Section */}
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10">
//           <h2 className="text-white text-3xl font-bold">Welcome to Tekisky Mart!</h2>
//           <p className="text-white mt-2">Admin / Seller Dashboard</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterPage;


import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    mobileNumber: "",
    email: "",
    password: "",
    // role: "seller",
    // shopCategory: "",
    // shopName: "",
    // shopAddress: "",
    // GST: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    mobileNumber: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateMobile = (mobile) => {
    const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number format
    return mobileRegex.test(mobile);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation checks
    if (name === "email") {
      setErrors({ ...errors, email: validateEmail(value) ? "" : "Invalid email format" });
    }
    if (name === "mobileNumber") {
      setErrors({ ...errors, mobileNumber: validateMobile(value) ? "" : "Invalid mobile number" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (errors.email || errors.mobileNumber) {
      Swal.fire({
        icon: "error",
        title: "Invalid Input",
        text: "Please correct the errors before submitting.",
      });
      return;
    }

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

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Your account has been created successfully!",
      });

      console.log("Registration successful", response.data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: "Something went wrong. Please try again.",
      });

      console.error("Error during registration:", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex bg-white shadow-lg rounded-lg overflow-hidden w-3/4 max-w-4xl">
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
            {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
            {/* <input
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
            /> */}
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
        {/* Left Section */}
        <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center p-10">
          <h2 className="text-white text-3xl font-bold">Welcome to Tekisky Mart!</h2>
          <p className="text-white mt-2">Admin / Seller Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;

