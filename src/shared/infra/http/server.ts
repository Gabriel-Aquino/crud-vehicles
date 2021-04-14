import express from 'express';
import routes from './routes';
import 'reflect-metadata';

const app = express();
app.use(routes);
app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server has been started');
});
