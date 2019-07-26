import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieDetailed from '../MovieDetailed/MovieDetailed';
import { requestSingleMovieData } from '../MovieDetailed/MovieDetailedActions';

class Movie extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match && match.params ? match.params.id : 0;
    this.props.requestSingleMovieData(id);
  }

  render() {
    const { singleMovieData } = this.props;
    return <MovieDetailed singleMovieData={singleMovieData} />;
  }
}

Movie.propTypes = {
  singleMovieData: PropTypes.object,
  match: PropTypes.object,
  requestSingleMovieData: PropTypes.func,
};

const mapStateToProps = state => ({
  singleMovieData: state.MovieDetailedReducer.singleMovieData,
});

const mapDispatchToProps = dispatch => ({
  requestSingleMovieData: (movieId) => {
    dispatch(requestSingleMovieData(movieId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Movie);
