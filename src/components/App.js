import React from 'react';
import Game from './Game';
import PropTypes from 'prop-types';

import store from '../store';
window.store = store;

class App extends React.Component {
  constructor() {
    super();
  }
  getChildContext() {
    return { store };
  }
  static childContextTypes = {
    store: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        <Game numberCount={5} />
      </div>
    );
  }
}

export default App;
