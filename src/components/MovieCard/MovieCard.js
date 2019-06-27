import React from 'react';
import PropTypes from 'prop-types';
import './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className="card">
    <img src={movie.poster_path} alt={movie.title} />
    <p className="txtcolor">{movie.title}</p>
    <p className="bold">
      Release Date:
      <span className="normal">{movie.release_date}</span>
    </p>
    <p className="bold">
      Rating:
      <span className="normal">{movie.vote_count}</span>
    </p>
    <p className="bold">
      Genre:
      <span className="normal">
        { movie.genres.join(', ') }
      </span>
    </p>
  </div>
);
export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.number,
    vote_count: PropTypes.number,
    genres: PropTypes.string,
  }).isRequired,
};
