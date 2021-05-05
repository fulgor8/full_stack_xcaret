import { Router } from "express";
import * as  carsController from "../controllers/carsController";
const router = Router();

router.get("/getListCars", carsController.getCars);
router.post("/create", carsController.createCar);

export default router;
