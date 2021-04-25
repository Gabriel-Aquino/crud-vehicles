import IVehiclesDTO from '@modules/vehicles/dtos/IVehiclesDTO';
import Vehicles from '@modules/vehicles/infra/typeorm/entities/Vehicles.entities';

interface IVehiclesRepository {
  create(vehicle: IVehiclesDTO): Promise<Vehicles>;
  findAll(): Promise<Vehicles[]>;
  findById(id: string): Promise<Vehicles | undefined>;
  findByChassi(chassi: string): Promise<Vehicles | undefined>;
  findByPlate(plate: string): Promise<Vehicles | undefined>;
  findByRenavam(renavam: number): Promise<Vehicles | undefined>;
  remove(id: string): Promise<void>;
  save(vehicles: Vehicles): Promise<Vehicles>;
}

export default IVehiclesRepository;
