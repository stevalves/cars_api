import { z } from "zod";
import { carSchema, carSchemaRequest, carsSchemaResponse } from "../schemas/cars.schema";
import { DeepPartial } from "typeorm";

type tCar = z.infer<typeof carSchema>
type tCarsReq = z.infer<typeof carSchemaRequest>
type tCars = z.infer<typeof carsSchemaResponse>
type tCarUpdate = DeepPartial<tCar>

export {tCar, tCarsReq, tCars, tCarUpdate}