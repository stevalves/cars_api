import { Repository } from "typeorm";
import { tCar, tCars } from "../../interfaces/car.interface";
import { AppDataSource } from "../../data-source";
import Car from "../../entities/car.entitie";
import { carsSchemaResponse } from "../../schemas/cars.schema";

const getCarsService = async (): Promise<tCars> => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);
  const carList = await carRepository.find();

  return carsSchemaResponse.parse(carList);
};

export default getCarsService;
