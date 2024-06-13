// src/clients/clients.entity.ts - Clients Entity

// typeorm
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class ClientsEntity {
    @PrimaryGeneratedColumn()
    Client_ID: number;

    @Column()
    Client_Name: string;

    @Column({ nullable: true })
    Client_Contact_Email: string;

    @Column({ nullable: true })
    Client_Status: string;

    @Column({ nullable: true })
    Client_Start_Date: Date;
    
    @Column({ nullable: true })
    Client_Address: string;

    @Column({ nullable: true })
    Client_City: string;

    @Column({ nullable: true })
    Client_State: string;

    @Column({ nullable: true })
    Client_Zip: string;

    @Column({ nullable: true })
    Client_Sales: string;


}
