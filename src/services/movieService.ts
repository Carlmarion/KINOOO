import axios from "axios";

const API_URL = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

export interface MovieData {
    id: number;
    original_title: string;
    overview: string | null;
    backdrop_path: string | null;
    poster_path: string;
    original_language: string;
    adult: boolean;
    popularity: number;
    vote_average: number;
    vote_count: number;
    release_date?: string;
}

export const getTrendingMovies = async (): Promise<MovieData[]> => {
    try {
        const response = await axios.get(API_URL, {
            headers: {
                'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZDA5OGU5MjRiOWZkMzMwMmRiZGE2M2Y3MjYxNGUzOCIsIm5iZiI6MTcyOTQzNzk2Mi4zOTI4MjEsInN1YiI6IjY3MTNmZGNkZDViNzkyNmU5NDZmZDhjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vzIBXYjXIzzEKVt-8RKdbSazLl-h0MAXNLA5wyy3YFI',
                'accept': 'application/json',
            }
        });
        return response.data.results;
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error;
    }
};