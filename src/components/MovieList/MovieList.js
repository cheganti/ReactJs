import React, { Component } from 'react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import MovieCard from '../MovieCard';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieList.css';

class MovieList extends Component {
  getYear(val) {
    return new Date(val).getFullYear();
  }

  render() {
    const { data } = this.props;
    return (
      <div className={styles.MovieListContainer}>
        {
        data.map(movie => (
          <div className={cx(CommonStyles.card, CommonStyles['col-md-3'], CommonStyles['mx-3'], CommonStyles['my-3'], CommonStyles['px-0'])} key={movie.id}>
            <Link to={`/movie/${movie.id}`}>
              <img
                className={CommonStyles['card-img-top']}
                src={movie.poster_path}
                alt={movie.title}
              />
            </Link>
            <MovieCard
              title={movie.title}
              releaseDate={this.getYear(movie.release_date)}
              genres={movie.genres}
            />
          </div>
        ))
        }
      </div>
    );
  }
}
export default MovieList;
