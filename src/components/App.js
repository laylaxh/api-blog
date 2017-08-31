import React from 'react';
import Game from './Game';
import { Provider } from 'react-redux';

import storeConfig from '../store';
// window.store = store;

class App extends React.Component {
  store = storeConfig();
  state = {
    score: 0,
    gameId: Date.now(),
  };
  resetGame = () => {
    this.store = storeConfig();
    this.setState({ gameId: Date.now() });
  };
  updateScore = (remainingSeconds) => {
    this.setState((prevState) => {
      return { score: prevState.score + 100 * remainingSeconds };
    });
  };
  render() {
    return (
      <div>
        {this.state.score}
        <Provider key={this.state.gameId} store={this.store}>
          <Game
            updateScore={this.updateScore}
            resetGame={this.resetGame}
            numberCount={5}
          />
        </Provider>
      </div>
    );
  }
}

export default App;
