
// import React, { useState } from "react";
// import axios from "axios";

// const LoginPage = () => {
//   const [show, SetShow] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const showf = () => {
//     SetShow(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const url = "https://tekisky-backend.onrender.com/user/login";

//     axios
//       .post(url, formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         localStorage.setItem("token", JSON.stringify(res.data.token));
//         console.log(res.data);
//         setSuccess("Login Successful! Redirecting...");
//         setError("");
//         setTimeout(() => {
//           setSuccess("");
//           // Redirect logic can be added here
//         }, 2000);
//       })
//       .catch((err) => {
//         console.log("Error during login:", err);
//         setError("Invalid email or password. Please try again.");
//         setSuccess("");
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {!show ? (
//         <button
//           onClick={showf}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       ) : (
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
//           {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";

// const LoginPage = () => {
//   const [show, SetShow] = useState(false);
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const router = useRouter();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const showf = () => {
//     SetShow(true);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
    
//     const url = "https://tekisky-backend.onrender.com/user/login";

//     axios
//       .post(url, formData, {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//       .then((res) => {
//         localStorage.setItem("token", JSON.stringify(res.data.token));
//         setSuccess("Login successful! Redirecting...");
//         setTimeout(() => {
//           router.push("/home"); // Redirect to home page after successful login
//         }, 2000);
//       })
//       .catch((err) => {
//         console.log("Error during login:", err);
//         setError("Invalid email or password. Please try again.");
//       });
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {!show ? (
//         <button
//           onClick={showf}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       ) : (
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [show, setShow] = useState(false);
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // React Router Navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const url = "https://tekisky-backend.onrender.com/user/login";

//     try {
//       const res = await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       localStorage.setItem("token", JSON.stringify(res.data.token));
//       setSuccess("Login Successful! Redirecting...");
//       setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//     } catch (err) {
//       console.error("Error during login:", err);
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       {!show ? (
//         <button
//           onClick={() => setShow(true)}
//           className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 transition"
//         >
//           Login
//         </button>
//       ) : (
//         <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
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
//                 className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//               />
//             </div>
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//             <button
//               type="submit"
//               className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//             >
//               Login
//             </button>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // React Router Navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const url = "https://tekisky-backend.onrender.com/user/login";

//     try {
//       const res = await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       localStorage.setItem("token", JSON.stringify(res.data.token));
//       setSuccess("Login Successful! Redirecting...");
//       setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//     } catch (err) {
//       console.error("Error during login:", err);
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-96">
//         <h2 className="text-2xl font-bold text-center text-gray-700 mb-4">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600 font-medium">Email:</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600 font-medium">Password:</label>
//             <input
//               type="password"
//               name="password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
//             />
//           </div>
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-500 text-sm text-center">{success}</p>}
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
//           >
//             Login
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState("");
//   const navigate = useNavigate(); // React Router Navigation

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setSuccess("");
//     const url = "https://tekisky-backend.onrender.com/user/login";

//     try {
//       const res = await axios.post(url, formData, {
//         headers: { "Content-Type": "application/json" },
//       });
//       localStorage.setItem("token", JSON.stringify(res.data.token));
//       setSuccess("Login Successful! Redirecting...");
//       setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
//     } catch (err) {
//       console.error("Error during login:", err);
//       setError("Invalid email or password. Please try again.");
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
//         {/* Left Section */}
//         <div className="w-1/2 p-6">
//           <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign In</h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <label className="block text-gray-600 font-medium">Mobile Number:</label>
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
//               Sign In
//             </button>
//           </form>
//         </div>

//         {/* Right Section */}
//         <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
//           <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
//           <p className="text-center text-sm mt-2">User Dashboard</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate(); // React Router Navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const url = "https://tekisky-backend.onrender.com/user/login";

    try {
      const res = await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });
      localStorage.setItem("token", JSON.stringify(res.data.token));
      setSuccess("Login Successful! Redirecting...");
      setTimeout(() => navigate("/"), 2000); // Redirect after 2 seconds
    } catch (err) {
      console.error("Error during login:", err);
      setError(err.response?.data?.message || "Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Sign In</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
              />
            </div>
            <div>
              <label className="block text-gray-600 font-medium">Password:</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
              />
            </div>
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}
            {success && <p className="text-green-500 text-sm text-center">{success}</p>}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Sign In
            </button>
            <p className="text-center text-sm mt-4">
              Not a user? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>Register</span>
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
          <p className="text-center text-sm mt-2">Admin / Seller Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
