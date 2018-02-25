const fns = require('./utils/functions');
const cars = require('./../server/carData.json');
const _ = require('lodash');

describe('Car functions', () => {
  test('getCars works', () => {
    expect.assertions(1);
    return fns.getCars('http://localhost:3001/api/cars')
      .then(response => {
        expect(response[0].color).toEqual('Yellow');
      });
  });
  test('filterByID works', () => {
    let carToCheck = fns.filterByID(cars, 5);
    expect(carToCheck[0].id).toEqual(5);
  });
  test('filterByColor works', () => {
    let carToCheck = fns.filterByColor(cars, 'Blue');
    expect(carToCheck[0].model).toEqual('Cavalier');
  });
});

_.times(20, () => {
  test.skip('fns.rando works', () => {
    expect(fns.rando()).toBeGreaterThanOrEqual(0);
    expect(fns.rando()).toBeLessThanOrEqual(10);
  });
});

test('fns.clash works', () => {
  expect(fns.clash(100, 100, 34, 49)).toEqual('Elf');
});