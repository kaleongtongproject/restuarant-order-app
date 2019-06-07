import React from 'react';
import { shallow} from 'enzyme';

import store from 'redux/store';
import ButtonComponent from '..';

describe('ButtonComponent', () => {
    it('create New Button does not crash the page', () => {
        const mockCallBack = jest.fn();
        const wrapper = shallow(<ButtonComponent onClick={mockCallBack}/>);
        wrapper.find('button').simulate('click');
        expect(mockCallBack.mock.calls.length).toEqual(1);
       });
    });