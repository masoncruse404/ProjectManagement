// src/erp_type/erp_type.entity.ts - Erp type database entity

// typeorm
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity() 
export class ErpTypeEntity {
    @PrimaryGeneratedColumn()
    ERP_Type_ID: number;

    @Column()
    ERP_Type: string;
} 
