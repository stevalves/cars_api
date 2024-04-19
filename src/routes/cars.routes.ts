import { Router } from "express";
import { dataAssurer } from "../middlewares/assuranceData.middleware";
import { carSchemaRequest } from "../schemas/cars.schema";
import {
  createCarController,
  getCarController,
  getCarsController,
} from "../controllers/cars.controller";

const carsRoutes = Router();
carsRoutes.post("", dataAssurer(carSchemaRequest), createCarController);
carsRoutes.get("", getCarsController);
carsRoutes.get("/:id", getCarController);

export default carsRoutes;
