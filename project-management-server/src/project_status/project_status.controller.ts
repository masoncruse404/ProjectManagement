// src/project_status/project_status.controller.ts - Project status controller 

// service
import { ProjectStatusService } from "./project_status.service";

// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

@Controller("v1/project-status")
export class ProjectStatusController {
  constructor(private readonly projectStatusService: ProjectStatusService) {}
  
  @Get()
  @HttpCode(200)
  async getClients(): Promise<{ data: string }> {
    try {
      const projectTypes = await this.projectStatusService.listProjectTypes();

      if (projectTypes !== undefined) {
        return { data : projectTypes };
      }

    } catch (error) {
      // Handle errors appropriately
      console.error(error);
      throw error;
    }
  }
}