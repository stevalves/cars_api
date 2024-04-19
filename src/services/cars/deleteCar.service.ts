import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import Car from "../../entities/car.entitie";
import { tCar } from "../../interfaces/car.interface";

const deleteCarService = async (id: number): Promise<void> => {
  const carRepository: Repository<tCar> = AppDataSource.getRepository(Car);

  const car = await carRepository.findOneBy({ id });

  await carRepository.remove(car!);
};

export default deleteCarService;
