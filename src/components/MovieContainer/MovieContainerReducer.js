import {
  RECEIVE_API_DATA,
  CLICK_REQUEST_DATA,
  REQUEST_API_DATA,
} from './MovieContainerActions';

function MovieContainerReducer(state = {
  inputs: '',

}, action) {
  switch (action.type) {
    case REQUEST_API_DATA:
      return {
        ...state,
        requestMoviesResponse: action.requestMoviesResponse,
      };
    case RECEIVE_API_DATA:
      return {
        ...state,
        receiveMoviesResponse: action.receiveMoviesResponse,
      };
    case CLICK_REQUEST_DATA:
      return {
        ...state,
        params: action.params,
      };
    default:
      return state;
  }
}
export default MovieContainerReducer;
