import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';
import { decrementTime } from '../store/actions';

import shuffle from 'lodash.shuffle';

class Game extends React.PureComponent {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
    selectedNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
    decrementTime: PropTypes.func.isRequired,
    remainingSeconds: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
    updateScore: PropTypes.func.isRequired,
  };
  constructor(props) {
    super();
    this.randomNumbers = Array.from({
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2)
      .reduce((acc, curr) => acc + curr);
    this.randomNumbers = shuffle(this.randomNumbers);
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.props.decrementTime();
      if (this.props.remainingSeconds === 0) {
        clearInterval(this.intervalId);
      }
    }, 1000);
  }
  componentDidUpdate() {
    if (this.gameStatus() === 'won') {
      this.props.updateScore(this.props.remainingSeconds);
    }
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  gameStatus = () => {
    const sumSelected = this.props.selectedNumbers.reduce(
      (acc, curr) => acc + this.randomNumbers[curr],
      0,
    );
    if (this.props.remainingSeconds <= 0) {
      return 'lost';
    }
    if (sumSelected < this.target) {
      return 'playing';
    }
    clearInterval(this.intervalId);
    if (sumSelected === this.target) {
      return 'won';
    }
    if (sumSelected > this.target) {
      return 'lost';
    }
  };
  targetPanelColor(gameStatus) {
    if (gameStatus === 'playing') {
      return;
    }
    return gameStatus === 'won' ? 'green' : 'red';
  }
  canPlay = () => {
    return this.gameStatus() === 'playing';
  };
  render() {
    const gameStatus = this.gameStatus();
    return (
      <div id="game">
        <div id="time">{this.props.remainingSeconds}</div>
        <div
          id="target"
          style={{
            backgroundColor: this.targetPanelColor(gameStatus),
          }}
        >
          {this.target}
        </div>
        <RandomNumbersPanel
          canPlay={this.canPlay}
          randomNumbers={this.randomNumbers}
        />
        {gameStatus !== 'playing' && (
          <button onClick={this.props.resetGame}>Play Again</button>
        )}
      </div>
    );
  }
}

export default connect(
  (state) => ({
    selectedNumbers: state.selectedNumbers,
    remainingSeconds: state.remainingSeconds,
  }),
  { decrementTime },
)(Game);
