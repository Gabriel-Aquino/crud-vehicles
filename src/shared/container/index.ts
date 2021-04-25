import IVehiclesRepository from '@modules/vehicles/repositories/dtos/IVehiclesRepository';
import VehiclesRepository from '@modules/vehicles/repositories/VehiclesRepository';
import { container } from 'tsyringe';

container.registerSingleton<IVehiclesRepository>(
  'VehiclesRepository',
  VehiclesRepository,
);
