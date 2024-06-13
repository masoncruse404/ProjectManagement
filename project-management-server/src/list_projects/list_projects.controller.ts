// src/list_projects/list_projects.controller.ts - List projects controller

// nestjs
import { Controller, Get, Param, HttpCode } from "@nestjs/common";

// services
import { ListProjectsService } from "./list_projects.service";

// dto
import { ListProjectsDTO } from "./dto/list_projects.dto";
import { ListProjectClientDTO } from "./dto/list_project_client.dto";

@Controller('v1/projects')
export class ListProjectsController {
  constructor(private readonly listProjectsService: ListProjectsService) {}

  @Get("/:projectId")
  @HttpCode(200)
  async listProjectId(@Param() projectId: ListProjectsDTO): Promise<{ data: String}>{

    const project = await this.listProjectsService.listProjectId(projectId); 

    if( project !== undefined){
      return { data : project };
    }
  }

  @Get("/:projectId/client")
  async listProjectClientName(@Param() projectId: ListProjectClientDTO): Promise<{ data: String}>{
    const client_name = await this.listProjectsService.listProjectClient(projectId);

    if (client_name !== undefined){
      return { data: client_name }
    }

  }

}
