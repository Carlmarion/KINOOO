import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import './App.css';
import { getTrendingMovies, MovieData } from './services/movieService';
import Header from './components/Header';
import FavoritesContext from './context/FavoritesContext';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites';
import Root from './routes/root';

function App() {

const [movies, setMovies] = useState<MovieData[]>([]);
const storedFavorites = localStorage.getItem('favorites');
const [favorites, setFavorites] = useState<MovieData[]>(storedFavorites?  JSON.parse(storedFavorites) : []);

const toggleFavorite = (movie: MovieData) => {
if (favorites.some(favorite => favorite.original_title === movie.original_title)) {
  setFavorites(favorites.filter(favorite => favorite.original_title !== movie.original_title));
} else {
  setFavorites([...favorites, movie]);
}
}

useEffect(() => {
  localStorage.setItem('favorites', JSON.stringify(favorites));

}, [favorites]);


useEffect(() => {
  const fetchMovies = async () => {
    const data = await getTrendingMovies();
    setMovies(data);
  };
  fetchMovies();
}, []);



return (
  <FavoritesContext.Provider value={{favorites, toggleFavorite}}>
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={ <MovieList movies={movies} /> } />
          <Route path="/favorites" element={ <Favorites /> } />
        </Routes>
      </div>
    </Router>
  </FavoritesContext.Provider>
);
}

export default App;
