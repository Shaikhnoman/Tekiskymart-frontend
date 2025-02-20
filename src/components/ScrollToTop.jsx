import React, { useState, useEffect, useRef } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      ref={buttonRef}
      className={`fixed bottom-5 right-5 w-12 h-12 flex items-center justify-center bg-blue-500 text-white rounded-full shadow-lg transition-transform duration-300 ${
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
      }`}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      ▲
    </button>
  );
};

export default ScrollToTopButton;
