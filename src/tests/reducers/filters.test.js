import moment from 'moment';
import filtersReducer from '../../reducers/filters';


test('Should set Up default filetr values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should setsort by to amount', ()=>{

    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state).toEqual({
        text:'',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})
test('should set sortBy to date', ()=>{
    const currentState={
        text:'',
        sortBy: 'amount',
        sartDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    }
    const action= {type:'SORT_BY_DATE'}
    const state = filtersReducer(currentState, action)

    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        sartDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    })
})

test('should set text', ()=>{
    const action= {type:'SET_TEXT_FILTER', text: 'last months rent'}
    const state = filtersReducer(undefined, action)  

    expect(state.text).toBe('last months rent')
})

test('Should set Start Date filter', ()=>{
    const startDate = moment()
    const action = {
        type:'SET_START_DATE',
        startDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.startDate).toEqual(startDate)
})

test('Should set end Date filter', ()=>{
    const endDate = moment()
    const action = {
        type:'SET_END_DATE',
        endDate
    }
    const state = filtersReducer(undefined,action)
    expect(state.endDate).toEqual(endDate)
})