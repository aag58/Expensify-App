import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount = {sortByAmount}
            sortByDate = {sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('Should render ExpenseListFilters compoent', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters compoent with altFilters', ()=>{
    wrapper.setProps({
        filters: altfilters       
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text Change', ()=>{
    const value= filters.text;
    wrapper.find('input').simulate('change',{
        target: {value}
    })
    expect(setTextFilter).toHaveBeenCalledWith(value)
})

test('Should handle sort by date', ()=>{
    const value= 'date';
    wrapper.find('select').simulate('change',{
        target: {value}
    })
    expect(sortByDate).toHaveBeenCalled()
})
test('Should handle sort by amount', ()=>{
    const value= 'amount';
    wrapper.setProps({
        filters: altfilters
    })
    wrapper.find('select').simulate('change',{
        target: {value}
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date Changes', ()=>{
    const startDate = moment(0).add(4, 'years')
    const endDate = moment(0).add(8, 'years')
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus Changes', ()=>{
    const calenderFocused = 'endDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused);
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)
})