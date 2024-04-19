import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity("cars")
class Car {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  spec: string;

  @Column()
  year: number;

  @Column()
  fuel: string;

  @Column()
  km: number;

  @Column()
  color: string;

  @Column()
  fipe: number;

  @Column({ type: "text", nullable: true })
  description!: string | null;

  @CreateDateColumn({ type: "timestamp" })
  created_at: Date;
}

export default Car;
