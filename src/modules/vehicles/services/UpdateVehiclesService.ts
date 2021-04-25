import { inject, injectable } from 'tsyringe';

import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

interface IRequest {
  id: string;
  plate: string;
  chassi: string;
  renavam: number;
  model: string;
  trademark: string;
  year: number;
}

@injectable()
class UpdateVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(vehicles: IRequest): Promise<Vehicles> {
    const vehicle = await this.vehiclesRepository.findById(vehicles.id);

    if (!vehicle) {
      throw new Error('vehicle not found!');
    }

    vehicle.plate = vehicles.plate;
    vehicle.chassi = vehicles.chassi;
    vehicle.renavam = vehicles.renavam;
    vehicle.model = vehicles.model;
    vehicle.trademark = vehicles.trademark;
    vehicle.year = vehicles.year;

    await this.vehiclesRepository.save(vehicle);

    return vehicle;
  }
}

export default UpdateVehiclesService;
