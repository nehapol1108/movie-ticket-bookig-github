import React, { useEffect, useState } from "react";
import axios from "axios";

import Navbar from "../Navbar";
import Footer from "../Footer";
import Spinner from "../Spinner";
import { useToast } from "@chakra-ui/react";

const seatBooked = Array.from({ length: 8 * 8 }, (_, i) => i + 1);
export default function DeleteMovie() {
  const [movieData, setMovieData] = useState();
  const [movieId, setMovieId] = useState();
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const handleGetMovies = async () => {
    try {
      setLoading(true);
      const userInfo = await JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        toast({
          title: "No userinfo!",
          description: "No userinfo",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom-left",
        });
        return;
      }
      // console.log(userInfo);
      // console.log(userInfo.token);

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const { data } = await axios.get("/api/movie", config);

      setMovieData(data.data);
      setLoading(false);
    } catch (err) {
      toast({
        title: "Error occured",
        status: "warning",
        description: err.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log(err.message);
      setLoading(false);
    }
  };

  const handleDeleteMovie = async () => {
    try {
      setLoading(true);

      if (!movieId) {
        setLoading(false);
        toast({
          title: "Error occured Movie not selected",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const { data } = await axios.delete(
        "/api/movie",
        { id: movieId },
        config
      );
      if (!data || data === "error") {
        setLoading(false);
        toast({
          title: "Error occured",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        return;
      }

      setLoading(false);
      toast({
        title: "Movie Posted Successfully View it on the HOME PAGE",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    } catch (err) {
      toast({
        title: "Error occured",
        status: "warning",
        description: err.response.data.message,
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    handleGetMovies();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Navbar />
      <br />
      <button className="btn btn-primary m-4">
        <a className="nav-link" href="/postmovie">
          Post a Movie <span className="sr-only">(current)</span>
        </a>
      </button>

      <br />

      <div class="form-group">
        <label> Enter Movie to be deleted</label>
        <input
          name="moviename"
          type="text"
          value={moviename}
          onChange={(e) => setMoviename(e.target.value)}
          className="form-control"
        />

        <select className="form-control"
        onChange={(e) => setMovieId(e.target.value)}>
          <option></option>
          {movieData.map((movie, index) => {
            return (
              <>
                <option key={index} value={movie._id}>
                  {movie.moviename}
                </option>
              </>
            );
          })}
        </select>

        <br />
        {movieId === "" && (
          <button className="btn btn-success" onClick={handleDeleteMovie}>
            {loading ? <>Loading...</> : <>Delete Movie</>}
          </button>
        )}
      </div>

      <Footer />
    </>
  );
}
