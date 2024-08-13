import { useEffect, useState } from "react";
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MoviesGrid from './components/MoviesGrid';
import WatchList from './components/WatchList';
import './styles.css';

function App() {

  const [movies,setMovies]= useState([]);
  const [watchlist,setWatchlist] = useState([]);


  useEffect(() => {

    fetch("movies.json")
    .then(response => response.json())
    .then(data => setMovies(data))

  }, []);

  const toggleWatchlist =(movieId) => {
    setWatchlist((prev) => 
      prev.includes(movieId) ? prev.filter(id => id !== movieId) : [...prev,movieId]
    )
  }

  return (
    <div className="App">
      
      <div className='container'>
        <Header></Header>

        <Router>
          <nav>
            <ul>
              <li>
                <Link to ="/">Home</Link>
              </li>
              <li>
                <Link to ="/watchlist">WatchList</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" 
            element ={
            <MoviesGrid 
              watchlist={watchlist} 
              movies={movies} 
              toggleWatchlist={toggleWatchlist} />}> </Route>
            <Route path="/watchlist" 
            element ={
            <WatchList 
              watchlist={watchlist} 
              movies={movies} 
              toggleWatchlist={toggleWatchlist} />}> </Route>
          </Routes>
          
        </Router>
        
      </div>


      <Footer></Footer>
    </div>
  );
}

export default App;
