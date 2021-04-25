import { inject, injectable } from 'tsyringe';

import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

@injectable()
class AllVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(): Promise<Vehicles[]> {
    const allVehicles = await this.vehiclesRepository.findAll();

    return allVehicles;
  }
}

export default AllVehiclesService;
