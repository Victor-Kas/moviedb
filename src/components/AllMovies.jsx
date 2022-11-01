import React from 'react'
import AddToFavoutites from './AddToFavoutites';
import RemoveFavourite from './RemoveFavourite';
import MovieCard from './MovieCard';

const AllMovies = ({movies, favourites, setFavourites}) => {
  return (
    <div>
        {
            movies?.length > 0 ?
            (
                <div className='container'>
                {
                    movies.map( 
                    movie => (
                        <MovieCard movie={movie} favourites={favourites} setFavourites={setFavourites} RemoveFavourite={RemoveFavourite} AddToFavourites={AddToFavoutites}/>
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
  )
}

export default AllMovies