import React from 'react';
import {NavLink} from 'react-router-dom';
const Header = ()=>(
    <div>
        <h1>Expensify</h1>
        <p>
            <NavLink exact to="/" activeClassName="is-active">home page</NavLink>
            <NavLink to="/create" activeClassName="is-active">Add Expense Page</NavLink>
            
        </p>
    </div>
    
)
export default Header;