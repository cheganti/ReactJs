import { SINGLEMOVIE_FETCH_REQUESTED, SINGLEMOVIE_FETCH_SUCCEEDED } from './MovieDetailedActions';

function MovieDetailedReducer(state = {
  singleMovieData: null,
}, action) {
  switch (action.type) {
    case SINGLEMOVIE_FETCH_REQUESTED:
      return {
        ...state,
        movieId: action.movieId,
      };
    case SINGLEMOVIE_FETCH_SUCCEEDED:
      return {
        ...state,
        singleMovieData: action.singleMovieData,
      };
    default:
      return state;
  }
}
export default MovieDetailedReducer;
