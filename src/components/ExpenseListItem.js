import React from 'react';
import {removeExpense} from '../actions/expenses';
import { NavLink } from 'react-router-dom';
// const ExpenseListItem = (props)=>(
//     <div>
//         <h3>{props.description}</h3>
//         <p>{props.amount}-{props.createdAt}</p>
//         <button onClick={()=>{
//             props.dispatch(removeExpense(props))
//         }}>Remove</button>
        
//     </div>
// )
const ExpenseListItem = ({id,description, amount,createdAt})=>(
    <div>
    <NavLink to={`/edit/${id}`}><h3>{description}</h3></NavLink>
        <p>{amount}-{createdAt}</p>
               
    </div>
)


export default ExpenseListItem;