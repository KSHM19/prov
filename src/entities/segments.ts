import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Segments extends BaseEntity {
    @PrimaryGeneratedColumn()
    ID!: number;

    @Column()
    NAME!:string;

    @Column()
    SEGMENT_TYPE!:string;

    @Column()
    START!:string;

    @Column()
    END!:string;

    @Column()
    ORDER!:string;

    @Column()
    FILE!:string;

    @Column()
    SEGMENT_PARENT!:string
}