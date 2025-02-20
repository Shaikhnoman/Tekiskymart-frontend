import React, { useState, useEffect } from "react";
import { Instagram, Facebook, ShoppingBag, Search, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";

const NavbarAdmin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  // Fetch products when search query changes
  useEffect(() => {
    if (searchQuery.trim() !== "") {
      axios
        .get(`https://tekisky-backend.onrender.com/product/getproduct`)
        .then((response) => {
          const filteredProducts = response.data.filter((product) =>
            product.productName
              .toLowerCase()
              .includes(searchQuery.toLowerCase())
          );
          setSearchResults(filteredProducts);
          setShowResults(true);
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    } else {
      setShowResults(false);
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Close mobile menu when a category is clicked
  const handleCategoryClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="bg-blue-700 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-3 text-sm">
        <div className="flex gap-3">
          <a href="#" className="hover:text-gray-300">
            <Instagram />
          </a>
          <a href="#" className="hover:text-gray-300">
            <Facebook />
          </a>
        </div>
        <p className="text-sm font-medium hidden md:block">
          Delivery Only In Nanded
        </p>
      </div>

      {/* Main Navbar */}
      <div className="bg-white shadow-md">
        <div className="container mx-auto flex items-center justify-between px-4 py-3">
          {/* Logo */}
          <div className="flex items-center space-x-2">
          <Link to="/">
  <img
    src="https://tekiskymart.com/static/media/TekiskyMartNewLogo-removebg-preview.929802cde3ff522f7030.png"
    alt="Logo"
    className="w-20 h-20 cursor-pointer"
  />
</Link>
            <h1 className="text-lg font-bold text-gray-700">TEKISKY MART</h1>
          </div>

          {/* Search Bar */}
          <div className="relative flex-1 mx-6 hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 border rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
            />
            <Search className="absolute right-3 top-2.5 text-gray-500" size={18} />

            {/* Search Results Dropdown */}
            {showResults && (
              <div className="absolute w-full bg-white border rounded-md mt-2 shadow-lg max-h-60 overflow-y-auto z-50">
                {searchResults.length > 0 ? (
                  searchResults.map((product) => (
                    <Link
                      key={product._id}
                      to={`/product/${product._id}`}
                      className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                      onClick={() => setShowResults(false)}
                    >
                      {product.productName}
                    </Link>
                  ))
                ) : (
                  <p className="px-4 py-2 text-gray-500">No results found</p>
                )}
              </div>
            )}
          </div>

          {/* Cart Icon & Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Link to="/shoppingcart">
                <ShoppingBag size={24} className="text-gray-700" />
              </Link>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full">
                0
              </span>
            </div>

            {/* Hamburger Menu (Mobile) */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Categories Menu (Desktop) */}
      <nav className="bg-blue-700 hidden md:block">
        <div className="container mx-auto">
          <ul className="flex flex-wrap justify-center text-sm font-semibold space-x-4 py-4">
            {[
              { label: "HOME", path: "/" },
              { label: "ALL ORDERS", path: "/ALLORDERS" },
              { label: "ALL PRODUCTS", path: "/ALLPRODUCTS" },
              { label: "CUSTOMERS", path: "/CUSTOMERS" },
              { label: "ALL USERS", path: "/ALLUSERS" },
              { label: "PRE ORDER REQUESTS", path: "/PREORDERREQUESTS" },
            
              
            ].map((item, index) => (
              <li key={index}>
                <Link to={item.path} className="hover:text-gray-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile Menu (Dropdown) */}
      {isOpen && (
        <nav className="bg-blue-700 md:hidden">
          <ul className="flex flex-col text-center text-sm font-semibold space-y-2 py-4">
            {[
                  { label: "HOME", path: "/" },
                  { label: "ALL ORDERS", path: "/ALLORDERS" },
                  { label: "ALL PRODUCTS", path: "/ALLPRODUCTS" },
                  { label: "CUSTOMERS", path: "/CUSTOMERS" },
                  { label: "ALL USERS", path: "/ALLUSERS" },
                  { label: "PRE ORDER REQUESTS", path: "/PREORDERREQUESTS" },
                
            ].map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className="block py-2 hover:bg-blue-800"
                  onClick={handleCategoryClick}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default NavbarAdmin;


