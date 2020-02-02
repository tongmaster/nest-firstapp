import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity
} from "typeorm";

@Entity()
export class Department {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 110 })
  name: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
