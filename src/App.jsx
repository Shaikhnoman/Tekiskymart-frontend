import React from 'react'

import './app.css'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <>
    <Navbar />
    <HomePage/>
      
      
      {/* <SellWithUs/> */}
      {/* <PreOrderForm/> */}
      {/* <CustomerSupport/> */}
      <Footer/>
    </>
  )
}

export default App