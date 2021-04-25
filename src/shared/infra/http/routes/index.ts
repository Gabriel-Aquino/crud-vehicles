import vehiclesRouter from '@modules/vehicles/infra/http/routes/vehicles.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/vehicles', vehiclesRouter);

export default routes;
