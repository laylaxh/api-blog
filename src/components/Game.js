import React from 'react';
import PropTypes from 'prop-types';

import { randomNumberGenerator } from '../store/util';
import RandomNumbersPanel from './RandomNumbersPanel';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
  };
  constructor(props) {
    super();
    this.randomNumbers = Array.from({
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
    this.target = this.randomNumbers
      .slice(0, props.numberCount - 2)
      .reduce((acc, curr) => acc + curr);
  }
  render() {
    return (
      <div>
        <div id="target">{this.target}</div>
        <RandomNumbersPanel randomNumbers={this.randomNumbers} />
      </div>
    );
  }
}

export default Game;
