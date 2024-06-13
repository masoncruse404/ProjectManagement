// src/notes/repository/notes.repository.ts - Notes repository

// typeorm
import { Repository } from "typeorm";

// entity
import { Notes } from "../entity/notes.entity";

export class NotesRepository extends Repository<Notes> {}
