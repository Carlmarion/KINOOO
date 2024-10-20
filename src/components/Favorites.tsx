import React, { useContext } from "react";
import FavoritesContext from "../context/FavoritesContext";
import MovieCard from "./MovieCard";
import { MovieData } from "../services/movieService";

const Favorites: React.FC = () => {
    const { favorites } = useContext(FavoritesContext);

    if(favorites.length === 0) return <p>No favorites yet...</p>

    return (
        <div className="movie-list">
            {favorites.map((movie: MovieData) => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    backdrop_path={movie.backdrop_path}
                    original_title={movie.original_title}
                    overview={movie.overview}
                    poster_path={movie.poster_path}
                    original_language={movie.original_language}
                    adult={movie.adult}
                    popularity={movie.popularity}
                    vote_average={movie.vote_average}
                    vote_count={movie.vote_count}
                    release_date={movie.release_date}
                />
            ))}
        </div>
    );
}

export default Favorites;
