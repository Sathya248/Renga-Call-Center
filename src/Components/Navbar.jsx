import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1 className='heading'>Renga</h1>
      
      <ul className='nav-poisition'>
        <li><a href="product">Product</a></li>
        <li><a href="solutions">Solutions</a></li>
        <li><a href="pricing">Pricing</a></li>
        <li><a href="integration">Integration</a></li>
        <li><a href="resources">Resources</a></li>
       
      </ul>
      <button className='btn'>SignUp</button>

      


    </div>
  )
}

export default Navbar


