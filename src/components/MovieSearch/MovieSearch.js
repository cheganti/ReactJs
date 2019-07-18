import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './MovieSearch.css';
import { HandleInputs } from '../../store/actions';

function handleMovieSearch(e) {
  let targetValues = '';
  if (e.target.value !== '') {
    targetValues = e.target.value;
  }
  const { handleInputs } = this.props;
  handleInputs(targetValues);
}

function MovieSearch(props) {
  const {
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
          <button
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

const mapStateToProps = state => ({
  results: state.results,
  isTitle: state.isTitle,
  isGenres: state.isGenres,
  isRelease: state.isRelease,
  isRating: state.isRating,

});

const mapDispatchToProps = dispatch => ({
  handleInputs: (data) => {
    dispatch(HandleInputs(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSearch);
