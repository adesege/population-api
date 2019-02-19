const express = require('express');
const location = require('./controllers/location');
const validations = require('./validations');

const router = express.Router();

router.post('/locations', validations.createLocation, location.createLocation);
router.get('/locations/:id?', validations.idParams, location.getLocations);
router.patch('/locations/:id', validations.idParams, location.updateLocation);
router.delete('/locations/:id', validations.idParams, location.deleteLocation);

module.exports = router;
