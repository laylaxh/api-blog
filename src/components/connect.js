import React from 'react';
import PropTypes from 'prop-types';

export default ({ actionsList }) => (WrappedComponent) => {

  return class extends React.PureComponent {
    static contextTypes = {
      store: PropTypes.object.isRequired,
    };
    static displayName = `${WrappedComponent.name}Container`;

    actions = actionsList.reduce((acc, curr) => {
      acc[curr] = this.context.store[curr];
      return acc;
    }, {});

    render() {
      return (
        <WrappedComponent
          {...this.props}
          {...this.actions}
        />
      );
    }
  };
};
