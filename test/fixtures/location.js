const Chance = require('chance');

const chance = new Chance();

const locationFixture = {
  name: chance.country({ full: true }),
  numberOfFemaleResidents: chance.integer({ min: 1, max: 10 }),
  numberOfMaleResidents: chance.integer({ min: 1, max: 10 }),
};

module.exports = {
  locationFixture,
};
