import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense,editExpense,removeExpense} from './actions/expenses';
import {setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate} from './actions/filters';
import 'react-dates/initialize';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({description: "Water Bill", amount: 200, createdAt: 20000}));
store.dispatch(addExpense({description: "Dinner Bill", amount: 1000, createdAt: 10000}));
store.dispatch(addExpense({description: "Gas Bill", amount: 3000, createdAt: 30000}));
// store.dispatch(setTextFilter('Bill'));
// store.dispatch(sortByAmount());


const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters));


const jsx = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));
