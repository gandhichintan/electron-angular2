import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Invoice } from "./invoice";

@Entity()
export class Item {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    packageType: number;

    @Column()
    quantity: number;

    @Column()
    price: number;

    @Column()
    amount: number;

    @Column()
    discount: number;

    @Column()
    amountAfterDiscount: number;

    @Column()
    cgst: number;
 
    @Column()
    sgst: number;

    @Column()
    total: number;

    @ManyToOne(type => Invoice, Invoice => Invoice.items)
    invoice: Invoice;
}