const express = require('express');
const route = express.Router();

const homeController = require('./src/controllers/homeController');
const contactController = require('./src/controllers/contactController');

const meuMiddleware = (req, res, next) => {
    console.log();
    console.log('Passei no seu middleware.');
    console.log();
    next();
}

//Routes Home
route.get('/', meuMiddleware, homeController.homePage);
route.post('/', homeController.receiveResponse);

//Routes Contact
route.get('/contact', contactController.message);

module.exports = route;