// src/project_type/project_type.controller.ts - Project type controller

// nestjs
import { Controller, Get, HttpCode } from "@nestjs/common";

// service
import { ProjectTypeService } from "./project_type.service";

@Controller("v1/project-types")
export class ProjectTypeController {
  constructor(private readonly projectTypeService: ProjectTypeService) {}
  
  @Get()
  @HttpCode(200)
  async getClients(): Promise<{ data: string }> {
    try {
      const projectTypes = await this.projectTypeService.listProjectTypes();

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