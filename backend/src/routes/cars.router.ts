import { Router } from "express";
import * as  carsController from "../controllers/carsController";
import * as  shoppingCartController from "../controllers/shoppingCartController";

const router = Router();

router.get("/getListCars", carsController.getCars);
router.post("/create", carsController.createCar);
router.post("/ShoppingCart", shoppingCartController.createCar);
router.put("/putShoppingCart", shoppingCartController.putShoppingCart);
router.post("/deleteCar", shoppingCartController.deleteCar);


export default router;
