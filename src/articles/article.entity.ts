import { Entity , PrimaryGeneratedColumn, CreateDateColumn,UpdateDateColumn, Column} from "typeorm";

@Entity()
export class Article {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:110})
    title :string

    @Column('text')
    body :string

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt:Date;
}
