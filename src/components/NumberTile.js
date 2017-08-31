import React from 'react';
import PropTypes from 'prop-types';

class NumberTile extends React.PureComponent {
  static propTypes = {
    id: PropTypes.number.isRequired,
    number: PropTypes.number.isRequired,
    selected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    canBeClicked: PropTypes.func.isRequired,
  };
  static defaultProps = {
    selected: false,
  };
  handleClick = () => {
    if (!this.props.selected && this.props.canBeClicked()) {
      this.props.onClick(this.props.id);
    }
  };
  componentWillUpdate(nextProps, nextState) {
    console.log(this.props, nextProps);
    console.log(this.state, nextState);
  }
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
