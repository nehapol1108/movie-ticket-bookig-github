import './App.css';
import Homepage from './components/pages/Homepage';
import MoviePage from './components/pages/MoviePage';
// import { HallForm } from './components/HallForm';
import {Route} from "react-router-dom"
import Moviebooking from './components/pages/Moviebooking';
function App() {
  return (
    <>
    <div className='App'>
    <Route path="/" component={Homepage} exact/> 
    </div>
    <div>   
    <Route path="/movies" component={MoviePage}/> 
    </div>
    <div>   
    <Route path="/seat" component={Moviebooking}/> 
    </div>
   
    </>
  )
}

export default App;
