import React from 'react';
import {connect} from 'react-redux'
import numeral from 'numeral';
import selectExpenses from '../selectors/expenses'; 
import selectExpenseTotal from '../selectors/expense-total';

export const ExpenseSummary = ({expensesCount, expensesTotal, visibleExpenses})=>{
    const expenseWord = expensesCount ===1 ? 'expense' : 'expenses'
    const formattedExpenseTotal = numeral(expensesTotal/100).format('$0,0.00')  
    return(
        <div>
            <h1>Viewing {expensesCount} {expenseWord} totaling {formattedExpenseTotal}</h1>
        </div>
        
    )    
}

const mapStateToProps = (state)=>{
    const visibleExpenses= selectExpenses(state.expenses, state.filters)
    return{
        expensesCount: visibleExpenses.length,
        expensesTotal: selectExpenseTotal(visibleExpenses)        
    }
}
export default connect(mapStateToProps)(ExpenseSummary)