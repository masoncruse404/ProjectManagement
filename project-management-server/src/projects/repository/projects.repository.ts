// src/projects/repository/projects.repository.ts - Projects repository

// type
import { Repository } from "typeorm";

// entity
import { ProjectEntity } from "../entity/project.entity";

export class ProjectsRepository extends Repository<ProjectEntity> {}
