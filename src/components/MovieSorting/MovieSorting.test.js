import React from 'react';
import { shallow } from 'enzyme';
import MovieSorting from './MovieSorting';

describe('MovieSorting', () => {
  it('renders without breaking', () => {
    const wrapper = shallow(<MovieSorting count="10" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('onClick SortByRelease', () => {
    const handleRelease = jest.fn();
    const wrapper = shallow(<MovieSorting sortByRelease={handleRelease} />);
    const button = wrapper.find('button').at(0);
    button.simulate('click');
    expect(handleRelease).toHaveBeenCalled();
  });
  it('onClick SortByRating', () => {
    const handleRating = jest.fn();
    const wrapper = shallow(<MovieSorting sortByRating={handleRating} />);
    const button = wrapper.find('button').at(1);
    button.simulate('click');
    expect(handleRating).toHaveBeenCalled();
  });
});
