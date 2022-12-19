import React from 'react'
import "../cssfile/footer.css"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
const Footer = () => {
  return (
    <div className="main-footer">
    <div className="container">
      <div className="row">
        {/* Column1 */}
        <div className="col">
          <div className="logo">
          <h2>
            <span>M</span>ovie
            <span>B</span>ooking
            <span>W</span>ebsite
          </h2>
      </div>

        
        </div>
        {/* Column2 */}
        <div className="col">
          <h1>Links</h1>
          <ui className="list-unstyled size">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/">Login</NavLink></li>
            <li><NavLink to="/">Signup</NavLink></li>
          </ui>
        </div>
        {/* Column3 */}
        <div className="col">
          <h4>WELL ANOTHER COLUMN</h4>
          <ui className="list-unstyled size">
            <li>DANK MEMES</li>
            <li>OTHER STUFF</li>
            <li>GUD STUFF</li>
          </ui>
        </div>
      </div>
      <hr />
      <div className="row">
        <p className="col-sm size xopy">
          &copy;{new Date().getFullYear()} Movie booking website | All rights reserved |
          Terms Of Service | Privacy
        </p>
      </div>
    </div>
  </div>
  )
}

export default Footer
