import 'reflect-metadata';

import express from 'express';
import path from 'path';

import routes from './routes';

import './database';

const app = express();

app.use(express.json());
app.use('/tmp', express.static(path.resolve(__dirname, '..', 'tmp')));
app.use(routes);

app.listen(3333, () => {
  console.log('🚀 Server started on port 3333!');
});
