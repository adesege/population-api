const Joi = require('joi');

const createLocation = (req, res, next) => {
  const schema = Joi.object().keys({
    name: Joi.string().required(),
    numberOfFemaleResidents: Joi.number().required(),
    numberOfMaleResidents: Joi.number().required(),
    relativeLocationId: Joi.number().optional(),
  });

  const { error } = Joi.validate(req.body, schema, {
    abortEarly: false,
    stripUnknown: true,
  });
  if (error) {
    const errorMessage = error.details.map(detail => detail.message);
    return res.status(400).send({ message: errorMessage });
  }
  return next();
};

const idParams = (req, res, next) => {
  const schema = Joi.object().keys({
    id: Joi.number().optional(),
  });

  const { error } = Joi.validate(req.params, schema, {
    abortEarly: false,
    stripUnknown: true,
  });

  if (error) {
    const errorMessage = error.details.map(detail => detail.message);
    return res.status(400).send({ message: errorMessage });
  }

  return next();
};

module.exports = {
  createLocation,
  idParams,
};
