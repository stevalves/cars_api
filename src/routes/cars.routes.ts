import { Router } from "express";
import { dataAssurer } from "../middlewares/assuranceData.middleware";
import { carSchemaRequest } from "../schemas/cars.schema";
import { createCarController } from "../controllers/cars.controller";

const carsRoutes = Router();
carsRoutes.post("", dataAssurer(carSchemaRequest), createCarController);

export default carsRoutes