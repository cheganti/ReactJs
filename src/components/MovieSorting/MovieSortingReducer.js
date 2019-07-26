import { SET_SORT_BY_RATING, SET_SORT_BY_RELEASEDATE } from './MovieSortingActions';

function MovieSortingReducer(state = {
  activeOnSort: 'release',
}, action) {
  switch (action.type) {
    case SET_SORT_BY_RATING:
      return {
        ...state,
        activeOnSort: 'rating',
      };
    case SET_SORT_BY_RELEASEDATE:
      return {
        ...state,
        activeOnSort: 'release',
      };
    default:
      return state;
  }
}
export default MovieSortingReducer;
