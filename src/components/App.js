import React from 'react';
import PropTypes from 'prop-types';
import Store from '../store';
import rawData from '../testData';
import ArticleList from './ArticleList';

class App extends React.Component {
  store = new Store(rawData.data); // pass Store raw data

  // shared context, global store: every component can get store returned as an object
  getChildContext() {
    return { store: this.store };
  }

  static childContextTypes = {
    store: PropTypes.object.isRequired, // defining store's own proptypes
  };

  render() {
    return (
      <div>
        <ArticleList
          articles={this.store.getData().articles}
        />
      </div>
    );
  }
}

export default App;
