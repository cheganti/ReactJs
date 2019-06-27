import React, { Component } from 'react';
import jsonData from '../../data/jsonData.json';
import './MovieContainer.css';
import MovieList from '../MovieList/MovieList';
import MovieSorting from '../MovieSorting/MovieSorting';
import MovieSearch from '../MovieSearch/MovieSearch';

export default class MovieContainer extends Component {
  constructor(props) {
    super(props);
    this.moviesData = jsonData;

    this.state = {
      searchResults: this.moviesData.data,
      updatedList: this.moviesData.data,
      inputValues: '',
      isTitle: false,
      isGenres: false,
      isRelease: true,
      isRating: false,
    };
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
    this.onClickResults = this.onClickResults.bind(this);
    this.searchByGengres = this.searchByGengres.bind(this);
    this.sortByRelease = this.sortByRelease.bind(this);
    this.searchByTitles = this.searchByTitles.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
  }

  componentDidMount() {
    this.searchByTitles();
  }

  onClickResults() {
    const { updatedList } = this.state;
    let { inputValues } = this.state;
    let movieList = '';
    if (inputValues !== '') {
      movieList = updatedList.filter((item) => {
        inputValues = inputValues.toLowerCase();
        return item.title.toLowerCase().includes(inputValues);
      });
    } else {
      movieList = this.moviesData.data;
    }
    this.setState({
      searchResults: movieList,
    });
  }

  searchByGengres() {
    const { searchResults } = this.state;
    const sortResult = searchResults.sort((a, b) => {
      let retval = 1;
      if (a.genres > b.genres) {
        retval = 1;
      } if (a.genres < b.genres) {
        retval = -1;
      }
      return retval;
    });
    this.setState({
      searchResults: sortResult,
      isTitle: false,
      isGenres: true,
    });
  }

  searchByTitles() {
    const { searchResults } = this.state;
    const sortResult = searchResults.sort((a, b) => {
      let retval = 1;
      if (a.title > b.title) {
        retval = 1;
      } if (a.title < b.title) {
        retval = -1;
      }
      return retval;
    });
    this.setState({
      searchResults: sortResult,
      isTitle: true,
      isGenres: false,
    });
  }

  sortByRelease() {
    const { searchResults } = this.state;
    const sortResult = searchResults.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date),
    );
    this.setState({
      searchResults: sortResult,
      isRelease: true,
      isRating: false,
    });
  }

  sortByRating() {
    const { searchResults } = this.state;
    const sortResult = searchResults.sort((a, b) => b.vote_count - a.vote_count);
    this.setState({
      searchResults: sortResult,
      isRelease: false,
      isRating: true,
    });
  }

  handleMovieSearch(e) {
    let targetValues = '';
    if (e.target.value !== '') {
      targetValues = e.target.value;
    }
    this.setState({
      inputValues: targetValues,
    });
  }

  render() {
    const { searchResults } = this.state;
    const { isTitle, isGenres } = this.state;
    const { isRating, isRelease } = this.state;
    return (
      <div>
        <div className="jumbotron">
          <MovieSearch
            isTitle={isTitle}
            isGenres={isGenres}
            onClickResults={this.onClickResults}
            searchByGengres={this.searchByGengres}
            searchByTitles={this.searchByTitles}
            handleMovieSearch={this.handleMovieSearch}
          />
          <MovieSorting
            isRating={isRating}
            isRelease={isRelease}
            data={searchResults}
            sortByRelease={this.sortByRelease}
            sortByRating={this.sortByRating}
          />
        </div>
        <MovieList data={searchResults} searchByTitles={this.searchByTitles} />
      </div>
    );
  }
}
