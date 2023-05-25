const express = require('express');
const route = express.Router();

const homeController = require('./Controllers/homeController');
const contactController = require('./Controllers/contactController');

//Routes Home
route.get('/', homeController.homePage);
route.post('/', homeController.receiveResponse);

//Routes Contact
route.get('/contact', contactController.message);

module.exports = route;