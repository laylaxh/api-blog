import React from 'react';
import Game from './Game';
import { Provider } from 'react-redux';

import storeConfig from '../store';
// window.store = store;

class App extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Provider store={storeConfig()}>
        <Game numberCount={5} />
      </Provider>
    );
  }
}

export default App;
