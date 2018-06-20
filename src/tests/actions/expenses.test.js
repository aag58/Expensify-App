import { addExpense, removeExpense, editExpenses } from '../../actions/expenses';

test("Should setup removeExpense action Object", ()=>{
    const action = removeExpense({id: "12abc"});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '12abc'
    })
})


test("Should set up editexpense action Object", ()=>{
    const action = editExpenses("123abc", {note: "Test Note"})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: "123abc",
        updates: {note: "Test Note"}
    })
})

test("Should set up add expense action object with passed values",()=>{
    const expenseData = {
        description:'Rent',
        note:'this was last months rent', 
        amount:109500, 
        createdAt : 1000 
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id: expect.any(String),
            ...expenseData,
            
        }
    })
})

test("Should set up add expense action object with default values",()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            id: expect.any(String),
            description:'',
            note:'', 
            amount:0, 
            createdAt : 0
        }
    })
})