// src/notes/notes.module.ts - Notes module

// nestjs
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";

// controller
import { NotesController } from "./notes.controller";

// service
import { NotesService } from "./notes.service";

// entity
import { Notes } from "./entity/notes.entity";

// repository
import { NotesRepository } from "./repository/notes.repository";

@Module({
  imports: [TypeOrmModule.forFeature([Notes, 
                                      NotesRepository]), 
                                      ConfigModule], 
  controllers: [NotesController],
  providers: [NotesService]
})
export class NotesModule {}
