import React from 'react'

import './app.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import GiftItemsPage from './pages/GiftItemsPage'
import DatePage from './pages/DatePage'
import PerfumePage from './pages/PerfumePage'
import OthersPage from './pages/OthersPage'
import ClothesPage from './pages/ClothesPage'
import HomeMadeSnakePage from './pages/HomeMadeSnakePage'
import CrockeryPage from './pages/CrockeryPage'
import WatchesPage from './pages/WatchesPage'
import MobilesPage from './pages/MobilesPage'
import DryFruitsPage from './pages/DryFruitsPage'
import PreOrderPage from './pages/PreOrderPage'
import SellWithUsPage from './pages/SellWithUsPage'
import CustomerSupportPage from './pages/CustomerSupportPage'
import LoginPage from './pages/LoginPage'

// import ShoppingCartPage from './pages/ShoppingCartPage'
const App = () => {
  return (
    <>
    {/* <Navbar /> */}
      {location.pathname !=='/login' ? <Navbar /> : <></>}
      <Routes>
      
      <Route path="/" element={<HomePage/>} />
      <Route path="giftitems" element={<GiftItemsPage/>} />
      <Route path="dates" element={<DatePage/>} />
      <Route path="perfumes" element={<PerfumePage/>} />
      <Route path="others" element={<OthersPage/>} />
      <Route path="clothes" element={<ClothesPage/>} />
      <Route path="homemadesnacks" element={<HomeMadeSnakePage/>} />
      <Route path="crockery" element={<CrockeryPage/>} />
      <Route path="watches" element={<WatchesPage/>} />
      <Route path="mobiles" element={<MobilesPage/>} />
      <Route path="dryfruits" element={<DryFruitsPage/>} />
      <Route path="preorder" element={<PreOrderPage/>} />
      <Route path="sellwithus" element={<SellWithUsPage/>} />
      <Route path="customersupport" element={<CustomerSupportPage/>} />
      <Route path="login" element={<LoginPage/>} />

      {/* <Route path="shoppingcart" element={<ShoppingCartPage/>} /> */}

      </Routes>

      {/* <SellWithUs/> */}
      {/* <PreOrderForm/> */}
      {/* <CustomerSupport/> */}
      <Footer/>
    </>
  )
}

export default App