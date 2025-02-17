import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crsl1 from "../assets/images/crsl1.jpg";
import crsl2 from "../assets/images/crsl2.jpg";
import crsl3 from "../assets/images/crsl3.jpg";
import React from "react";
import Slider from "react-slick";

const carouselItems = [
  {
    image: crsl1,
    title: "Fresh Threads",
    subtitle: "New Arrivals in Fashion",
    buttonText: "SHOP NOW",
    link: "",
  },
  {
    image: crsl2,
    title: "Elegant Abayas",
    subtitle: "Graceful and Stylish",
    buttonText: "EXPLORE NOW",
    link: "",
  },
  {
    image: crsl3,
    title: "Exclusive Dresses",
    subtitle: "Upgrade Your Wardrobe",
    buttonText: "DISCOVER",
    link: "",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="container mx-auto px-4 sm:px-8 py-6">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div
            key={index}
            className="relative bg-[#d8bfb0] rounded-lg p-4 sm:p-10"
          >
            <div className="flex flex-col-reverse sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-10">
              {/* Text Section */}
              <div className="w-full sm:w-1/2 text-center sm:text-left">
                <h2 className="text-2xl sm:text-5xl font-bold text-brown-900">
                  {item.title}
                </h2>
                <p className="text-sm sm:text-lg text-gray-700 mt-2 sm:mt-3">
                  {item.subtitle}
                </p>
                <a
                  href={item.link}
                  className="inline-block mt-3 sm:mt-5 bg-black text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  {item.buttonText}
                </a>
              </div>

              {/* Image Section */}
              <div className="w-full sm:w-1/2 flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full sm:w-auto max-w-xs sm:max-w-sm rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
