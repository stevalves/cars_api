import { Request, Response } from "express";
import createCarService from "../services/cars/createCar.service";

const createCarController = async (req: Request, res: Response) => {
  const newCar = await createCarService(req.body);
  return res.status(201).json(newCar);
};

export {createCarController}