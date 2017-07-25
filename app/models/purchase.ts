import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    item: string;

    @Column()
    type: number;

    @Column()
    quantity: number;
}