import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Segments extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!:string;

    @Column()
    url!:string;

    @Column()
    other!:string;
}