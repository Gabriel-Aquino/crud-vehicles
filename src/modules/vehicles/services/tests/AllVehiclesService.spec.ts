import 'reflect-metadata';

import expect from 'expect';

import FakeVehiclesRepository from '../../repositories/fakes/FakeVehiclesRepository';
import AllVehiclesService from '../AllVehiclesService';

describe('AllVehicles', () => {
  it('should be able to list all vehicles', async () => {
    const fakeVehiclesRepository = new FakeVehiclesRepository();
    const allVehicles = new AllVehiclesService(fakeVehiclesRepository);

    const vehicle1 = await fakeVehiclesRepository.create({
      plate: 'aaa 1234',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    const vehicle2 = await fakeVehiclesRepository.create({
      plate: 'aaa 1111',
      chassi: 'G23473GAS355848',
      model: 'Hilux',
      renavam: 293478244,
      trademark: 'Logo.png',
      year: 2021,
    });

    const all = await allVehicles.execute();
    expect(all).toContain(vehicle1);
    expect(all).toContain(vehicle2);
  });
});
