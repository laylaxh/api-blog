import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool,
  };
  static defaultProps = {
    selected: false,
  };
  handleClick = () => {
    console.log(this.props.number);
  };
  render() {
    return (
      <div
        className="number"
        onClick={this.handleClick}
        style={{ opacity: this.props.selected ? 0.3 : 1 }}
      >
        {this.props.number}
      </div>
    );
  }
}

export default NumberTile;
