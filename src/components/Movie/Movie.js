import React, { Component } from 'react';
import MovieDetailPage from '../MovieDetailPage/MovieDetailPage';

class Movie extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match && match.params ? match.params.id : 0;
    console.log(match);
  }

  render() {
    const { MovieData } = this.props;
    return <MovieDetailPage MovieData={MovieData} />;
  }
}


export default Movie;
