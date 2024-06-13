// src/project_status/project_status.service.ts - Project status service

// nestjs
import { Injectable } from "@nestjs/common";
import { ProjectStatusRepository } from "./repository/project_status.repository";

@Injectable()
export class ProjectStatusService {
    constructor(private readonly projectStatusRepository: ProjectStatusRepository){}
    
    async listProjectTypes(): Promise<string> {
    
        try {
          let sql_str = `SELECT "Project_Status_ID", "Project_Status" 
                         FROM project_status_entity`;
          const result = await this.projectStatusRepository.query(sql_str);
          return result;
          
        } catch (error) {
          throw error;
        }
      }
    
}
