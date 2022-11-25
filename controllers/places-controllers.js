// const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');
const Place = require('../models/places');


const createPlace = async (req, res, next) => {
    const { title, description, address, creator } = req.body;

    const createPlaceObject = new Place({
        title,
        description,
        address,
        creator
    });
    try {
        await createPlaceObject.save();
    } catch (error) {
        const err = new HttpError('failed', 500)
        return next(err)
    }
    res.status(201).json({ place: createPlaceObject })
}

const getPlaceById = async (req, res, next) => {
    const placeId = req.params.pid;
    let place;

    try {
        place = await Place.findById(placeId);

    } catch (error) {
        const err = new HttpError('eroooor', 500);
        return next(err)
    }

    if (!place) {
        const err = new HttpError('Could not find a place for the provided id.', 404);
        return next(err)
    }
    
    res.json({ place: place.toObject( {getters: true}) })
}


exports.getPlaceById = getPlaceById;
exports.createPlace = createPlace;