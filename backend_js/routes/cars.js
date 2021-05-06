const express = require('express');

const router = express.Router();
const carsController = require('../controllers/carsController');
const shoppingCartController = require('../controllers/shoppingCartController');

router.get('/getListCars',carsController.getCars);
router.post('/create',carsController.createCars);
router.post("/ShoppingCart", shoppingCartController.createCars);
router.put("/putShoppingCart", shoppingCartController.putShoppingCart);
router.post("/deleteCar", shoppingCartController.deleteCar);

module.exports = router; 