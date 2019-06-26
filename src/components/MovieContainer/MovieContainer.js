import React, { Component } from "react";
import jsonData from "../../data/jsonData.json";
import "./MovieContainer.css";
import MovieList from "../MovieList/MovieList";
import MovieSorting from "../MovieSorting/MovieSorting";
import MovieSearch from "../MovieSearch/MovieSearch";

export default class MovieContainer extends Component {
  componentDidMount() {
    this.searchByTitles();
  }
  constructor(props) {
    super(props);
    this.moviesData = jsonData;

    this.state = {
      searchResults: this.moviesData.data,
      updatedList: this.moviesData.data,
      inputValues: "",
      isTitle: false,
      isGenres: false,
      isRelease: true,
      isRating: false
    };
  }

  searchByGengres = () => {
    const searchByGengresTag = this.state.searchResults;
    let sortResult = searchByGengresTag.sort((a, b) => {
      if (a.genres > b.genres) {
        return 1;
      } else if (a.genres < b.genres) {
        return -1;
      }
    });
    this.setState({
      searchResults: sortResult,
      isTitle: false,
      isGenres: true
    });
  };

  searchByTitles = () => {
    const sortByTitleNames = this.state.searchResults;
    let sortResult = sortByTitleNames.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      } else if (a.title < b.title) {
        return -1;
      }
    });
    this.setState({
      searchResults: sortResult,
      isTitle: true,
      isGenres: false
    });
  };

  sortByRelease = () => {
    const sortByReleaseDate = this.state.searchResults;
    let sortResult = sortByReleaseDate.sort((a, b) => {
      return new Date(b.release_date) - new Date(a.release_date);
    });
    this.setState({
      searchResults: sortResult,
      isRelease: true,
      isRating: false
    });
  };

  sortByRating = () => {
    const sortByMovieRating = this.state.searchResults;
    let sortResult = sortByMovieRating.sort((a, b) => {
      return b.vote_count - a.vote_count;
    });
    this.setState({
      searchResults: sortResult,
      isRelease: false,
      isRating: true
    });
  };

  handleMovieSearch = e => {
    let targetValues = "";
    if (e.target.value !== "") {
      targetValues = e.target.value;
    }
    this.setState({
      inputValues: targetValues
    });
  };

  onClickResults = () => {
    const currentLists = this.state.updatedList;
    let filterValue = this.state.inputValues;
    let movieList = "";
    if (filterValue !== "") {
      movieList = currentLists.filter(item => {
        filterValue = filterValue.toLowerCase();
        return item.title.toLowerCase().includes(filterValue);
      });
    } else {
      movieList = this.moviesData.data;
    }
    this.setState({
      searchResults: movieList
    });
  };

  render() {
    const data = this.state.searchResults;
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
            data={data}
            sortByRelease={this.sortByRelease}
            sortByRating={this.sortByRating}
          />
        </div>
        <MovieList data={data} searchByTitles={this.searchByTitles} />
      </div>
    );
  }
}
