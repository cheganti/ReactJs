import React from 'react';
import PropTypes from 'prop-types';

const itemsFetchData = async () => {
  const res = await fetch('https://reactjs-cdp.herokuapp.com/movies');
  const data = res.json();
  return data;
};

const MovieDetailPage = async (id) => {
  console.log("Id:", MovieData);
  const movies = await itemsFetchData();
  console.log(movies);
  const singleMovieData = movies.data.filter(moviData => moviData.id === MovieData);
  console.log(singleMovieData);
  // <div className="MovieContainer">
  //   singleMovieData.title
  //   singleMovieData.releaseDate
  //   singleMovieData.overview
  //   </div>
};

MovieDetailPage.propTypes = {
};

export default MovieDetailPage;
