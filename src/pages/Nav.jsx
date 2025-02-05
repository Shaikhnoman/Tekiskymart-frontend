import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <Link to='/'>Home</Link><br />
        <Link to='/Top'>Services</Link><br />
        <Link to='/Contactus'>Contact us</Link>
        </div>
  )
}

export default Nav   