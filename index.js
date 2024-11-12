const { createStore } = require('redux');

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const myReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT: 
      return state + 1;
    case DECREMENT: {
      return state - 1;
    }
      default:
      return state;
  }
};

const store = createStore(myReducer);

store.subscribe(() => console.log(store.getState()));

console.log(store.getState());
store.dispatch({type: INCREMENT});
store.dispatch({type: DECREMENT});
store.dispatch({type: INCREMENT});
store.dispatch({type: INCREMENT});
store.dispatch({type: DECREMENT});
store.dispatch({type: DECREMENT});
