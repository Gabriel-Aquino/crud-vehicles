import { inject, injectable } from 'tsyringe';

import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

@injectable()
class DeleteVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(id: string): Promise<void> {
    const findVehicleById = this.vehiclesRepository.findById(id);

    if (!findVehicleById) {
      throw new Error('Vehicle not found');
    }

    await this.vehiclesRepository.remove(id);
  }
}

export default DeleteVehiclesService;
