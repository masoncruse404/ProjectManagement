// src/list_projects/list_projects.module.ts - List projects module
import { Module } from "@nestjs/common";
import { ListProjectsController } from "./list_projects.controller";
import { ListProjectsService } from "./list_projects.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { ListProject } from "./entity/list_projects.entity";
import { ListProjectsRepository } from "./repository/list_projects.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ListProject,
                                      ListProjectsRepository]), 
                                      ConfigModule], 
  controllers: [ListProjectsController],
  providers: [ListProjectsService]
})
export class ListProjectsModule {}
