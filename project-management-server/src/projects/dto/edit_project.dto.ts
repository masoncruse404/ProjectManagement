// src/projects/dto/edit_project.dto.ts - Edit project Data Transfer Object

// typeorm
import { Decimal128 } from "typeorm";

export class EditProjectDTO{
  Project_ID:   number;

  Project_Name: string;
  
  Project_Desc: string;
  
  Client_ID: number;

  Start_Date: Date;

  End_Date: Date;

  Estimated_Time_Hours: Decimal128;

  Actual_Time_Hours: Decimal128;

  Cost_Per_Hour: Decimal128;

  Total_Cost: Decimal128;

  Project_Status_ID: number;

  IT_Contact_ID: string;

  Project_Type_ID: number;

  ERP_Type_ID: number;

  Percentage_Complete: number;

  Supplier_ID: number;
 
  ERP_Contacts: string;

  Client_Contacts: string;

  Supplier_Contacts: string;
}