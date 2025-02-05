import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import crsl1 from '../assets/images/crsl1.jpg'
import crsl2 from '../assets/images/crsl2.jpg'
import crsl3 from '../assets/images/crsl3.jpg'
import React from "react";
import Slider from "react-slick";
// import "./Carousel.css"; // Optional for custom styles

const carouselItems = [
  {
    image: crsl1, // Replace with your image URL
    title: "Fresh Threads",
    subtitle: "New Arrivals in Fashion",
    buttonText: "SHOP NOW",
    link: "https://www.TekiskyMart.com",
  },
  {
    image: crsl2,
    title: "Elegant Abayas",
    subtitle: "Graceful and Stylish",
    buttonText: "EXPLORE NOW",
    link: "https://www.TekiskyMart.com",
  },
  {
    image: crsl3,
    title: "Exclusive Dresses",
    subtitle: "Upgrade Your Wardrobe",
    buttonText: "DISCOVER",
    link: "https://www.TekiskyMart.com",
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
    <div className="container mx-auto p-5">
      <Slider {...settings}>
        {carouselItems.map((item, index) => (
          <div key={index} className="relative bg-[#d8bfb0] rounded-lg p-10">
            <div className="flex items-center justify-between">
              <div className="w-1/2">
                <h2 className="text-5xl font-bold text-brown-900">{item.title}</h2>
                <p className="text-lg text-gray-700 mt-3">{item.subtitle}</p>
                <a
                  href={item.link}
                  className="inline-block mt-5 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
                >
                  {item.buttonText}
                </a>
              </div>
              <div className="w-1/2 flex justify-center">
                <img src={item.image} alt={item.title} className="rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
