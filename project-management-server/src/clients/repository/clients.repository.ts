// src/clients/repository/clients.repository.ts - Clients Repository

// tpyeorm
import { Repository } from "typeorm";

// entity
import { ClientsEntity } from "../entity/clients.entity";
export class ClientsRepository extends Repository<ClientsEntity> {}
