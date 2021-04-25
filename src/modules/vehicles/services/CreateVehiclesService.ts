import { inject, injectable } from 'tsyringe';

import AppError from '../../../shared/errors/AppError';
import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from '../repositories/dtos/IVehiclesRepository';

interface IRequest {
  plate: string;
  chassi: string;
  renavam: number;
  model: string;
  trademark: string;
  year: number;
}

@injectable()
class CreateVehiclesService {
  constructor(
    @inject('VehiclesRepository')
    private vehiclesRepository: IVehiclesRepository,
  ) {}

  public async execute(data: IRequest): Promise<Vehicles> {
    const findVehicleByChassi = this.vehiclesRepository.findByChassi(
      data.chassi,
    );
    if (!findVehicleByChassi) {
      throw new AppError('Vehicle chassi is already registered');
    }

    const findVehicleByPlate = this.vehiclesRepository.findByPlate(data.plate);
    if (!findVehicleByPlate) {
      throw new AppError('Vehicle plate is already registered');
    }

    const findVehicleByRenavam = this.vehiclesRepository.findByRenavam(
      data.renavam,
    );
    if (!findVehicleByRenavam) {
      throw new AppError('Vehicle chassi is already registered');
    }

    const vehicle = await this.vehiclesRepository.create({
      plate: data.plate,
      chassi: data.chassi,
      renavam: data.renavam,
      model: data.model,
      trademark: data.trademark,
      year: data.year,
    });

    return vehicle;
  }
}

export default CreateVehiclesService;
