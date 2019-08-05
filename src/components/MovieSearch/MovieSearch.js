import React from 'react';
import PropTypes from 'prop-types';
import './MovieSearch.css';

function MovieSearch(props) {
  const {
    handleMovieSearch,
    onClickResults,
    searchByTitles,
    isTitle,
    searchByGengres,
    isGenres,
  } = props;
  return (
    <div>
      <h1 className="title">Find your movie</h1>
      <div className="input-group mb-3">
        <input
          className="form-control"
          type="text"
          id="search"
          placeholder="Search..."
          onChange={handleMovieSearch}
        />
        <div className="input-group-append">
          <button id="searchBtn"
            type="button"
            onClick={onClickResults}
            className="btn btn-success-cus"
          >
            Search
          </button>
          <button
            type="button"
            onClick={searchByTitles}
            className={`btn btn-success-cus ${isTitle === true
              ? 'active'
              : 'deactive'}`}
          >
            Title
          </button>
          <button
            type="button"
            onClick={searchByGengres}
            className={`btn btn-success-cus ${isGenres === true
              ? 'active'
              : 'deactive'}`}
          >
            Genres
          </button>
        </div>
      </div>
    </div>
  );
}
MovieSearch.propTypes = {
  isTitle: PropTypes.bool.isRequired,
  isGenres: PropTypes.bool.isRequired,
  handleMovieSearch: PropTypes.func.isRequired,
  onClickResults: PropTypes.func.isRequired,
  searchByTitles: PropTypes.func.isRequired,
  searchByGengres: PropTypes.func.isRequired,
};

export default MovieSearch;
