// / => view/index.js

import express from 'express';
import serverRender from '../serverRender';
const app = express();

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { initialMarkup: serverRender() });
});

app.listen(8080, () => {
  console.info('Server is running...');
});
