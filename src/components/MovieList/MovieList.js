import React from 'react';
import './MovieList.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieList = ({ data }) => {
  const movieData = data.map(value => (
    <MovieCard key={value.id} movie={value} />
  ));
  return <div className="MovieListContainer">{movieData}</div>;
};
export default MovieList;
