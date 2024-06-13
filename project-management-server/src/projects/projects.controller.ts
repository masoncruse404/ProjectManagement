// src/projects/projects.controller.ts - Projects controller

// nestjs
import { Body, Controller, Post, Put, HttpCode, Param, Delete } from "@nestjs/common";

// service
import { ProjectsService } from "./projects.service";

// dto
import { NewProjectDTO } from "./dto/new_project.dto";
import { EditProjectDTO } from "./dto/edit_project.dto";


@Controller("v1/project")
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Post("add")
  @HttpCode(200)
  async addProject(@Body() data: NewProjectDTO) : Promise<{data : { message : string, statusCode : number}}>{
     const result = await this.projectsService.newProject(data);
     if ( result ) {
      return { data : { message : "resource created successfully", statusCode : 201 } }
     }
  }

  @Put("edit")
  @HttpCode(200)
  async editProject(@Body() data: EditProjectDTO) : Promise<{data : { message : string, statusCode : number }}> {
     await this.projectsService.editProject(data);
     return { data : { message : "resource edited successfully", statusCode : 204 } }
  }

  @Delete("/:Project_ID/delete")
  @HttpCode(200)
  async deleteProject(@Param() data: EditProjectDTO) : Promise<{data : { message : string, statusCode : number }}>{
     await this.projectsService.deleteProject(data);
     return { data : { message : "resource deleted successfully", statusCode : 200 } }
  }

}
 