// src/project_type/project_type.service.ts - Project type status

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { ProjectTypeRepository } from "./repository/project_type.repository";

@Injectable()
export class ProjectTypeService {
    constructor(private readonly projectTypeRepository: ProjectTypeRepository){}
    
    async listProjectTypes(): Promise<string> {
    
        try {

          let sql_str = `SELECT "Project_Type_ID", "Project_Type"
                         FROM project_type_entity`;
          const result = await this.projectTypeRepository.query(sql_str);
          return result;
          
        } catch (error) {
          throw error;
        }
      }
    
}
