import React from 'react';

import movieReducer from './movieReducer';
import { itemsFetchData } from './movieActions';

describe('movieReducer', () => {
  it('Reducer Initial State', () => {
    const initialState = {
      searchResults: [],
      updatedList: [],
      inputValues: '',
      isTitle: false,
      isGenres: false,
      isRelease: true,
      isRating: false,
    };
    expect(movieReducer(undefined, {})).toEqual(initialState);
  });

  it('should check inputValues', () => {
    expect(movieReducer({}, {
      type: 'UPDATE_INPUT_VALUE',
      payload: 'movie',
    })).toEqual({
      inputValues: 'movie',
    });
  });

  it('should fetch the data', () => {
    expect(movieReducer({}, {
      type: 'MOVIES_API_FETCH',
      payload: [{},{}],
    })).toEqual({
      searchResults: [{},{}],
    });
  });

  it('should update the search results', () => {
    expect(movieReducer({}, {
      type: 'UPDATE_SEARCH_RESULTS',
      payload: [{},{}],
    })).toEqual({
      searchResults: [{},{}],
    });
  });

});
