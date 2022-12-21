import React from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../Footer';
import MovieBooking from '../MovieBooking';
import Navbar from '../Navbar';
const Moviebooking = () => {
    const location = useLocation();
  const {movieid }= location.state;

  return (
    <>
    <Navbar/>
    <MovieBooking movieId={movieid}/>
    <Footer/>
    </>
  )
}

export default Moviebooking
