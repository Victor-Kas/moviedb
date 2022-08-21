import './App.css';
import MovieCard from './MovieCard';
import { useState,useEffect } from 'react';
import SearchIcon from "./search.svg";

//68b71574

const API_URL = 'https://www.omdbapi.com?apikey=68b71574'

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setsearchTerm] = useState([]);

    const searchMovies = async (title) => {
      const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();
      setMovies(data.Search);
    }  
    useEffect(()=>{
      searchMovies('ragnarok');
    },[]);

    const movie1 = {
      "Title": "Ragnarok",
        "Year": "2020–",
          "imdbID": "tt9251798",
            "Type": "series",
              "Poster": "https://m.media-amazon.com/images/M/MV5BODM3NTZkZTUtYzEyYS00NjEyLTg2NjEtNDhlMjYwY2ZkNGUzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"
    }

    return (
      
        <div className='main'>
          <h1>Kas Theatre</h1>
          <div className='search'>
            <input 
              placeholder='search for a film'
              value={searchTerm}
              onChange={(e) => {setsearchTerm(e.target.value)}}  
            />
            <img 
              src={SearchIcon} 
              alt='search'
              onClick={() => {searchMovies(searchTerm)}}
            />
          </div>
          {
            movies?.length > 0 ?
            (
              <div className='container'>
                {
                  movies.map( 
                    movie => (
                      <MovieCard movie={movie}/>
                    )
                  )
                }
                
              </div>
            ):
            (
              <div className='empty'>
                <h2>Movie Catalogue Empty</h2>
                  
              </div>
            )
          }
          
        </div>
      
      );
  
}

export default App;
