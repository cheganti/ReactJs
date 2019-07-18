import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.css';

const MovieCard = ({ movie }) => (
  <div className={styles.card}>
    <img src={movie.poster_path} alt={movie.title} />
    <p className={styles.txtcolor}>{movie.title}</p>
    <p className={styles.bold}>
      Release Date:
      <span className={styles.normal}>{movie.release_date}</span>
    </p>
    <p className={styles.bold}>
      Rating:
      <span className={styles.normal}>{movie.vote_count}</span>
    </p>
    <p className={styles.bold}>
      Genre:
      <span className={styles.normal}>
        {movie.genres.join(', ')}
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
