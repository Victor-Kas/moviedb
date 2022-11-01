import React from "react";

const imageUrl = 'https://image.tmdb.org/t/p/w500';
const MovieCard = ({movie,favourites, setFavourites, RemoveFavourite,AddToFavourites}) => {
    return (<div className='movie'>
      <div>
        <p>{movie.release_date}</p>
      </div>
      <div>
        <img src={imageUrl+movie.poster_path}
             alt={movie.title}
        />
      </div>
      <div>
        <span>rating {movie.vote_average}</span>
        <h3>{movie.title}</h3>
          {
            favourites.includes(movie.id)? 
              <RemoveFavourite favourites={favourites} setFavourites={setFavourites} id={movie.id}/>
            :
              <AddToFavourites favourites={favourites} setFavourites={setFavourites} id={movie.id}/>
          }
      </div>
    </div>);
}

export default MovieCard;