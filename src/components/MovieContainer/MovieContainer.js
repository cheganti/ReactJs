import React, { Component } from 'react';
import MovieList from '../MovieList';
import MovieSearch from '../MovieSearch';
import MovieSearchByType from '../MovieSearchByType';
import MovieSorting from '../MovieSorting';
import cx from 'classnames';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieContainer.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  requestApiData,
  clickStoreData,
} from './MovieContainerActions';

class MovieContainer extends Component {
  constructor(props) {
    super(props);
  }

  filterMovies = (inputSearchText, activeSearch, allMovies) => {
    const currentMovieList = allMovies;
    let filteredItem = inputSearchText || '';
    let filteredMovieList = [];
    if (activeSearch === 'title') {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        return movie.title.toLowerCase().includes(filteredItem);
      });
    } else if (activeSearch === 'genre') {
      filteredMovieList = currentMovieList.filter(movie => {
        filteredItem = filteredItem.toLowerCase();
        const matchedGenre = movie.genres.find(item => item.toLowerCase().includes(filteredItem))
        return !!matchedGenre;
      });
    }
    return filteredMovieList;
  };
  getFilteredMoviesData = (Moviesdata, inputSearchText, activeSearch, activeOnSort) => {
    const filteredMoviesData = this.filterMovies(inputSearchText, activeSearch, Moviesdata);
    let filteredAndSortedData = [];
    if (activeOnSort === 'release') {
      filteredAndSortedData = this.sortByRelease(filteredMoviesData);
    } else if (activeOnSort === 'rating') {
      filteredAndSortedData = this.sortByRating(filteredMoviesData);
    }
    return filteredAndSortedData;
  }
  sortByRelease = (movies) => {
    const movieReleaseDate = movies;
    let sortResult = movieReleaseDate.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
    return sortResult;
  };

  sortByRating = (movies) => {
    let sortResult = movies.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    return sortResult;
  };



  render() {
    const { MovieContainerReducer, MovieSearchReducer, MovieSearchByTypeReducer, MovieSortingReducer } = this.props;
    const activeOnSort = MovieSortingReducer ? MovieSortingReducer.activeOnSort : null;
    const activeSearch = MovieSearchByTypeReducer ? MovieSearchByTypeReducer.activeSearch : null;
    const inputSearchText = MovieSearchReducer && MovieSearchReducer.inputs ? MovieSearchReducer.inputs : '';
    const MovieContainerReducerResponse = MovieContainerReducer ? MovieContainerReducer.receiveMoviesResponse : [];
    let Moviesdata = MovieContainerReducerResponse ? MovieContainerReducerResponse.data : [];
    const filteredAndSortedData = this.getFilteredMoviesData(Moviesdata, inputSearchText, activeSearch, activeOnSort);
    const data = filteredAndSortedData || [];
    return (
      <div>
        <div className={cx(CommonStyles.jumbotron, styles.jumbotron)}>
          <div>
            <h1 className={styles.searchMovies}>Find your Movie</h1>
          </div>
          <MovieSearch
            handleInputSearch={this.handleInputSearch}
          />
          <MovieSearchByType activeSearch={activeSearch} />
        </div>
        <MovieSorting count={data.length} activeOnSort={activeOnSort} />
        <MovieList data={data} />
        <div className={styles.footerBg}>
          <strong>netflix</strong>
          roulette
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  MovieContainerReducer: state.MovieContainerReducer,
  MovieSearchReducer: state.MovieSearchReducer,
  MovieSearchByTypeReducer: state.MovieSearchByTypeReducer,
  MovieSortingReducer: state.MovieSortingReducer,
  params: [state.params],
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { requestApiData, clickStoreData },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);
