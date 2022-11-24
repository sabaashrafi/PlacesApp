const express = require('express');
// const bodyParser = require('body-parser');
const placesRoute = require('./routes/places-router')
const HttpError = require('./models/http-error')

const app = express();

// app.use(bodyParser.json());

app.use('/api/places', placesRoute);
// eslint-disable-next-line no-unused-vars
app.use((res, req, next)=>{
    const error = new HttpError('not found!', 404)
    return error
})
app.listen(3000);