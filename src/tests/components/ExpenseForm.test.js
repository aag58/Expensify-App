import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';
import moment from 'moment';


test('should render ExpenseForm component', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test('should render ExpenseForm component with expense data ', ()=>{
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} />)
    expect(wrapper).toMatchSnapshot();
})

test('should render error for invalid form submission', ()=>{
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: ()=>{} 
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', ()=>{
    const value = "New Description"
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target: {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should set note on textarea change', ()=>{
    const value = "New Note";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('textarea').simulate('change',{
        target: {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount if valid input', ()=>{
    const value = "23.50";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should not set amount if invalid input', ()=>{
    const value = "12.1222";
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change',{
        target: {value}
    })
    expect(wrapper.state('amount')).toBe('');
})

test('should call onSubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault: ()=>{}
    })

    expect(wrapper.state('error')).toBe('');   // We cannot pass expense[0] as it has id in it and onSubmit is passed with obj without id
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: "Gum",
        note: '',
        amount: 195,
        createdAt: 0
    })
})

test('should set new date on DateChnage', ()=>{
    const now = moment()
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('[onDateChange]').prop('onDateChange')(now);
    expect(wrapper.state('createdAt')).toEqual(now);
})

test('should cahnge calender focus on chnage', ()=>{
    const focused = true
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('[onFocusChange]').prop('onFocusChange')({focused});
    expect(wrapper.state('calenderFocused')).toBe(focused);
})