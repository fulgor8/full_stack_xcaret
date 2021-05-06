import { Router } from "express";
import * as  carsController from "../controllers/carsController";
import * as  carShopController from "../controllers/carShopController";

const router = Router();

router.get("/getListCars", carsController.getCars);
router.post("/create", carsController.createCar);
router.post("/createCarShop", carShopController.createCar);
router.put("/putCarShop", carShopController.putCarShop);
router.post("/deleteCar", carShopController.deleteCar);


export default router;
