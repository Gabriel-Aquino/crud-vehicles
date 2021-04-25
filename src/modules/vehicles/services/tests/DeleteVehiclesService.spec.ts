import 'reflect-metadata';

import expect from 'expect';
import sinon from 'ts-sinon';

import AppError from '../../../../shared/errors/AppError';
import FakeVehiclesRepository from '../../repositories/fakes/FakeVehiclesRepository';
import DeleteVehiclesService from '../DeleteVehiclesService';

describe('DeleteVehicle', () => {
  it('should be able to delete a vehicle', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const remove = sinon.spy(fakeVehiclesRepository, 'remove');
    const deleteVehicle = new DeleteVehiclesService(fakeVehiclesRepository);

    const vehicle = await fakeVehiclesRepository.create({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    await deleteVehicle.execute({
      id: vehicle.id,
    });

    expect(remove.calledOnce);
  });

  it('should not be able to delete vehicle from non existing id', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const deleteVehicle = new DeleteVehiclesService(fakeVehiclesRepository);

    expect(
      deleteVehicle.execute({
        id: 'non-existing-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
