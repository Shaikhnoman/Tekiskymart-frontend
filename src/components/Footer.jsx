import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
        {/* Popular Section */}
        <div>
          <h3 className="font-semibold border-b border-gray-600 pb-2">
            POPULAR
          </h3>
          <ul className="mt-3 space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Sell With Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Pre-Order
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Customer Support
              </a>
            </li>
          </ul>
        </div>

        {/* Our Commitment Section */}
        <div>
          <h3 className="font-semibold border-b border-gray-600 pb-2">
            OUR COMMITMENT
          </h3>
          <ul className="mt-3 space-y-2">
            <li>Delivery Within 24 Hours</li>
            <li>Returns Without Questions</li>
            <li>Quality Product At Best Price</li>
            <li>Low Price Compare To Your Retail Outlet</li>
          </ul>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="font-semibold border-b border-gray-600 pb-2">
            SERVICES
          </h3>
          <ul className="mt-3 space-y-2">
            <li>Corporate Training</li>
            <li>Corporate Trainers</li>
            <li>IT Consultancy</li>
            <li>Software Development</li>
            <li>IT Services</li>
            <li>Website Development</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="font-semibold border-b border-gray-600 pb-2">
            CONTACT
          </h3>
          <p className="mt-3">
            2nd Floor, Opposite WaterTank, WorkShop Corner, Nanded, Maharashtra
            431605, INDIA
          </p>
          <p className="mt-2">+91 9359300613, +91 8830772432</p>
          <p className="mt-2">Sales@Tekisky.Com</p>
          <a
            href="#"
            className="text-blue-400 hover:underline mt-2 inline-block"
          >
            Login
          </a>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-600 mt-6 pt-4 text-center text-xs">
        <p>Copyright © Tekisky Pvt Ltd All Rights Reserved.</p>
        <p className="mt-1">+91 9359300613, +91 8830772432</p>
        <p>Sales@Tekisky.Com</p>
      </div>

      {/* Scroll to Top Button */}
      <button
        className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        ▲
      </button>
    </footer>
  );
};

export default Footer;
