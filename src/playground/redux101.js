import { createStore } from 'redux';

const incrementBy = ({ incrementBy = 1}={})=>({
    type: 'INCREMENT',
    incrementBy
})

const decrementBy = ({ decrementBy = 1 }={})=>({
    type: 'DECREMENT',
    decrementBy
})

const reset = ()=>({
    type: 'RESET'
})

const set = ({ set = 1 }={})=>({
    type: 'SET',
    set
})

// Reducer
// 1. Reducers are a pure function
// 2. Never Change State or Ation

const countReducer = (state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            return{
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
        return{
            count: state.count - action.decrementBy
        }
        case 'RESET':
        return{
            count: 0
        }
        case 'SET':
        return {
            count: action.set
        }
}
}

const store = createStore(countReducer); // createStore requires function as first argument which takes state as parameter



// Action is an Object that  gets sent to an store
const unsubscribe = store.subscribe(()=>{
    console.log(store.getState())
})
// unsubscribe();


store.dispatch(incrementBy())
store.dispatch(incrementBy({ incrementBy: 5 }))

store.dispatch(decrementBy())
store.dispatch(decrementBy({ decrementBy: 10 }))

store.dispatch(reset())
store.dispatch(set({set:10}))

