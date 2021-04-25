import IVehiclesDTO from '@modules/vehicles/dtos/IVehiclesDTO';
import IVehiclesRepository from '@modules/vehicles/repositories/dtos/IVehiclesRepository';
import { uuid } from 'uuidv4';

import Vehicles from '../../infra/typeorm/entities/Vehicles.entities';

class FakeVehiclesRepository implements IVehiclesRepository {
  private vehicles: Vehicles[] = [];

  public async create(vehicle: IVehiclesDTO): Promise<Vehicles> {
    const createOneVehicle = new Vehicles();

    Object.assign(createOneVehicle, { id: uuid() }, vehicle);

    this.vehicles.push(createOneVehicle);

    return createOneVehicle;
  }

  public async findAll(): Promise<Vehicles[]> {
    return this.vehicles;
  }

  public async findById(id: string): Promise<Vehicles | undefined> {
    const findVehicleById = this.vehicles.find(vehicle => vehicle.id === id);
    return findVehicleById;
  }

  public async findByChassi(chassi: string): Promise<Vehicles | undefined> {
    const findVehicleByChasse = this.vehicles.find(
      vehicle => vehicle.chassi === chassi,
    );
    return findVehicleByChasse;
  }

  public async findByPlate(plate: string): Promise<Vehicles | undefined> {
    const findVehicleByPlate = this.vehicles.find(
      vehicle => vehicle.plate === plate,
    );
    return findVehicleByPlate;
  }

  public async findByRenavam(renavam: number): Promise<Vehicles | undefined> {
    const findVehicleByRenavam = this.vehicles.find(
      vehicle => vehicle.renavam === renavam,
    );
    return findVehicleByRenavam;
  }

  public async remove(id: string): Promise<void> {
    this.vehicles = this.vehicles.filter(vehicle => vehicle.id !== id);
  }

  // equivalente a função de salvar
  public async save(vehicles: Vehicles): Promise<Vehicles> {
    const findIndex = this.vehicles.findIndex(
      findVehicle => findVehicle.id === vehicles.id,
    );
    this.vehicles[findIndex] = vehicles;
    return vehicles;
  }
}
export default FakeVehiclesRepository;
