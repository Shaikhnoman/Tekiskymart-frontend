import React from "react";
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import Products from "../components/Products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AdminPanel = () => {
  return (
    <>
      <div>
        <Navbar/>
        <Carousel />
        <Categories />
        <Products/>
        <Footer/>
      </div>
    </>
  );
};

export default AdminPanel;
