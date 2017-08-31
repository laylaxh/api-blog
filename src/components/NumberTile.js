import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.Component {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    canPlay: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    selected: false,
  };
  handleClick = () => {
    if (!this.props.selected && this.props.canBeClicked) {
      this.props.onClick(this.props.id);
    }
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
