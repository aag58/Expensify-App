import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpensDashBoardPage = ()=> (
    <div>
        <ExpenseListFilters/>
        <ExpenseList/>
    </div>
)


export default ExpensDashBoardPage;