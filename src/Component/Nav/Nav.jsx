import React, { useEffect, useState } from 'react'
import './Nav.css'
import navlogo from '../../Images/NetflixLogo.png'
import navava from '../../Images/Netflix-avatar.png'
function Nav() {
  return (
  <div className="nav">
 
      <img className="nav__logo" src={navlogo} alt="Netflix Logo" width="100" /> 


    <img className='navava' src={navava} alt="Netflix Avater" width="100" /> 


  </div>
     
  )
}

export default Nav