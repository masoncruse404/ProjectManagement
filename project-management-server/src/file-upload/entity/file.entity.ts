// src/file-upload/entity/file.entity.ts - File upload entity 
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Project_File_Table {
    @PrimaryGeneratedColumn()
    ProjectFile_ID: number;

    @Column()
    Project_ID: number;

    @Column({ nullable: true})
    Admin_ID: number;

    @Column()
    File_DateCreated: Date;

    @Column({ nullable: true})
    File_Importance: number;

    @Column({ nullable: true})
    File_Editor: string;

    @Column()
    File_Name: string;

    @Column({ nullable: true})
    File_Order: string;
}
