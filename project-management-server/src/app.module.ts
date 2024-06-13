// src/app.module.ts - App module

// nestjs
import { ConfigModule } from "@nestjs/config";
import { Module } from "@nestjs/common";

// database
import { DatabaseModule } from "./database/database.config.module";

// modules
import { SuppliersModule } from "./suppliers/suppliers.module";
import { ItContactsModule } from "./it_contacts/it_contacts.module";
import { ClientModule } from "./client/client.module";
import { ErpTypeModule } from "./erp_type/erp_type.module";
import { ListProjectsModule } from "./list_projects/list_projects.module";
import { NotesModule } from "./notes/notes.module";
import { FileUploadModule } from "./file-upload/file_upload.module";
import { ProjectsModule } from "./projects/projects.module";
import { ProjectTypeModule } from "./project_type/project_type.module";
import { ProjectStatusModule } from "./project_status/project_status.module";
import { ClientsModule } from "./clients/clients.module";
import { IamModule } from './iam/iam.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    SuppliersModule,
    ItContactsModule,
    ClientModule,
    ErpTypeModule,
    ListProjectsModule,
    NotesModule,
    FileUploadModule,
    ProjectsModule,
    ProjectTypeModule,
    ProjectStatusModule,
    ClientsModule,
    IamModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {}
