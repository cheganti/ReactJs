import React from 'react';
import { shallow } from 'enzyme';
import MovieSearch from './MovieSearch';


describe('MovieSorting', () => {
  it('renders without breaking', () => {
    const OnChangeSearch = jest.fn();
    const onClickSearch = jest.fn();
    const handleSearchByTitles = jest.fn();
    const handleSearchByGenres = jest.fn();
    const wrapper = shallow(<MovieSearch handleMovieSearch={OnChangeSearch} onClickResults={onClickSearch} searchByTitles={handleSearchByTitles} searchByGengres={handleSearchByGenres} />);
    expect(wrapper).toMatchSnapshot();
  });
});
