const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const homeController = require('../controller/home-controller');

var router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));


router.get('',homeController.getHome);

router.post('',homeController.findName);




module.exports = router;