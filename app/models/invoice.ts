
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Item } from "./item";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    reverseCharge: boolean;

    @Column()
    invoiceDate: string;

    @Column()
    state: string;

    @Column()
    stateCode: number;

    @Column()
    transportationMode: string;

    @Column()
    vehicleNumber: string;

    @Column()
    dateOfSupply: string;

    @Column()
    placeOfSupply: string;

    @Column()
    customerName: string;

    @Column()
    customerAddress: string;

    @Column()
    hsnCode : number;

    @OneToMany(type => Item, Item => Item.invoice)
    items: Item[];
}