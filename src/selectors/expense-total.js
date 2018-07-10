export default (expenses = [])=>{
    // if(expenses.length == 0){
    //     return 0
    // }
    return expenses
    .map((val)=>val.amount)
    .reduce((a,c)=>a+c, 0)
}