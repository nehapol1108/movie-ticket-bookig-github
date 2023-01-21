import React,{useEffect} from 'react'
import { useLocation } from "react-router-dom";
import Footer from '../Footer';
import MovieBooking from '../MovieBooking';
import Navbar from '../Navbar';
const Moviebooking = () => {
    const location = useLocation();
  const {movieid,movieData }= location.state;
  //  console.log(movieData);
   let movies=[];
  
      movieData.map((ele)=>{
        // console.log(ele._id);
        if(ele._id===movieid){
          let arr = [];
          (ele.seatBooked).map((elee)=>{
            if(elee.occupied===true){
              arr.push(elee.seatNumber);
            }
          })
          const obj={
            name:ele.moviename,
            price:ele.movietprice,
            occupied:arr
          }
          movies.push(obj);
        }
        
    })

    
  return (
    <>
    <Navbar/>
    <MovieBooking movieId={movieid} movies = {movies}/>
    <Footer/>
    </>
  )
}

export default Moviebooking
