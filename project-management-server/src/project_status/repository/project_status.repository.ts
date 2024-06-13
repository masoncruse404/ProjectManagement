// src/project_status/repository/project_status.repository.ts - Project status repository

// typeorm
import { Repository } from "typeorm";

// entity
import { ProjectStatusEntity } from "../entity/project_status.entity";

export class ProjectStatusRepository extends Repository<ProjectStatusEntity> {}
