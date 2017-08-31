/*
State:
  // Sum of numbers you Selected
  // Win/Lose
*/

import * as Redux from 'redux';

const initialState = {
  selectedNumbers: [],
};

const actionFunctions = {
  SELECT_NUMBER: (state, payload) => {
    return {
      ...state,
      selectedNumbers: [...state.selectedNumbers, payload.index],
    };
  },
};

const reducer = (state, action) => {
  const actionFunction = actionFunctions[action.type];
  if (!actionFunction) {
    return state;
  }
  return actionFunction(state, action.payload);
};

export default () => {
  const store = Redux.createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
      window.__REDUX_DEVTOOLS_EXTENSION__(),
  );
  return store;
};
