import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MovieContainer.css';
import MovieList from '../MovieList/MovieList';
import MovieSorting from '../MovieSorting/MovieSorting';
import MovieSearch from '../MovieSearch/MovieSearch';
import { itemsFetchData, updateInputValue, updateSearchResults } from './movieActions';

class MovieContainer extends Component {
  constructor(props) {
    super(props);
    // this.moviesData = jsonData;

    // this.state =
    //   searchResults: this.moviesData.data,
    //   updatedList: this.moviesData.data,
    //   inputValues: '',
    //   isTitle: false,
    //   isGenres: false,
    //   isRelease: true,
    //   isRating: false,
    // };
    this.handleMovieSearch = this.handleMovieSearch.bind(this);
    this.onClickResults = this.onClickResults.bind(this);
    this.searchByGengres = this.searchByGengres.bind(this);
    this.sortByRelease = this.sortByRelease.bind(this);
    this.searchByTitles = this.searchByTitles.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
  }

  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  onClickResults() {
    // const { updatedList } = this.state;
    let { inputValues, searchResults, updSearchRes } = this.props;
    // let updatedList = searchResults;

    let movieList = '';
    if (inputValues !== '') {
      movieList = searchResults.filter((item) => {
        inputValues = inputValues.toLowerCase();
        return item.title.toLowerCase().includes(inputValues);
      });
    }

    updSearchRes(movieList);
  }

  searchByGengres() {
    const { searchResults } = this.props;
    const sortResult = searchResults.sort((a, b) => {
      let retval = 1;
      if (a.genres > b.genres) {
        retval = 1;
      } if (a.genres < b.genres) {
        retval = -1;
      }
      return retval;
    });
    const { updatedInput } = this.props;
    updatedInput(sortResult);
  }

  searchByTitles() {
    const { searchResults } = this.props;
    const sortResult = searchResults.sort((a, b) => {
      let retval = 1;
      if (a.title > b.title) {
        retval = 1;
      } if (a.title < b.title) {
        retval = -1;
      }
      return retval;
    });
    const { updatedInput } = this.props;
    updatedInput(sortResult);
  }

  sortByRelease() {
    const { searchResults } = this.props;
    const sortResult = searchResults.sort(
      (a, b) => new Date(b.release_date) - new Date(a.release_date),
    );
    const { updatedInput } = this.props;
    updatedInput(sortResult);
  }

  sortByRating() {
    const { searchResults } = this.props;
    const sortResult = searchResults.sort((a, b) => b.vote_count - a.vote_count);
    const { updatedInput } = this.props;
    updatedInput(sortResult);
  }

  handleMovieSearch(e) {
    let targetValues = '';
    if (e.target.value !== '') {
      targetValues = e.target.value;
    }
    const { updatedInput } = this.props;
    updatedInput(e.target.value);
  }

  render() {
    const { searchResults, isTitle, isGenres, isRating, isRelease } = this.props;

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
            count={searchResults.length}
            sortByRelease={this.sortByRelease}
            sortByRating={this.sortByRating}
          />
        </div>
        <MovieList data={searchResults} searchByTitles={this.searchByTitles} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  searchResults: state.searchResults,
  updatedList: state.updatedList,
  inputValues: state.inputValues,
  isTitle: state.isTitle,
  isGenres: state.isGenres,
  isRelease: state.isRelease,
  isRating: state.isRating,
});

const mapDispatchToProps = dispatch => ({
  updatedInput: (value) => {
    dispatch(updateInputValue(value));
  },
  fetchData: () => dispatch(itemsFetchData()),
  updSearchRes: (data) => {
    // console.log(data);
    dispatch(updateSearchResults(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieContainer);
