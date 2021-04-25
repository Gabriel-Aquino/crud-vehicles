import { inject, injectable } from 'tsyringe';

import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

interface IRequest {
  id: string;
}

@injectable()
class FindVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Vehicles | undefined> {
    const findVehicleById = await this.vehiclesRepository.findById(data.id);

    if (!findVehicleById) {
      throw new Error('Vehicle not found');
    }

    return findVehicleById;
  }
}

export default FindVehiclesService;
