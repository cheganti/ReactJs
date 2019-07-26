import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateSearchText } from './MovieSearchActions';
import cx from 'classnames';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieSearch.css';

class MovieSearch extends React.Component {
  constructor(props) {
    super(props);
  }
  handleMovieSearch = (e) => {
    this.props.updateSearchText(e.target.value);
  }
  render() {
    const  { inputs } = this.props;
    return (
      <form className={cx(CommonStyles['navbar-form'], CommonStyles['navbar-left'])} role="search">
        <div className={cx(CommonStyles['input-group'], CommonStyles['mb-3'])}>
          <input type="text" value={inputs} className={CommonStyles['form-control']} placeholder="Enter movie's name" onChange={this.handleMovieSearch} />
          <div className="input-group-append">
            <button className={styles.searchBtn} children="Search"></button>
          </div>
        </div>
      </form>
    );
  }
}

MovieSearch.propTypes = {
  updateSearchText: PropTypes.func.isRequired,
  inputs: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  inputs: state.MovieSearchReducer.inputs,
});

const mapDispatchToProps = dispatch => ({updateSearchText: searchText => {
  dispatch(updateSearchText(searchText));
},});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieSearch);
