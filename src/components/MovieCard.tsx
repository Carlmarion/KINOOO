import React, { useContext } from 'react';
import styled from '@emotion/styled';
import FavoritesContext from '../context/FavoritesContext';


type MovieCardProps = {
    id: number,
    original_title: string;
    overview: string | null;
    poster_path: string;
    backdrop_path: string | null;
    original_language: string;
    adult: boolean;
    popularity: number;
    vote_average: number;
    vote_count: number;
    release_date?: string;
}; 

const CardContainer = styled.div`
display: flex;
flex-direction: row;
border: 6px solid black;
border-radius: 10px;
margin: 10px;
background-color: #6E6864;
`
const CardImage = styled.img`
width: auto;
height: 350px;
border-top-left-radius: 3px;
border-bottom-left-radius: 3px;
`

const InfoRow = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const FavoriteButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 20px;
`

const CardContent = styled.div`
margin: 8px;
text-align: left;
`

const MovieCard: React.FC<MovieCardProps> = ({ id, original_title, overview, backdrop_path, poster_path, original_language,adult, popularity, vote_average, vote_count, release_date}) => {
    const { favorites, toggleFavorite } = useContext(FavoritesContext);


    const imageSource = poster_path
    ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : backdrop_path
      ? `https://image.tmdb.org/t/p/w500${poster_path}`
      : "https://via.placeholder.com/150";
    
      return (
        <CardContainer>
          <CardImage src={imageSource} alt={original_title} />
          <CardContent>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h2>{original_title}</h2>
                <FavoriteButton onClick={ () => toggleFavorite({id, original_title, overview, poster_path, backdrop_path,original_language, adult, popularity, vote_average, vote_count, release_date})}>
                {favorites.some(favorite => favorite.id === id) ? "❤️" : "♡"}
                </FavoriteButton>
            </div>
            <p>{overview}</p>
            <InfoRow>
              <p>Release date: {release_date}</p>
              <h3>Rating: {vote_average.toFixed(1)}</h3>
            </InfoRow>
            {!adult ? <p>All public</p> : <p style={{color: '#CC5500'}}>Adults only</p>}
          </CardContent>
        </CardContainer>
      );
};

export default MovieCard;