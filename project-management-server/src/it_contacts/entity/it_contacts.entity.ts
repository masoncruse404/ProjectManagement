// src/it_contacts/it_contacts.entity.ts - IT contacts entity

// typeorm
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class ITContacts {
    @PrimaryGeneratedColumn()
    IT_Contact_ID: number;

    @Column()
    IT_Contact_Name: string;
}
