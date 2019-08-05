import React from 'react';
import PropTypes from 'prop-types';

const itemsFetchData = async () => {
  const res = await fetch('https://reactjs-cdp.herokuapp.com/movies');
  const data = res.json();
  return data;
};

const MovieDetailPage = async (props) => {
  // const movies = await itemsFetchData();
  // const singleMovieData = movies.data.filter(
  //   moviData => moviData.id === parseInt(props.MovieData, 10),
  // );
  // console.log(singleMovieData[0].title);
  const test = "test test";
  return (
  //  <div>{ singleMovieData[0].title }</div>
    <div className="MovieContainer">
      <h1>{test}</h1>
      {/* {singleMovieData[0].title}
      {singleMovieData[0].releaseDate}
      {singleMovieData[0].overview} */}
    </div>
  );
};

MovieDetailPage.propTypes = {
};

export default MovieDetailPage;
