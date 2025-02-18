import React from "react";
import Categories from "../components/Categories"
import Carousel from "../components/Carousel"
import Products from "../components/Products";
import Footer from "../components/Footer";
import NavbarAdmin from "../components/NavbarAdmin";

const AdminPanel = () => {
  return (
    <>
      <div>
        <NavbarAdmin/>
        <Carousel />
        <Categories />
        <Products/>
        <Footer/>
      </div>
    </>
  );
};

export default AdminPanel;
