import React from 'react';
import PropTypes from 'prop-types';

class ArticleItem extends React.PureComponent {
  static propTypes = {
    article: PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      authorId: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    }).isRequired,
  };

  static contextTypes = {
    store: PropTypes.object.isRequired,
  };


  render() {
    const { article } = this.props;
    const author = this.context.store.lookupAuthor(article.authorId);
    return (
      <div>
        <div>{article.title}</div>
        <div>
          <a href={author.website}>
            {author.firstName} {author.lastName}
          </a>
        </div>
        <div>{article.date}</div>
        <div>{article.body}</div>
      </div>
    );
  }
}

export default ArticleItem;
