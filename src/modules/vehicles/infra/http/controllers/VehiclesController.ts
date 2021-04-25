import AllVehiclesService from '@modules/vehicles/services/AllVehiclesService';
import CreateVehiclesService from '@modules/vehicles/services/CreateVehiclesService';
import DeleteVehiclesService from '@modules/vehicles/services/DeleteVehiclesService';
import FindVehiclesService from '@modules/vehicles/services/FindVehiclesService';
import UpdateVehiclesService from '@modules/vehicles/services/UpdateVehiclesService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class VehiclesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { plate, chassi, renavam, model, trademark, year } = req.body;

    const createVehicle = container.resolve(CreateVehiclesService);

    const newVehicle = await createVehicle.execute({
      plate,
      chassi,
      renavam,
      model,
      trademark,
      year,
    });
    return res.status(200).json(newVehicle);
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const deleteVehicle = container.resolve(DeleteVehiclesService);
    await deleteVehicle.execute(id);

    return res.status(204).json();
  }

  public async findAll(req: Request, res: Response): Promise<Response> {
    const allVehicles = container.resolve(AllVehiclesService);

    const returnAllVehicles = await allVehicles.execute();

    return res.status(200).json(returnAllVehicles);
  }

  public async findById(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const findOneVehicle = container.resolve(FindVehiclesService);

    const foundVehicle = await findOneVehicle.execute(id);

    return res.status(200).json(foundVehicle);
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, plate, chassi, renavam, model, trademark, year } = req.body;
    const updateVehicle = container.resolve(UpdateVehiclesService);

    const updatedVehicle = await updateVehicle.execute({
      id,
      plate,
      chassi,
      renavam,
      model,
      trademark,
      year,
    });

    return res.status(200).json(updatedVehicle);
  }
}
