import { inject, injectable } from 'tsyringe';

import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

@injectable()
class FindVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string): Promise<Vehicles | undefined> {
    const findVehicleById = await this.vehiclesRepository.findById(id);

    if (!findVehicleById) {
      throw new Error('Vehicle not found');
    }

    return findVehicleById;
  }
}

export default FindVehiclesService;
