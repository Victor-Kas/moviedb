import React from 'react';
import AddToFavoutites from './AddToFavoutites';
import RemoveFavourite from './RemoveFavourite';
import MovieCard from './MovieCard';

const FavouriteMovies = ({favouriteMovies, favourites, setFavourites}) => {
  return (
    <div>
        {
            
            favouriteMovies?.length > 0 ?
            (
                <div className='container'>
                {
                    favouriteMovies.map( 
                    movie => (
                        <MovieCard movie={movie} favourites={favourites} setFavourites={setFavourites} RemoveFavourite={RemoveFavourite} AddToFavourites={AddToFavoutites}/>
                    )
                    )
                }
                
                </div>
            ):
            (
                <div className='empty'>
                <h2>No Favourites Yet</h2>
                    
                </div>
            )
        }
    </div>
  )
}

export default FavouriteMovies