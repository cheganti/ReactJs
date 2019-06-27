import React from 'react';
import PropTypes from 'prop-types';
import './MovieSorting.css';

export default function MovieSorting(props) {
  const {
    data,
    sortByRelease,
    isRating,
    sortByRating,
    isRelease,
  } = props;
  return (
    <div className="sortByDiv">
      <div className="float-left">
        <span className="bold">Count: </span>
        <span>{data.length}</span>
      </div>
      <div className="float-right">
        <span className="bold">Sort By:</span>
        <button
          type="button"
          onClick={sortByRelease}
          className={`btn btn-success-cus ${isRating === true
            ? 'active'
            : 'deactive'}`}
        >
          Release Date
        </button>
        <button
          type="button"
          onClick={sortByRating}
          className={`btn btn-success-cus ${isRelease === true
            ? 'active'
            : 'deactive'}`}
        >
          Rating
        </button>
      </div>
    </div>
  );
}
MovieSorting.propTypes = {
  data: PropTypes.shape({
    length: PropTypes.number,
  }).isRequired,
  isRating: PropTypes.bool.isRequired,
  isRelease: PropTypes.bool.isRequired,
};
