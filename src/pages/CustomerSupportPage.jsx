import React from "react";

const CustomerSupportPage = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-4">Customer Support</h2>
      <p className="text-center text-gray-600 mb-8">
        Feel Free To Contact Us If You Need Any Assistance, Any Help Or Questions.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <span className="text-3xl text-red-500">📍</span>
          <h3 className="text-xl font-semibold mt-2">Address</h3>
          <p className="text-gray-600">
            2nd Floor, Opposite WaterTank, <br /> WorkShop Corner, Nanded, <br />
            Maharashtra 431605 INDIA
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <span className="text-3xl text-green-500">📞</span>
          <h3 className="text-xl font-semibold mt-2">Phone</h3>
          <p className="text-gray-600">
            +91 8625817334 <br /> +91 9890796149 <br /> +91 7387737731
          </p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <span className="text-3xl text-red-500">📧</span>
          <h3 className="text-xl font-semibold mt-2">Email</h3>
          <p className="text-gray-600">
            Hr@Tekisky.Com <br /> Sales@Tekisky.Com
          </p>
        </div>
      </div>
      <div className="mt-8">
        <iframe
          title="Google Map"
          className="w-full h-96 rounded-lg shadow-md"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3526947821097!2d77.3052689!3d19.1797917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d7502795a5c1%3A0x15ded39c097470bd!2sTekisky%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1738662045464!5m2!1sen!2sin" 
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default CustomerSupportPage;
