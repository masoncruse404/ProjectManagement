// src/list_projects/list_projects.service.ts - List projects service

import { Injectable } from "@nestjs/common";
import { ListProjectsRepository } from "./repository/list_projects.repository";
import { ListProjectsDTO } from "./dto/list_projects.dto";
import { ListProjectClientDTO } from "./dto/list_project_client.dto";


@Injectable()
export class ListProjectsService {
  constructor(
    private listProjectsRepository: ListProjectsRepository,
  ) {}

  async listProjectId(data: ListProjectsDTO){

    try {
      let sql_str = `SELECT "Project_ID", "Project_Name", "Project_Desc", "Client_ID", "Start_Date", "End_Date", "Project_Type_ID",  "Estimated_Time_Hours", "Actual_Time_Hours", "Cost_Per_Hour", "Total_Cost", "Project_Status_ID", "IT_Contact_ID",  "ERP_Type_ID", "Supplier_ID", "ERP_Contacts", "Percentage_Complete", "Supplier_Contacts", "Client_Contacts" 
                     FROM project_entity WHERE project_entity."Project_ID" = '${data.projectId}'`;
       
      const result = await this.listProjectsRepository.query(sql_str);
      
      const project = result[0];
      return project;
      
    } catch (error) {
      throw error;
    }
  }

  
  

  async listProjectClient(data : ListProjectClientDTO){

    try {
      let sql_str = `SELECT "Client_Name" 
                     FROM client_entity 
                     INNER JOIN project_entity ON client_entity."Client_ID" = project_entity."Client_ID" 
                     WHERE "Project_ID" = '${data.projectId}'`;
       
      const result = await this.listProjectsRepository.query(sql_str);
      const client_name = result[0].Client_Name

      return client_name;
      
    } catch (error) {
      throw error;
    }
  }
  
}
