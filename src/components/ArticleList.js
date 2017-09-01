import React from 'react';
import PropTypes from 'prop-types';

import ArticleItem from './ArticleItem';

class ArticleList extends React.PureComponent {
  static propTypes = {
    articles: PropTypes.object.isRequired,
    // store: PropTypes.object.isRequired,
  };
  render() {
    return (
      <div>
        {Object.values(this.props.articles).map((article) => (
          <ArticleItem
            key={article.id}
            // store={this.props.store}
            article={article}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
