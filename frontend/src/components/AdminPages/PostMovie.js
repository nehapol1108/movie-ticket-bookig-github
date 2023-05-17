import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Spinner from "../Spinner";
import { useToast } from "@chakra-ui/react";

const seatBooked = Array.from({ length: 8 * 8 }, (_, i) => i + 1);
export default function PostMovie() {
  const [moviename, setMoviename] = useState();
  const [movietprice, setMovietprice] = useState();
  const [moviepic, setMoviepic] = useState();
  const [moviedescription, setMoviedescription] = useState();
  const [movietime, setMovietime] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const toast = useToast();
  const handleAddUser = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const data = await axios.post(
        "/api/movie",
        {
          moviename,
          movietprice,
          movietime,
          moviepic,
          moviedescription,
        },
        config
      );
        if(!data || data==="error"){
            setLoading(false);
            toast({
                title: 'Error occured in first step',
                status: 'warning',
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }
        const data2 = await axios.post(
            "/api/movie/book",
            {
             seatBooked
            },
            config
          );
          if(!data2 || data2==="error"){
            setLoading(false);
            toast({
                title: 'Error occured in second step',
                status: 'warning',
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
            title: 'Error occured',
            status: 'warning',
            description:err.response.data.message,
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
      console.log(err.message);
      setLoading(false);
    }
  };
  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <Navbar />
      <br/>
      <button className="btn btn-primary m-4" >
      <a className="nav-link" href="/postmovie">Post a Movie <span className="sr-only">(current)</span></a>
      </button>
      
      <br/>
     
      <div class="form-group">
        <label> Enter Movie Name</label>
        <input
          name="moviename"
          type="text"
          value={moviename}
          onChange={(e) => setMoviename(e.target.value)}
          className="form-control"
        />
        <label> Enter Movie Ticket Price</label>
        <input
          name="movietprice"
          type="text"
          value={movietprice}
          onChange={(e) => setMovietprice(e.target.value)}
          className="form-control"
        />

        <label> Enter Movie Poster Gdrive link</label>
        <input
          name="moviepic"
          type="text"
          value={moviepic}
          onChange={(e) => setMoviepic(e.target.value)}
          className="form-control"
        />

        <label htmlFor="">Enter Movie Timings</label>
        <input
          name="movietime"
          type="text"
          value={movietime}
          onChange={(e) => setMovietime(e.target.value)}
          className="form-control"
        />

        <label htmlFor="">Enter Movie Description</label>
        <input
          name="moviedescription"
          type="text"
          value={moviedescription}
          onChange={(e) => setMoviedescription(e.target.value)}
          className="form-control"
        />

        <br/>
        <button className="btn btn-success"  onClick={handleAddUser}>
        {loading ? <>Loading...</> : <>Upload Movie</>}
            </button>
      </div>

    
      <Footer />
    </>
  );
}
