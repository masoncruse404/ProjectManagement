// src/project_type/Project_type.module.ts - Project type module

// nestjs
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// service
import { ProjectTypeService } from "./project_type.service";

// controller
import { ProjectTypeController } from "./project_type.controller";

// entity
import { ProjectTypeEntity } from "./entity/project_type.entity";

// repository
import { ProjectTypeRepository } from "./repository/project_type.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectTypeEntity,
                                      ProjectTypeRepository]), 
                                      ConfigModule], 
  providers: [ProjectTypeService],
  controllers: [ProjectTypeController]
})
export class ProjectTypeModule {}
