const express = require('express');

const router = express.Router();
const carsController = require('../controllers/carsController');
router.get('/getListCars',carsController.getCars);
router.post('/create',carsController.createCars);

module.exports = router; 