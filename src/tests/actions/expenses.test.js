import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense ,addExpense, removeExpense, editExpenses, setExpenses, startSetExpenses} from '../../actions/expenses';
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done)=>{
    const expensesData={};
    expenses.forEach(({id, description, note, amount, createdAt})=>{
        expensesData[id]= {description, note, amount, createdAt}
    })
    database.ref('expenses').set(expensesData).then(()=>{done()})
})

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
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done)=>{          // done is used for asnc tests..test function will wait until done() is called
    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note:'this one is better',
        createdAt: 1000
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseData
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');   // returning a promise.... next .then will handle success case of this promise
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData);
        done();
    })
})



test('should add expense with defaults to database and store', (done)=>{
    const store = createMockStore({})
    const expenseDefaults = {
        description: '',
        amount: 0,
        note:'',
        createdAt: 0
    }
    store.dispatch(startAddExpense({})).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                id: expect.any(String),
                ...expenseDefaults
            }
        });
       return database.ref(`expenses/${actions[0].expense.id}`).once('value');   // returning a promise.... next .then will handle success case of this promise
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseDefaults);
        done();
    });
})

test('test should set set expenses action with data', ()=>{
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: "SET_EXPENSES",
        expenses: expenses
    })
})

test('should fetch expenses from firebase', (done)=>{
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    })
});