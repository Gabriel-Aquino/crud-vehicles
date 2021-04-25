import { getRepository, Repository } from 'typeorm';

import IVehiclesDTO from '../dtos/IVehiclesDTO';
import Vehicles from '../infra/typeorm/entities/Vehicles.entities';
import IVehiclesRepository from './dtos/IVehiclesRepository';

export default class VehiclesRepository implements IVehiclesRepository {
  private ormRepository: Repository<Vehicles>;

  constructor() {
    this.ormRepository = getRepository(Vehicles);
  }

  public async create(vehicle: IVehiclesDTO): Promise<Vehicles> {
    const createOneVehicle = this.ormRepository.create(vehicle);

    await this.ormRepository.save(createOneVehicle);

    return createOneVehicle;
  }

  public async findAll(): Promise<Vehicles[]> {
    const allVehicles = await this.ormRepository.find();

    return allVehicles;
  }

  public async findById(id: string): Promise<Vehicles | undefined> {
    const findOneVehicle = await this.ormRepository.findOne(id);

    return findOneVehicle;
  }

  public async findByChassi(chassi: string): Promise<Vehicles | undefined> {
    const findVehicleByChassi = await this.ormRepository.findOne(chassi);

    return findVehicleByChassi;
  }

  public async findByPlate(plate: string): Promise<Vehicles | undefined> {
    const findVehicleByPlate = await this.ormRepository.findOne(plate);

    return findVehicleByPlate;
  }

  public async findByRenavam(renavam: number): Promise<Vehicles | undefined> {
    const findVehicleByRenavam = await this.ormRepository.findOne(renavam);

    return findVehicleByRenavam;
  }

  public async remove(id: string): Promise<void> {
    await this.ormRepository.delete(id);
  }

  public async save(vehicles: Vehicles): Promise<Vehicles> {
    return this.ormRepository.save(vehicles);
  }
}
