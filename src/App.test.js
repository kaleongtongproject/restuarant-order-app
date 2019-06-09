import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe ('App Component ', () => {
  let wrapper;
  it('renders correctly', () => {
    wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
});
 