import { Patient } from "./../patients/patient.entity";
import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  ManyToMany,
  JoinTable
} from "typeorm";

@Entity()
export class Doctor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 110 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // @ManyToMany(
  //   type => Patient,
  //   patient => patient.articles
  // )
  // @JoinTable()
  // categories: Category[];
}
