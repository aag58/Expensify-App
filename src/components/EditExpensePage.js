import React from 'react';
import ExpenseForm from './ExpenseForm';
import {connect} from 'react-redux';
import { editExpenses, startRemoveExpenses} from '../actions/expenses';


// export class EditExpensePage extends React.Component{
//     onSubmit= (expense)=>{
//         this.props.editExpenses(this.props.expense.id, expense);
//         this.props.history.push('/');
//     }
//     onRemove = ()=>{
//         this.props.removeExpense(this.props.expense);
//         this.props.history.push('/'); 
//     }

//     render(){
//         return(
//             <div>
//                 <ExpenseForm 
//                     expense = {this.props.expense}
//                     onSubmit={this.onSubmit}
//                 />
//                 <button onClick={this.onRemove}>Remove</button>
//             </div>
//         )
//     }
// }

export const EditExpensePage = (props)=>{
    return(
        <div>
            <ExpenseForm 
                expense = {props.expense}
                onSubmit={(expense)=>{
                    props.editExpenses(props.expense.id, expense);
                    props.history.push('/');
                }}
            />
            <button onClick={()=>{
                props.startRemoveExpenses(props.expense)
                props.history.push('/');
                
                
            }}>Remove</button>

        </div>
    )
}

const mapStateToProps = (state, props)=>({
    expense: state.expenses.find((expense)=> expense.id===props.match.params.id) 
})

// const mapDispatchToProps = (dispatch, props)=>({
//     editExpenses: (id, expense) => dispatch(editExpenses(id, expense)),
//     startRemoveExpenses: (data) => dispatch(startRemoveExpenses(data))
// })
export default connect(mapStateToProps, {editExpenses, startRemoveExpenses})(EditExpensePage);

