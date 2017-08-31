import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
  };
  handleClick = () => {
    console.log(this.props.number);
  }
  render() {
    return (
      <div className="number" onClick={this.handleClick}>
        {this.props.number}
      </div>

    );
  }
}

export default NumberTile;
