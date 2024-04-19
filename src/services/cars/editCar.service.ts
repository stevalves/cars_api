import { Repository } from "typeorm";
import { tCar, tCarUpdate } from "../../interfaces/car.interface";
import { AppDataSource } from "../../data-source";
import Car from "../../entities/car.entitie";
import AppError from "../../errors/AppErrors";
import { carSchema } from "../../schemas/cars.schema";

const editCarService = async (pastData: tCarUpdate, id: number) => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);
  const car = await carRepository.findOneBy({ id });

  const updatedCar = carRepository.create({
    ...car,
    ...pastData,
  });

  await carRepository.save(updatedCar);
  return carSchema.parse(updatedCar);
};

export default editCarService;
