// src/client/repository/client.repository.ts - client repository

// typeorm
import { Repository } from "typeorm";

// entity
import { ClientEntity } from "../entity/client.entity";

export class ClientRepository extends Repository<ClientEntity> {}
