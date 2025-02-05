import React, { useState } from "react";
import { Instagram, Facebook, ShoppingBag, Mic,Menu,X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-700 text-white">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-1 text-sm">
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
            <img
              src="https://tekiskymart.com/static/media/TekiskyMartNewLogo-removebg-preview.929802cde3ff522f7030.png
"
              alt="Logo"
              className="w-12 h-12"
            />
            <h1 className="text-lg font-bold text-gray-700">TEKISKY MART</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 mx-6 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full px-4 py-2 border rounded-md text-black placeholder-gray-500 focus:outline-none focus:ring focus:border-blue-500"
              />
              <Mic
                className="absolute right-3 top-2.5 text-gray-500"
                size={18}
              />
            </div>
          </div>

          {/* Cart Icon & Hamburger */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <ShoppingBag size={24} className="text-gray-700" />
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
          <ul className="flex flex-wrap justify-center text-sm font-semibold space-x-4 py-2">
            {[
             <Link to='/'>HOME</Link> ,
              <Link to='giftitems'>GIFT-ITEMS</Link>,
              <Link to='dates'>DATES</Link>,
              <Link to='perfumes'>PERFUMES</Link>,
              <Link to='others'>OTHERS</Link>,
              <Link to='clothes'>CLOTHES</Link>,
              <Link to='homemadesnacks'>HOMEMADE SNACKS</Link>,
              <Link to='crockery'>CROCKERY</Link>,
              <Link to='watches'>WATCHES</Link>,
              <Link to='mobiles'>MOBILES</Link>,
              <Link to='dryfruits'>DRY FRUITS</Link>,
              <Link to='preorder'>PRE-ORDER</Link>,
              <Link to='sellwithus'>SELL WITH US</Link>,
              <Link to='customersupport'>CUSTOMER SUPPORT</Link>,
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-gray-300">
                  {item}
                </a>
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
              "HOME",
              "GIFT-ITEMS",
              "DATES",
              "PERFUMES",
              "OTHERS",
              "CLOTHES",
              "HOMEMADE SNACKS",
              "CROCKERY",
              "WATCHES",
              "MOBILES",
              "DRY FRUITS",
              "PRE-ORDER",
              "SELL WITH US",
              "CUSTOMER SUPPORT",
            ].map((item, index) => (
              <li key={index}>
                <a href="#" className="block py-2 hover:bg-blue-800">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
