// import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./app.css";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import PreOrderPage from "./pages/PreOrderPage";
import SellWithUsPage from "./pages/SellWithUsPage";
import CustomerSupportPage from "./pages/CustomerSupportPage";
import LoginPage from "./pages/LoginPage";
import CategoryPage from "./pages/CategoryPage";
import RegisterPage from "./pages/RegisterPage";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSummaryPage from "./pages/OrderSummaryPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import { ToastContainer } from "react-toastify";
import AdminPanel from "./pages/AdminPanel";
import PreOrderRequest from "./pages/PreOrderRequest";
import FloatingButtons from "./components/FloatingButtons";
import ScrollToTopButton from "./components/ScrollToTop";
import Show from "./pages/show";
import AllUser from "./pages/AllUser";
import NavbarAdmin from "./components/NavbarAdmin";

const App = () => {
  const location = useLocation(); // Get current path

  return (
    <>
      {/* Hide Navbar on login and register pages */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Navbar />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:categoryName" element={<CategoryPage />} />
        <Route path="/preorder" element={<PreOrderPage />} />
        <Route path="/sellwithus" element={<SellWithUsPage />} />
        <Route path="/customersupport" element={<CustomerSupportPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/shoppingcart" element={<ShoppingCartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-summary" element={<OrderSummaryPage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
      </Routes>
      <FloatingButtons/>
      <ScrollToTopButton/>

      {/* Hide Footer on login and register pages */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Footer />
      )}

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
       
      />
      
    </>
//  <>
// <NavbarAdmin/>
// <Routes>

// <Route path="/" element={< AdminPanel/>} />
// <Route path="/PREORDERREQUESTS" element={< PreOrderRequest/>} />
// <Route path="/ALLPRODUCTS" element={< Show/>} />
// <Route path="/ALLUSERS" element={< AllUser/>} />



// </Routes>
// <Footer/>


// </> 

  );
};

export default App;
