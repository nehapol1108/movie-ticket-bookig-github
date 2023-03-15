import './App.css';
import Homepage from './components/pages/Homepage';
import MoviePage from './components/pages/MoviePage';
// import { HallForm } from './components/HallForm';
import {Route} from "react-router-dom"
import Moviebooking from './components/pages/Moviebooking';
import SeatsBooked from './components/pages/SeatsBooked';
import UserProfile from './components/UserProfile';
import Error404 from './components/pages/Error404';
function App() {
  return (
    <>
  
    <div className='App'>
    <Route path="/" component={Homepage} exact/> 
    </div>
    <div>   
    <Route path="/movies" component={MoviePage} /> 
    </div>
    <div>   
    <Route path="/seat" component={Moviebooking}/> 
    </div>
    <div>   
    <Route path="/booked" component={SeatsBooked}/> 
    </div>
    <div>   
    <Route path="/profile" component={UserProfile}/> 
    </div>
    
    {/* <div>   
    <Route path='' component={Error404}></Route> 
    </div>
     */}
    </>
  )
}

export default App;
