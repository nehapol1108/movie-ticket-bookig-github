import React from 'react'
import Requests from "../api/requests.js";
import "../cssfile/movies.css"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useToast } from '@chakra-ui/react';
import { Link } from "react-router-dom";               

const Movies = () => {
  const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([]);
  let history = useHistory();
  const toast = useToast();
  const data = "neha";
  const fetchMovie=async()=>{
    try{
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
      if(!userInfo){
        toast({
          title: 'No userinfo!',
          description:"No userinfo",
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        return;
      }
      console.log(userInfo);
      console.log(userInfo.token);
      setLoading(true);
      const config={
        headers:{
          Authorization:`Bearer ${userInfo.token}`,
        },
      };
      const {data} = await axios.get("/api/movie",config);
      setLoading(false);
      setMovieData(data.data);
      // console.log(movieData);
      // console.log(data.data);
      // data.map((e)=>{
      //   console.log(e);
      // })


  }catch(err){
    toast({
      title: 'Error Occured!',
      description:"Failed to load the search results",
      status: 'error',
      duration: 5000,
      isClosable: true,
      position: "bottom-left",
    });
    console.log("movie provider" + err.message);
    return;
  }
  }
 

    useEffect(() => {
       fetchMovie();
      }, []);

    const movieInfo = movieData.map((movie)=>(
      <div className="recipe" key={movie?._id}>  
      <img className='imgg' src={movie.moviepic} alt="Logo" />
      <hr/>
      <div className="preedit"><span className="postedit">MovieName : </span> {movie.moviename} </div>
      <div className="preedit"><span className="postedit">Movie Ticket Price : </span>{movie.movietprice} </div>
      <div className="preedit"><span className="postedit">Movie Time : </span>{movie.movietime}</div>
      <div className="preedit"><span className="postedit">Movie Description : </span>{movie?.description}</div>

     
    <Link className='btn-warning btn'to={{pathname: "/seat",state: { movieid: movie._id, }, }}>Book tickets</Link>
   
    </div>

  

    ))
  return (
    <>
   <div>
      <div className="mainn">
     <div className="recipes">
          {movieInfo}
        </div>
      </div>
   
      
  </div>
   </>
  )
}

export default Movies
