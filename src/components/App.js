import React from 'react';
import PropTypes from 'prop-types';
import Store from '../store';
import rawData from '../testData';
import ArticleList from './ArticleList';

class App extends React.Component {
  store = new Store(rawData.data);

  getChildContext() {
    return { store: this.store };
  }

  static childContextTypes = {
    store: PropTypes.object.isRequired,
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
