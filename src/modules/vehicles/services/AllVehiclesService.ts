import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

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

    if (!allVehicles) {
      throw new AppError('There is no one vehicle registred');
    }

    return allVehicles;
  }
}

export default AllVehiclesService;
