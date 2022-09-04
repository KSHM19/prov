import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Contents extends BaseEntity {

    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    NAME!: string;

    @Column()
    DESCRIPTION!: string;

    @Column()
    FLOW!: string;

}