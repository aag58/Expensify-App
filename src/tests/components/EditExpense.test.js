import React from 'react';
import { shallow } from 'enzyme';
import { EditExpensePage } from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';


let editExpenses, startRemoveExpenses, history, wrapper;

beforeEach(()=>{
    editExpenses = jest.fn();
    startRemoveExpenses = jest.fn();
    history = {push: jest.fn()};
    wrapper = shallow(
        <EditExpensePage 
            editExpenses={editExpenses} 
            startRemoveExpenses={startRemoveExpenses} 
            history = {history} 
            expense={expenses[1]}             
        />);
});

test('Should render EditExpensePage component', ()=>{
    expect(wrapper).toMatchSnapshot();
})

test('should handle EditExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpenses).toHaveBeenLastCalledWith(expenses[1].id, expenses[1])  
})

test('should handle startRemoveExpenses', ()=>{
    wrapper.find('button').simulate('Click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpenses).toHaveBeenLastCalledWith(expenses[1])
})