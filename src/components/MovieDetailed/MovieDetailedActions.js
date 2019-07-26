
export const SINGLEMOVIE_FETCH_REQUESTED = 'SINGLEMOVIE_FETCH_REQUESTED';
export const SINGLEMOVIE_FETCH_SUCCEEDED = 'SINGLEMOVIE_FETCH_SUCCEEDED';
export const requestSingleMovieData = movieId => ({ type: SINGLEMOVIE_FETCH_REQUESTED, movieId });
export const singleMovieFetchSucceeded = singleMovieData => ({
  type: SINGLEMOVIE_FETCH_SUCCEEDED, singleMovieData });
