import React from 'react'
import Requests from "../api/requests.js";
import { useState, useEffect } from "react";
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
        <div>
            {movie?.moviename}
            {movie?.movietprice}
            {movie?.movietime}
        </div>
    ))
  return (
    <div>
      {movieInfo}
    </div>
  )
}

export default Movies
