import React from 'react';
import PropTypes from 'prop-types';

import { randomNumberGenerator } from '../store/util';

class Game extends React.Component {
  static propTypes = {
    numberCount: PropTypes.number.isRequired,
  };
  constructor(props) {
    super();
    // this.target = 10 + Math.floor(40 * Math.random());
    this.randomNumbers = Array.from({
      length: props.numberCount,
    }).map(() => randomNumberGenerator());
  }
  render() {
    return (
      <div>
        <div id="target">...</div>
        <div id="random-numbers">
          {this.randomNumbers}
        </div>
      </div>
    );
  }
}

export default Game;
