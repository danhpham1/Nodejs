const express = require('express');
const index_controller = require('../controllers/index');
const create_controller = require('../controllers/create');
const complete_controller = require('../controllers/complete');
const delete_controller = require('../controllers/delete');
var routers = express.Router();



routers.get('',index_controller.index);

//create todo

routers.post('/todo',create_controller.create);

//complete
routers.get('/complete/:id',complete_controller.complete);


//delete todo
routers.get('/delete/:id',delete_controller.delete);


module.exports = routers;