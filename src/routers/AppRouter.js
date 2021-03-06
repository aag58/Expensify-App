import React from 'react';
import ExpensDashBoardPage from '../components/ExpensDashBoardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';



const AppRouter=()=>(
    <BrowserRouter>
        <div>
        <Header/>
        <Switch>
            <Route exact path="/" component={ExpensDashBoardPage}/>
            <Route path="/create" component={AddExpensePage}/>
            <Route path="/edit/:id" component={EditExpensePage}/>
            <Route path="/help" component={HelpPage}/>
            <Route component={NotFoundPage}/> 
        </Switch>
        </div>
    </BrowserRouter>
)

export default AppRouter;