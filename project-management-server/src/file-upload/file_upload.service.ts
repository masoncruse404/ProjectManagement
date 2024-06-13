// src/file-upload/file.service.ts - File upload service

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { FileUploadRepository } from "./file_upload.repository";
import { FileDeleteDTO } from "./dto/file_delete.dto";

@Injectable()
export class FileUploadService {

    constructor(private fileUploadRepository: FileUploadRepository) {}
 
    async saveFileMetadata(file: Express.Multer.File, project_id: Number): Promise<String> {
        const file_path = project_id + "-" + file.originalname
        const file_date_created = new Date().toISOString()

        try {
      
            const insertQuery = `INSERT INTO Project_File_Table ("Project_ID", "File_Name", "File_DateCreated") 
                                 VALUES ('${project_id}', '${file_path}', '${file_date_created}')`;  
            await this.fileUploadRepository.query(insertQuery);
            return file_path;
    
        } catch (error) {
            throw error;  
        }
    }

  async listProjectFileID(Project_ID: Number){
   
    try {
    
      let sql_str = `SELECT "ProjectFile_ID", "Project_ID", "Admin_ID", "File_DateCreated", "File_Importance", "File_Editor", "File_Name", "File_Order" 
                     FROM Project_File_Table WHERE "Project_ID"='${Project_ID}'`;
       
      const result = await this.fileUploadRepository.query(sql_str);
      return result;
      
    } catch (error) {
      throw error;
    }
    
  }
  

  async deleteFile(ProjectFile_ID: FileDeleteDTO){

    try {
    
      let sql_str = `DELETE FROM Project_File_Table 
                     WHERE "ProjectFile_ID"='${ProjectFile_ID.ProjectFile_ID}'`;
       
      const result = await this.fileUploadRepository.query(sql_str);
      return result;
      
    } catch (error) {
      throw error;
    }
    
  }


}
