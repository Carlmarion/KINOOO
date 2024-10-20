import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getTrendingMovies, MovieData } from "../services/movieService";

export const useFetchMovies = (): UseQueryResult<MovieData[], unknown> => {
    return useQuery<MovieData[], unknown>({
        queryKey: ["movies"], 
        queryFn: () => getTrendingMovies().then(data => data.slice(0, 50)),
        select: (data: MovieData[]) => data, 
    });
};