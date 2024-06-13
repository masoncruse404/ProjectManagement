// src/list_projects/repository/list_projects.repository.ts

import { Repository } from 'typeorm';
import { ListProject } from '../entity/list_projects.entity';

export class ListProjectsRepository extends Repository<ListProject> {}
