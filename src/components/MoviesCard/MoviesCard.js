import React from 'react'
import './movieCard.css'
import Rate from '../Rate.js'
import { Link } from 'react-router-dom'

const MovieCard = ({el}) => {
    return (
        <div>
<Link to={`/movies/${el.name}`}> 

<div className="movie_card" >
  <div className="info_section">
  <img className="image" src={el.image} alt=""/>
    <div className="movie_header">
    <img className="img" src={el.image} alt=""/>
    <span className="tile">{el.name}</span>
      <h4>{el.date}</h4>
     
    </div>
    <div className="movie_desc">
      <p className="text">
      {el.description}
      </p>

 

      
    </div>

    <div className="rating">
    <Rate  rating={el.rating}/> 

    
    

    </div>
  </div>
  
</div>



</Link>


     


        </div>
    )
}

export default MovieCard