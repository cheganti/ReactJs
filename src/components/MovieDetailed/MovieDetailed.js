import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import CommonStyles from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import styles from './MovieDetailed.css';

const MovieDetailed = ({ singleMovieData }) => {
  const singleMovieDataObject = singleMovieData || {};
  return (
    <div className={styles.media}>
      <img
        className={CommonStyles['mr-3']}
        src={singleMovieDataObject.poster_path}
        alt={singleMovieDataObject.title}
      />
      <div className={CommonStyles['media-body']}>
        <div className={CommonStyles.clearfix}>
          <h2 className={cx(CommonStyles['float-left'], CommonStyles['mt-0'])}>{singleMovieDataObject.title}</h2>
          <span className={cx(CommonStyles.border, CommonStyles['border-secondary'], CommonStyles['rounded-circle'], CommonStyles['mt-1'], CommonStyles['ml-4'], CommonStyles['pt-1'], CommonStyles['pr-2'], CommonStyles['pb-1'], CommonStyles['pl-2'], CommonStyles['float-left'])}><small>{singleMovieDataObject.vote_average}</small></span>
        </div>
        <p>
          <strong className={styles.detailedMovie_Text}>{singleMovieDataObject.releaseDate}</strong>
          year
          <strong className={styles.detailedMovie_Text}>{singleMovieDataObject.runtime}</strong>
          min
        </p>
        <p>{singleMovieDataObject.overview}</p>
      </div>
    </div>
  );
};
MovieDetailed.propTypes = {
  singleMovieData: PropTypes.object,
};

export default MovieDetailed;
