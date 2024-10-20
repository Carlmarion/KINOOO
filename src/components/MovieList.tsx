import React from "react";
import { useFetchMovies } from "../hooks/useFetchMovies";
import MovieCard from './MovieCard';
import { MovieData } from "../services/movieService";


interface MovieListProps  {
    movies: MovieData[];
}

const MovieList: React.FC<MovieListProps> = () => {
    const { data: movies, isLoading, isError} = useFetchMovies();

    if(isLoading) return <p>Loading...</p>
    if(isError) return <p>Something went wrong</p>

    return <div className="movie-list">
        {movies?.map((movie) => (
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
}

export default MovieList;