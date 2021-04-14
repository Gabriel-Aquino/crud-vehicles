import { Router } from 'express';
import vehiclesRouter from '@modules/vehicles/infra/http/routes/vehicles.routes';

const routes = Router();

routes.use('/vehicles', vehiclesRouter);

export default routes;
