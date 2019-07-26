import { SEARCH_BY_TITLE_ACTIVE, SEARCH_BY_GENRE_ACTIVE } from './MovieSearchByTypeActions';

function MovieSearchByTypeReducer(state = {
  activeSearch: 'title',
}, action) {
  switch (action.type) {
    case SEARCH_BY_TITLE_ACTIVE:
      return {
        ...state,
        activeSearch: 'title',
      };
    case SEARCH_BY_GENRE_ACTIVE:
      return {
        ...state,
        activeSearch: 'genre',
      };
    default:
      return state;
  }
}
export default MovieSearchByTypeReducer;
