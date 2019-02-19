const { Location } = require('../models');
const { calculateTotalResident } = require('../helpers');

const ERROR_MESSAGE = 'There was an error fulfilling your request';
module.exports = {
  async createLocation(req, res) {
    const { numberOfMaleResidents, numberOfFemaleResidents } = req.body;
    try {
      const location = await Location.create({
        ...req.body,
        totalResidents: calculateTotalResident(numberOfMaleResidents, numberOfFemaleResidents),
      });
      return res.status(201).send({ message: 'Success', location });
    } catch (err) {
      return res.status(500).send({
        message: ERROR_MESSAGE,
      });
    }
  },
  async getLocations(req, res) {
    try {
      const where = req.params.id ? { id: req.params.id } : undefined;
      const locations = await Location.findAll({
        where,
        include: [
          {
            model: Location,
            as: 'relativeLocation',
          },
        ],
      });

      if (locations.length === 0) {
        return res.status(422).send({ message: 'Locations not found' });
      }

      return res.send({ locations });
    } catch (err) {
      return res.status(500).send({
        message: ERROR_MESSAGE,
      });
    }
  },
  async updateLocation(req, res) {
    const { id } = req.params;
    const { numberOfMaleResidents, numberOfFemaleResidents } = req.body;

    try {
      await Location.update(
        {
          ...req.body,
          totalResidents: calculateTotalResident(numberOfMaleResidents, numberOfFemaleResidents),
        },
        { where: { id } },
      );
      return res.send({ message: 'Success' });
    } catch (err) {
      return res.status(500).send({
        message: ERROR_MESSAGE,
      });
    }
  },
  async deleteLocation(req, res) {
    const { id } = req.params;
    try {
      await Location.destroy({
        where: { id },
      });
      return res.send({ message: 'Success' });
    } catch (err) {
      return res.status(500).send({
        message: ERROR_MESSAGE,
      });
    }
  },
};
