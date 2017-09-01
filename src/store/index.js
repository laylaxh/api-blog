export default class Store {
  // when i instantiate a store, i map this data just once
  constructor(rawData) {
    this.rawData = rawData;
    this.data = {
      articles: this.mapArrayIntoObject(this.rawData.articles, 'id'),
      authors: this.mapArrayIntoObject(this.rawData.authors, 'id'),
    };
  }

  // want authors object not array so that lookup is in constant time, ex:
  // articles: {
  //   '95c12a8f6c88953ca8f8a39da25546e6':  {
  //     "id": "95c12a8f6c88953ca8f8a39da25546e6",
  //     "title": "Introducing React's Error Code System",
  //     "date": "Mon Jul 11 2016 00:00:00 GMT+0000 (UTC)",
  //     "authorId": "2c6aa2cfe3449467d329fa17d6ea230f",
  //     "body":
  //       "Building a better developer experience has been one of the things that React deeply cares about, and a crucial part of it is to detect anti-patterns/potential errors early and provide helpful error messages when things (may) go wrong. However, most of these only exist in development mode; in production, we avoid having extra expensive assertions and sending down full error messages in order to reduce the number of bytes sent over the wire."
  //   }
  // },
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
