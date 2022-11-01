import { Button } from '@material-ui/core'
import { FavoriteBorderRounded } from '@material-ui/icons'
import React from 'react'

const AddToFavoutites = ({favourites, setFavourites, id}) => {
    const addFavouriteMovie = (movie) => {
        const newFavouriteList = [...favourites, movie];
        setFavourites(newFavouriteList);
        console.log(favourites);
    };

  return (
    <div style={{position:'relative', opacity:'1', padding:'0px', textTranform:'none'}}>
        <Button onClick={() => addFavouriteMovie(id)} title='addToFavourites'><FavoriteBorderRounded/>Add to Favourites</Button>
    </div>
  )
}

export default AddToFavoutites