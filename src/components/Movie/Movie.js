import React from 'react';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';

const Movie = (props) => {
  const { match } = props;
  const id = match && match.params ? match.params.id : 0;
  return <MovieDetailPage MovieData={id} />;
}

export default Movie;
