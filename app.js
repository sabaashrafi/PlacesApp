const express = require('express');
const bodyParser = require('body-parser');
const placesRoute = require('./routes/places-router')
const HttpError = require('./models/http-error')
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use('/api/places', placesRoute);
// eslint-disable-next-line no-unused-vars
app.use((res, req, next)=>{
    const error = new HttpError('not found!', 404)
    return error
})

mongoose.connect('mongodb+srv://asaba:137571@cluster0.qivakpe.mongodb.net/places?retryWrites=true&w=majority').then(()=>{
    app.listen(3000);
}).catch((err) =>{
    console.log(err)
})