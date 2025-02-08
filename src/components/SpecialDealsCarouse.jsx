'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SpecialDealsCarousel = () => {
  const [deals, setDeals] = useState([]);

  // Fetch data from API (Replace with actual API URL)
  useEffect(() => {
    fetch('/api/special-deals')
      .then((res) => res.json())
      .then((data) => setDeals(data))
      .catch((err) => console.error('Error fetching deals:', err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Today's Special Deals</h2>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {deals.map((item, index) => (
            <div key={index} className="p-4">
              <div className="bg-white rounded-lg shadow-md p-4 text-center">
                <img src={item.image} alt={item.name} className="w-full h-48 object-cover rounded-md" />
                <h3 className="mt-2 font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 line-through">MRP: ₹{item.mrp}</p>
                <p className="text-red-600 font-bold">Offer Price: ₹{item.offerPrice}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SpecialDealsCarousel;
