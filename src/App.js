import React , {useState} from "react"
import './App.css';
import {MoviesData} from './components/MoviesData'
import MoviesList from './components/MovieList/MoviesList'
import Header from './components/Header/Header'
import MovieDescription from "./components/MovieDescription/MovieDescription";
import { Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(MoviesData)
  const [searchName, setSearchName] = useState("");
  const [searchRate, setSearchRate] = useState(0);

  const AddNewMovie = (x) => {
    setMovies([...movies, x]);
  };
  return (
    <div className="App">
      <Header 
      setSearchName={setSearchName}
      setSearchRate={setSearchRate}
      searchRate={searchRate}

      />

      <Route exact path='/'>

      <MoviesList
      movies={
        (searchName || searchRate)? movies.filter((el) => el.name.toLowerCase().includes(searchName.toLowerCase().trim())  && el.rating >= searchRate ): movies
      }   
      AddNewMovie={AddNewMovie}/>

      </Route>

   <Route  path='/movies/:name' render={(props)=> <MovieDescription {...props} movies={movies} />}  />

    </div>
  );
}

export default App;
