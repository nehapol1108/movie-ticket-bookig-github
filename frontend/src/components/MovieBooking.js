import "../cssfile/moviebooking.css"
import React, { useState ,useEffect} from 'react'
import clsx from 'clsx'
import axios from "axios";
import { useToast } from '@chakra-ui/react';
const movies = [
  {
    name: 'Avenger',
    price: 10,
    occupied: [20, 21, 30, 1, 2, 8],
  },
  {
    name: 'Joker',
    price: 12,
    occupied: [9, 41, 35, 11, 65, 26],
  },
  {
    name: 'Toy story',
    price: 8,
    occupied: [37, 25, 44, 13, 2, 3],
  },
  {
    name: 'the lion king',
    price: 9,
    occupied: [10, 12, 50, 33, 28, 47],
  },
]

const seats = Array.from({ length: 8 * 8 }, (_, i) => i);


export default function MovieBooking({movieId}) {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  const [moviename,setMoviename]=useState();
  const [moviepic,setMoviepic]=useState();
  const [movietprice,setMovietprice]=useState();
  const [movietime,setMovietime]=useState();
 
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
      setLoading(false);
      
      console.log(data.data.data.moviename);
      setMoviename(data.data.data.moviename);
      setMoviepic(data.data.data.moviepic);
      setMovietprice(data.data.data.movietprice);
      setMovietime(data.data.data.movietime);
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
  }, [])
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  

  return (
    <>
       <div>
    
    <div className="App11">
    <div className="mainn">
        <div className="recipe" >  
      <img className='imgg' src={moviepic} alt="Logo" />
      <hr/>
      <div className="preedit"><span className="postedit">MovieName : </span> {moviename} </div>
      <div className="preedit"><span className="postedit">Movie Ticket Price : </span>{movietprice} </div>
      <div className="preedit"><span className="postedit">Movie Time : </span>{movietime}</div>
   
    </div>
       
        </div>
      {/* <Movies
        movie={selectedMovie}
        onChange={movie => {
          setSelectedSeats([])
          setSelectedMovie(movie)
        }}
      /> */}

      <ShowCase />
   
     
      <Cinema
        movie={selectedMovie}
        selectedSeats={selectedSeats}
        onSelectedSeatsChange={selectedSeats => setSelectedSeats(selectedSeats)}
      />
 
      <p className="info">
        You have selected <span className="count">{selectedSeats.length}</span>{' '}
        seats for the price of{' '} 
        <span className="total">
          {selectedSeats.length * selectedMovie.price}$
        </span>
      </p>
     
    </div>
   </div>
   
      
  
    </>
  )
}


// function Movies({ movie, onChange }) {
//   return (
//     <div className="Movies">
//       <label htmlFor="movie">Pick a movie</label>
//       <select
//         id="movie"
//         value={movie.name}
//         onChange={e => {
//           onChange(movies.find(movie => movie.name === e.target.value))
//         }}
//       >
//         {/* {movies.map(movie => (
//           <option key={movie.name} value={movie.name}>
//             {movie.name} (${movie.price})
//           </option>
//         ))} */}
//       </select>
//     </div>
//   )
// }

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
          )
        })}
      </div>
    </div>
  )
}