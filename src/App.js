import './App.css';
import {Route, Routes} from "react-router-dom";
import React, { useState,useEffect } from 'react';
import AllMovies from "./components/AllMovies";
import { Link } from "react-router-dom";
import { Button, Grid, TableRow, TableCell } from '@material-ui/core'
import FavouriteMovies from './components/FavouriteMovies';



const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=d0f5f2e135336200362af8a1a73acb17'

function App() {
    
    const [movies, setMovies] = useState([]);
    const [favouriteMovies, setFavouriteMovies] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const getMovies = async () => {
      const response = await fetch(`${API_URL}`);
      const data = await response.json();
      setMovies(data.results);
    }  
    useEffect(()=>{
      getMovies();
    },[]);
    
    useEffect(() => {
      if (favourites === []) {
        return;
      }
      const filteredMovies = movies.filter(movie => {
        if (favourites.includes(movie.id)) {
          return true;
        }
        else 
        {
          return false;
        }
      });

      setFavouriteMovies(filteredMovies);

    }, [favourites,movies])


    return (
      
      <div className='main'>

        <h1>Kas Theatre</h1>
          <Grid>
            <TableRow is="nospace start">
              <TableCell is="9 tablet-6 phone-3">
              <div className='filter'>
                <Link to='/'><Button variant='text'><h3 style={{ fontFamily: "Roboto Slab, serif", color: '#f9d3b4' }}>All Movies</h3></Button></Link>
              </div>
              </TableCell>
              <TableCell is="middle 3 tablet-2 phone-1">
              <div className='filter'>
                <Link to="/favourites"><Button variant='text'><h3 style={{ fontFamily: "Roboto Slab, serif", color: '#f9d3b4' }}>Favourite Movies</h3></Button></Link>
              </div>
              </TableCell>
            </TableRow>
          </Grid>
        <Routes>
          <Route path="/" element={<AllMovies movies={movies} favourites={favourites} setFavourites={setFavourites} />} />
          <Route path="/favourites" element={<FavouriteMovies favouriteMovies={favouriteMovies} favourites={favourites} setFavourites={setFavourites} />} />
        </Routes>
          
      </div>
      
    );
  
}

export default App;
