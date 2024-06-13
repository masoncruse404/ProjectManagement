// src/notes/notes.controller.ts - Notes controller

// nestjs
import { Controller, Post, Get, Body, Param, Put, HttpCode, Delete } from "@nestjs/common";

// service
import { NotesService } from "./notes.service";

// DTO
import { NotesDTO } from "./dto/notes.dto";
import { EditProjectDTO } from "../projects/dto/edit_project.dto";


@Controller("v1/note")
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Post("add")
  @HttpCode(200)
  async addNote(@Body() data: NotesDTO){
    try {
      const clients =  await this.notesService.addNote(data);
      if (clients !== undefined) {
        return { data : { message : "resource created successfully", statusCode : 201 } } 
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }
  
  @Put("edit")
  @HttpCode(200)
  async editNote(@Body() data: NotesDTO) : Promise<{ data : { message : string, statusCode : number} }>{
   try {
     const clients =  await this.notesService.editNote(data);

     if (clients !== undefined) {
       return { data : { message : "resource edited successfully", statusCode : 204 } }
     }

   } catch (error) {
     // Handle errors appropriately
     console.error(error);
     throw error;
   }
 }


 @Get("/:Project_ID/")
 @HttpCode(200)
 async listIdNotes(@Param() request: EditProjectDTO):Promise<{ data : string }>{
  try {
    const notes =  await this.notesService.listIdNotes(request);
    if (notes !== undefined) {
      return { data : notes }
    }

  } catch (error) {
    // Handle errors appropriately
    console.error(error);
    throw error;
  }
}


@Get("/:Project_ID/count")
@HttpCode(200)
async listIdNoteCount(@Param() data: EditProjectDTO): Promise<{ data : string}>{
 try {
   const note_count = await this.notesService.listIdNoteCount(data);
   if (note_count !== undefined) {
     return { data : note_count}
   }

 } catch (error) {
   console.error(error);
   throw error;
 }
}

@Delete("/:Project_Notes_ID/delete")
@HttpCode(200)
async deleteNote(@Param() data: NotesDTO) : Promise<{ data : { message : string, statusCode : number } }>{
  try {
    await this.notesService.deleteNote(data);
    return { data : { message : "resource deleted successfully", statusCode : 200 } }
  } catch (error) {
    console.error(error)
    throw error;
  }
}

}



  

