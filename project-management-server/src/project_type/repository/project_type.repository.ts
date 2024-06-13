// src/project_type/repository/project_type.repository.ts - Project type repository

// typeorm
import { Repository } from "typeorm";

// entity
import { ProjectTypeEntity } from "../entity/project_type.entity";

export class ProjectTypeRepository extends Repository<ProjectTypeEntity> {}
