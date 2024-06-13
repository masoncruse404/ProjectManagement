// src/projects/entity/project.entity.ts - Project entity

import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany, ManyToMany, JoinColumn } from "typeorm";

import { ProjectStatusEntity } from "src/project_status/entity/project_status.entity";
import { ProjectTypeEntity } from "src/project_type/entity/project_type.entity";
import { ErpTypeEntity } from "src/erp_type/entity/erp_type.entity";
import { ClientEntity } from "src/client/entity/client.entity";

@Entity() 
export class ProjectEntity {

    @PrimaryGeneratedColumn()
    Project_ID: number;

    @Column()
    Project_Name: string;

    @Column({ nullable: true })
    Project_Desc: string;

    @Column()
    Client_ID: number;

    @Column({ nullable: true })
    Start_Date: Date;

    @Column({ nullable: true })
    End_Date: Date;

    @Column({ name: 'Estimated_Time_Hours', type: 'decimal', precision: 10, scale: 2,nullable: true })
    Estimated_Time_Hours: number;

    @Column({ name: 'Actual_Time_Hours', type: 'decimal', precision: 10, scale: 2,nullable: true })
    Actual_Time_Hours: string;

    @Column({ name: 'Cost_Per_Hour', type: 'decimal', precision: 10, scale: 4,nullable: true })
    Cost_Per_Hour: string;

    @Column({ name: 'Total_Cost', type: 'decimal', precision: 10, scale: 4, nullable: true })
    Total_Cost: string;

    @Column({ nullable: true })
    Project_Status_ID: number;

    @Column({ nullable: true })
    IT_Contact_ID: string;

    @Column({ nullable: true })
    Project_Type_ID: number;
    
    @Column({ nullable: true })
    ERP_Type_ID: number;

    @Column({ nullable: true })
    Percentage_Complete: number;

    @Column({ nullable: true })
    Supplier_ID: number;

    @Column({ nullable: true })
    ERP_Contacts: string;

    @Column({ nullable: true })
    Client_Contacts: string;

    @Column({ nullable: true })
    Supplier_Contacts: string;


}
