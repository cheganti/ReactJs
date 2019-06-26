import React, { Component } from "react";
import "./MovieList.css";
import Movie from "./Movie";

const MovieList = props => {
  const { data } = props;
  const movieData = data.map((value, index) => (
    <Movie key={value.id} movie={value} />
  ));
  return <div className="MovieListContainer">{movieData}</div>;
};
export default MovieList;
