import { Request, Response } from "express";
import createCarService from "../services/cars/createCar.service";
import getCarsService from "../services/cars/getCars.service";
import getCarService from "../services/cars/getCar.service";

const createCarController = async (req: Request, res: Response) => {
  const newCar = await createCarService(req.body);
  return res.status(201).json(newCar);
};

const getCarsController = async (req: Request, res: Response) => {
  const carList = await getCarsService();
  return res.status(200).json(carList);
};

const getCarController = async (req: Request, res: Response) => {
  const car = await getCarService(Number(req.params.id));
  return res.status(200).json(car);
};

export { createCarController, getCarsController, getCarController };
