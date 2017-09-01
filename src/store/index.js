export default class Store {
  constructor(rawData) {
    this.rawData = rawData;
    this.data = {
      articles: this.mapArrayIntoObject(this.rawData.articles, 'id'),
      authors: this.mapArrayIntoObject(this.rawData.authors, 'id'),
    };
  }

  mapArrayIntoObject = (arr, attr) => {
    return arr.reduce((acc, curr) => {
      acc[curr[attr]] = curr;
      return acc;
    }, {});
  };

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  };

  getData = () => this.data;
}
