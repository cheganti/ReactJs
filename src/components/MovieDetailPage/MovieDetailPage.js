import React from 'react';
import PropTypes from 'prop-types';


const MovieDetailPage = ({ MovieData }) => {
  const singleMovieData = MovieData || {};
  console.log(singleMovieData);
  return (
    <div className="MovieContainer">
      singleMovieData.title
      singleMovieData.releaseDate
      singleMovieData.overview
    </div>
  );
};

MovieDetailPage.propTypes = {
};
export default MovieDetailPage;
