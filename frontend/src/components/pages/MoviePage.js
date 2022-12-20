import React from 'react'
import Footer from '../Footer'
import Movies from '../Movies'
import Navbar from '../Navbar'
import "../../cssfile/navbar.css"
const MoviePage = () => {
  
  return (
   <> 
   <Navbar/>
    <section id="hero" className="d-flex align-items-center">
          <div className="container" data-aos="zoom-out" data-aos-delay="100">
            <h1>Welcome To<span><br/> Movie Booking Website</span></h1>
            {/* <h2>Movie Booking Website</h2> */}
          </div>
        </section>
      
   <Movies/>
   <Footer/>
   </>
     
  
  )
}

export default MoviePage
