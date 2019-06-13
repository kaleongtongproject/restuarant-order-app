import React from 'react';
import { mount } from 'enzyme';
import ImageComponent from './';

describe('ImageComponent', () => {
    const baseProps = {
        imageUrl: 'https://picsum.photos/400',
        imageTitle: 'Sample Image',
        borderRadius: '10px',
        className: 'testImage'
    };
    let wrapper;
  
    beforeAll(() => {
      wrapper = mount(<ImageComponent {...baseProps} />);
    });
  
    it('renders with right image url', () => {
      expect(wrapper.props().imageUrl).toEqual(baseProps.imageUrl);
    });
  
  });
  