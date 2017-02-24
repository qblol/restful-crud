const express = require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'))

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const cors = require('cors');
app.use(cors());

const mongoose = require('mongoose');
// CHANGE TO YOUR DESIRE DATABASE
mongoose.connect('mongodb://localhost/salehouse');

// CHANGE TO YOUR DESIRE ROUTES
const houses = require('./routes/houses');
app.use('/api/houses', houses);

app.listen(3000);

module.exports = app;
