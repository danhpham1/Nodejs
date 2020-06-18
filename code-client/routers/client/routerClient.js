const express = require('express');
const routerClient = express.Router();

//controller
const homeController = require('../../controller/client/home');

const categoryController = require('../../controller/client/category/category');

//get home index
routerClient.get('', homeController.getHome);


//get category index
routerClient.get('/:category', categoryController.getCategoryIndex);


module.exports = routerClient;