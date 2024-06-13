// src/projects/projects.service.ts - Project service

// nestjs
import { Injectable } from "@nestjs/common";
import { ProjectsRepository } from "./repository/projects.repository";

// DTO
import { NewProjectDTO } from "./dto/new_project.dto";
import { EditProjectDTO } from "./dto/edit_project.dto";

@Injectable()
export class ProjectsService {
  constructor( private projectsRepository: ProjectsRepository ) {}
  
  async newProject(data:NewProjectDTO){
   
    const project_name = data.Project_Name
    const project_desc = data.Project_Desc
    const client_id = data.Client_ID || 1 
    const start_date = data.Start_Date 
    const end_date = data.End_Date 
    const estimated_time_hours = parseFloat(data.Estimated_Time_Hours?.toString()).toFixed(2) || 0
    const actual_time_hours =  parseFloat(data.Actual_Time_Hours?.toString()).toFixed(2) || 0
    const cost_per_hour =  parseFloat(data.Cost_Per_Hour?.toString()).toFixed(4) || 0
    const total_cost =  parseFloat(data.Total_Cost?.toString()).toFixed(4) || 0
    const project_status_id = data.Project_Status_ID || 1
    const it_contact_id = data.IT_Contact_ID || 0 
    const project_type_id = data.Project_Type_ID || 1
    const erp_type_id = data.ERP_Type_ID || 1 
    const percentage_complete = data.Percentage_Complete || 0
    const supplier_id = data.Supplier_ID || 1
    const client_contacts = data.Client_Contacts.split("\n").join("<br />") || ""
    const supplier_contacts = data.Supplier_Contacts.split("\n").join("<br />") || ""
    const erp_contacts = data.ERP_Contacts.split("\n").join("<br />") || ""
    try {
   
      const insertQuery = `INSERT INTO project_entity ("Project_Name", "Project_Desc", "Client_ID", "Start_Date", "End_Date", "Estimated_Time_Hours", "Actual_Time_Hours", "Cost_Per_Hour", "Total_Cost", "Project_Status_ID", "IT_Contact_ID", "Project_Type_ID", "ERP_Type_ID", "Percentage_Complete", "Supplier_ID", "Client_Contacts", "Supplier_Contacts", "ERP_Contacts") VALUES ('${project_name}', '${project_desc}','${client_id}','${start_date}','${end_date}','${estimated_time_hours}','${actual_time_hours}','${cost_per_hour}', '${total_cost}', '${project_status_id}', '${it_contact_id}', '${project_type_id}', '${erp_type_id}', '${percentage_complete}', '${supplier_id}', '${client_contacts}', '${supplier_contacts}', '${erp_contacts}') `;    
      const result =  await this.projectsRepository.query(insertQuery);
       
      return result
    } catch (error) {
      throw error;
    }
  }


  async editProject(data:EditProjectDTO){
    
    const project_id = data.Project_ID[0] || data.Project_ID
    
    const project_name = data.Project_Name 
    const project_desc = data.Project_Desc
    const project_type_id =  data.Project_Type_ID || 1
    const erp_type_id = data.ERP_Type_ID || 1 
    const cost_per_hour =  parseFloat(data.Cost_Per_Hour?.toString()).toFixed(4)
    const total_cost =  parseFloat(data.Total_Cost?.toString()).toFixed(4)
    const estimated_time_hours = parseFloat(data.Estimated_Time_Hours?.toString()).toFixed(2) || 0
    const actual_time_hours =  parseFloat(data.Actual_Time_Hours?.toString()).toFixed(2) || 0
    const client_contacts = data.Client_Contacts.split("\n").join("<br />") || ""
    const supplier_contacts = data.Supplier_Contacts.split("\n").join("<br />") || ""
    const erp_contacts = data.ERP_Contacts.split("\n").join("<br />") || ""

    try {

      const updateQuery = `
      UPDATE project_entity
      SET "Project_Name"='${project_name}',"Project_Desc"='${project_desc}', "Client_ID"='${data.Client_ID}', "Start_Date"='${data.Start_Date}', "End_Date"='${data.End_Date}', "Estimated_Time_Hours"='${estimated_time_hours}', "Actual_Time_Hours"='${actual_time_hours}', "Cost_Per_Hour"='${cost_per_hour}', "Total_Cost"='${total_cost}', "Project_Status_ID"='${data.Project_Status_ID}', "IT_Contact_ID"='${data.IT_Contact_ID}', "Project_Type_ID"='${project_type_id}', "ERP_Type_ID"='${erp_type_id}', "Percentage_Complete"='${data.Percentage_Complete}', "Client_Contacts"='${client_contacts}', "Supplier_Contacts"='${supplier_contacts}', "ERP_Contacts"='${erp_contacts}'
      WHERE "Project_ID"='${project_id}'`;
            
      const result =  await this.projectsRepository.query(updateQuery);

      return result;
       
    } catch (error) {
      throw error;
    }
  }

  async deleteProject(data:EditProjectDTO){
  
    const project_id = data.Project_ID

    try {

      const deleteNotesQuery = `
      DELETE FROM notes
      WHERE "Project_ID"='${project_id}'`;
            
      await this.projectsRepository.query(deleteNotesQuery);

      const deleteFilesQuery = `DELETE FROM Project_File_Table 
                                WHERE "Project_ID"='${project_id}'`;
      await this.projectsRepository.query(deleteFilesQuery);

      const deleteProjectQuery = `DELETE FROM project_entity
                                  WHERE "Project_ID"='${project_id}'`;
                                  
      await this.projectsRepository.query(deleteProjectQuery);

      return;
       
    } catch (error) {
      throw error;
    }
  }

}
