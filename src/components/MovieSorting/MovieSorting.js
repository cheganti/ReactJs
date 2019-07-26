import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import cx from 'classnames';
import { setSortByRating, setSortByReleaseDate } from './MovieSortingActions';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieSorting.css';

const MovieSorting = ({
  activeOnSort, count, dispatchSetSortByRating, dispatchSetSortByReleaseDate,
}) => (
  <div className={cx(styles.moviesubheadingSection, CommonStyles.clearfix)}>
    <div className={cx(CommonStyles['float-left'], CommonStyles['float-md-left'])}>
      <strong>
        {count}
      </strong>
        movie found
    </div>
    <div className={cx(CommonStyles['float-right'], CommonStyles['float-md-right'])}>
      SORT BY
      <button className={`cx(CommonStyles['btn-sm'], CommonStyles['ml-1']) ${activeOnSort === 'release' ? styles.active : styles.inactive}`} onClick={dispatchSetSortByReleaseDate} children="RELEASE DATE"></button>
      <button className={`cx(CommonStyles['btn-sm'], CommonStyles['ml-1']) ${activeOnSort === 'rating' ? styles.active : styles.inactive}`} onClick={dispatchSetSortByRating} children="RATING" ></button>
    </div>
  </div>
);
MovieSorting.propTypes = {
  activeOnSort: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  dispatchSetSortByRating: PropTypes.func.isRequired,
  dispatchSetSortByReleaseDate: PropTypes.func.isRequired,
};

const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  dispatchSetSortByRating: () => {
    dispatch(setSortByRating());
  },
  dispatchSetSortByReleaseDate: () => {
    dispatch(setSortByReleaseDate());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSorting);
