// src/file-upload/file-upload.repository.ts - File upload repository

// typeorm
import { Repository } from "typeorm";

// entity
import { Project_File_Table } from "./entity/file.entity";

export class FileUploadRepository extends Repository<Project_File_Table> {}
