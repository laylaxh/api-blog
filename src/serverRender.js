import App from './components/App';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default () => {
  return ReactDOMServer.renderToString(<App />);
};
