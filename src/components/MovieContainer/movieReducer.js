import {
  UPDATE_INPUT_VALUE,
  UPDATE_SEARCH_RESULTS,
  MOVIES_API_FETCH,
} from './movieActions';

const initialState = {
  searchResults: [],
  updatedList: [],
  inputValues: '',
  isTitle: false,
  isGenres: false,
  isRelease: true,
  isRating: false,
};

const movieReducer = (state = initialState, action) => {
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
      return {
        ...state,
        searchResults: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;
