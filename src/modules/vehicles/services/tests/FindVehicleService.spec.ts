import 'reflect-metadata';

import expect from 'expect';

import FakeVehiclesRepository from '../../repositories/fakes/FakeVehiclesRepository';
import FindVehiclesService from '../FindVehiclesService';

describe('FindOneVehicle', () => {
  it('should be able to list one vehicle by id', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const findOneVehicleById = new FindVehiclesService(fakeVehiclesRepository);

    const vehicle = await fakeVehiclesRepository.create({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    const foundVehicle = await findOneVehicleById.execute(vehicle);
    expect(foundVehicle?.id).toEqual(vehicle.id);
  });
});
