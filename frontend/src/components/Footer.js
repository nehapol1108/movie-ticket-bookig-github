import React from 'react'
import "../cssfile/footer.css"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
  return (
    <> <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 footer-contact">
            <h3>
              PUNE<span>.</span>
            </h3>
            <p>
              Sr. No 27, Pune-Satara Road
              <br /> Dhankawadi, Pune-411 043,
              <br />
              Maharashtra (India).
              <br />
              <br />
              <strong>Phone:</strong> +1 1234567890
              <br />
              <strong>Email:</strong> moviebooking@gmail.com
              <br />
            </p>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="/#">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="/#about">About us</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="/#contact">Services</a>
              </li>
              <li>
                <i className="bx bx-chevron-right"></i>{" "}
                <a href="/#faq">Terms of service</a>
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 footer-links">
            <h4>Our Social Networks</h4>
            <p>
              These are our Social media handles to coonect for more
              information!
            </p>
            <div className="social-links mt-3">
              <a href="/#" className="twitter">
                <i className="bx bxl-twitter"></i>
              </a>
              <a href="/#" className="facebook">
                <i className="bx bxl-facebook"></i>
              </a>
              <a href="/#" className="instagram">
                <i className="bx bxl-instagram"></i>
              </a>
              <a href="/#" className="google-plus">
                <i className="bx bxl-skype"></i>
              </a>
              <a href="/#" className="linkedin">
                <i className="bx bxl-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="container py-4 m-auto">
      <div className="copyright">
        &copy; Copyright{" "}
        <strong>
          <span>Movie Booking Website</span>
        </strong>
        . All Rights Reserved
      </div>
    </div>
  </footer>
</>
  )
}

export default Footer
