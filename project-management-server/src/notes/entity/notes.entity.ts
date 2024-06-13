// src/notes/entity/notes.entity.ts - Note entity
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class Notes {
    @PrimaryGeneratedColumn()
    Project_Notes_ID: number;

    @Column()
    Project_ID: number;

    @Column()
    Notes: string;

    @Column({ nullable: true })
    Admin_ID: number;

    @Column({ nullable: true })
    Notes_DateCreated: Date;

    @Column({ nullable: true })
    Notes_Importance: number;

    @Column({ nullable: true })
    Notes_Editor: string;
}
 
