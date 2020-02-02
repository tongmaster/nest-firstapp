import {
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity
} from "typeorm";

@Entity()
export class Prescription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 110 })
  title: string;

  @Column("text")
  desc: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
