import { UPDATE_INPUT_VALUE, UPDATE_SEARCH_RESULTS, MOVIES_API_FETCH, SORT_BY_GENRE, SORT_BY_TITLE } from './MovieContainerActions';

const initialState = {
  searchResults: [],
  updatedList: [],
  inputValues: '',
  isTitle: false,
  isGenres: false,
  isRelease: true,
  isRating: false,
};

const movieContainerReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case UPDATE_INPUT_VALUE:
      return {
        ...state,
        inputValues: action.payload,
      };
    case MOVIES_API_FETCH:
      return {
        ...state,
        searchResults: action.payload,
      };

    case UPDATE_SEARCH_RESULTS:
      // console.log(action.payload);
      return {
        ...state,
        searchResults: action.payload,
      }
    case SORT_BY_GENRE:
      return {
        ...state,
        searchResults: action.payload,
      }
    case SORT_BY_TITLE:
      return {
        ...state,
        searchResults: action.payload,
      }
    default:
      return state;
  }
}

export default movieContainerReducer;
