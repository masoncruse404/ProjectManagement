// src/project_status/project_status.module.ts - Project status module

// nestjs
import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// service
import { ProjectStatusService } from "./project_status.service";

// controller
import { ProjectStatusController } from "./project_status.controller";

// entity
import { ProjectStatusEntity } from "./entity/project_status.entity";

// repository
import { ProjectStatusRepository } from "./repository/project_status.repository";

@Module({
  imports: [TypeOrmModule.forFeature([ProjectStatusEntity,
                                      ProjectStatusRepository]), 
                                      ConfigModule], 
  providers: [ProjectStatusService],
  controllers: [ProjectStatusController]
})
export class ProjectStatusModule {}
