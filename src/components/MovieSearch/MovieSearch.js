import React, { Component } from "react";
import "./MovieSearch.css";

export default class MovieSearch extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1 className="title">Find your movie</h1>
        <div className="input-group mb-3">
          <input
            className="form-control"
            type="text"
            id="search"
            placeholder="Search..."
            onChange={this.props.handleMovieSearch}
          />
          <div className="input-group-append">
            <button
              onClick={this.props.onClickResults}
              className="btn btn-success-cus"
            >
              Search
            </button>
            <button
              onClick={this.props.searchByTitles}
              className={`btn btn-success-cus ${this.props.isTitle === true
                ? "active"
                : "deactive"}`}
            >
              Title
            </button>
            <button
              onClick={this.props.searchByGengres}
              className={`btn btn-success-cus ${this.props.isGenres === true
                ? "active"
                : "deactive"}`}
            >
              Genres
            </button>
          </div>
        </div>
      </div>
    );
  }
}
