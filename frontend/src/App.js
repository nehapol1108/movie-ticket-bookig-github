import './App.css';
import Homepage from './components/pages/Homepage';
import MoviePage from './components/pages/MoviePage';
import {Route} from "react-router-dom"
function App() {
  return (
    <>
    <div className='App'>
       <Route path="/" component={Homepage} exact/> 
    </div>
    <Route path="/movies" component={MoviePage}/>
    
    </>
  )
}

export default App;
