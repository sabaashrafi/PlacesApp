const express = require('express');

const placesControllers = require('../controllers/places-controllers');

const router = express.Router();

router.post('/', placesControllers.createPlace);
router.get('/:pid', placesControllers.getPlaceById);

module.exports = router;