import React from 'react';
import { useHistory } from 'react-router-dom';
export default function NavbarOther() {

  const history = useHistory();

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


  const handleLogout=()=>{
    localStorage.removeItem("userInfo");
    history.push("/");
  }
  return (
    <>
      <header id="header" className="d-flex align-items-center ">
        <div className="container d-flex align-items-center justify-content-between colorr">
          <h1 className="logo">
           
            Movie Booking Website<span></span>
           
          </h1>
          <nav id="navbar" className="navbar">
            <ul>
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="/movies"
                >
                  <i className="bi bi-house"></i>Home
                </a>
              </li>
           
              <li>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#faq"
                >
                  <i className="bi bi-question-circle"></i>FAQs
                </a>
              </li>


              <li onClick={handleLogout}>
                <a
                  className="nav-link scrollto"
                  onClick={HideNavbar}
                  href="#contact"
                >
                  
                  <i className="bi bi-question-circle"></i>Logout
                </a>
              </li>
             
            </ul>
            <i
              className="bi bi-list mobile-nav-toggle"
              id="mobileTogl"
              onClick={MobileToggle}
            ></i>
          </nav>
        </div>
      </header>
    </>
  );
}
