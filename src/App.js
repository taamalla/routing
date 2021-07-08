
import { useState } from 'react';
import List from './Components/List'
import './App.css';
import AddMovie from './Components/AddMovie'
import Nav from './Components/Navbar'
import Trailer from './Components/Trailer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { MovieList } from './Components/MovieList';
function App() {
  const [movies,setMovies]=useState([
    { id:0,
      title: "Titanic",
      description:
        "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic, she meets Jack Dawson, an artist, and falls in love with him.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
      rate: 5,
      trailerUrl:"https://www.youtube.com/embed/3gK_2XdjOdY",
    },
    {id:1,
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      posterUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
      rate: 5,
      trailerUrl:"https://www.youtube.com/embed/NmzuHjWmXOc" ,

    },
    {
      id:2,
      title: "The Godfather",
      description:
        "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
      rate: 4,
      trailerUrl:"https://www.youtube.com/embed/sY1S34973zA" ,
    },
    {
      id:3,
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rate: 3,
      trailerUrl:"https://www.youtube.com/embed/EXeTwQWrcwY",
    },
    {
      id:4,
      title: "12 Angry Men",
      description:
        "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
      posterUrl:
        "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      rate: 4,
      trailerUrl:"https://www.youtube.com/embed/_13J_9B5jEk" ,
    },
    {
      id:5,
      title: "Schindler's List",
      description:
        "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.",
      posterUrl:
        "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rate: 4,
      trailerUrl:"https://www.youtube.com/embed/mxphAlJID9U" ,
    },
   
 
  ])
  const [search,setSearch]=useState('')
  const [rating, setRating]=useState(0)

   const handleAdd=(newMovie)=>{setMovies([...movies,newMovie])}
  return (
    <Router>
    <div className="App">
      <Nav    setSearch={setSearch}   setRating={setRating}  />
      <AddMovie  handleAdd={handleAdd}   />
   <Switch>
   <Route exact path="/">
     <List  movies={movies}   rating={rating}   search={search} />
     </Route>
     <Route path="/trailer/:ID" >
       <Trailer movies={movies} />
       </Route>
   </Switch>
     {/* <Router>
     <Route path="/Component/Trailer">
     <Trailer movies={movies}/>
     </Route>
     </Router> */}
     
    </div>
    </Router>
  )
}

export default App;
