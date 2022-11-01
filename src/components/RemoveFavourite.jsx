import { Button } from '@material-ui/core'
import { Favorite } from '@material-ui/icons'
import React from 'react'

const RemoveFavourite = ({favourites, setFavourites, id}) => {
    const removeFavourite = (movie) => {
        const newFavouriteList = favourites.filter(
            (favourite) => favourite !== movie
        );
        console.log(newFavouriteList);
        setFavourites(newFavouriteList);
    };
  return (
    <div style={{position:'relative', opacity:'1', padding:'0px', textTranform:'none'}}>
        
        <Button onClick={() => removeFavourite(id)} title='removeFavourites'><Favorite/>Remove from Favourites</Button>
    </div>
  )
}

export default RemoveFavourite