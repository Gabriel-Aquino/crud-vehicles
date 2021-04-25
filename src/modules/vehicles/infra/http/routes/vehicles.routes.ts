import VehiclesController from '@modules/vehicles/infra/http/controllers/VehiclesController';
import { Router } from 'express';

const vehiclesRoute = Router();
const vehiclesController = new VehiclesController();

vehiclesRoute.post('/', vehiclesController.create);
vehiclesRoute.delete('/', vehiclesController.remove);
vehiclesRoute.get('/', vehiclesController.findAll);
vehiclesRoute.post('/findOne', vehiclesController.findById);
vehiclesRoute.put('/', vehiclesController.update);

export default vehiclesRoute;
