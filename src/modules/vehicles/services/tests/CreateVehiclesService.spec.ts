import 'reflect-metadata';

import expect from 'expect';

import AppError from '../../../../shared/errors/AppError';
import FakeVehiclesRepository from '../../repositories/fakes/FakeVehiclesRepository';
import CreateVehiclesService from '../CreateVehiclesService';

describe('CreateVehicles', () => {
  it('should be able to create a new vehicle', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const createVehicle = new CreateVehiclesService(fakeVehiclesRepository);

    const vehicle = await createVehicle.execute({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    expect(vehicle).toHaveProperty('id');
  });

  it('should not be able to create a new vehicle with same chassi from another', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const createVehicle = new CreateVehiclesService(fakeVehiclesRepository);

    await createVehicle.execute({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    expect(
      createVehicle.execute({
        plate: 'aaa 1234',
        chassi: 'G23473GAS355848',
        model: 'Hilux',
        renavam: 293478244,
        trademark: 'Logo.png',
        year: 2021,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new vehicle with same plate from another', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const createVehicle = new CreateVehiclesService(fakeVehiclesRepository);

    await createVehicle.execute({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    expect(
      createVehicle.execute({
        plate: 'aaa 1234',
        chassi: 'G23473GAS355848',
        model: 'Hilux',
        renavam: 293478244,
        trademark: 'Logo.png',
        year: 2021,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should not be able to create a new vehicle with same renavam from another', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const createVehicle = new CreateVehiclesService(fakeVehiclesRepository);

    await createVehicle.execute({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    expect(
      createVehicle.execute({
        plate: 'aaa 1234',
        chassi: 'G23473GAS355848',
        model: 'Hilux',
        renavam: 293478244,
        trademark: 'Logo.png',
        year: 2021,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
