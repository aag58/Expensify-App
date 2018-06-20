import React from 'react';
import { shallow } from 'enzyme';
import ExpenseDashBoard from '../../components/Header';

// import ReactShallowRenderer from 'react-test-renderer/shallow'


test('should render ExpenseDashBoard component', ()=>{
    const wrapper = shallow(<ExpenseDashBoard />);
    expect(wrapper).toMatchSnapshot();
    
})

