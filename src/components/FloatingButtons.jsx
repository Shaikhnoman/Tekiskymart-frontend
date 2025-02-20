import { useEffect, useState } from "react";
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FloatingButtons = () => {
  const [showButtons, setShowButtons] = useState(false);
  const [blinking, setBlinking] = useState(false);

  useEffect(() => {
    let timeout;
    const handleScroll = () => {
      setShowButtons(true);
      setBlinking(true);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowButtons(false);
        setBlinking(false);
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className={`fixed top-1/2 right-5 transform -translate-y-1/2 flex flex-col gap-4 transition-opacity duration-500 ease-in-out ${
        showButtons ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* WhatsApp Button */}
      <div className="relative group flex items-center">
        <span className="absolute right-14 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          +918625817334
        </span>
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noopener noreferrer"
          className={`bg-green-500 text-white p-4 rounded-full shadow-xl hover:bg-green-600 transition-all duration-300 transform hover:scale-110 ${
            blinking ? "animate-pulse" : ""
          }`}
        >
          <FaWhatsapp size={18} />
        </a>
      </div>

      {/* Call Button */}
      <div className="relative group flex items-center">
        <span className="absolute right-14 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          +918625817334
        </span>
        <a
          href="tel:+1234567890"
          className={`bg-blue-500 text-white p-4 rounded-full shadow-xl hover:bg-blue-600 transition-all duration-300 transform hover:scale-110 ${
            blinking ? "animate-pulse" : ""
          }`}
        >
          <FaPhoneAlt size={18} />
        </a>
      </div>

      {/* Email Button */}
      <div className="relative group flex items-center">
        <span className="absolute right-14 bg-gray-800 text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg">
          tekisky@gmail.com
        </span>
        <a
          href="mailto:info@example.com"
          className={`bg-red-500 text-white p-4 rounded-full shadow-xl hover:bg-red-600 transition-all duration-300 transform hover:scale-110 ${
            blinking ? "animate-pulse" : ""
          }`}
        >
          <FaEnvelope size={18} />
        </a>
      </div>
    </div>
  );
};

export default FloatingButtons;
