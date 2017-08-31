/*
State:
  // Sum of numbers you Selected
  // Win/Lose
*/

import * as Redux from 'redux';

const initialState = {
  selectedNumbers: []
};

const reducer = (state, action) => {
  // console.log('Calling Reducer', action);
  // if (action.type === 'TEST1') {
  //   // state.counter = 1;
  //   return {
  //     ...state,
  //     counter: 1,
  //   };
  // }
  // if (action.type === 'TEST2') {
  //   // state.counter = state.counter + 1;
  //   return {
  //     ...state,
  //     counter: state.counter + 1,
  //   };
  // }
  return state;
};

const store = Redux.createStore(reducer, initialState);
// console.log(store);
// console.log('getState', store.getState());
//
// store.dispatch({ type: 'TEST1' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());
// store.dispatch({ type: 'TEST2' });
// console.log('getState', store.getState());

export default store;
