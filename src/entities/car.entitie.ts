import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: string;

  @Column()
  fuel: string;

  @Column()
  km: number;

  @Column()
  color: string;

  @Column()
  price: number;

  @Column()
  description: string;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
}

export default Car