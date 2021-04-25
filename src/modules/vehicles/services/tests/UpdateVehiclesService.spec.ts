import 'reflect-metadata';

import expect from 'expect';

import AppError from '../../../../shared/errors/AppError';
import FakeVehiclesRepository from '../../repositories/fakes/FakeVehiclesRepository';
import UpdateVehiclesService from '../UpdateVehiclesService';

describe('UpdateVehicle', () => {
  it('should be able to update a vehicle', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const updateVehicle = new UpdateVehiclesService(fakeVehiclesRepository);

    const vehicle = await fakeVehiclesRepository.create({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    await updateVehicle.execute({
      id: vehicle.id,
      plate: 'aaa 1111',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo',
      year: 2021,
    });

    expect(vehicle.plate).toBe('aaa 1111');
  });

  it('should not be able to update vehicle from non existing id', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const updateVehicle = new UpdateVehiclesService(fakeVehiclesRepository);

    expect(
      updateVehicle.execute({
        id: 'non-existing-id',
        plate: 'aaa 1111',
        chassi: 'G23473GAS355848',
        model: 'Hilux',
        renavam: 293478244,
        trademark: 'Logo',
        year: 2021,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
