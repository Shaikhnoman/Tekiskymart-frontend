import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const url = "https://tekisky-backend.onrender.com/user/register";

    try {
      await axios.post(url, formData, {
        headers: { "Content-Type": "application/json" },
      });
      setSuccess("Registration Successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2000);
    } catch (err) {
      console.error("Error during registration:", err);
      setError(err.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden w-[800px]">
        {/* Left Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-bold text-center text-gray-700 mb-4">Register</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium">Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none bg-gray-200"
              />
            </div>
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
              Register
            </button>
            <p className="text-center text-sm mt-4">
              Already have an account? <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>Login</span>
            </p>
          </form>
        </div>

        {/* Right Section */}
        <div className="w-1/2 bg-blue-600 flex flex-col items-center justify-center text-white p-6">
          <h2 className="text-2xl font-bold text-center">Welcome To Tekisky Mart!</h2>
          <p className="text-center text-sm mt-2">Join us today!</p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
