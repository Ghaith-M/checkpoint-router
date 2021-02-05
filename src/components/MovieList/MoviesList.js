import React from 'react'
import MoviesCard from '../MoviesCard/MoviesCard'
import '../MoviesCard/movieCard.css'
import AddMovie from '../AddMovies/AddMovie'

const MoviesList = ({movies, AddNewMovie}) => {
    return (
        <div className="map">
           {movies.map((el, i) => ( <MoviesCard el={el} key={i} /> ))}
           <AddMovie AddNewMovie={AddNewMovie}  />  
        </div>
    )
}

export default MoviesList