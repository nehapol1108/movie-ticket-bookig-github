import React,{ useState } from 'react'
import "../cssfile/navbar.css"
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className="main-nav">
      {/* 1st logo part  */}
      <div className="logo">
        <h2>
          <span>M</span>ovie
          <span>B</span>ooking
          <span>W</span>ebsite
        </h2>
      </div>

      {/* 2nd menu part  */}
      <div
        className={
          showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
        }>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/">Login</NavLink>
          </li>
          <li>
            <NavLink to="/">Signup</NavLink>
          </li>
        </ul>
      </div>

      {/* 3rd social media links */}
      <div className="social-media">

        {/* hamburget menu start  */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Navbar
