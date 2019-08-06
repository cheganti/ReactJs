import React from 'react';
import { shallow } from 'enzyme';
import MovieSearch from './MovieSearch';


describe('MovieSorting', () => {
  it('renders without breaking', () => {
    const OnChangeSearch = jest.fn();
    const onClickSearch = jest.fn();
    const handleSearchByTitles = jest.fn();
    const handleSearchByGenres = jest.fn();
    const wrapper = shallow(<MovieSearch handleMovieSearch={OnChangeSearch} onClickResults={onClickSearch}
      searchByTitles={handleSearchByTitles} searchByGengres={handleSearchByGenres} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick searchByTitles', () => {
    const handleSearchByTitles = jest.fn();
    const wrapper = shallow(<MovieSearch searchByTitles={handleSearchByTitles} />);
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(handleSearchByTitles).toHaveBeenCalled();
  });
  it('onClick searchByGengres', () => {
    const handleSearchByGenres = jest.fn();
    const wrapper = shallow(<MovieSearch searchByGengres={handleSearchByGenres} />);
    const button = wrapper.find('button').at(1);
    button.simulate('click');
    expect(handleSearchByGenres).toHaveBeenCalled();
  });
});
