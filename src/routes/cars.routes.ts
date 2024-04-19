import { Router } from "express";
import { dataAssurer } from "../middlewares/assuranceData.middleware";
import { carSchemaRequest } from "../schemas/cars.schema";
import {
  createCarController,
  deleteCarController,
  editCarController,
  getCarController,
  getCarsController,
} from "../controllers/cars.controller";
import ensureCarExists from "../middlewares/ensureCarExists.middleware";

const carsRoutes = Router();
carsRoutes.post("", dataAssurer(carSchemaRequest), createCarController);
carsRoutes.get("", getCarsController);
carsRoutes.get("/:id", ensureCarExists, getCarController);
carsRoutes.put("/:id", ensureCarExists, dataAssurer(carSchemaRequest), editCarController);
carsRoutes.delete("/:id", ensureCarExists, deleteCarController);

export default carsRoutes;
