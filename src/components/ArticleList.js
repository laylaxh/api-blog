import React from 'react';
import PropTypes from 'prop-types';

import ArticleItem from './ArticleItem';

class ArticleList extends React.PureComponent {
  static propTypes = {
    articles: PropTypes.object.isRequired,
  };
  render() {
    return (
       // gives you values in that object as an array - the array of articles
       // always need that key when we map
      <div>
        {Object.values(this.props.articles).map((article) => (
          <ArticleItem
            key={article.id}
            article={article}
          />
        ))}
      </div>
    );
  }
}

export default ArticleList;
