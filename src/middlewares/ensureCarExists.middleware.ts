import { NextFunction, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import Car from "../entities/car.entitie";
import { Repository } from "typeorm";
import { tCar } from "../interfaces/car.interface";
import AppError from "../errors/AppErrors";

const ensureCarExists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);

  const id = Number(req.params.id);

  const car = await carRepository.findOneBy({ id });

  if (!car) throw new AppError("Car not found!", 404);

  return next();
};

export default ensureCarExists;
