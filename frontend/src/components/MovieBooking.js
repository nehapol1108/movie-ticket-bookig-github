import "../cssfile/moviebooking.css"
import React, { useState ,useEffect} from 'react'
import clsx from 'clsx'
import axios from "axios";
import { useToast } from '@chakra-ui/react';
import { Link } from "react-router-dom";

const seats = Array.from({ length: 8 * 8 }, (_, i) => i+1);


export default function MovieBooking({movieId,movies}) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [moviename,setMoviename]=useState();
  const [userId,setuserId]=useState();
  const [moviepic,setMoviepic]=useState();
  const [movietprice,setMovietprice]=useState();
  const [movietime,setMovietime]=useState();
  const [seatBooking,setseatBooking]=useState([]);
 

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
      setLoading(true);
      const config={
        headers:{
          Authorization:`Bearer ${userInfo.token}`,
        },
      };
      
      const {data} = await axios.get(`/api/movie/${movieId}`,config);
      setuserId(userInfo._id);
      setLoading(false);
      setMoviename(data.data.data.moviename);
      setMoviepic(data.data.data.moviepic);
      setMovietprice(data.data.data.movietprice);
      setMovietime(data.data.data.movietime);
      setseatBooking(data.data.data.seatBooked);
     
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
  const bookSeats=async()=>{
      selectedSeats.map((ele)=>{
        console.log(ele)
      })
      let seatNumber = selectedSeats
      if(selectedSeats.length===0){
        toast({
          title: 'None seat selected',
          status: 'warning',
          duration: 5000,
          isClosable: true,
          position: "bottom",
      });
      }
      try{
        const config = {
            headers:{
                "Content-type":"application/json",
            },
        };
        const {data} = await axios.put(
        "/api/movie/book",
        {userId,movieId,seatNumber},
        config
        );
        console.log(data);
        toast({
            title: 'Seat Booked successfully',
            status: 'success',
            duration: 5000,
            isClosable: true,
            position: "bottom",
        });
        
        setLoading(false);

    }catch(err){
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
  }
 
  useEffect(() => {
      fetchMovie();
  }, [])
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  

  return (
    <>
       <div>
    
    <div className="App11">
          <div className="mainnn">
          <div className="recipess">
              <div className="recipe" >  
            <img className='imgg' src={moviepic} alt="Logo" />
            <hr/>
            <div className="preedit"><span className="postedit">MovieName : </span> {moviename} </div>
            <div className="preedit"><span className="postedit">Movie Ticket Price : </span>{movietprice} </div>
            <div className="preedit"><span className="postedit">Movie Time : </span>{movietime}</div>
        
          </div>
          </div>
            
          </div>
 
      <ShowCase />
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />
      {
      selectedSeats.length>0 &&  <Link to={{pathname: "/booked"}}> <button className="btn btn-success" onClick={bookSeats}>Confirm Booking</button></Link>
      }
      {
      selectedSeats.length===0 &&  <button className="btn btn-success" disabled>Confirm Booking</button>
      }
     
     
    </div>
   </div>
   
      
  
    </>
  )
}


function ShowCase() {
  return (
    <ul className="ShowCase">
      <li>
        <span className="seat" /> <small>N/A</small>
      </li>
      <li>
        <span className="seat selected" /> <small>Selected</small>
      </li>
      <li>
        <span className="seat occupied" /> <small>Occupied</small>
      </li>
    </ul>
  )
}

function Cinema({ movie, selectedSeats, onSelectedSeatsChange }) {
  function handleSelectedState(seat) {
    const isSelected = selectedSeats.includes(seat)
    if (isSelected) {
      onSelectedSeatsChange(
        selectedSeats.filter(selectedSeat => selectedSeat !== seat),
      )
    } else {
      onSelectedSeatsChange([...selectedSeats, seat])
    }
  }

  return (
    <div className="Cinema">
      <div className="screen" />

      <div className="seats">
        {seats.map(seat => {
          const isSelected = selectedSeats.includes(seat)
          const isOccupied = movie.occupied.includes(seat)
          return (
            <>
            <span
              tabIndex="0"
              key={seat}
              className={clsx(
                'seat',
                isSelected && 'selected',
                isOccupied && 'occupied',
              )}
              onClick={isOccupied ? null : () => handleSelectedState(seat)}
              onKeyPress={
                isOccupied
                  ? null
                  : e => {
                      if (e.key === 'Enter') {
                        handleSelectedState(seat)
                      }
                    }
              }
            />
           
            </>
          )
        })}
      </div>
    </div>
  )
}