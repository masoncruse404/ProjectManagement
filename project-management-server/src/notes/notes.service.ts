// src/notes/notes.service.ts - Notes service

// nestjs
import { Injectable } from "@nestjs/common";

// repository
import { NotesRepository } from "./repository/notes.repository";

// dto
import { NotesDTO } from "./dto/notes.dto";
import { EditProjectDTO } from "src/projects/dto/edit_project.dto";

@Injectable()
export class NotesService {
  constructor( private notesRepository: NotesRepository ) {}

  async addNote(data: NotesDTO){

    const project_id = data.Project_ID[0]  || data.Project_ID
    const notes = data.Notes
    const admin_id = data.Admin_ID || 1
    const notes_date_created = new Date().toISOString()
    const notes_importance = data.Notes_Importance || 1
    const notes_editor = data.Notes_Editor || 1

    try {

      const insertQuery = `INSERT INTO notes ("Project_ID", "Notes", "Admin_ID", "Notes_DateCreated", "Notes_Importance", "Notes_Editor") 
                             VALUES ('${project_id}', '${notes}','${admin_id}','${notes_date_created}','${notes_importance}','${notes_editor}') `;
        
        await this.notesRepository.query(insertQuery);

        return true
        
    } catch (error) {
      throw error;
    }
  }

  async editNote(data: NotesDTO){
 
    const notes_id = data.Project_Notes_ID
    const notes_text = data.Notes

    try {

        const updateQuery = `UPDATE notes 
                             SET "Notes"='${notes_text}' 
                             WHERE "Project_Notes_ID"='${notes_id}'`;
        
        await this.notesRepository.query(updateQuery);

        return true
    } catch (error) {
      throw error;
    }
  }
  
  async listIdNotes(data: EditProjectDTO){
    try {
      let sql_str = `SELECT "Project_Notes_ID", project_entity."Project_ID", "Notes", "Admin_ID", "Notes_DateCreated", "Notes_Importance", "Project_Name" 
                     FROM notes INNER JOIN project_entity ON notes."Project_ID" = project_entity."Project_ID" 
                     WHERE project_entity."Project_ID" = '${data.Project_ID}'`;
       
      const result = await this.notesRepository.query(sql_str);

      if ( result !== undefined){
        return  result
      }
      
    } catch (error) {
      throw error;
    }
  }

  async listIdNoteCount(data: EditProjectDTO){
  
    try {
      let sql_str = `SELECT COUNT(*) AS Note_Count 
                     FROM notes INNER JOIN project_entity ON notes."Project_ID" = project_entity."Project_ID" 
                     WHERE project_entity."Project_ID" = '${data.Project_ID}'`;
       
      const result = await this.notesRepository.query(sql_str);
      return result[0].note_count;
      
    } catch (error) {
      throw error;
    }
  }
 
  async deleteNote(data: NotesDTO){
    
    try {
        let deleteQuery = `DELETE FROM notes
                           WHERE "Project_Notes_ID"='${data.Project_Notes_ID}'`;
        
        await this.notesRepository.query(deleteQuery);
        return
        
    } catch (error) {
      throw error;
    }
  }

}
