import { Repository } from "typeorm";
import { tCar, tCarsReq } from "../../interfaces/car.interface";
import { AppDataSource } from "../../data-source";
import Car from "../../entities/car.entitie";
import { carSchema } from "../../schemas/cars.schema";

const createCarService = async (data: tCarsReq): Promise<tCar> => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);

  const car = carRepository.create(data);
  await carRepository.save(car)

  return carSchema.parse(car)
};

export default createCarService