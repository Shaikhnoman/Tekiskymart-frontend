'use client';

import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    // Mock API Call (Replace with your actual API URL)
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ mobile, password }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login Successful:', data);
        alert('Login Successful!');
        // Redirect or store token
      } else {
        setError(data.message || 'Invalid Credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg flex w-full max-w-4xl">
        {/* Left Side */}
        <div className="w-1/2 p-8">
          <img src="/logo.png" alt="Tekisky Mart" className="h-12 mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-center mb-4">Sign In</h2>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-600">Mobile Number:</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                placeholder="Enter your mobile number"
                required
              />
            </div>

            <div>
              <label className="block text-gray-600">Password:</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 flex items-center text-gray-600"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              SIGN IN
            </button>
          </form>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-gradient-to-r from-blue-500 to-blue-700 text-white flex flex-col items-center justify-center p-8 rounded-r-lg">
          <h2 className="text-2xl font-bold">Welcome To Tekisky Mart!</h2>
          <p className="text-sm mt-2">Admin / Seller Dashboard</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
