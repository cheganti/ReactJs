const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
const MOVIES_API_FETCH = 'MOVIES_API_FETCH';
const UPDATE_SEARCH_RESULTS = 'UPDATE_SEARCH_RESULTS';

const updateInputValue = value => ({
  type: UPDATE_INPUT_VALUE,
  payload: value,
});

const updateSearchResults = data => ({
  type: UPDATE_SEARCH_RESULTS,
  payload: data,
});

const itemsFetchData = () => (dispatch) => {
  fetch('https://reactjs-cdp.herokuapp.com/movies')
    .then(res => res.json())
    .then(result => dispatch({
      type: MOVIES_API_FETCH,
      payload: result.data,
    }));
};

export {
  UPDATE_INPUT_VALUE,
  MOVIES_API_FETCH,
  UPDATE_SEARCH_RESULTS,
  itemsFetchData,
  updateInputValue,
  updateSearchResults,
};
