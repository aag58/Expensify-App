import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state',()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})


test('should add an expense',()=>{
    const expense = {
        id:'4',
        description: "Food",
        note: '',
        amount: 12587,
        createdAt: 700
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense})
    expect(state).toEqual([...expenses, expense])
})

test('should remve expense by id', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'2'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})
test('should not remove expense if id not found', ()=>{
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-2'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('should edit an expense by id', ()=>{
    const updates={
        description: 'Mint'
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'1',
        updates
    }
    const state = expensesReducer(expenses, action)
    // expect(state).toEqual([{...expenses[0],description: 'Mint' }, expenses[1],expenses[2]])
    expect(state[0].description).toBe('Mint')
})

test('should not edit an expense if id is not found', ()=>{
    const updates={
        description: 'Mint'
    }
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
    // expect(state[0].description).toBe(expenses[0].description)
})