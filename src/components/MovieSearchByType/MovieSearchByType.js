import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SearchByTitleActive, SearchByGenreActive } from './MovieSearchByTypeActions';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieSearchByType.css';

const MovieSearchByType = ({
  activeSearch, dispatchSearchByTitleActive, dispatchSearchByGenreActive,
}) => (
    <div className={CommonStyles['btn-group']} role="group" aria-label="Basic example">
      SEARCH BY
        <button className={`${activeSearch === 'title' ? styles.active : styles.inactive}`} onClick={dispatchSearchByTitleActive} children="Title"></button>
      <button className={`${activeSearch === 'genre' ? styles.active : styles.inactive}`} onClick={dispatchSearchByGenreActive} children="Gengre"></button>
    </div>
  );
MovieSearchByType.propTypes = {
  activeSearch: PropTypes.string.isRequired,
  dispatchSearchByTitleActive: PropTypes.func.isRequired,
  dispatchSearchByGenreActive: PropTypes.func.isRequired,
};
const mapStateToProps = null;

const mapDispatchToProps = dispatch => ({
  dispatchSearchByTitleActive: () => {
    dispatch(SearchByTitleActive());
  },
  dispatchSearchByGenreActive: () => {
    dispatch(SearchByGenreActive());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSearchByType);
