import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { tCar } from "../../interfaces/car.interface";
import Car from "../../entities/car.entitie";
import AppError from "../../errors/AppErrors";
import { carSchema } from "../../schemas/cars.schema";

const getCarService = async (id: number): Promise<tCar> => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);
  const car = await carRepository.findOneBy({ id });

  if (!car) throw new AppError("Car not found!", 404);

  return carSchema.parse(car);
};

export default getCarService;