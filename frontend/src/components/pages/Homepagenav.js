import React,{ useState } from 'react'
export default function Homepagenav() {
  const MobileToggle = () => {
    var mobileTogggle = document.getElementById("mobileTogl");
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("navbar-mobile");
    mobileTogggle.classList.toggle("bi-list");
    mobileTogggle.classList.toggle("bi-x");
  };

  const HideNavbar = () => {
    var navbar = document.getElementById("navbar");
    if (navbar.classList.contains("navbar-mobile")) {
      navbar.classList.remove("navbar-mobile");
      var mobileTogggle = document.getElementById("mobileTogl");
      mobileTogggle.classList.toggle("bi-list");
      mobileTogggle.classList.toggle("bi-x");
    }
  };

  const DropDownAct = (e) => {
    var navbar = document.getElementById("navbar");
    var a = document.getElementById("dropdownA");
    if (navbar.classList.contains("navbar-mobile")) {
      e.preventDefault();
      a.nextElementSibling.classList.toggle("dropdown-active");
    }
  };
  return (
    <>
      <header id="header" className="d-flex align-items-center">
        <div className="container d-flex align-items-center justify-content-between">
          <h1 className="logo">
            <a href="/">
            Movie Booking Website<span></span>
            </a>
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
             
             
              {/* <li><a className="nav-link scrollto" onClick={HideNavbar} href="#services"><i className="bi bi-eye"></i>Views</a></li> */}
             
            </ul>
           
          </nav>
        </div>
      </header>
    </>
  );
}
