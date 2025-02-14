import React from "react";
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import Products from "../components/Products";

const HomePage = () => {
  return (
    <>
      <div>
        <Carousel />
        <Categories />
        <Products/>
      </div>
    </>
  );
};

export default HomePage;
