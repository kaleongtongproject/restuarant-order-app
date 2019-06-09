import React from 'react';
import { shallow } from 'enzyme';
import ButtonComponent from './';

import { StyledButton} from './';

describe('ButtonComponent', () => {
  const baseProps = {
    text: 'Welcome to React',
    backgroundColor: 'red',
    onClickHandler: jest.fn(), 
    buttonColor: 'white',
    className: 'testButton',
  };
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<ButtonComponent {...baseProps} />);
  });

  it('renders with appropriate text', () => {
    expect(wrapper.text()).toMatch(baseProps.text);
  });

  it('trigger the click event', () => {
    wrapper.find(StyledButton).simulate('click');
    //console.log(wrapper.find(StyledButton).);
    expect(baseProps.onClickHandler).toHaveBeenCalled();
  });
});
