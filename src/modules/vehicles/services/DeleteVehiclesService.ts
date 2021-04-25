import { inject, injectable } from 'tsyringe';

import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

interface IRequest {
  id: string;
}

@injectable()
class DeleteVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(data: IRequest): Promise<void> {
    const findVehicleById = this.vehiclesRepository.findById(data.id);

    if (!findVehicleById) {
      throw new Error('Vehicle not found');
    }

    await this.vehiclesRepository.remove(data.id);
  }
}

export default DeleteVehiclesService;
