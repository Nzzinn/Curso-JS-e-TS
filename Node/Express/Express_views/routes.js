const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

//Routes Home
route.get('/', homeController.homePage);
route.post('/', homeController.receiveResponse);

//Routes Contact
route.get('/contact', contactController.message);

module.exports = route;