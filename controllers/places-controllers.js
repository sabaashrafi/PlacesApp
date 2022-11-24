// const { v4: uuidv4 } = require('uuid');

const HttpError = require('../models/http-error');

let DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        location: {
          lat: 40.7484474,
          lng: -73.9871516
        },
        address: '20 W 34th St, New York, NY 10001',
        creator: 'u1'
    }
];

const getPlaceById = (req, res) => {
    const placeId = req.params.pid;
    const place = DUMMY_PLACES.find((p)=>p.id = placeId);

    if(!place) {
        throw new HttpError('Could not find a place for the provided id.', 404);
    }
    res.json({place})
}

exports.getPlaceById = getPlaceById;