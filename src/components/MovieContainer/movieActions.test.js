import {
  updateInputValue,
  updateSearchResults,
  UPDATE_INPUT_VALUE,
  UPDATE_SEARCH_RESULTS
} from './movieActions';

describe('actions', () => {
  it('should create an action to update input value', () => {
    const inputValue = '';
    const expectedAction = {
      type: UPDATE_INPUT_VALUE,
    };
    expect(updateInputValue(inputValue)).toEqual(expectedAction);
  });
  it('should create an action to UPDATE_SEARCH_RESULTS', () => {
    const searchResults = '';
    const expectedAction = {
      type: UPDATE_SEARCH_RESULTS,
    };
    expect(updateSearchResults(searchResults)).toEqual(expectedAction);
  });
});

