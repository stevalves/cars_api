import { Request, Response } from "express";
import createCarService from "../services/cars/createCar.service";
import getCarsService from "../services/cars/getCars.service";
import getCarService from "../services/cars/getCar.service";
import editCarService from "../services/cars/editCar.service";
import deleteCarService from "../services/cars/deleteCar.service";

const createCarController = async (req: Request, res: Response) => {
  const newCar = await createCarService(req.body);
  return res.status(201).json(newCar);
};

const getCarsController = async (req: Request, res: Response) => {
  const carList = await getCarsService();
  return res.json(carList);
};

const getCarController = async (req: Request, res: Response) => {
  const car = await getCarService(Number(req.params.id));
  return res.json(car);
};

const editCarController = async (req: Request, res: Response) => {
  const editedCar = await editCarService(req.body, Number(req.params.id));
  return res.json(editedCar);
};

const deleteCarController = async(req: Request, res: Response) => {
  await deleteCarService(Number(req.params.id))
  return res.status(204).send()
}

export {
  createCarController,
  getCarsController,
  getCarController,
  editCarController,
  deleteCarController
};
