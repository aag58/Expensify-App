import moment from 'moment';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../../actions/filters';

test("Should generate set Start date action Object", ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: "SET_START_DATE",
        startDate: moment(0)
    })
}) 
test("Should generate set End date action Object", ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: "SET_END_DATE",
        endDate: moment(0)
    })
})

test("should generate sort by date action object", ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})
test("should generate sort by amount action object", ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test("Should generate set TExt filter action Object with parameter", ()=>{
    const action = setTextFilter("test")
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'

    })
})

test("Should generate set TExt filter action Object with default values", ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''

    })
})