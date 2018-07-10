import expenses from '../fixtures/expenses'
import selectExpensetotal from '../../selectors/expense-total';

test('should correctly add up multiple expenses', ()=>{
    const result = selectExpensetotal(expenses)
    expect(result).toEqual(5790)
})
test('should correctly add up single expenses', ()=>{
    const result = selectExpensetotal([expenses[0]])
    expect(result).toEqual(195)
})
test('should return 0 if no expenses', ()=>{
    const result = selectExpensetotal()
    expect(result).toEqual(0)
})