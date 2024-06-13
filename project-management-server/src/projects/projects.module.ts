// - /src/projects/projects.module.ts - Projects module

// nestjs
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// controller
import { ProjectsController } from "./projects.controller";

// service
import { ProjectsService } from "./projects.service";

// entity
import { ProjectEntity } from "./entity/project.entity";

// repository
import { ProjectsRepository } from "./repository/projects.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity,
                                      ProjectsRepository]),
                                      ConfigModule], 
  controllers: [ProjectsController],
  providers: [ProjectsService]
})

export class ProjectsModule {}
