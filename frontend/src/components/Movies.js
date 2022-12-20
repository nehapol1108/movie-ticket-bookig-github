import React from 'react'
import Requests from "../api/requests.js";
import "../cssfile/movies.css"
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Movies = () => {
    const [loading, setLoading] = useState(false)
  const [movieData, setMovieData] = useState([]);
    useEffect(() => {
        setLoading(true)
        try {
          Requests.getMovies()
            .then((res) => {
              setMovieData(() => res.data?.data);
              setLoading(false)
            })
            .catch((error) => console.log(error));
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
      }, []);
    const movieInfo = movieData.map((movie)=>(
      <div className="recipe">  
      <img className='imgg' src={movie.moviepic} alt="Logo" />
      <hr/>
      <div className="preedit"><span className="postedit">MovieName : </span> {movie.moviename} </div>
      <div className="preedit"><span className="postedit">Movie Ticket Price : </span>{movie.movietprice} </div>
      <div className="preedit"><span className="postedit">Movie Time : </span>{movie.movietime}</div>
      <div className="preedit"><span className="postedit">Movie Description : </span>{movie?.description}</div>
      
      {/* <button className="bg-danger" onClick={(e) => deleteHandler(post.id)}>Delete Job</button>
      <button className="bg-primary">Applied by</button> */}
      <div className="buttons">
      <button className="bg-danger btnpost" >Book Tickets</button>
      
     {/* // <Link className="bg-primary btnpost" to="/displayapplied"> Applied by</Link> */}

    </div>
      
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
