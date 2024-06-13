// src/project_status/entity/project_status.entity/project_status.entity.ts - Project status entity

// typeorm
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class ProjectStatusEntity {
    @PrimaryGeneratedColumn()
    Project_Status_ID: number;

    @Column()
    Project_Status: string;

    @Column({ nullable: true })
    Project_Status_Desc: string;
}
