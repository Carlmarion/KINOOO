import React from "react";
import { MovieData } from "../services/movieService";

interface FavoritesContextType {
    favorites: MovieData[];
    toggleFavorite: (movie: MovieData) => void;
}

const FavoritesContext = React.createContext<FavoritesContextType>({favorites: [], toggleFavorite: () => {}});
export default FavoritesContext;
