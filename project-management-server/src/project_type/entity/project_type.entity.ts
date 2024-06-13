// src/project_type/entity/project_type.entity.ts - Project type entity

// typeorm
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class ProjectTypeEntity {
    @PrimaryGeneratedColumn()
    Project_Type_ID: number;

    @Column()
    Project_Type: string;

    @Column({ nullable: true })
    Project_Type_Desc: string;
}
