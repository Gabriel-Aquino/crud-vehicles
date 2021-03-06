import 'reflect-metadata';
import express, { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import routes from './routes';
import '../typeorm';

import '@shared/container';

const app = express();
app.use(express.json());
app.use(routes);
app.use(
  (err: Error, request: Request, response: Response, _next: NextFunction) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json({
        status: 'error',
        message: err.message,
      });
    }
    // eslint-disable-next-line no-console
    console.error(err);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Server has been started');
});
