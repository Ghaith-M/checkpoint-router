import React from 'react'

const MovieDescription = ({movies,match}) => {

    console.log(match)


   const myFilm = movies.find(movie=> movie.name === match.params.name  )

    return (
        <div>
            <p> {myFilm.description}</p>

<iframe 
    width="200" height="200" src='https://www.youtube.com/embed/sBq6zS5S4sY'
    title='myvideo'
    frameborder="0" 
    allow="accelerometer; autoplay;
     clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen>

     </iframe>

            
        </div>
    )
}

export default MovieDescription
