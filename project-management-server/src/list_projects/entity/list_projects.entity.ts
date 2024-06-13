// src/list_projects/list_projects.entity.ts - List project entity
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() 
export class ListProject {
  @PrimaryGeneratedColumn()
  Project_ID: number;
  @Column({ nullable: true })
  Project_Desc: string;
  @Column()
  Client_ID: number;
  @Column({ nullable: true })
  Start_Date: Date;
  @Column({ nullable: true })
  End_Date: Date;
  @Column({ nullable: true })
  Estimated_Time_Hours: number;
  @Column({ nullable: true })
  Actual_Time_Hours: number;
  @Column({ nullable: true })
  Cost_Per_Hour: number;
  @Column({ nullable: true })
  Total_Cost: number;
  @Column({ nullable: true })
  Project_Status_ID: number;
  @Column({ nullable: true })
  IT_Contact_ID: number;
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
