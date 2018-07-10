import React from 'react';
import {shallow} from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('Should render expense summary correctly with one expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesCount = {1} expensesTotal = {235}/>)
    expect(wrapper).toMatchSnapshot();

})


test('Should render expense summary correctly with multiple expense', ()=>{
    const wrapper = shallow(<ExpenseSummary expensesCount ={23} expensesTotal={235456534}/>)
    expect(wrapper).toMatchSnapshot();
})